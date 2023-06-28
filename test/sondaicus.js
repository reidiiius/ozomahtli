#! /usr/bin/env js

"use strict";

const Panopolis = require('../rhinestone');

if (! Object.entries(Panopolis).length ) {
  console.clear();
  console.warn("\n\t%s\n", 'Warning: check export declaration of rhinestone');
  process.exit(0);
}

const Elapida = {
  format: "\n\tErrors: %d, Failed: %d, Passed: %d, Tested: %d\n",
  errors: 0,
  failed: 0,
  passed: 0,
  tested: 0,
};


Elapida.tailgate = function(moniker) {
  console.log("identity: %s", moniker);
  console.count('test-completed');
  console.timeLog('timeline');

  return;
};


Elapida.diagnose = function(moniker, anomaly) {
  console.count('caught-exceptions');
  console.log("where: %s", moniker);
  console.log(anomaly);

  ++this.errors;
  ++this.tested;
  return;
};


Elapida.scorecard = function(bool) {
  if (bool) {
    ++this.passed;
  } else {
    ++this.failed;
  }

  ++this.tested;
  return;
};


Elapida.examine_datatype = function(moniker, genus) {
  try {
    console.count('test-initiated');

    let value = Panopolis[moniker];
    let boole = (genus === typeof(value));

    console.assert(boole, "%s is %s", moniker, genus);

    Elapida.scorecard(boole);
  } catch (anomaly) {
    Elapida.diagnose(moniker, anomaly);
  } finally {
    Elapida.tailgate(moniker);
  }

  return;
};


Elapida.examine_records = function(moniker, genus, width) {
  try {
    console.count('test-initiated');

    let datum = Object.keys(Panopolis[moniker]);
    let value;
    let boole;

    for (let item = 0; item < datum.length; item++) {
      value = Panopolis[moniker][datum[item]];

      boole = (genus === typeof(value) && value.length === width);

      console.assert(boole, "%s.%s is %s of length: %d",
        moniker, datum[item], genus, width);

      Elapida.scorecard(boole);
    }

  } catch (anomaly) {
    Elapida.diagnose(moniker, anomaly);
  } finally {
    Elapida.tailgate(moniker);
  }

  return;
};


Elapida.examine_typified = function(genus, moniker, ...args) {
  try {
    console.count('test-initiated');

    let value = Panopolis[moniker](...args);
    let boole = (genus === typeof(value));

    console.assert(boole, "%s is %s", moniker, genus);

    Elapida.scorecard(boole);
  } catch (anomaly) {
    Elapida.diagnose(moniker, anomaly);
  } finally {
    Elapida.tailgate(moniker);
  }

  return;
};


Elapida.examine_returned = function(genus, moniker, ...args) {
  try {
    console.count('test-initiated');

    let value = Panopolis[moniker](...args);
    let boole = (genus === value);

    console.assert(boole, "%s returns %s", moniker, genus);

    Elapida.scorecard(boole);
  } catch (anomaly) {
    Elapida.diagnose(moniker, anomaly);
  } finally {
    Elapida.tailgate(moniker);
  }

  return;
};


console.time('timeline'); // start timer


Elapida.examine_returned(undefined, 'dumpster', undefined);

Elapida.examine_returned(undefined, 'dumpster', 'nought');

Elapida.examine_returned(undefined, 'dumpster', 'arcane');


Elapida.examine_datatype('zosimos', 'object');

Elapida.examine_records('zosimos', 'string', 60);

Elapida.examine_datatype('quintet', 'object');

Elapida.examine_records('quintet', 'object',  2);

Elapida.examine_datatype('triplet', 'object');

Elapida.examine_records('triplet', 'object',  2);

Elapida.examine_datatype('pitches', 'object');

Elapida.examine_records('pitches', 'string',  2);

Elapida.examine_datatype('arcane', 'object');

Elapida.examine_records('arcane' , 'string',  1);

Elapida.examine_datatype('charms', 'object');

Elapida.examine_records('charms' , 'string',  1);

Elapida.examine_datatype('glyphs', 'object');

Elapida.examine_records('glyphs' , 'string',  1);

Elapida.examine_datatype('regexps', 'object');

Elapida.examine_records('regexps', 'string',  2);

Elapida.examine_datatype('keyhole', 'object');

Elapida.examine_datatype('signatures', 'object');

Elapida.examine_datatype('volume', 'number');

Elapida.examine_datatype('serialStamp', 'string');


Elapida.examine_typified('string', 'crucible',
  Panopolis.zosimos['n0'], Panopolis.quintet['cn']);

Elapida.examine_typified('string', 'crucible', '', []);


Elapida.examine_returned(undefined, 'distillate', undefined);

Elapida.examine_returned(undefined, 'distillate', 'nought');

Elapida.examine_returned(undefined, 'distillate', 'charms');


Elapida.examine_typified('string', 'pegbox',
  Panopolis.zosimos['n0'], Panopolis.quintet['cn']);

Elapida.examine_typified('string', 'pegbox', '', []);


Elapida.examine_returned(undefined, 'fingerboard', 'quintet',
  Panopolis.zosimos['n0']);

Elapida.examine_returned(undefined, 'fingerboard', 'triplet',
  Panopolis.zosimos['n0']);

Elapida.examine_returned(undefined, 'panther', 'k99');

Elapida.examine_returned(undefined, 'panther', 'j56');

Elapida.examine_returned(undefined, 'vulture', undefined, undefined);

Elapida.examine_returned(undefined, 'vulture', 'mh', 'nought');

Elapida.examine_returned(undefined, 'vulture', 'yq', 'nought');

Elapida.examine_returned(undefined, 'vulture', 'yq', 'charms');

Elapida.examine_returned(undefined, 'selections', undefined);

Elapida.examine_returned(undefined, 'retriever', undefined, undefined);

Elapida.examine_returned(undefined, 'retriever', '-zh', ['k1', 'j0k9', 'k15']);


Elapida.examine_typified('object', 'sentinel',
  Array(Panopolis.volume + 1).fill(0));

Elapida.examine_typified('object', 'sentinel',
  Array(Panopolis.volume).fill('k2j56y7h'));


Elapida.examine_returned(undefined, 'tutorial', undefined);

Elapida.examine_returned(undefined, 'entryway', []);

Elapida.examine_returned(undefined, 'entryway', [null, null, 'k9']);

Elapida.examine_returned(undefined, 'entryway', [null, null, 'n0']);

Elapida.examine_returned(undefined, 'entryway', [null, null, 'tonal']);

Elapida.examine_returned(undefined, 'entryway', [null, null, '-zh', 'tonal']);

Elapida.examine_returned(undefined, 'entryway',
  [null, null, '-dc', 'group', 'R4']);


console.log(Elapida.format,
  Elapida.errors, Elapida.failed, Elapida.passed, Elapida.tested
);

process.stdout.write('\t\tfinal-');
console.timeEnd('timeline'); // stop timer

