#! /usr/bin/env node

"use strict";

const Panopolis = Object.create(null);

Panopolis.zosimos = {
      i0: "____ ".repeat(12),
      j2: "HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ AgUr ____ FePu ",
      j3: "HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ____ FeUr ",
      j5: "PbCu ____ AuSn ____ AgHg TiFe FeTi ____ ____ SnAu ____ CuPb ",
      j6: "HgAu ____ SnPb ____ CuUr PbSn ____ AuHg NpFe ____ ____ FeNp ",
      k1: "____ FeUr HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ",
      k2: "NpCu ____ ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ",
      k5: "UrCu ____ PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ",
      k6: "HgAg ____ SnAu ____ CuPb PbCu ____ AuSn ____ ____ TiFe FeTi ",
      n0: "HgCu ____ SnSn ____ CuHg PbFe ____ AuAg ____ AgAu ____ FePb ",
     j17: "____ ____ SnAu ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ",
     j23: "HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ AgUr ____ FePu ",
     j25: "FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ____ NpAu ____ TiPb ",
     j26: "HgHg PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ",
     j36: "HgAu ____ SnPb UrCu ____ PbSn ____ AuHg NpFe ____ ____ FeNp ",
     j56: "UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ____ ____ SnPb ",
     k12: "____ AgUr ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ",
     k15: "____ CuUr PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ",
     k25: "NpCu ____ ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ",
     k26: "HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ____ ____ TiPb FeCu ",
     k34: "PbCu ____ AuSn ____ ____ TiFe FeTi HgAg ____ SnAu ____ CuPb ",
     k56: "HgAu ____ SnPb ____ CuUr PbSn ____ ____ NpFe ____ TiAg FeNp ",
    j236: "HgHg PuFe ____ UrAg ____ PbAu ____ AuPb NpCu ____ ____ FePu ",
    j256: "FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ____ ____ TiPb ",
    j2k5: "FeCu HgMn ____ ____ MnHg CuFe ____ ____ AuNp NpAu ____ TiPb ",
    j2k6: "HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ ____ TiSn FePu ",
    j2L3: "HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ AgUr ____ FePu ",
    j3k5: "NpCu ____ TiSn FePu ____ PuFe ____ ____ CuNp PbAu ____ AuPb ",
    j3k6: "HgTi ____ SnNp UrAu ____ PbPb ____ AuUr ____ ____ TiHg FeFe ",
    j5L6: "PbCu ____ AuSn ____ AgHg TiFe FeTi HgAg ____ ____ ____ CuPb ",
    k125: "____ AgUr ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ",
    k1j5: "____ AuUr NpSn ____ TiHg FeFe HgTi ____ ____ UrAu ____ PbPb ",
    k1j6: "____ PuFe SnTi ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ",
    k256: "HgMn ____ ____ MnHg CuFe PbTi ____ ____ NpAu ____ TiPb FeCu ",
    k2j5: "NpCu ____ ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
    k2j6: "HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ FeCu ",
    k2M1: "____ ____ TiSn FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ",
    k6M5: "HgAg ____ SnAu ____ CuPb PbCu ____ ____ ____ AgHg TiFe FeTi ",
    n167: "NpCu ____ ____ FePu ____ PuFe SnTi ____ CuNp PbAu ____ AuPb ",
    n345: "____ PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ TiSn FePu ",
    n5L2: "HgMn ____ ____ MnHg CuFe ____ ____ AuNp NpAu ____ TiPb FeCu ",
    n6M2: "FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ ",
   j17L2: "HgAg ____ ____ ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ",
   j23k6: "HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ ____ TiSn FePu ",
   j25L6: "TiCu FeMn ____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ AgPb ",
   j26L3: "HgHg PuFe SnTi ____ ____ PbAu ____ AuPb NpCu ____ ____ FePu ",
   j2k34: "TiCu FeMn ____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ AgPb ",
   j2k56: "HgHg PuFe ____ ____ CuNp PbAu ____ ____ NpCu ____ TiSn FePu ",
   j34k6: "HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ____ TiCu FeMn ",
   j56L7: "UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ____ ",
   k12j5: "____ AgUr ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
   k17j5: "TiCu FeMn HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ____ ",
   k25M1: "____ ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ",
   k26M5: "HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ",
   k2j17: "____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ AgPb TiCu FeMn ",
   k2j56: "NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp ____ ____ AuPb ",
   k34M2: "PbCu ____ ____ ____ AgHg TiFe FeTi HgAg ____ SnAu ____ CuPb ",
   k56M4: "HgAu ____ SnPb ____ CuUr ____ ____ AuHg NpFe ____ TiAg FeNp ",
   n25M6: "TiCu FeMn HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ AgPb ",
   n26L5: "____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ",
   n45L2: "HgTi ____ ____ UrAu ____ PbPb ____ AuUr NpSn ____ TiHg FeFe ",
   n67M2: "____ AuUr ____ ____ TiHg FeFe HgTi ____ SnNp UrAu ____ PbPb ",
  j136L7: "____ ____ SnPb UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ",
  j167L2: "HgAu ____ ____ ____ CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp ",
  j246L3: "HgHg PuFe SnTi ____ CuNp ____ ____ AuPb NpCu ____ ____ FePu ",
  j26L34: "HgHg PuFe SnTi UrAg ____ ____ ____ AuPb NpCu ____ ____ FePu ",
  j2k6M5: "HgHg PuFe ____ ____ CuNp PbAu ____ ____ ____ AgUr TiSn FePu ",
  j2k6L3: "HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ ____ TiSn FePu ",
  j346L5: "NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp ____ ____ AuPb ",
  j3k5M4: "HgAu ____ SnPb UrCu ____ ____ ____ AuHg NpFe AgTi ____ FeNp ",
  k135M4: "____ CuUr PbSn ____ ____ NpFe ____ TiAg FeNp HgAu ____ SnPb ",
  k157M6: "HgHg PuFe SnTi ____ CuNp PbAu ____ ____ NpCu ____ ____ FePu ",
  k1j6L7: "____ CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp HgAu ____ ____ ",
  k257M1: "NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ",
  k25M17: "____ AgUr TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ",
  k2j5M1: "____ ____ TiSn FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
  k2j5L6: "NpCu ____ ____ FePu HgHg PuFe SnTi UrAg ____ ____ ____ AuPb ",
  k345M2: "UrCu ____ ____ ____ AuHg NpFe AgTi ____ FeNp HgAu ____ SnPb ",
  n167M4: "HgAu ____ ____ UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ",
  n345L7: "____ CuUr ____ ____ AuHg NpFe ____ TiAg FeNp HgAu ____ SnPb ",
 j2k56M4: "HgHg PuFe ____ ____ CuNp ____ ____ AuPb NpCu ____ TiSn FePu ",
 j3k56M4: "HgTi ____ SnNp UrAu ____ ____ ____ AuUr NpSn ____ TiHg FeFe ",
 k1j56L7: "____ AuUr NpSn ____ TiHg FeFe HgTi ____ SnNp UrAu ____ ____ ",
 k2j56L7: "NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp PbAu ____ ____ ",
};

