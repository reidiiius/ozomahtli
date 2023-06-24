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
  return;
}

Elapida.scorecard = function(bool) {
  if (bool) {
    ++this.passed;
  } else {
    ++this.failed;
  }

  ++this.tested;
  return;
}

console.time('timeline');

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let mask = undefined;
  let bool = (null == Panopolis.dumpster(mask));

  console.assert(bool, "%s", 'dumpster returns null');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'dumpster-1';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let mask = 'arcane';
  let bool = (null == Panopolis.dumpster(mask));

  console.assert(bool, "%s", 'dumpster returns null');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'dumpster-2';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.zosimos));

  console.assert(bool, "%s", 'zosimos is object');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'zosimos';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.quintet));

  console.assert(bool, "%s", 'quintet is object');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'quintet';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.triplet));

  console.assert(bool, "%s", 'triplet is object');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'triplet';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.pitches));

  console.assert(bool, "%s", 'pitches is object');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'pitches';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.arcane));

  console.assert(bool, "%s", 'arcane is object');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'arcane';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try { 
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.charms));

  console.assert(bool, "%s", 'charms is object');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'charms';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try { 
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.glyphs));

  console.assert(bool, "%s", 'glyphs is object');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'glyphs';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try { 
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.regexps));

  console.assert(bool, "%s", 'regexs is object');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'regexps';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try { 
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.keyhole));

  console.assert(bool, "%s", 'keyhole is object');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'keyhole';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try { 
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.signatures));

  console.assert(bool, "%s", 'signatures is object');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'signatures';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try { 
  console.count('test-initiated');

  let bool = ('number' == typeof(Panopolis.volume));

  console.assert(bool, "%s", 'volume is number');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'volume';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try { 
  console.count('test-initiated');

  let bool = ('string' == typeof(Panopolis.serialStamp));

  console.assert(bool, "%s", 'serialStamp is string');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'serialStamp';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let cord = Panopolis.zosimos['n0'];
  let subs = Panopolis.quintet['cn'];
  let bool = ('string' == typeof(Panopolis.crucible(cord, subs)));

  console.assert(bool, "%s", 'crucible returns a string');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'crucible';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let mask = undefined;
  let bool = (null == Panopolis.distillate(mask));

  console.assert(bool, "%s", 'distillate returns null');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'distillate-1';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let mask = 'charms';
  let bool = (null == Panopolis.distillate(mask));

  console.assert(bool, "%s", 'distillate returns null');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'distillate-2';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let crow = Panopolis.zosimos['n0'];
  let gear = Panopolis.quintet['cn'];
  let bool = ('string' == typeof(Panopolis.pegbox(crow, gear)));

  console.assert(bool, "%s", 'pegbox returns a string');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'pegbox';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let kind = 'quintet';
  let crow = Panopolis.zosimos['n0'];
  let bool = (null == Panopolis.fingerboard(kind, crow));

  console.assert(bool, "%s", 'fingerboard returns null');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'fingerboard';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let kind = 'j56';
  let bool = (null == Panopolis.panther(kind));

  console.assert(bool, "%s", 'panther returns null');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'panther';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let kind = undefined;
  let mask = undefined;
  let bool = (null == Panopolis.vulture(kind, mask));

  console.assert(bool, "%s", 'vulture returns null');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'vulture-1';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let kind = 'yq';
  let mask = 'charms';
  let bool = (null == Panopolis.vulture(kind, mask));

  console.assert(bool, "%s", 'vulture returns null');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'vulture-2';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let bool = (null == Panopolis.selections());

  console.assert(bool, "%s", 'selections returns null');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'selections';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let kind = '-zh'
  let cart = ['k1', 'j0k9', 'k15'];
  let bool = (null == Panopolis.retriever(kind, cart));

  console.assert(bool, "%s", 'retriever returns null');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'retriever';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let args = Array(Panopolis.volume).fill('k2j56y7h');
  let bool = ('object' == typeof(Panopolis.sentinel(args)));

  console.assert(bool, "%s", 'sentinel returns object');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'sentinel';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let bool = (null == Panopolis.tutorial());

  console.assert(bool, "%s", 'tutorial returns null');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'tutorial';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let bool = (null == Panopolis.entryway([]));

  console.assert(bool, "%s", 'entryway returns null');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'entryway-1';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let bool = (null == Panopolis.entryway([null, null, 'n0']));

  console.assert(bool, "%s", 'entryway returns null');

  Elapida.scorecard(bool);

  console.count('test-completed');
} catch (anomaly) {
  let moniker = 'entryway-2';

  Elapida.diagnose(moniker, anomaly);
}

console.timeLog('timeline');

console.log(Elapida.format,
  Elapida.errors, Elapida.failed, Elapida.passed, Elapida.tested)


