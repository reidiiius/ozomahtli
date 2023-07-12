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

//  Panopolis.inspecto(Panopolis[named]);

  return;
};


Elapida.worker.quintet = function() {
  const named = 'quintet';

  this.datatype(named, 'object');

  this.recorded(named, 'object', 2);

  this.collars(named);

//  Panopolis.inspecto(Panopolis[named]);

  return;
};


Elapida.worker.triplet = function() {
  const named ='triplet';

  this.datatype(named, 'object');

  this.recorded(named, 'object', 2);

  this.collars(named);

//  Panopolis.inspecto(Panopolis[named]);

  return;
};


Elapida.worker.pitches = function() {
  const named = 'pitches';

  this.datatype(named, 'object');

  this.arraigned(named);

  this.recorded(named, 'string', 2);

//  console.log(Panopolis[named].toString());

  return;
};


Elapida.worker.pegbox = function() {
  const named ='pegbox';

  this.datatype(named, 'object');

  this.collars(named);

//  Panopolis.inspecto(Panopolis[named]);

  return;
};


Elapida.worker.vexillar = function() {
  const named = 'vexillar';

  this.datatype(named, 'object');

  this.arraigned(named);

//  Panopolis.inspecto(Panopolis[named]);

  return;
};


Elapida.worker.utensils = function() {
  const named = 'utensils';

  this.datatype(named, 'object');

  this.arraigned(named);

//  console.log(Panopolis[named].toString());

  return;
};


Elapida.worker.arcane = function() {
  const named = 'arcane';

  this.datatype(named, 'object');

  this.arraigned(named);

  this.carriage(named);

  this.charisma(named);

//  console.log(Panopolis[named].toString());

  return;
};


Elapida.worker.charms = function() {
  const named = 'charms';

  this.datatype(named, 'object');

  this.arraigned(named);

  this.carriage(named);

  this.charisma(named);

//  console.log(Panopolis[named].toString());

  return;
};


Elapida.worker.glyphs = function() {
  const named = 'glyphs';

  this.datatype(named, 'object');

  this.arraigned(named);

  this.carriage(named);

  this.charisma(named);

//  console.log(Panopolis[named].toString());

  return;
};


Elapida.worker.exemplar = function() {
  const named = 'exemplar';

  this.datatype(named, 'object');

  this.arraigned(named);

  this.recorded(named, 'string', 2);

//  console.log(Panopolis[named].toString());

  return;
};


Elapida.worker.keyhole = function() {
  const named = 'keyhole';

  this.datatype(named, 'object');

//  console.log(Panopolis[named].source);

  return;
};


Elapida.worker.signats = function() {
  const named = 'signats';

  this.datatype(named, 'object');

  this.arraigned(named);

//  process.stdout.write(Panopolis.stonewall(Panopolis[named]));

  return;
};


Elapida.worker.volume = function() {
  const named = 'volume';

  this.datatype(named, 'number');

//  console.log(Panopolis[named].toString());

  return;
};


Elapida.worker.chronic = function() {
  const named = 'chronic';

  this.datatype(named, 'string');

//  console.log(Panopolis[named]);

  return;
};


Elapida.worker.crucible = function() {
  const named = 'crucible';
  const cord = Panopolis.zosimos['n0'];
  let subs = new Array();
  let yarn = new String();

  const cyclist = [
    'charms',
    'arcane',
    'glyphs',
  ];

  this.datatype(named, 'function');

  cyclist.forEach(narc => {
    this.teletype('string', named,  cord, subs);
/*
    subs = Panopolis[narc];
    yarn = Panopolis.crucible(cord, subs);

    console.log(yarn);
*/
  });

  return;
};


Elapida.worker.garment = function() {
  const named = 'garment';
  const cyclist = [
    '-ac',
    '-dc',
    '-lt',
    '-xi',
    '-zh',
  ];

  let mask = new String();

  this.datatype(named, 'function');

  cyclist.forEach(kind => {
    this.teletype('string', named, kind);
/*
    mask = Panopolis.garment(kind);

    console.log(mask);
*/
  });

  return;
};


Elapida.worker.stonewall = function() {
  const named = 'stonewall';
  const star = new Array();
  let rope = new String();
  let deca = 90;

  while (deca > 64) {
    star.push(String.fromCharCode(deca));

    --deca;
  }

  this.datatype(named, 'function');

  this.teletype('string', named, star);
/*
  rope = Panopolis.stonewall(star);

  process.stdout.write(rope);
*/
  return;
};