Panopolis.quintet = {
  gj: [30, 60],
  dj: [ 5, 60],
  aj: [40, 60],
  ej: [15, 60],
  bj: [50, 60],
  fn: [25, 60],
  cn: [ 0, 60],
  gn: [35, 60],
  dn: [10, 60],
  an: [45, 60],
  en: [20, 60],
  bn: [55, 60],
  fk: [30, 60],
  ck: [ 5, 60],
  gk: [40, 60],
  dk: [15, 60],
  ak: [50, 60],
};

Panopolis.triplet = {
  gj: [18, 36],
  dj: [ 3, 36],
  aj: [24, 36],
  ej: [ 9, 36],
  bj: [30, 36],
  fn: [15, 36],
  cn: [ 0, 36],
  gn: [21, 36],
  dn: [ 6, 36],
  an: [27, 36],
  en: [12, 36],
  bn: [33, 36],
  fk: [18, 36],
  ck: [ 3, 36],
  gk: [24, 36],
  dk: [ 9, 36],
  ak: [30, 36],
};

Panopolis.pitches = [
  'cn', 'dj', 'dn', 'ej', 'en', 'fn', 'fk', 'gn', 'aj', 'an', 'ak', 'bn'
];

Panopolis.pegbox = {
  beadgcf: [5, 0, 7, 2, 9, 4, 11],
  bfbfb: [11, 5, 11, 5, 11],
  cgdae: [4, 9, 2, 7, 0],
  eadgbe: [4, 11, 7, 2, 9, 4],
  fkbjdn: [2, 10, 6, 2, 10, 6],
};

