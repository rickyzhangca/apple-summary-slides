import fs from "node:fs";
import path from "node:path";
import type { Slide } from "../src/data/slides";

type RawSlide = Omit<Slide, "imageUrl" | "id">;

const SLIDE_FILENAME_REGEX = /\[(.*?)\]-\[(.*?)\]-\[(.*?)\]\.webp$/;
const YEAR_REGEX = /\d{4}/;
const NON_ALPHANUMERIC_REGEX = /[^a-zA-Z0-9]/g;

function extractSlideInfo(filename: string): RawSlide | null {
  // Expected format: "[Event Name]-[Product Name]-[Title].webp"
  const match = filename.match(SLIDE_FILENAME_REGEX);
  if (!match) {
    console.warn(`Skipping file ${filename} - does not match expected format`);
    return null;
  }

  const [, event, product, title] = match;
  return {
    event,
    product,
    title,
  };
}

function getEventDate(event: string): Date {
  // Extract month and year from event name
  const monthMap: { [key: string]: number } = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  let year = 2020; // default year
  let month = 0; // default to January

  // Extract year (assuming it's always at the end)
  const yearMatch = event.match(YEAR_REGEX);
  if (yearMatch) {
    year = Number.parseInt(yearMatch[0], 10);
  }

  // Extract month
  for (const [monthName, monthNum] of Object.entries(monthMap)) {
    if (event.toLowerCase().includes(monthName.toLowerCase())) {
      month = monthNum;
      break;
    }
  }

  // WWDC is always in June
  if (event.startsWith("WWDC")) {
    month = monthMap.June;
  }

  return new Date(year, month);
}

function generateRawSlides(directoryPath: string): Record<string, RawSlide[]> {
  const files = fs.readdirSync(directoryPath);
  const slidesByEvent: Record<string, RawSlide[]> = {};

  for (const file of files) {
    if (!file.endsWith(".webp")) {
      continue;
    }

    const slideInfo = extractSlideInfo(file);
    if (!slideInfo) {
      continue;
    }

    const { event } = slideInfo;
    if (!slidesByEvent[event]) {
      slidesByEvent[event] = [];
    }
    slidesByEvent[event].push(slideInfo);
  }

  return slidesByEvent;
}

function generateTypeScriptCode(
  slidesByEvent: Record<string, RawSlide[]>
): string {
  let code = `import { Slide } from './slides';\n\n`;
  code += `type RawSlide = Omit<Slide, 'imageUrl' | 'id'>;\n\n`;

  // Generate individual event arrays
  for (const [event, slides] of Object.entries(slidesByEvent)) {
    const variableName = `from${event.replace(NON_ALPHANUMERIC_REGEX, "")}`;

    code += `const ${variableName}: RawSlide[] = [\n`;
    for (const slide of slides) {
      code += "  {\n";
      code += `    title: '${slide.title}',\n`;
      code += `    product: '${slide.product}',\n`;
      code += "  },\n";
    }
    code += "].map(slide => ({\n";
    code += "  ...slide,\n";
    code += `  event: '${event}',\n`;
    code += "}));\n\n";
  }

  // Sort events by date (latest first)
  const sortedEvents = Object.keys(slidesByEvent).sort((a, b) => {
    const dateA = getEventDate(a);
    const dateB = getEventDate(b);
    return dateB.getTime() - dateA.getTime();
  });

  // Generate the final export with sorted events
  code += "export const raw: RawSlide[] = [\n";
  for (const event of sortedEvents) {
    const variableName = `from${event.replace(NON_ALPHANUMERIC_REGEX, "")}`;
    code += `  ...${variableName},\n`;
  }
  code += "] as const;\n";

  return code;
}

// Main execution
const SLIDES_DIR = process.argv[2] || "./slides";

if (!fs.existsSync(SLIDES_DIR)) {
  console.error(`Directory ${SLIDES_DIR} does not exist`);
  process.exit(1);
}

const slidesByEvent = generateRawSlides(SLIDES_DIR);
const generatedCode = generateTypeScriptCode(slidesByEvent);

// Write to raw.ts
fs.writeFileSync(
  path.join(process.cwd(), "src", "data", "raw.ts"),
  generatedCode
);
console.log("Successfully generated raw.ts");
