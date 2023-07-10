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
 * Confirms property moniker is an array.
 */
Elapida.worker.arraigned = function(moniker) {
  try {
    console.count('test-initiated');

    const value = Panopolis[moniker];
    const boole = Array.isArray(value);

    console.assert(boole, "%s is array", moniker);

    Elapida.scorecard(boole);
  } catch (anomaly) {
    Elapida.diagnose(moniker, anomaly);
  } finally {
    Elapida.tailgate(moniker);
  }

  return;
};


/*
 * Checks equality of moniker and exemplar length.
 */
Elapida.worker.carriage = function(moniker) {
  try {
    console.count('test-initiated');

    const units = Panopolis[moniker];

    if (! Array.isArray(units)) {
      throw new TypeError(`${moniker} is not an array`);
    }

    const slots = Panopolis.exemplar.length;
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
 * Confirms members of moniker are arrays.
 */
Elapida.worker.collars = function(moniker) {
  try {
    const datum = Object.keys(Panopolis[moniker]);
    const niter = datum.values();
    let value, boole;

    for (const item of niter) {
      value = Panopolis[moniker][item];

      boole = Array.isArray(value);

      console.assert(boole, "%s[%s] is array", moniker, item);

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
Elapida.worker.teletype = function(genus, moniker, ...args) {
  try {
    console.count('test-initiated');

    const value = Panopolis[moniker](...args);
    const boole = (genus === typeof(value));

    console.assert(boole, "%s returns type %s", moniker, genus);

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

  this.collars(named);

  return;
};


Elapida.worker.triplet = function() {
  const named ='triplet';

  this.datatype(named, 'object');

  this.recorded(named, 'object', 2);

  this.collars(named);

  return;
};


Elapida.worker.pitches = function() {
  const named = 'pitches';

  this.datatype(named, 'object');

  this.arraigned(named);

  this.recorded(named, 'string', 2);

  return;
};


Elapida.worker.pegbox = function() {
  const named ='pegbox';

  this.datatype(named, 'object');

  this.collars(named);

  return;
};


Elapida.worker.vexillar = function() {
  const named = 'vexillar';

  this.datatype(named, 'object');

  this.arraigned(named);

  return;
};


Elapida.worker.utensils = function() {
  const named = 'utensils';

  this.datatype(named, 'object');

  this.arraigned(named);

  return;
};


Elapida.worker.arcane = function() {
  const named = 'arcane';

  this.datatype(named, 'object');

  this.arraigned(named);

  this.carriage(named);

  this.charisma(named);

  return;
};


Elapida.worker.charms = function() {
  const named = 'charms';

  this.datatype(named, 'object');

  this.arraigned(named);

  this.carriage(named);

  this.charisma(named);

  return;
};


Elapida.worker.glyphs = function() {
  const named = 'glyphs';

  this.datatype(named, 'object');

  this.arraigned(named);

  this.carriage(named);

  this.charisma(named);

  return;
};


Elapida.worker.exemplar = function() {
  const named = 'exemplar';

  this.datatype(named, 'object');

  this.arraigned(named);

  this.recorded(named, 'string', 2);

  return;
};


Elapida.worker.keyhole = function() {
  this.datatype('keyhole', 'object');

  return;
};


Elapida.worker.signats = function() {
  const named = 'signats';

  this.datatype(named, 'object');

  this.arraigned(named);

  return;
};


Elapida.worker.volume = function() {
  this.datatype('volume', 'number');

  return;
};


Elapida.worker.chronic = function() {
  this.datatype('chronic', 'string');

  return;
};


Elapida.worker.crucible = function() {
  const strand = Panopolis.zosimos['n0'];
  const points = Panopolis.glyphs;

  const cyclist = [
    ['stunted', []],
    ['stunted', points],
    [strand, []],
    [strand, points],
  ];

  const named = 'crucible';

  this.datatype(named, 'function');

  cyclist.forEach(star => {
    this.teletype('string', named,  star[0], star[1]);
  });

  return;
};


Elapida.worker.garment = function() {
  const cyclist = [
    undefined,
    '-ac',
    '-dc',
    '-lt',
    '-xi',
    '-zh',
  ];

  const named = 'garment';

  this.datatype(named, 'function');

  cyclist.forEach(item => {
    this.teletype('string', named, item);
  });

  return;
};


Elapida.worker.stonewall = function() {
  const star = new Array();

  let deca = 90;

  while (deca > 64) {
    star.push(String.fromCharCode(deca));

    --deca;
  }

  const named = 'stonewall';

  this.datatype(named, 'function');

  this.teletype('string', named, star);

  return;
};


Elapida.worker.distill = function() {
  const orcs = {
    arks: new Array(),
    cart: new Array(),
    funk: new String(),
    kind: '-ac',
    regx: new RegExp(),
    spat: new String(),
    tune: 'beadgcf',
  };

  const cyclist = [
    orcs.kind = undefined,
    orcs.kind = '-ac',
    orcs.kind = '-dc',
    orcs.kind = '-lt',
    orcs.kind = '-xi',
    orcs.kind = '-zh',
  ];

  const named = 'distill';

  this.datatype(named, 'function');

  cyclist.forEach(state => {
    this.teletype('string', named, orcs);
  });

  return;
};


Elapida.worker.machine = function() {
  const strand = Panopolis.zosimos['n0'];
  const ranges = Panopolis.quintet['cn'];

  const cyclist = [
    ['strange', []],
    ['strange', ranges],
    [strand, []],
    [strand, ranges],
  ];

  const named = 'machine';

  this.datatype(named, 'function');

  cyclist.forEach(star => {
    this.teletype('string', named, star[0], star[1]);
  });

  return;
};


Elapida.worker.lattice = function() {
  const strand = Panopolis.zosimos['n0'];

  const span = 6;

  const cyclist = [
    ['quintet', '---- '.repeat(span)],
    ['quintet', strand],
    ['triplet', '---- '.repeat(span)],
    ['triplet', strand],
  ];

  const named = 'lattice';

  this.datatype(named, 'function');

  cyclist.forEach(star => {
    this.teletype('string', named, star[0], star[1]);
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

  const named = 'panther';

  this.datatype(named, 'function');

  cyclist.forEach(item => {
    this.teletype('string', named, item);
  });

  return;
};


Elapida.worker.vulture = function() {
  const orcs = {
    arks: new Array(),
    cart: new Array(),
    funk: new String(),
    kind: '-ac',
    regx: new RegExp(),
    spat: new String(),
    tune: 'beadgcf',
  };

  const cyclist = [
    orcs.kind = undefined, orcs.spat = 'yq',
    orcs.kind = '-ac', orcs.spat = undefined,
    orcs.kind = '-bb', orcs.spat = 'yq',
    orcs.kind = '-ac', orcs.spat = 'yq',
    orcs.kind = '-dc', orcs.spat = 'Q4',
    orcs.kind = '-lt', orcs.spat = 'NpFe',
    orcs.kind = '-zh', orcs.spat = '镎铁',
  ];

  const named = 'vulture';

  this.datatype(named, 'function');

  cyclist.forEach(star => {
    this.teletype('string', named, orcs);
  });

  return;
};


Elapida.worker.dashboard = function() {
  const named = 'dashboard';

  this.datatype(named, 'function');

  this.teletype('string', named);

  return;
};


Elapida.worker.dumpster = function() {
  const orcs = {
    arks: new Array(),
    cart: new Array(),
    funk: new String(),
    kind: '-ac',
    regx: new RegExp(),
    spat: new String(),
    tune: 'beadgcf',
  };

  const cyclist = [
    orcs.kind = undefined, orcs.tune = undefined,
    orcs.kind = undefined, orcs.tune = 'bfbfb',
    orcs.kind = '-ac', orcs.tune = 'cgdae',
    orcs.kind = '-dc', orcs.tune = 'eadgbe',
    orcs.kind = '-lt', orcs.tune = 'fkbjdn',
    orcs.kind = '-xi', orcs.tune = 'beadgcf',
    orcs.kind = '-zh', orcs.tune = 'fcgdaeb',
  ];

  const named = 'dumpster';

  this.datatype(named, 'function');

  cyclist.forEach(state => {
    this.teletype('string', named, orcs);
  });

  return;
};


Elapida.worker.composer = function() {
  const timely = Panopolis.chronic;
  const strand = Panopolis.zosimos['n0'];

  const named = 'composer';

  this.datatype(named, 'function');

  this.teletype('string', named, timely, strand);

  return;
};


Elapida.worker.retrieve = function() {
  const orcs = {
    arks: ['k1', 'j0k9', 'k15', 'n56', 'j2k5'],
    cart: new Array(),
    funk: new String(),
    kind: '-ac',
    regx: new RegExp(),
    spat: new String(),
    tune: 'beadgcf',
  };

  const cyclist = [
    orcs.kind = '-zh', orcs.tune = undefined,
    orcs.kind = undefined, orcs.tune = 'cgdae',
    orcs.kind = '-xx', orcs.tune = 'beadgcf',
    orcs.kind = '-ac', orcs.tune = 'bfbfb',
    orcs.kind = '-dc', orcs.tune = 'cgdae',
    orcs.kind = '-lt', orcs.tune = 'eadgbe',
    orcs.kind = '-zh', orcs.tune = 'fkbjdn',
  ];

  const named = 'retrieve';

  this.datatype(named, 'function');

  cyclist.forEach(state => {
    this.teletype('string', named, orcs);
  });

  return;
};


Elapida.worker.sentinel = function() {
  const slots = Panopolis.volume;

  const cyclist = [
    Array(slots + 1).fill(0),
    Array(slots).fill('k2j56y7h'),
  ];

  const named = 'sentinel';

  this.datatype(named, 'function');

  cyclist.forEach(star => {
    this.teletype('object', named, star);
  });

  return;
};


Elapida.worker.estates = function() {
  const named = 'estates';

  const cart = ['-dc', 'cgdae', 'k15', 'group', 'Q4'];

  this.datatype(named, 'function');

  this.teletype('object', named, cart);

  return;
};


Elapida.worker.inspecto = function() {
  const orcs = {
    arks: new Array(),
    cart: new Array(),
    funk: new String(),
    kind: '-ac',
    regx: new RegExp(),
    spat: new String(),
    tune: 'beadgcf',
  };

  const named = 'inspecto';

  this.datatype(named, 'function');

  this.teletype('number', named, orcs);

  return;
};


Elapida.worker.tutorial = function() {
  const named = 'tutorial';

  this.datatype(named, 'function');

  this.teletype('string', named);

  return;
};


Elapida.worker.entryway = function() {
  const maximal = Panopolis.volume;

  const cyclist = [
    [],
    [null],
    [null, null, '-h'],
    [null, null, '-i'],
    [null, null, 'k9'],
    [null, null, 'n0', 'j3'],
    [null, null, 'eadgbe', 'n0', 'j3'],
    [null, null, '-ac', 'j3'],
    [null, null, '-dc', 'j3'],
    [null, null, '-lt', 'j3'],
    [null, null, '-zh', 'j3'],
    [null, null, '-dc', 'cgdae', 'n0', 'j3'],
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
    [null, null, 'query', '^[jk]\d{2}[xy].$'],
    Array(maximal).fill('0123456789ABCDEFG'),
    Array(maximal + 1).fill(null),
  ];

  const named = 'entryway';

  this.datatype(named, 'function');

  cyclist.forEach(star => {
    this.teletype('number', named, star);
  });

  return;
};


Elapida.runabout = function() {
  const cyclist = [
    'zosimos',
    'quintet',
    'triplet',
    'pitches',
    'pegbox',
    'vexillar',
    'utensils',
    'arcane',
    'charms',
    'glyphs',
    'exemplar',
    'keyhole',
    'signats',
    'volume',
    'chronic',
    'crucible',
    'garment',
    'stonewall',
    'distill',
    'machine',
    'lattice',
    'panther',
    'vulture',
    'dashboard',
    'dumpster',
    'composer',
    'retrieve',
    'sentinel',
    'estates',
    'inspecto',
    'tutorial',
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