Panopolis.natural = 'beadgcf'; // default

Panopolis.vexillar = ['-ac', '-dc', '-h', '-lt', '-zh'];

Panopolis.encoded = '-ac'; // default

Panopolis.utensils = ['gamut', 'group', 'query', 'tonal'];

Panopolis.arcane = [
  95, 50, 51, 52, 53, 54, 55, 56, 57, 78, 80, 81, 82
];

Panopolis.charms = [
  95, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122
];

Panopolis.glyphs = [
  19968,
  38034,
  38192,
  38081,
  38108,
  38134,
  38177,
  37329,
  27742,
  38085,
  38080,
  38222,
  38042,
];

Panopolis.exemplar = [
  '__', 'Ti', 'Mn', 'Fe', 'Cu', 'Ag', 'Sn', 'Au', 'Hg', 'Pb', 'Ur', 'Np', 'Pu'
];

Panopolis.attuned = /^([a-g][j-n]?)+[^0-9]$/;

Panopolis.keyhole = /^([i|j|k|n][0-7]{1,3}){1,2}([L|M][1-7]{1,2})?(I{1,3})?$/;

Panopolis.signats = Object.keys(Panopolis.zosimos).sort();

Panopolis.volume = Panopolis.signats.length;

Panopolis.chronic = String(new Date().getTime());


/*
 * Takes a string argument and an array of substrings
 * which replace matched patterns in the first argument.
 * Returns a new string with replacements.
 */
Panopolis.crucible = function(cord, subs) {
  let yarn = cord.slice(0);
  let rexp = new RegExp();

  for (let ndx = 0; ndx < this.exemplar.length; ndx++) {
    rexp = new RegExp(this.exemplar[ndx], 'g');
    yarn = yarn.replace(rexp, String.fromCharCode(subs[ndx]));
  }

  return yarn;
};


/*
 * Takes a string argument and returns a string.
 * Parses flag and assigns name to returned mask.
 */
Panopolis.garment = function(kind) {
  let mask = String();

  switch(kind) {
    case '-ac':
      mask = 'charms';
      break;
    case '-dc':
      mask = 'arcane';
      break;
    case '-lt':
      mask = 'metals';
      break;
    case '-zh':
      mask = 'glyphs';
      break;
    default:
      mask = 'charms';
  }

  return mask;
};


/*
 * Takes an array argument and returns a string.
 * Formats menu of unique tonalities tabulated.
 */
Panopolis.stonewall = function(star) {
  const elms = Array();
  let rope = String();

  for (let ndx = 0; ndx < star.length; ndx++) {
    if (ndx % 7 === 0) elms.push('\n');

    elms.push(star[ndx]);
  }

  elms.push('\n\n');

  rope = elms.join("\x20\x20");

  return rope;
};


/*
 * Takes an object argument and returns a string.
 * Sifts records to eliminate redundant tokens.
 */
Panopolis.distill = function(recs) {
  const iter = this.signats.values();
  const mask = this.garment(recs.kind);
  const bank = this.zosimos;
  const duos = new Set();
  let yarn = String();
  let star = Array();
  let rope = String();

  for (const sign of iter) {

    if (mask === 'metals') {
      yarn = bank[sign].trim();
    } else {
      yarn = this.crucible(bank[sign], this[mask]).trim();
    }

    star = yarn.split(' ')
      .filter(dyad =>
        ! dyad.startsWith("\x5F") &&
        ! dyad.startsWith("\u{4E00}")
      );

    for (let tone in star) {
        duos.add(star[tone]);
    }
  }

  star = [];

  duos.forEach((tone) => {
    star.push(tone);
  });

  rope = this.stonewall(star.sort());

  return rope;
}


/*
 * Takes two arguments, a string and an array of two integers.
 * The two integers are indices to permute the received string.
 * Returns a new string the same length as the one pasted.
 */
Panopolis.machine = function(yarn, gear) {
  const head = yarn.slice(gear[0], gear[1]);
  const tail = yarn.slice(0, gear[0]);
  const cord = head.concat(tail);

  return cord;
};