Elapida.worker.distill = function() {
  const named = 'distill';
  const orcs = {
    arks: new Array(),
    cart: new Array(),
    funk: 'tonal',
    kind: '-ac',
    spat: new String(),
    tune: 'beadgcf',
  };

  const cyclist = [
    undefined,
    '-ac',
    '-dc',
    '-lt',
    '-xi',
    '-zh',
  ];

  this.datatype(named, 'function');

  orcs.funk = 'tonal';

  cyclist.forEach(flop => {
    orcs.kind = flop;

    this.teletype('string', named, orcs);

//    process.stdout.write(Panopolis.distill(orcs));

//    Panopolis.inspecto(orcs);
  });

  return;
};


Elapida.worker.machine = function() {
  const named = 'machine';
  const cyclist = Panopolis.pitches;
  const yarn = Panopolis.zosimos['n0'];
  let cord = new String();
  let gear = new Array();

  this.datatype(named, 'function');

  cyclist.forEach(note => {
    gear = Panopolis.quintet[note];

    this.teletype('string', named, yarn, gear);
/*
    cord = Panopolis.machine(yarn, gear);

    console.log(cord);
*/
  });

  return;
};


Elapida.worker.lattice = function() {
  const named = 'lattice';
  const yarn = Panopolis.zosimos['n0'];
  const cyclist = Object.keys(Panopolis.pegbox);
  let rope = new String();

  this.datatype(named, 'function');

  cyclist.forEach(tune => {
    this.teletype('string', named, yarn, tune);
/*
    rope = Panopolis.lattice(yarn, tune);

    console.log('tuning:', tune);
    console.log(rope);
*/
  });

  return;
};


Elapida.worker.panther = function() {
  const named = 'panther';
  const orcs = {
    arks: new Array(),
    cart: new Array(),
    funk: 'query',
    kind: '-ac',
    spat: new String(),
    tune: 'beadgcf',
  };

  const cyclist = [
    'j\\dy',
    '26',
    'k9',
    '[jk]56',
  ];

  let rope = new String();

  this.datatype(named, 'function');

  cyclist.forEach(item => {
    this.teletype('string', named, item);
/*
    orcs.spat = item;

    rope = Panopolis.panther(orcs);

    process.stdout.write(rope);

    Panopolis.inspecto(orcs);
*/
  });

  return;
};


Elapida.worker.vulture = function() {
  const named = 'vulture';
  const orcs = {
    arks: new Array(),
    cart: new Array(),
    funk: 'group',
    kind: '-ac',
    spat: new String(),
    tune: 'beadgcf',
  };

  const cyclist = [
    ['-bb', 'yq'],
    ['-ac', 'yq'],
    ['-dc', 'Q4'],
    ['-lt', 'NpFe'],
    ['-zh', '镎铁'],
  ];

  let rope = new String();

  this.datatype(named, 'function');

  cyclist.forEach(task => {
    orcs.kind = task[0];
    orcs.spat = task[1];

    this.teletype('string', named, orcs);
/*
    rope = Panopolis.vulture(orcs);

    process.stdout.write(rope);

    Panopolis.inspecto(orcs);
*/
  });

  return;
};


Elapida.worker.dashboard = function() {
  const named = 'dashboard';
  let rope = new String();

  this.datatype(named, 'function');

  this.teletype('string', named);
/*
  rope = Panopolis.dashboard();

  process.stdout.write(rope);
*/
  return;
};


Elapida.worker.dumpster = function() {
  const named = 'dumpster';
  const orcs = {
    arks: new Array(),
    cart: new Array(),
    funk: 'gamut',
    kind: '-ac',
    spat: new String(),
    tune: 'beadgcf',
  };

  const cyclist = [
    ['-ac', 'cgdae'],
    ['-dc', 'eadgbe'],
    ['-lt', 'fkbjdn'],
    ['-zh', 'beadgcf'],
  ];

  let rope = new String();

  this.datatype(named, 'function');

  cyclist.forEach(pair => {
    orcs.kind = pair[0], orcs.tune = pair[1],

    this.teletype('string', named, orcs);
/*
    rope = Panopolis.dumpster(orcs);

    process.stdout.write(rope);

    Panopolis.inspecto(orcs);
*/
  });

  return;
};


