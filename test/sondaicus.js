#! /usr/bin/env js

"use strict";

const Panopolis = require('../rhinestone');


if (! Object.entries(Panopolis).length ) {
  console.warn("\n\t%s\n", 'Warning: check export declaration of rhinestone');
  process.exit(0);
}


try {
  console.count('test-initiated');

  let mask = 'arcane';

  console.assert(null == Panopolis.dumpster(mask),
    "%s", 'dumpster returns null');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: dumpster');
  console.log(anomaly);
}


try {
  console.count('test-initiated');

  console.assert('object' == typeof(Panopolis.zosimos),
    "%s", 'zosimos is object');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: zosimos');
  console.log(anomaly);
}


try {
  console.count('test-initiated');

  console.assert('object' == typeof(Panopolis.quintet),
    "%s", 'quintet is object');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: quintet');
  console.log(anomaly);
}


try {
  console.count('test-initiated');

  console.assert('object' == typeof(Panopolis.triplet),
    "%s", 'triplet is object');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: triplet');
  console.log(anomaly);
}


try {
  console.count('test-initiated');

  console.assert('object' == typeof(Panopolis.pitches),
    "%s", 'pitches is object');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: pitches');
  console.log(anomaly);
}


try {
  console.count('test-initiated');

  console.assert('object' == typeof(Panopolis.arcane),
    "%s", 'arcane is object');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: arcane');
  console.log(anomaly);
}


try { 
  console.count('test-initiated');

  console.assert('object' == typeof(Panopolis.charms),
    "%s", 'charms is object');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: charms');
  console.log(anomaly);
}


try { 
  console.count('test-initiated');

  console.assert('object' == typeof(Panopolis.glyphs),
    "%s", 'glyphs is object');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: glyphs');
  console.log(anomaly);
}


try { 
  console.count('test-initiated');

  console.assert('object' == typeof(Panopolis.regexps),
    "%s", 'regexs is object');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: regexps');
  console.log(anomaly);
}


try { 
  console.count('test-initiated');

  console.assert('object' == typeof(Panopolis.keyhole),
    "%s", 'keyhole is object');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: keyhole');
  console.log(anomaly);
}


try { 
  console.count('test-initiated');

  console.assert('object' == typeof(Panopolis.signatures),
    "%s", 'signatures is object');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: signature');
  console.log(anomaly);
}


try { 
  console.count('test-initiated');

  console.assert('number' == typeof(Panopolis.volume),
    "%s", 'volume is number');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: volume');
  console.log(anomaly);
}


try { 
  console.count('test-initiated');

  console.assert('string' == typeof(Panopolis.serialStamp),
    "%s", 'serialStamp is string');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: serialStamp');
  console.log(anomaly);
}


try {
  console.count('test-initiated');

  let cord = Panopolis.zosimos['n0'];
  let subs = Panopolis.quintet['cn'];

  console.assert('string' == typeof(Panopolis.crucible(cord, subs)),
    "%s", 'crucible returns a string');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: crucible');
  console.log(anomaly);
}


try {
  console.count('test-initiated');

  let mask = 'charms';

  console.assert(null == Panopolis.distillate(mask),
    "%s", 'distillate returns null');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: distillate');
  console.log(anomaly);
}


try {
  console.count('test-initiated');

  let crow = Panopolis.zosimos['n0'];
  let gear = Panopolis.quintet['cn'];

  console.assert('string' == typeof(Panopolis.pegbox(crow, gear)),
    "%s", 'pegbox returns a string');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: pegbox');
  console.log(anomaly);
}


try {
  console.count('test-initiated');

  let kind = 'quintet';
  let crow = Panopolis.zosimos['n0'];

  console.assert(null == Panopolis.fingerboard(kind, crow),
    "%s", 'fingerboard returns null');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: fingerboard');
  console.log(anomaly);
}


try {
  console.count('test-initiated');

  let kind = 'j56';

  console.assert(null == Panopolis.panther(kind),
    "%s", 'panther returns null');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: panther');
  console.log(anomaly);
}


try {
  console.count('test-initiated');

  let kind = 'yq';
  let mask = 'charms';

  console.assert(null == Panopolis.vulture(kind, mask),
    "%s", 'vulture returns null');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: vulture');
  console.log(anomaly);
}


try {
  console.count('test-initiated');

  console.assert(null == Panopolis.selections(),
    "%s", 'selections returns null');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: selections');
  console.log(anomaly);
}


try {
  console.count('test-initiated');

  let kind = '-zh'
  let cart = ['k1', 'j0k9', 'k15'];

  console.assert(null == Panopolis.retriever(kind, cart),
    "%s", 'retriever returns null');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: retriever');
  console.log(anomaly);
}


try {
  console.count('test-initiated');

  let args = Array(99).fill('k2j56y7h');

  console.assert('object' == typeof(Panopolis.sentinel(args)),
    "%s", 'sentinel returns object');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: sentinel');
  console.log(anomaly);
}


try {
  console.count('test-initiated');

  console.assert(null == Panopolis.tutorial(),
    "%s", 'tutorial returns null');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: tutorial');
  console.log(anomaly);
}


try {
  console.count('test-initiated');

  console.assert(null == Panopolis.entryway([]),
    "%s", 'entryway returns null');

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: entryway 1');
  console.log(anomaly);
}


try {
  console.count('test-initiated');

  console.assert(null == Panopolis.entryway([null, null, 'n0']),
    "%s", 'entryway returns null')

  console.count('test-completed');
} catch (anomaly) {
  console.count('caught-exceptions');
  console.log('where: entryway 2');
  console.log(anomaly);
}



