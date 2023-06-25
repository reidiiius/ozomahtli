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


Elapida.examine_returned = function(genus, moniker, ...args) {
  try {
    console.count('test-initiated');

    let bool = (genus == Panopolis[moniker](...args));

    console.assert(bool, "%s returns %s", moniker, genus);

   Elapida.scorecard(bool);

    console.count('test-completed');
  } catch (anomaly) {
    Elapida.diagnose(moniker, anomaly);
  }

  return;
};


Elapida.examine_datatype = function(genus, moniker) {
  try {
    console.count('test-initiated');

    let bool = (genus == typeof(Panopolis[moniker]));

    console.assert(bool, "%s is %s", moniker, genus);

    Elapida.scorecard(bool);

    console.count('test-completed');
  } catch (anomaly) {
    Elapida.diagnose(moniker, anomaly);
  }
};


Elapida.examine_typified = function(genus, moniker, ...args) {
  try {
    console.count('test-initiated');

    let bool = (genus == typeof(Panopolis[moniker](...args)));

    console.assert(bool, "%s is %s", moniker, genus);

    Elapida.scorecard(bool);

    console.count('test-completed');
  } catch (anomaly) {
    Elapida.diagnose(moniker, anomaly);
  }
}


console.time('timeline');

console.timeLog('timeline');

Elapida.examine_returned(null, 'dumpster', undefined);

console.timeLog('timeline');

Elapida.examine_returned(null, 'dumpster', 'arcane');

console.timeLog('timeline');

Elapida.examine_datatype('object', 'zosimos');

console.timeLog('timeline');

Elapida.examine_datatype('object', 'quintet');

console.timeLog('timeline');

Elapida.examine_datatype('object', 'triplet');

console.timeLog('timeline');

Elapida.examine_datatype('object', 'pitches');

console.timeLog('timeline');

Elapida.examine_datatype('object', 'arcane');

console.timeLog('timeline');

Elapida.examine_datatype('object', 'charms');

console.timeLog('timeline');

Elapida.examine_datatype('object', 'glyphs');

console.timeLog('timeline');

Elapida.examine_datatype('object', 'regexps');

console.timeLog('timeline');

Elapida.examine_datatype('object', 'keyhole');

console.timeLog('timeline');

Elapida.examine_datatype('object', 'signatures');

console.timeLog('timeline');

Elapida.examine_datatype('number', 'volume');

console.timeLog('timeline');

Elapida.examine_datatype('string', 'serialStamp');

console.timeLog('timeline');

Elapida.examine_typified('string', 'crucible',
  Panopolis.zosimos['n0'], Panopolis.quintet['cn']);

console.timeLog('timeline');

Elapida.examine_returned(null, 'distillate', undefined);

console.timeLog('timeline');

Elapida.examine_returned(null, 'distillate', 'charms');

console.timeLog('timeline');

Elapida.examine_typified('string', 'pegbox',
  Panopolis.zosimos['n0'], Panopolis.quintet['cn']);

console.timeLog('timeline');

Elapida.examine_returned(null, 'fingerboard', 'quintet',
  Panopolis.zosimos['n0']);

console.timeLog('timeline');

Elapida.examine_returned(null, 'panther', 'j56');

console.timeLog('timeline');

Elapida.examine_returned(null, 'vulture', undefined, undefined);

console.timeLog('timeline');

Elapida.examine_returned(null, 'vulture', 'yq', 'charms');

console.timeLog('timeline');

Elapida.examine_returned(null, 'selections', undefined);

console.timeLog('timeline');

Elapida.examine_returned(null, 'retriever', '-zh', ['k1', 'j0k9', 'k15']);

console.timeLog('timeline');

Elapida.examine_typified('object', 'sentinel',
  Array(Panopolis.volume).fill('k2j56y7h'));

console.timeLog('timeline');

Elapida.examine_returned(null, 'tutorial', undefined);

console.timeLog('timeline');

Elapida.examine_returned(null, 'entryway', []);

console.timeLog('timeline');

Elapida.examine_returned(null, 'entryway', [null, null, 'n0']);

console.timeLog('timeline');

console.log(Elapida.format,
  Elapida.errors, Elapida.failed, Elapida.passed, Elapida.tested
);