Elapida.worker.composer = function() {
  const named = 'composer';
  const sign = 'n0';
  const tune = 'cgdae';
  const kind = '-ac';
  const time = Panopolis.chronic;
  const stem = '\n\t'.concat(sign, '-', tune, kind, time);
  const yarn = Panopolis.zosimos[sign];
  let rope = new String();

  this.datatype(named, 'function');

  this.teletype('string', named, stem, yarn, tune);
/*
  rope = Panopolis.composer(stem, yarn, tune);

  process.stdout.write(rope);
*/
  return;
};


Elapida.worker.retrieve = function() {
  const named = 'retrieve';
  const orcs = {
    arks: ['n0', 'k1'],
    cart: new Array(),
    funk: new String(),
    kind: '-ac',
    spat: new String(),
    tune: 'beadgcf',
  };

  const cyclist = [
    ['-ac', 'beadgcf'],
    ['-ac', 'bfbfb'],
    ['-lt', 'cgdae'],
    ['-zh', 'eadgbe'],
    ['-ac', 'fkbjdn'],
  ];

  let rope = new String();

  this.datatype(named, 'function');

  cyclist.forEach(pair => {
    orcs.kind = pair[0], orcs.tune = pair[1],

    this.teletype('string', named, orcs);
/*
    rope = Panopolis.retrieve(orcs);

    process.stdout.write(rope);

    Panopolis.inspecto(orcs);
*/
  });

  return;
};


Elapida.worker.sentinel = function() {
  const named = 'sentinel';
  const slots = Panopolis.volume;
  const cyclist = [
    Array(slots + 1).fill(0),
    Array(slots).fill('k2j56y7h'),
  ];

  let cart = new Array();
  let boole;

  this.datatype(named, 'function');

  cyclist.forEach(args => {
    this.teletype('object', named, args);

    cart = Panopolis[named](args);
    boole = Array.isArray(cart);

    if (! boole) {
      console.log('Assertion failed:', named, 'should return array');
    }

    Elapida.scorecard(boole);
  });

  return;
};


Elapida.worker.estates = function() {
  const named = 'estates';
  const args = [0, 0, '-dc', 'cgdae', 'k15', 'group', 'Q4'];
  let orcs = {};

  this.datatype(named, 'function');

  this.teletype('object', named, args);
/*
  orcs = Panopolis.estates(args);

  Panopolis.inspecto(orcs);
*/
  return;
};


Elapida.worker.inspecto = function() {
  const named = 'inspecto';
  const orcs = {
    arks: [],
    cart: [],
    funk: "",
    kind: "",
    spat: "",
    tune: "",
  };

  this.datatype(named, 'function');

  this.teletype('number', named, orcs);

  return;
};


Elapida.worker.tutorial = function() {
  const named = 'tutorial';
  let wire = new String();

  this.datatype(named, 'function');

  this.teletype('string', named);
/*
  wire = Panopolis.tutorial();

  process.stdout.write(wire);
*/
  return;
};


Elapida.worker.entryway = function() {
  const named = 'entryway';
  const maximal = Panopolis.volume;
  const cyclist = [
    [0, 0],
    [0, 0, '-h'],
    [0, 0, '-i'],
    [0, 0, 'k9'],
    [0, 0, 'n0', 'j3'],
    [0, 0, 'eadgbe', 'n0', 'j3'],
    [0, 0, '-ac', 'j3'],
    [0, 0, '-dc', 'j3'],
    [0, 0, '-lt', 'j3'],
    [0, 0, '-zh', 'j3'],
    [0, 0, '-dc', 'cgdae', 'n0', 'j3'],
    [0, 0, 'tonal'],
    [0, 0, '-ac', 'tonal'],
    [0, 0, '-dc', 'tonal'],
    [0, 0, '-lt', 'tonal'],
    [0, 0, '-zh', 'tonal'],
    [0, 0, 'group', 'zq'],
    [0, 0, '-ac', 'group', 'zq'],
    [0, 0, '-dc', 'group', 'R4'],
    [0, 0, '-lt', 'group', 'PuFe'],
    [0, 0, '-zh', 'group', '钚铁'],
    [0, 0, 'query', 'k9'],
    [0, 0, 'query', 'k2'],
    [0, 0, 'query', '[jk].[jk].+[xy].'],
    Array(maximal).fill('0123456789ABCDEFG'),
    Array(maximal + 1).fill(null),
  ];

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


