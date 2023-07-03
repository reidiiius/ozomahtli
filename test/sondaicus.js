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


/*
 * Compares moniker type with genus string.
 */
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


/*
 * Checks equality of moniker and regexps length.
 */
Elapida.measure_carriage = function(moniker) {
  try {
    console.count('test-initiated');

    let units = Panopolis[moniker];
    let slots = Panopolis.regexps.length;
    let boole;

    if (! Array.isArray(units)) {
      throw new TypeError(`${moniker} is not an array`);
    }

    boole = (units.length === slots);

    console.assert(boole, "%s length not equal %d", moniker, slots);

    Elapida.scorecard(boole);
  } catch (anomaly) {
    Elapida.diagnose(moniker, anomaly);
  } finally {
    Elapida.tailgate(moniker);
  }

  return;
};


/*
 * Confirms moniker member values are integers and within range.
 */
Elapida.check_code_units = function(moniker) {
  try {
    console.count('test-initiated');

    let units = Panopolis[moniker];
    let value, boole;

    units.forEach(value => {
      boole = (Number.isInteger(value) && value > 31 && value < 65519);

      console.assert(boole, "%s[%s] is code unit", moniker, value);

      Elapida.scorecard(boole);
    });

  } catch (anomaly) {
    Elapida.diagnose(moniker, anomaly);
  } finally {
    Elapida.tailgate(moniker);
  }

  return;
};


/*
 * Compares type of moniker member with genus,
 * and compares member length to span quantity.
 */
Elapida.examine_records = function(moniker, genus, span) {
  try {
    console.count('test-initiated');

    let datum = Object.keys(Panopolis[moniker]);
    let value;
    let boole;

    for (let item = 0; item < datum.length; item++) {
      value = Panopolis[moniker][datum[item]];

      boole = (genus === typeof(value) && value.length === span);

      console.assert(boole, "%s.%s is %s of length: %d",
        moniker, datum[item], genus, span);

      Elapida.scorecard(boole);
    }

  } catch (anomaly) {
    Elapida.diagnose(moniker, anomaly);
  } finally {
    Elapida.tailgate(moniker);
  }

  return;
};


/*
 * Compares genus with type returned from moniker.
 */
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


/*
 * Compares genus with value returned from moniker.
 */
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

Elapida.examine_returned(undefined, 'dumpster', '-lt');

Elapida.examine_returned(undefined, 'dumpster', '-zh');


Elapida.examine_datatype('zosimos', 'object');

Elapida.examine_records('zosimos', 'string', 60);


Elapida.examine_datatype('quintet', 'object');

Elapida.examine_records('quintet', 'object', 2);


Elapida.examine_datatype('triplet', 'object');

Elapida.examine_records('triplet', 'object', 2);


Elapida.examine_datatype('vexillar', 'object');


Elapida.examine_datatype('pitches', 'object');

Elapida.examine_records('pitches', 'string', 2);


Elapida.examine_datatype('arcane', 'object');

Elapida.measure_carriage('arcane');

Elapida.check_code_units('arcane');


Elapida.examine_datatype('charms', 'object');

Elapida.measure_carriage('charms');

Elapida.check_code_units('charms');


Elapida.examine_datatype('glyphs', 'object');

Elapida.measure_carriage('glyphs');

Elapida.check_code_units('glyphs');


Elapida.examine_datatype('regexps', 'object');

Elapida.examine_records('regexps', 'string', 2);


Elapida.examine_datatype('keyhole', 'object');

Elapida.examine_datatype('signatures', 'object');

Elapida.examine_datatype('volume', 'number');

Elapida.examine_datatype('serialStamp', 'string');


Elapida.examine_typified('string', 'crucible',
  Panopolis.zosimos['n0'], Panopolis.quintet['cn']);

Elapida.examine_typified('string', 'crucible', '', []);


Elapida.examine_typified('string', 'masquerade', undefined);

Elapida.examine_typified('string', 'masquerade', '-xi');

Elapida.examine_typified('string', 'masquerade', '-zh');


Elapida.examine_returned(undefined, 'distillate', undefined);

