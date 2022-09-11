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
    'Usage: $0 --slides <slides filepaths> --assets <assets filepaths> --outputFolder <output folderpath>'
  )
  .example(
    '$0 --slides public/slides/**/*.webp --assets public/assets/**/* --outputFolder data'
  )
  .option('slides', {
    type: 'array',
    demandOption: true,
    describe:
      'Input slides, filenames should be [event name]-[product type]-[product name].webp',
  })
  .option('assets', {
    type: 'array',
    demandOption: true,
    describe:
      'Input assets, filenames should be [event name].webp or [product type].webp',
  })
  .option('outputFolder', {
    type: 'string',
    demandOption: true,
    describe:
      'Output folder for JSON files. Files include by event, by product (type), events, product types.',
  });

// find slides
const slideFilepaths = globby.sync(argv.slides);
if (slideFilepaths.length === 0) {
  // eslint-disable-next-line no-console
  console.error('No slides found');
  process.exit(1);
}

// find assets
const assetFilepaths = globby.sync(argv.assets);
if (assetFilepaths.length === 0) {
  // eslint-disable-next-line no-console
  console.error('No assets found');
  process.exit(1);
}

let exitCode = 0;

// process slides
const slides = slideFilepaths.map((slideFilepath) => {
  try {
    const slideFilename = path.parse(slideFilepath).base;
    const slideFilenamePattern = /\[(.*?)\]-\[(.*?)\]-\[(.*?)\][.]webp/;

    if (!slideFilenamePattern.test(slideFilename)) {
      throw new Error(
        `${slideFilename}: Invalid filename. Not matching the pattern defined.`
      );
    }

    const [, eventName, productType, productName] =
      slideFilename.match(slideFilenamePattern);
    return { eventName, productType, productName, slideFilename };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    exitCode = 1;
    return null;
  }
});

// process assets
const assets = assetFilepaths.map((assetFilepath) => {
  try {
    const assetFilename = path.parse(assetFilepath).base;
    const assetFilenamePattern = /(.*?)[.](?:webp|svg)/;

    if (!assetFilenamePattern.test(assetFilename)) {
      throw new Error(
        `${assetFilename}: Invalid filename. Not matching the pattern defined.`
      );
    }

    const [, assetName] = assetFilename.match(assetFilenamePattern);

    return { assetName, assetFilename };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    exitCode = 1;
    return null;
  }
});

/////////////////////////////////////////////////////////////////////////////
// do not build if error occurred
if (exitCode !== 0) {
  process.exit(exitCode);
}
/////////////////////////////////////////////////////////////////////////////

// build images grouped by event and product type
const byEvent = _.mapKeys(_.groupBy(slides, 'eventName'), (_, key) => {
  return key.replace(' ', '');
});
const byProductType = _.mapKeys(_.groupBy(slides, 'productType'), (_, key) => {
  return key.replace(' ', '');
});

// build data for events and product types
const eventNames = _.map(_.map(slides, 'eventName'), (eventName) => {
  return eventName.replace(' ', '');
});
const productTypes = _.map(_.map(slides, 'productType'), (productType) => {
  return productType.replace(' ', '');
});
const assetNames = _.map(_.map(assets, 'assetName'), (asset) => {
  return asset.replace(' ', '');
});
const diff = _.union(
  _.difference(eventNames, assetNames),
  _.difference(productTypes, assetNames)
);

// if there is no diff, we can safely say that all events and product types have their assets
if (!_.isEqual(diff, [])) {
  throw Error(
    `the assets found are not matching with the assets required, difference: [${diff}]`
  );
}

// write outputs
fs.outputJsonSync(
  path.resolve(`${argv.outputFolder}/assets.json`),
  _.mapKeys(
    _.mapValues(_.keyBy(assets, 'assetName'), 'assetFilename'),
    (_, key) => {
      return key.replace(' ', '');
    }
  )
);

fs.outputJsonSync(path.resolve(`${argv.outputFolder}/events.json`), eventNames);

fs.outputJsonSync(
  path.resolve(`${argv.outputFolder}/productTypes.json`),
  productTypes
);

fs.outputJsonSync(path.resolve(`${argv.outputFolder}/byEvent.json`), byEvent);

fs.outputJsonSync(
  path.resolve(`${argv.outputFolder}/byProductType.json`),
  byProductType
);
