import { Slide } from './slides';

type RawSlide = Omit<Slide, 'imageUrl' | 'id'>;

const fromAppleAnnouncementFebruary2025: RawSlide[] = [
  {
    title: 'iPhone 16e',
    product: 'iPhone',
  },
].map(slide => ({
  ...slide,
  event: 'Apple Announcement February 2025',
}));

const fromAppleAnnouncementOctober2024: RawSlide[] = [
  {
    title: 'Mac Mini M4',
    product: 'Mac',
  },
  {
    title: 'MacBook Pro 14 and 16 M4',
    product: 'Mac',
  },
  {
    title: 'iMac M4',
    product: 'Mac',
  },
].map(slide => ({
  ...slide,
  event: 'Apple Announcement October 2024',
}));

const fromAppleEventApril2021: RawSlide[] = [
  {
    title: 'iMac (2021)',
    product: 'Mac',
  },
  {
    title: 'iMac Environmental Goals',
    product: 'Mac',
  },
  {
    title: 'Apple TV 4K (2021)',
    product: 'TV and Home',
  },
  {
    title: 'Apple TV 4K Environmental Goals',
    product: 'TV and Home',
  },
  {
    title: 'Liquid XDR Display',
    product: 'iPad',
  },
  {
    title: 'iPad Pro 2021',
    product: 'iPad',
  },
  {
    title: 'iPad Pro Environmental Goals',
    product: 'iPad',
  },
  {
    title: 'AirTag',
    product: 'iPhone',
  },
].map(slide => ({
  ...slide,
  event: 'Apple Event April 2021',
}));

const fromAppleEventMarch2022: RawSlide[] = [
  {
    title: 'Apple M1 Ultra Chip',
    product: 'Mac',
  },
  {
    title: 'Mac Studio Environmental Goals',
    product: 'Mac',
  },
  {
    title: 'Mac Studio',
    product: 'Mac',
  },
  {
    title: 'Studio Display Environmental Goals',
    product: 'Mac',
  },
  {
    title: 'Studio Display',
    product: 'Mac',
  },
  {
    title: 'iPad Air (2022)',
    product: 'iPad',
  },
  {
    title: 'iPhone SE (2022)',
    product: 'iPhone',
  },
  {
    title: 'iPhone SE Environmental Goals',
    product: 'iPhone',
  },
].map(slide => ({
  ...slide,
  event: 'Apple Event March 2022',
}));

const fromAppleEventMay2024: RawSlide[] = [
  {
    title: 'Apple M4 Family',
    product: 'iPad',
  },
  {
    title: 'Apple Pencil Pro',
    product: 'iPad',
  },
  {
    title: 'iPad Air 2024',
    product: 'iPad',
  },
  {
    title: 'iPad Pro 2024',
    product: 'iPad',
  },
].map(slide => ({
  ...slide,
  event: 'Apple Event May 2024',
}));

const fromAppleEventNovember2020: RawSlide[] = [
  {
    title: 'Apple M1 Chip (1)',
    product: 'Mac',
  },
  {
    title: 'Apple M1 Chip (2)',
    product: 'Mac',
  },
  {
    title: 'Mac Mini (2021)',
    product: 'Mac',
  },
  {
    title: 'Macbook Air (2021)',
    product: 'Mac',
  },
  {
    title: 'Macbook Pro 13 (2021)',
    product: 'Mac',
  },
  {
    title: 'New M1 Mac Family Environmental Goals',
    product: 'Mac',
  },
  {
    title: 'New M1 Mac Family',
    product: 'Mac',
  },
].map(slide => ({
  ...slide,
  event: 'Apple Event November 2020',
}));

const fromAppleEventOctober2020: RawSlide[] = [
  {
    title: 'HomePod Mini',
    product: 'TV and Home',
  },
  {
    title: 'iPhone 12 Pro and 12 Pro Max',
    product: 'iPhone',
  },
  {
    title: 'iPhone 12 and 12 Mini',
    product: 'iPhone',
  },
].map(slide => ({
  ...slide,
  event: 'Apple Event October 2020',
}));

const fromAppleEventOctober2021: RawSlide[] = [
  {
    title: 'AirPods 3rd Generation',
    product: 'AirPods',
  },
  {
    title: 'Macbook 14 and 16 (2021)',
    product: 'Mac',
  },
  {
    title: 'Macbook 14 and 16 Environmental Goals',
    product: 'Mac',
  },
].map(slide => ({
  ...slide,
  event: 'Apple Event October 2021',
}));

const fromAppleEventOctober2023: RawSlide[] = [
  {
    title: 'Apple M3 Family',
    product: 'Mac',
  },
  {
    title: 'Macbook Pro 14 and 16 (2023)',
    product: 'Mac',
  },
  {
    title: 'iMac (2023)',
    product: 'Mac',
  },
].map(slide => ({
  ...slide,
  event: 'Apple Event October 2023',
}));