Elapida.examine_returned(undefined, 'distillate', '-bb');

Elapida.examine_returned(undefined, 'distillate', '-zh');


Elapida.examine_typified('string', 'pegbox',
  Panopolis.zosimos['n0'], Panopolis.quintet['cn']);

Elapida.examine_typified('string', 'pegbox', '', []);


Elapida.examine_returned(undefined, 'fingerboard', 'quintet',
  Panopolis.zosimos['n0']);

Elapida.examine_returned(undefined, 'fingerboard', 'triplet',
  Panopolis.zosimos['n0']);


Elapida.examine_returned(undefined, 'panther', 'k99');

Elapida.examine_returned(undefined, 'panther', 'j56');


Elapida.examine_returned(undefined, 'vulture', undefined, 'yq');

Elapida.examine_returned(undefined, 'vulture', '-bb', 'yq');

Elapida.examine_returned(undefined, 'vulture', '-lt', 'NpFe');

Elapida.examine_returned(undefined, 'vulture', '-zh', '镎铁');


Elapida.examine_returned(undefined, 'selections', undefined);


Elapida.examine_returned(undefined, 'retriever', '-mh', ['n0', 'j9']);

Elapida.examine_returned(undefined, 'retriever', '-zh', ['k1', 'j0k9', 'k15']);


Elapida.examine_typified('object', 'sentinel',
  Array(Panopolis.volume + 1).fill(0));

Elapida.examine_typified('object', 'sentinel',
  Array(Panopolis.volume).fill('k2j56y7h'));


Elapida.examine_returned(undefined, 'tutorial', undefined);


Elapida.examine_returned(undefined, 'monoglot', undefined);

Elapida.examine_returned(undefined, 'monoglot', ['group', 'yq']);

Elapida.examine_returned(undefined, 'polyglot', undefined);

Elapida.examine_returned(undefined, 'polyglot', ['-lt', 'group', 'NpFe']);


Elapida.examine_returned(undefined, 'entryway', []);

Elapida.examine_returned(undefined, 'entryway', [null, null, '-h']);

Elapida.examine_returned(undefined, 'entryway', [null, null, '-i']);

Elapida.examine_returned(undefined, 'entryway', [null, null, 'k9']);

Elapida.examine_returned(undefined, 'entryway', [null, null, 'n0', 'j3']);

Elapida.examine_returned(undefined, 'entryway', [null, null, '-ac', 'j3']);

Elapida.examine_returned(undefined, 'entryway', [null, null, '-dc', 'j3']);

Elapida.examine_returned(undefined, 'entryway', [null, null, '-lt', 'j3']);

Elapida.examine_returned(undefined, 'entryway', [null, null, '-zh', 'j3']);

Elapida.examine_returned(undefined, 'entryway', [null, null, 'tonal']);

Elapida.examine_returned(undefined, 'entryway', [null, null, '-ac', 'tonal']);

Elapida.examine_returned(undefined, 'entryway', [null, null, '-dc', 'tonal']);

Elapida.examine_returned(undefined, 'entryway', [null, null, '-lt', 'tonal']);

Elapida.examine_returned(undefined, 'entryway', [null, null, '-zh', 'tonal']);

Elapida.examine_returned(undefined, 'entryway', [null, null, 'group', 'zq']);

Elapida.examine_returned(undefined, 'entryway',
  [null, null, '-ac', 'group', 'zq']);

Elapida.examine_returned(undefined, 'entryway',
  [null, null, '-dc', 'group', 'R4']);

Elapida.examine_returned(undefined, 'entryway',
  [null, null, '-lt', 'group', 'PuFe']);

Elapida.examine_returned(undefined, 'entryway',
  [null, null, '-zh', 'group', '钚铁']);

Elapida.examine_returned(undefined, 'entryway', [null, null, 'query', 'k9']);

Elapida.examine_returned(undefined, 'entryway', [null, null, 'query', 'k2']);


console.log(Elapida.format,
  Elapida.errors, Elapida.failed, Elapida.passed, Elapida.tested
);

process.stdout.write('\t\tfinal-');
console.timeEnd('timeline'); // stop timer


