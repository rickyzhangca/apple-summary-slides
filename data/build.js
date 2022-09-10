#!/usr/bin/env nodes

/* eslint-env node */
const fs = require('fs-extra');
const path = require('path');
const globby = require('globby');
const yargs = require('yargs');
const _ = require('lodash');

// get args
const { argv } = yargs
  .usage(
    'Usage: $0 --imgs <images filepaths> --output1 <output1 filepath> --output2 <output2 filepath>'
  )
  .example(
    '$0 --imgs data/imgs/**/*.png --output1 data/byEvent.json --output2 data/byProduct.json'
  )
  .option('imgs', {
    type: 'array',
    demandOption: true,
    describe:
      'Input images, filenames should be [event name]-[product type]-[product name].png',
  })
  .option('output1', {
    type: 'string',
    demandOption: true,
    describe: 'Output JSON file: by event',
  })
  .option('output2', {
    type: 'string',
    demandOption: true,
    describe: 'Output JSON file, by product (type)',
  });

// find images
const imageFilepaths = globby
  .sync(argv.imgs)
  .filter((filepath) => path.parse(filepath).ext === '.png');
if (imageFilepaths.length === 0) {
  // eslint-disable-next-line no-console
  console.error('No images found');
  process.exit(1);
}

// process images
let exitCode = 0;
const images = imageFilepaths.map((imageFilepath) => {
  try {
    const imageFilename = path.parse(imageFilepath).base;
    const imageFilenamePattern = /\[(.*?)\]-\[(.*?)\]-\[(.*?)\].png/;

    if (!imageFilenamePattern.test(imageFilename)) {
      throw new Error(
        `${imageFilename}: Invalid filename. Not matching the pattern defined.`
      );
    }

    const [, eventName, productType, productName] =
      imageFilename.match(imageFilenamePattern);

    return { eventName, productType, productName, imageFilepath };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    exitCode = 1;
    return null;
  }
});

// do not build if error occurred
if (exitCode !== 0) {
  process.exit(exitCode);
}

// write output
fs.outputJsonSync(path.resolve(argv.output1), _.groupBy(images, 'eventName'));
fs.outputJsonSync(path.resolve(argv.output2), _.groupBy(images, 'productType'));
