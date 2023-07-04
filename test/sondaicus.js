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
  worker: {},
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
Elapida.worker.datatype = function(moniker, genus) {
  try {
    console.count('test-initiated');

    const value = Panopolis[moniker];
    const boole = (genus === typeof(value));

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
Elapida.worker.carriage = function(moniker) {
  try {
    console.count('test-initiated');

    const units = Panopolis[moniker];

    if (! Array.isArray(units)) {
      throw new TypeError(`${moniker} is not an array`);
    }

    const slots = Panopolis.regexps.length;
    const boole = (units.length === slots);

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
Elapida.worker.charisma = function(moniker) {
  try {
    console.count('test-initiated');

    const units = Panopolis[moniker];

    if (! Array.isArray(units)) {
      throw new TypeError(`${moniker} is not an array`);
    }

    let boole;

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
Elapida.worker.recorded = function(moniker, genus, span) {
  try {
    console.count('test-initiated');

    const datum = Object.keys(Panopolis[moniker]);
    const niter = datum.values();
    let value, boole;

    for (const item of niter) {
      value = Panopolis[moniker][item];

      boole = (genus === typeof(value) && value.length === span);

      console.assert(boole, "%s[%s] is %s of length: %d",
        moniker, item, genus, span);

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
Elapida.worker.typified = function(genus, moniker, ...args) {
  try {
    console.count('test-initiated');

    const value = Panopolis[moniker](...args);
    const boole = (genus === typeof(value));

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
Elapida.worker.returned = function(genus, moniker, ...args) {
  try {
    console.count('test-initiated');

    const value = Panopolis[moniker](...args);
    const boole = (genus === value);

    console.assert(boole, "%s returns %s", moniker, genus);

    Elapida.scorecard(boole);
  } catch (anomaly) {
    Elapida.diagnose(moniker, anomaly);
  } finally {
    Elapida.tailgate(moniker);
  }

  return;
};


Elapida.worker.zosimos = function() {
  const named = 'zosimos';

  this.datatype(named, 'object');

  this.recorded(named, 'string', 60);

  return;
};


Elapida.worker.quintet = function() {
  const named = 'quintet';

  this.datatype(named, 'object');

  this.recorded(named, 'object', 2);

  return;
};


Elapida.worker.triplet = function() {
  const named ='triplet';

  this.datatype(named, 'object');

  this.recorded(named, 'object', 2);

  return;
};


Elapida.worker.pitches = function() {
  const named = 'pitches';

  this.datatype(named, 'object');

  this.recorded(named, 'string', 2);

  return;
};


Elapida.worker.vexillar = function() {
  this.datatype('vexillar', 'object');

  return;
};


Elapida.worker.arcane = function() {
  const named = 'arcane';

  this.datatype(named, 'object');

  this.carriage(named);

  this.charisma(named);

  return;
};


Elapida.worker.charms = function() {
  const named = 'charms';

  this.datatype(named, 'object');

  this.carriage(named);

  this.charisma(named);

  return;
};


Elapida.worker.glyphs = function() {
  const named = 'glyphs';

  this.datatype(named, 'object');

  this.carriage(named);

  this.charisma(named);

  return;
};


Elapida.worker.regexps = function() {
  const named = 'regexps';

  this.datatype(named, 'object');

  this.recorded(named, 'string', 2);

  return;
};


Elapida.worker.keyhole = function() {
  this.datatype('keyhole', 'object');

  return;
};


Elapida.worker.signatures = function() {
  this.datatype('signatures', 'object');

  return;
};


Elapida.worker.volume = function() {
  this.datatype('volume', 'number');

  return;
};


Elapida.worker.serialStamp = function() {
  this.datatype('serialStamp', 'string');

  return;
};


Elapida.worker.crucible = function() {
  const strand = Panopolis.zosimos['n0'];
  const points = Panopolis.glyphs;

  const cyclist = [
    ['stunted', []],
    [strand, points],
  ];

  cyclist.forEach(star => {
    this.typified('string', 'crucible',  star[0], star[1]);
  });

  return;
};


Elapida.worker.masquerade = function() {
  const cyclist = [
    undefined,
    '-ac',
    '-dc',
    '-lt',
    '-xi',
    '-zh',
  ];

  cyclist.forEach(star => {
    this.typified('string', 'masquerade', star);
  });

  return;
};


Elapida.worker.distillate = function() {
  const cyclist = [
    undefined,
    '-bb',
    '-zh',
  ];

  cyclist.forEach(star => {
    this.returned(undefined, 'distillate', star);
  });

  return;
};


Elapida.worker.pegbox = function() {
  const strand = Panopolis.zosimos['n0'];
  const ranges = Panopolis.quintet['cn'];

  const cyclist = [
    [strand, ranges],
    ['strange', []],
  ];

  cyclist.forEach(star => {
    this.typified('string', 'pegbox', star[0], star[1]);
  });

  return;
};


Elapida.worker.fingerboard = function() {
  const strand = Panopolis.zosimos['n0'];

  const cyclist = [
    ['quintet', strand],
    ['triplet', strand],
  ];

  cyclist.forEach(star => {
    this.returned(undefined, 'fingerboard', star[0], star[1]);
  });

  return;
};


Elapida.worker.panther = function() {
  const cyclist = [
    'j\\dy',
    '26',
    '[89]',
    '[jk]56',
  ];

  cyclist.forEach(star => {
    this.returned(undefined, 'panther', star);
  });

  return;
};


Elapida.worker.vulture = function() {
  const cyclist = [
    [undefined, 'yq'],
    ['-bb', 'yq'],
    ['-lt', 'NpFe'],
    ['-zh', '镎铁'],
  ];

  cyclist.forEach(star => {
    this.returned(undefined, 'vulture', star[0], star[1]);
  });

  return;
};


Elapida.worker.selections = function() {
  this.returned(undefined, 'selections');

  return;
};


Elapida.worker.dumpster = function() {
  const cyclist = [
    undefined,
    '-ac',
    '-dc',
    '-lt',
    '-zh',
  ];

  cyclist.forEach(star => {
    this.returned(undefined, 'dumpster', star);
  });

  return;
};


Elapida.worker.retriever = function() {
  const argots = ['k1', 'j0k9', 'k15'];

  const cyclist = [
    ['-xx', argots],
    ['-ac', argots],
    ['-dc', argots],
    ['-lt', argots],
    ['-zh', argots],
  ];

  cyclist.forEach(star => {
    this.returned(undefined, 'retriever', star[0], star[1]);
  });

  return;
};


Elapida.worker.sentinel = function() {
  const slots = Panopolis.volume;

  const cyclist = [
    Array(slots + 1).fill(0),
    Array(slots).fill('k2j56y7h'),
  ];

  cyclist.forEach(star => {
    this.typified('object', 'sentinel', star);
  });

  return;
};


Elapida.worker.tutorial = function() {
  this.returned(undefined, 'tutorial');

  return;
};


Elapida.worker.monoglot = function() {
  const cyclist = [
    undefined,
    ['group', 'yq'],
  ];

  cyclist.forEach(star => {
    this.returned(undefined, 'monoglot', star);
  });

  return;
};


Elapida.worker.polyglot = function() {
  const cyclist = [
    undefined,
    ['-lt', 'group', 'NpFe'],
  ];

  cyclist.forEach(star => {
    this.returned(undefined, 'polyglot', star);
  });

  return;
};


Elapida.worker.entryway = function() {
  const cyclist = [
    [],
    [null, null, '-h'],
    [null, null, '-i'],
    [null, null, 'k9'],
    [null, null, 'n0', 'j3'],
    [null, null, '-ac', 'j3'],
    [null, null, '-dc', 'j3'],
    [null, null, '-lt', 'j3'],
    [null, null, '-zh', 'j3'],
    [null, null, 'tonal'],
    [null, null, '-ac', 'tonal'],
    [null, null, '-dc', 'tonal'],
    [null, null, '-lt', 'tonal'],
    [null, null, '-zh', 'tonal'],
    [null, null, 'group', 'zq'],
    [null, null, '-ac', 'group', 'zq'],
    [null, null, '-dc', 'group', 'R4'],
    [null, null, '-lt', 'group', 'PuFe'],
    [null, null, '-zh', 'group', '钚铁'],
    [null, null, 'query', 'k9'],
    [null, null, 'query', 'k2'],
  ];

  cyclist.forEach(star => {
    this.returned(undefined, 'entryway', star);
  });

  return;
};


Elapida.runabout = function() {
  const cyclist = [
    'dumpster',
    'zosimos',
    'quintet',
    'triplet',
    'pitches',
    'vexillar',
    'arcane',
    'charms',
    'glyphs',
    'regexps',
    'keyhole',
    'signatures',
    'volume',
    'serialStamp',
    'crucible',
    'masquerade',
    'distillate',
    'pegbox',
    'fingerboard',
    'panther',
    'vulture',
    'selections',
    'retriever',
    'sentinel',
    'tutorial',
    'monoglot',
    'polyglot',
    'entryway',
  ];

  cyclist.forEach(moniker => {
    try {
      this.worker[moniker]();
    } catch (anomaly) {
      console.error(moniker);
      console.error(anomaly);

      ++this.errors;
    }
  });

  return;
};


console.time('timeline'); // start timer

Elapida.runabout();

console.log(Elapida.format,
  Elapida.errors, Elapida.failed, Elapida.passed, Elapida.tested
);

process.stdout.write('\t\tfinal-');
console.timeEnd('timeline'); // stop timer