const fromAppleEventSeptember2019: RawSlide[] = [
  {
    title: 'Store experience',
    product: 'Apple Store',
  },
  {
    title: 'Apple Watch Series 5 and watchOS 6',
    product: 'Apple Watch',
  },
  {
    title: 'iPad (2019) and iPadOS 13',
    product: 'iPad',
  },
  {
    title: 'iPhone 11 Camera System',
    product: 'iPhone',
  },
  {
    title: 'iPhone 11 Pro (1)',
    product: 'iPhone',
  },
  {
    title: 'iPhone 11 Pro (2)',
    product: 'iPhone',
  },
  {
    title: 'iPhone 11 Pro Camera System',
    product: 'iPhone',
  },
  {
    title: 'iPhone 11',
    product: 'iPhone',
  },
].map(slide => ({
  ...slide,
  event: 'Apple Event September 2019',
}));

const fromAppleEventSeptember2020: RawSlide[] = [
  {
    title: 'Apple Watch SE (2020)',
    product: 'Apple Watch',
  },
  {
    title: 'Apple Watch Series 6',
    product: 'Apple Watch',
  },
  {
    title: 'Apple A14 Chip',
    product: 'iPad',
  },
  {
    title: 'New iPads Environmental Goals',
    product: 'iPad',
  },
  {
    title: 'iPad (2020)',
    product: 'iPad',
  },
  {
    title: 'iPad Air (2020)',
    product: 'iPad',
  },
  {
    title: 'iPadOS 14',
    product: 'iPad',
  },
].map(slide => ({
  ...slide,
  event: 'Apple Event September 2020',
}));

const fromAppleEventSeptember2021: RawSlide[] = [
  {
    title: 'Apple Fitness+',
    product: 'Apple Watch',
  },
  {
    title: 'Apple Watch Series 7',
    product: 'Apple Watch',
  },
  {
    title: 'iPad (2021)',
    product: 'iPad',
  },
  {
    title: 'iPad Environmental Goals',
    product: 'iPad',
  },
  {
    title: 'iPad Mini (2021)',
    product: 'iPad',
  },
  {
    title: 'iPadOS 15',
    product: 'iPad',
  },
  {
    title: 'iPhone 13 Pro',
    product: 'iPhone',
  },
  {
    title: 'iPhone 13',
    product: 'iPhone',
  },
].map(slide => ({
  ...slide,
  event: 'Apple Event September 2021',
}));

const fromAppleEventSeptember2022: RawSlide[] = [
  {
    title: 'AirPods Pro 2nd Generation',
    product: 'AirPods',
  },
  {
    title: 'AirPods Pro Environmental Goals',
    product: 'AirPods',
  },
  {
    title: 'Apple Watch SE (2022)',
    product: 'Apple Watch',
  },
  {
    title: 'Apple Watch Series 8',
    product: 'Apple Watch',
  },
  {
    title: 'Apple Watch Ultra',
    product: 'Apple Watch',
  },
  {
    title: 'iPhone 14 Display',
    product: 'iPhone',
  },
  {
    title: 'iPhone 14 Pro Environmental Goals',
    product: 'iPhone',
  },
  {
    title: 'iPhone 14 Pro',
    product: 'iPhone',
  },
  {
    title: 'iPhone 14',
    product: 'iPhone',
  },
].map(slide => ({
  ...slide,
  event: 'Apple Event September 2022',
}));

const fromAppleEventSeptember2023: RawSlide[] = [
  {
    title: 'Apple Watch Series 9',
    product: 'Apple Watch',
  },
  {
    title: 'Apple Watch Ultra 2',
    product: 'Apple Watch',
  },
  {
    title: 'iPhone 15 Camera',
    product: 'iPhone',
  },
  {
    title: 'iPhone 15 Pro',
    product: 'iPhone',
  },
  {
    title: 'iPhone 15',
    product: 'iPhone',
  },
].map(slide => ({
  ...slide,
  event: 'Apple Event September 2023',
}));

const fromAppleEventSeptember2024: RawSlide[] = [
  {
    title: 'AirPods 4',
    product: 'AirPods',
  },
  {
    title: 'AirPods Pro Hearing Aid',
    product: 'AirPods',
  },
  {
    title: 'Apple Watch Series 10',
    product: 'Apple Watch',
  },
  {
    title: 'Apple Watch Ultra 3',
    product: 'Apple Watch',
  },
  {
    title: 'iPhone 16 Camera',
    product: 'iPhone',
  },
  {
    title: 'iPhone 16 Pro',
    product: 'iPhone',
  },
  {
    title: 'iPhone 16',
    product: 'iPhone',
  },
].map(slide => ({
  ...slide,
  event: 'Apple Event September 2024',
}));

const fromWWDC2020: RawSlide[] = [
  {
    title: 'watchOS 7',
    product: 'Apple Watch',
  },
  {
    title: 'Apple Silicon',
    product: 'Mac',
  },
  {
    title: 'macOS 11',
    product: 'Mac',
  },
  {
    title: 'New Home Features',
    product: 'TV and Home',
  },
  {
    title: 'iPadOS 14',
    product: 'iPad',
  },
  {
    title: 'iOS 14',
    product: 'iPhone',
  },
].map(slide => ({
  ...slide,
  event: 'WWDC 2020',
}));

