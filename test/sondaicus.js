#! /usr/bin/env js

"use strict";

const Panopolis = require('../rhinestone');

if (! Object.entries(Panopolis).length ) {
  console.clear();
  console.warn("\n\t%s\n", 'Warning: check export declaration of rhinestone');
  process.exit(0);
}

const Elapida = {
  format: "\n\tFailed: %d, Passed: %d, Tested: %d\n",
  failed: 0,
  passed: 0,
  tested: 0,
};

console.time('timeline');

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let mask = undefined;
  let bool = (null == Panopolis.dumpster(mask));

  console.assert(bool, "%s", 'dumpster returns null');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: dumpster 1');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let mask = 'arcane';
  let bool = (null == Panopolis.dumpster(mask));

  console.assert(bool, "%s", 'dumpster returns null');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: dumpster 2');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.zosimos));

  console.assert(bool, "%s", 'zosimos is object');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: zosimos');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.quintet));

  console.assert(bool, "%s", 'quintet is object');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: quintet');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.triplet));

  console.assert(bool, "%s", 'triplet is object');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: triplet');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.pitches));

  console.assert(bool, "%s", 'pitches is object');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: pitches');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.arcane));

  console.assert(bool, "%s", 'arcane is object');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: arcane');
  console.log(anomaly);
}

console.timeLog('timeline');

try { 
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.charms));

  console.assert(bool, "%s", 'charms is object');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: charms');
  console.log(anomaly);
}

console.timeLog('timeline');

try { 
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.glyphs));

  console.assert(bool, "%s", 'glyphs is object');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: glyphs');
  console.log(anomaly);
}

console.timeLog('timeline');

try { 
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.regexps));

  console.assert(bool, "%s", 'regexs is object');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: regexps');
  console.log(anomaly);
}

console.timeLog('timeline');

try { 
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.keyhole));

  console.assert(bool, "%s", 'keyhole is object');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: keyhole');
  console.log(anomaly);
}

console.timeLog('timeline');

try { 
  console.count('test-initiated');

  let bool = ('object' == typeof(Panopolis.signatures));

  console.assert(bool, "%s", 'signatures is object');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: signature');
  console.log(anomaly);
}

console.timeLog('timeline');

try { 
  console.count('test-initiated');

  let bool = ('number' == typeof(Panopolis.volume));

  console.assert(bool, "%s", 'volume is number');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: volume');
  console.log(anomaly);
}

console.timeLog('timeline');

try { 
  console.count('test-initiated');

  let bool = ('string' == typeof(Panopolis.serialStamp));

  console.assert(bool, "%s", 'serialStamp is string');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: serialStamp');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let cord = Panopolis.zosimos['n0'];
  let subs = Panopolis.quintet['cn'];
  let bool = ('string' == typeof(Panopolis.crucible(cord, subs)));

  console.assert(bool, "%s", 'crucible returns a string');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: crucible');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let mask = undefined;
  let bool = (null == Panopolis.distillate(mask));

  console.assert(bool, "%s", 'distillate returns null');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: distillate 1');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let mask = 'charms';
  let bool = (null == Panopolis.distillate(mask));

  console.assert(bool, "%s", 'distillate returns null');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: distillate 2');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let crow = Panopolis.zosimos['n0'];
  let gear = Panopolis.quintet['cn'];
  let bool = ('string' == typeof(Panopolis.pegbox(crow, gear)));

  console.assert(bool, "%s", 'pegbox returns a string');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: pegbox');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let kind = 'quintet';
  let crow = Panopolis.zosimos['n0'];
  let bool = (null == Panopolis.fingerboard(kind, crow));

  console.assert(bool, "%s", 'fingerboard returns null');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: fingerboard');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let kind = 'j56';
  let bool = (null == Panopolis.panther(kind));

  console.assert(bool, "%s", 'panther returns null');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: panther');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let kind = undefined;
  let mask = undefined;
  let bool = (null == Panopolis.vulture(kind, mask));

  console.assert(bool, "%s", 'vulture returns null');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: vulture 1');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let kind = 'yq';
  let mask = 'charms';
  let bool = (null == Panopolis.vulture(kind, mask));

  console.assert(bool, "%s", 'vulture returns null');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: vulture 2');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let bool = (null == Panopolis.selections());

  console.assert(bool, "%s", 'selections returns null');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: selections');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let kind = '-zh'
  let cart = ['k1', 'j0k9', 'k15'];
  let bool = (null == Panopolis.retriever(kind, cart));

  console.assert(bool, "%s", 'retriever returns null');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: retriever');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let args = Array(Panopolis.volume).fill('k2j56y7h');
  let bool = ('object' == typeof(Panopolis.sentinel(args)));

  console.assert(bool, "%s", 'sentinel returns object');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: sentinel');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let bool = (null == Panopolis.tutorial());

  console.assert(bool, "%s", 'tutorial returns null');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: tutorial');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let bool = (null == Panopolis.entryway([]));

  console.assert(bool, "%s", 'entryway returns null');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: entryway 1');
  console.log(anomaly);
}

console.timeLog('timeline');

try {
  console.count('test-initiated');

  let bool = (null == Panopolis.entryway([null, null, 'n0']));

  console.assert(bool, "%s", 'entryway returns null');

  if (bool) {
    ++Elapida.passed;
  } else {
    ++Elapida.failed;
  }
  ++Elapida.tested;

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: entryway 2');
  console.log(anomaly);
}

console.timeLog('timeline');

console.log(Elapida.format, Elapida.failed, Elapida.passed, Elapida.tested)


