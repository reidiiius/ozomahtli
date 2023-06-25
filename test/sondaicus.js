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


Elapida.examine_returned = function(genus, moniker, ...args) {
  try {
    console.count('test-initiated');

    let bool = (genus == Panopolis[moniker](...args));

    console.assert(bool, "%s returns %s", moniker, genus);

    Elapida.scorecard(bool);
  } catch (anomaly) {
    Elapida.diagnose(moniker, anomaly);
  } finally {
    Elapida.tailgate(moniker);
  }

  return;
};


Elapida.examine_datatype = function(genus, moniker) {
  try {
    console.count('test-initiated');

    let bool = (genus == typeof(Panopolis[moniker]));

    console.assert(bool, "%s is %s", moniker, genus);

    Elapida.scorecard(bool);
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

    let bool = (genus == typeof(Panopolis[moniker](...args)));

    console.assert(bool, "%s is %s", moniker, genus);

    Elapida.scorecard(bool);
  } catch (anomaly) {
    Elapida.diagnose(moniker, anomaly);
  } finally {
    Elapida.tailgate(moniker);
  }

  return;
};


console.time('timeline'); // start timer

Elapida.examine_returned(null, 'dumpster', undefined);

Elapida.examine_returned(null, 'dumpster', 'arcane');

Elapida.examine_datatype('object', 'zosimos');

Elapida.examine_datatype('object', 'quintet');

Elapida.examine_datatype('object', 'triplet');

Elapida.examine_datatype('object', 'pitches');

Elapida.examine_datatype('object', 'arcane');

Elapida.examine_datatype('object', 'charms');

Elapida.examine_datatype('object', 'glyphs');

Elapida.examine_datatype('object', 'regexps');

Elapida.examine_datatype('object', 'keyhole');

Elapida.examine_datatype('object', 'signatures');

Elapida.examine_datatype('number', 'volume');

Elapida.examine_datatype('string', 'serialStamp');

Elapida.examine_typified('string', 'crucible',
  Panopolis.zosimos['n0'], Panopolis.quintet['cn']);

Elapida.examine_returned(null, 'distillate', undefined);

Elapida.examine_returned(null, 'distillate', 'charms');

Elapida.examine_typified('string', 'pegbox',
  Panopolis.zosimos['n0'], Panopolis.quintet['cn']);

Elapida.examine_returned(null, 'fingerboard', 'quintet',
  Panopolis.zosimos['n0']);

Elapida.examine_returned(null, 'panther', 'j56');

Elapida.examine_returned(null, 'vulture', undefined, undefined);

Elapida.examine_returned(null, 'vulture', 'yq', 'charms');

Elapida.examine_returned(null, 'selections', undefined);

Elapida.examine_returned(null, 'retriever', '-zh', ['k1', 'j0k9', 'k15']);

Elapida.examine_typified('object', 'sentinel',
  Array(Panopolis.volume).fill('k2j56y7h'));

Elapida.examine_returned(null, 'tutorial', undefined);

Elapida.examine_returned(null, 'entryway', []);

Elapida.examine_returned(null, 'entryway', [null, null, 'n0']);

console.log(Elapida.format,
  Elapida.errors, Elapida.failed, Elapida.passed, Elapida.tested
);

process.stdout.write('\t\tfinal-');
console.timeEnd('timeline'); // stop timer