/*
 * Takes two string arguments and returns a string.
 * The first argument designates character style.
 * The second argument is a string to be processed
 * according to the string array of tuning pitches.
 */
Panopolis.lattice = function(yarn, tune) {
  const elms = Array();
  let stock = Array();
  let step = String();
  let gear = Array();
  let cord = String();
  let rope = String();

  stock = (this.attuned.test(tune) && tune in this.pegbox)
    ? this.pegbox[tune] : this.pegbox[this.natural];

  step = (yarn.length > 36) ? 'quintet' : 'triplet';

  elms.push('\t');
  for (let ndx = 0; ndx < stock.length; ndx++) {
    gear = this[step][this.pitches[stock[ndx]]];
    cord = this.machine(yarn, gear);
    elms.push(cord);
  }

  rope = elms.join('\n\t');

  return rope;
};


/*
 * Takes an object argument and returns a string.
 * Formats menu of found keys tabulated.
 */
Panopolis.panther = function(recs) {
  const sigs = this.signats;
  const elms = Array();
  let gems = Array();
  let flaw = String();
  let rope = String();

  gems = sigs.filter(sign => sign.match(recs.spat));

  if (gems.length) {
    for (const ndx in gems) {
      if (ndx % 7 === 0) elms.push('\n');

      elms.push(gems[ndx]);
    }
  } else {
    flaw = '\n\t' + recs.spat + ' ?';

    elms.push(flaw);
  }

  elms.push('\n\n');

  rope = elms.join('\t');

  return rope;
};


/*
 * Takes an object argument and returns a string.
 * Formats menu of found tones tabulated.
 */
Panopolis.vulture = function(recs) {
  const sigs = this.signats;
  const mask = this.garment(recs.kind);
  const bank = this.zosimos;
  const gems = Array();
  const elms = Array();
  let yarn = String();
  let flaw = String();
  let rope = String();

  sigs.forEach(sign => {
    if (mask === 'metals') {
      yarn = bank[sign].trim();
    } else {
      yarn = this.crucible(bank[sign], this[mask]).trim();
    }

    if (yarn.includes(recs.spat)) {
      gems.push(sign);
    }
  });

  if (gems.length) {
    for (const ndx in gems) {
      if (ndx % 7 === 0) elms.push('\n');

      elms.push(gems[ndx]);
    }
  } else {
    flaw = '\n\t' + recs.spat + ' ?';

    elms.push(flaw);
  }

  elms.push('\n\n');

  rope = elms.join('\t');

  return rope;
};


/*
 * Takes zero arguments and returns a string.
 * Formats menu of key signats tabulated.
 */
Panopolis.dashboard = function() {
  const elms = Array();
  let rope = String();

  for (const ndx in this.signats) {
    if (ndx % 7 === 0) elms.push('\n');

    elms.push(this.signats[ndx]);
  }

  elms.push('\n\n');

  rope = elms.join('\t');

  return rope;
};


/*
 * Takes an object argument and returns a string.
 * Formats all records in zosimos tabulated.
 */
Panopolis.dumpster = function(recs) {
  const iter = this.signats.values();
  const bank = this.zosimos;
  const mask = this.garment(recs.kind);
  const elms = Array();
  let stem = String();
  let flaw = String();
  let rope = String();

  for (const sign of iter) {

    if (sign in bank && typeof(bank[sign]) === 'string') {
      stem = '\n\t'.concat(sign, '-', recs.tune, recs.kind, this.chronic);

      elms.push(stem);

      if (mask === 'metals') {
        elms.push(this.lattice(bank[sign], recs.tune));
      } else {
        elms.push(this.lattice(this.crucible(bank[sign], this[mask]), recs.tune));
      }

      elms.push('\n');
    } else {
      flaw = '\n\t' + 'zosimos: ' + sign + ' ?\n';

      elms.push(flaw);
    }
  }

  elms.push('\n');

  rope = elms.join('');

  return rope;
};


/*
 * Takes two strings arguments and returns a string.
 * Builds an array of formatted strings to be joined.
 */