const fromWWDC2021: RawSlide[] = [
  {
    title: 'New features Coming to AirPods Family',
    product: 'AirPods',
  },
  {
    title: 'Health',
    product: 'Apple Watch',
  },
  {
    title: 'watchOS 8',
    product: 'Apple Watch',
  },
  {
    title: 'macOS 12',
    product: 'Mac',
  },
  {
    title: 'Home',
    product: 'TV and Home',
  },
  {
    title: 'iPadOS 15',
    product: 'iPad',
  },
  {
    title: 'iOS 15',
    product: 'iPhone',
  },
].map(slide => ({
  ...slide,
  event: 'WWDC 2021',
}));

const fromWWDC2022: RawSlide[] = [
  {
    title: 'watchOS 9',
    product: 'Apple Watch',
  },
  {
    title: 'Apple M2 Chip',
    product: 'Mac',
  },
  {
    title: 'Macbook Air (2022)',
    product: 'Mac',
  },
  {
    title: 'Macbook Environmental Goals',
    product: 'Mac',
  },
  {
    title: 'Macbook Pro 13 (2022)',
    product: 'Mac',
  },
  {
    title: 'iPadOS 16',
    product: 'iPad',
  },
  {
    title: 'iOS 16',
    product: 'iPhone',
  },
].map(slide => ({
  ...slide,
  event: 'WWDC 2022',
}));

const fromWWDC2023: RawSlide[] = [
  {
    title: 'watchOS 10',
    product: 'Apple Watch',
  },
  {
    title: 'New in Swift UI 1',
    product: 'Developers',
  },
  {
    title: 'New in Swift UI 2',
    product: 'Developers',
  },
  {
    title: 'Apple M2 Ultra Chip',
    product: 'Mac',
  },
  {
    title: 'Mac Pro (2023)',
    product: 'Mac',
  },
  {
    title: 'Mac Studio (2023)',
    product: 'Mac',
  },
  {
    title: 'Macbook Air 15',
    product: 'Mac',
  },
  {
    title: 'macOS 13',
    product: 'Mac',
  },
  {
    title: 'Audio and Home',
    product: 'TV and Home',
  },
  {
    title: 'iPadOS 17',
    product: 'iPad',
  },
  {
    title: 'iOS 17',
    product: 'iPhone',
  },
].map(slide => ({
  ...slide,
  event: 'WWDC 2023',
}));

const fromWWDC2024: RawSlide[] = [
  {
    title: 'Apple Intelligence',
    product: 'AI',
  },
  {
    title: 'watchOS 11',
    product: 'Apple Watch',
  },
  {
    title: 'Platforms State of the Union',
    product: 'Developers',
  },
  {
    title: 'Swift UI - Crafting Expereinces',
    product: 'Developers',
  },
  {
    title: 'Swift UI - Fresh Apps',
    product: 'Developers',
  },
  {
    title: 'Swift UI - Windowing',
    product: 'Developers',
  },
  {
    title: 'macOS 15',
    product: 'Mac',
  },
  {
    title: 'Audio and Home',
    product: 'TV and Home',
  },
  {
    title: 'visionOS 2',
    product: 'Vision',
  },
  {
    title: 'iPadOS 18',
    product: 'iPad',
  },
].map(slide => ({
  ...slide,
  event: 'WWDC 2024',
}));

const fromWWDC2025: RawSlide[] = [
  {
    title: 'watchOS 26',
    product: 'Apple Watch',
  },
  {
    title: 'Platforms State of the Union',
    product: 'Developers',
  },
  {
    title: 'macOS 26',
    product: 'Mac',
  },
  {
    title: 'tvOS 26',
    product: 'TV and Home',
  },
  {
    title: 'visionOS 26',
    product: 'Vision',
  },
  {
    title: 'iPadOS 26',
    product: 'iPad',
  },
  {
    title: 'iOS 26',
    product: 'iPhone',
  },
].map(slide => ({
  ...slide,
  event: 'WWDC 2025',
}));

export const raw: RawSlide[] = [
  ...fromWWDC2025,
  ...fromAppleAnnouncementFebruary2025,
  ...fromAppleAnnouncementOctober2024,
  ...fromAppleEventSeptember2024,
  ...fromWWDC2024,
  ...fromAppleEventMay2024,
  ...fromAppleEventOctober2023,
  ...fromAppleEventSeptember2023,
  ...fromWWDC2023,
  ...fromAppleEventSeptember2022,
  ...fromWWDC2022,
  ...fromAppleEventMarch2022,
  ...fromAppleEventOctober2021,
  ...fromAppleEventSeptember2021,
  ...fromWWDC2021,
  ...fromAppleEventApril2021,
  ...fromAppleEventNovember2020,
  ...fromAppleEventOctober2020,
  ...fromAppleEventSeptember2020,
  ...fromWWDC2020,
  ...fromAppleEventSeptember2019,
] as const;