Panopolis.composer = function(stem, yarn, tune) {
  const elms = Array();
  let rope = String();

  elms.push(stem);
  elms.push(this.lattice(yarn, tune));
  elms.push('\n');

  rope = elms.join('');

  return rope;
};


/*
 * Takes an object argument and returns a string.
 * Formats selected records tabulated.
 */
Panopolis.retrieve = function(recs) {
  const clef = new RegExp(this.keyhole);
  const bank = this.zosimos;
  const mask = this.garment(recs.kind);
  const elms = Array();
  let yarn = String();
  let stem = String();
  let flaw = String();
  let rope = String();

  recs.arks.forEach(sign => {
    if (clef.test(sign) && sign in bank) {

      if (recs.kind === '-lt') {
        yarn = bank[sign];
      } else {
        yarn = this.crucible(bank[sign], this[mask]);
      }

      if (typeof(yarn) === 'string') {

        stem = '\n\t'.concat(sign, '-', recs.tune, recs.kind, this.chronic);

        elms.push(this.composer(stem, yarn, recs.tune));
      } else {
        flaw = '\n\t' + 'zosimos: ' + sign + ' ?\n';

        elms.push(flaw);
      }

    } else {
      flaw = '\n\t' + sign + ' ?\n';

      elms.push(flaw);
    }
  });

  rope = elms.join('') + '\n';

  return rope;
};


/*
 * Takes a string array argument and returns a string
 * if matched utensils member, else returns undefined.
 */
Panopolis.featured = function(cart) {
  const clef = new RegExp(this.keyhole);
  const lyre = new RegExp(this.attuned);
  let funky;

  for (const proc of this.utensils) {
    funky = cart.find(item =>
      !item.startsWith('-') &&
      !clef.test(item) &&
      !lyre.test(item) &&
      item === proc);

    if (funky) break;
  }

  return funky;
};


/*
 * Takes a string array argument and returns a string
 * if matched vexillar member, else returns undefined.
 */
Panopolis.flagpole = function(cart) {
  let opted;

  for (const opal of this.vexillar) {
    opted = cart.find(item =>
      item.startsWith('-') && item === opal);

    if (opted) break;
  }

  return opted;
};


/*
 * Takes a string array argument and returns undefined
 * if matched vexillar, signats, pegbox, or utensils,
 * else returns a string pattern for zosimos search.
 */
Panopolis.phonemic = function(cart) {
  const clef = new RegExp(this.keyhole);
  const lyre = new RegExp(this.attuned);
  let graph;

  for (const item of cart) {
    if (!item.startsWith('-') &&
        !clef.test(item) &&
        !lyre.test(item) &&
        !this.utensils.includes(item)) {
      graph = item;
      break;
    }
  }

  return graph;
};


/*
 * Takes a string array argument and returns undefined
 * if matched vexillar, pegbox, or utensils members,
 * else returns a string pattern for zosimos search.
 */
Panopolis.keynoted = function(cart) {
  const lyre = new RegExp(this.attuned);
  let graph;

  for (const item of cart) {
    if (!item.startsWith('-') &&
        !lyre.test(item) &&
        !this.utensils.includes(item)) {
      graph = item;
      break;
    }
  }

  return graph;
};


/*
 * Takes a string array argument and returns a string
 * if matched pegbox property, else returns undefined.
 */
Panopolis.stockade = function(cart) {
  const pegs = Object.keys(this.pegbox);
  const lyre = new RegExp(this.attuned);
  let tuned;

  for (const harp of pegs) {
    tuned = cart.find(item =>
      lyre.test(item) && item === harp);

    if (tuned) break;
  }

  return tuned;
};


/*
 * Takes a string array argument and returns string array filtered.
 * Sanitizes input by limiting amount and word length of arguments.
 */
Panopolis.sentinel = function(args) {
  const limit = 16; // maximum characters
  let cart = Array();

  if (args.length > this.volume) {
    cart = [String(args.length)];
  }
  else {
    cart = args.slice(2, args.length);
    cart = cart.filter(word => word.length <= limit);
  }

  return cart;
}


/*
 * Takes string array argument and returns an object.
 * Parses argument list and reassigns property values.
 */
Panopolis.estates = function(args) {
  const recs = {
    arks: Array(),
    cart: this.sentinel(args),
    funk: String(),
    kind: this.encoded,
    spat: String(),
    tune: this.natural,
  };

  if (recs.cart.length) {
    const clef = new RegExp(this.keyhole);
    let funky, graph, opted, signa, tuned;

    funky = this.featured(recs.cart);

    if (funky) {
      recs.funk = funky;
    }

    switch(recs.funk) {
      case 'gamut':
        opted = this.flagpole(recs.cart);
        tuned = this.stockade(recs.cart);

        if (opted) {
          recs.kind = opted;
        }
        if (tuned) {
          recs.tune = tuned;
        }

        break;
      case 'group':
        opted = this.flagpole(recs.cart);
        graph = this.phonemic(recs.cart);

        if (opted) {
          recs.kind = opted;
        }
        if (graph) {
          recs.spat = graph;
        }

        break;
      case 'query':
        graph = this.keynoted(recs.cart);

        if (graph) {
          recs.spat = graph;
        }

        break;
      case 'tonal':
        opted = this.flagpole(recs.cart);

        if (opted) {
          recs.kind = opted;
        }

        break;
      default:
        opted = this.flagpole(recs.cart);
        tuned = this.stockade(recs.cart);

        if (opted) {
          recs.kind = opted;
        }
        if (tuned) {
          recs.tune = tuned;
        }

        for (const item of recs.cart) {
          if (clef.test(item)) {
            signa = this.signats.find(sign => sign === item);

            if (signa) {
              recs.arks.push(signa);
            }
          }
        }
    }
  } else {
    recs.kind = "";
    recs.tune = "";
  }

  return recs;
}


/*
 * Takes an object argument and returns zero.
 * Expository helper for monitoring object state.
 */
Panopolis.inspecto = function(recs) {
  for (const [key, val] of Object.entries(recs)) {
    console.log(`${key}: ${val}`);
  }

  return 0;
};


/*
 * Takes zero arguments and returns a string.
 * User guide reference manual of command options.
 */
Panopolis.tutorial = function() {
  const exec = 'node';
  const path = 'bin/prelude.js';
  const cmds = `${exec} ${path}`;
  const wire = `
  Usage: ${cmds} [option [tuning keys [utility pattern]]]

  Options:
    -h  	Prints this user guide
    -ac 	ASCII characters [o-z]
    -dc		Standard deck of cards
    -lt 	Latin chemical symbols
    -zh 	Hanzi chemical symbols

  Tunings:
    beadgcf 	Fourths: Bass, Guitar
    bfbfb 	Augmented fourths, Tritones
    cgdae 	Fifths: Cello, Viola, Violin
    eadgbe 	Standard Guitar
    fkbjdn 	Major thirds

  Utilities:
    gamut 	Print records tabulated with optional flag
    group 	Correlate key signatures by tonal function
    query 	Search available key signatures by pattern
    tonal 	Correlate tonal functions by optional flag

  Samples:
		${cmds}

		${cmds} -h

		${cmds} n0 j36

		${cmds} query j2

		${cmds} query '^[jk]..$'

		${cmds} -dc j23 j26

		${cmds} cgdae j6 j236

		${cmds} -zh cgdae j3 j36

		${cmds} tonal

		${cmds} group yq

		${cmds} -lt tonal

		${cmds} -lt group NpFe

		${cmds} gamut

		${cmds} gamut eadgbe -dc
  \n`;

  return wire;
}


/*
 * Takes string array argument and returns zero.
 * Application entry point.
 */
Panopolis.entryway = function(args) {
  const recs = this.estates(args);
  let wire = String();

  if (!recs.cart.length) {
    wire = this.dashboard();
  } else if (recs.kind === '-h') {
    wire = this.tutorial();
  } else if (recs.funk === 'gamut') {
    wire = this.dumpster(recs);
  } else if (recs.funk === 'group') {
    wire = this.vulture(recs);
  } else if (recs.funk === 'query') {
    wire = this.panther(recs);
  } else if (recs.funk === 'tonal') {
    wire = this.distill(recs);
  } else if (recs.arks.length) {
    wire = this.retrieve(recs);
  } else {
    wire = this.dashboard();
  }

//  this.inspecto(recs);

  return wire;
};


// ensure data integrity
Object.freeze(Panopolis);

export { Panopolis };


