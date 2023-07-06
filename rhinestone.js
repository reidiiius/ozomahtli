#! /usr/bin/env js

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
    j2y3: "HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ AgUr ____ FePu ",
    j3k5: "NpCu ____ TiSn FePu ____ PuFe ____ ____ CuNp PbAu ____ AuPb ",
    j3k6: "HgTi ____ SnNp UrAu ____ PbPb ____ AuUr ____ ____ TiHg FeFe ",
    j5y6: "PbCu ____ AuSn ____ AgHg TiFe FeTi HgAg ____ ____ ____ CuPb ",
    k125: "____ AgUr ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ",
    k1j5: "____ AuUr NpSn ____ TiHg FeFe HgTi ____ ____ UrAu ____ PbPb ",
    k1j6: "____ PuFe SnTi ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ",
    k256: "HgMn ____ ____ MnHg CuFe PbTi ____ ____ NpAu ____ TiPb FeCu ",
    k2j5: "NpCu ____ ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
    k2j6: "HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ FeCu ",
    k2x1: "____ ____ TiSn FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ",
    k6x5: "HgAg ____ SnAu ____ CuPb PbCu ____ ____ ____ AgHg TiFe FeTi ",
    n167: "NpCu ____ ____ FePu ____ PuFe SnTi ____ CuNp PbAu ____ AuPb ",
    n345: "____ PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ TiSn FePu ",
    n5y2: "HgMn ____ ____ MnHg CuFe ____ ____ AuNp NpAu ____ TiPb FeCu ",
    n6x2: "FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ ",
   j17y2: "HgAg ____ ____ ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ",
   j23k6: "HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ ____ TiSn FePu ",
   j25y6: "TiCu FeMn ____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ AgPb ",
   j26y3: "HgHg PuFe SnTi ____ ____ PbAu ____ AuPb NpCu ____ ____ FePu ",
   j2k34: "TiCu FeMn ____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ AgPb ",
   j2k56: "HgHg PuFe ____ ____ CuNp PbAu ____ ____ NpCu ____ TiSn FePu ",
   j34k6: "HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ____ TiCu FeMn ",
   j56y7: "UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ____ ",
   k12j5: "____ AgUr ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
   k17j5: "TiCu FeMn HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ____ ",
   k25x1: "____ ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ",
   k26x5: "HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ",
   k2j17: "____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ AgPb TiCu FeMn ",
   k2j56: "NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp ____ ____ AuPb ",
   k34x2: "PbCu ____ ____ ____ AgHg TiFe FeTi HgAg ____ SnAu ____ CuPb ",
   k56x4: "HgAu ____ SnPb ____ CuUr ____ ____ AuHg NpFe ____ TiAg FeNp ",
   n25x6: "TiCu FeMn HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ AgPb ",
   n26y5: "____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ",
   n45y2: "HgTi ____ ____ UrAu ____ PbPb ____ AuUr NpSn ____ TiHg FeFe ",
   n67x2: "____ AuUr ____ ____ TiHg FeFe HgTi ____ SnNp UrAu ____ PbPb ",
  j136y7: "____ ____ SnPb UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ",
  j167y2: "HgAu ____ ____ ____ CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp ",
  j246y3: "HgHg PuFe SnTi ____ CuNp ____ ____ AuPb NpCu ____ ____ FePu ",
  j26y34: "HgHg PuFe SnTi UrAg ____ ____ ____ AuPb NpCu ____ ____ FePu ",
  j2k6x5: "HgHg PuFe ____ ____ CuNp PbAu ____ ____ ____ AgUr TiSn FePu ",
  j2k6y3: "HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ ____ TiSn FePu ",
  j346y5: "NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp ____ ____ AuPb ",
  j3k5x4: "HgAu ____ SnPb UrCu ____ ____ ____ AuHg NpFe AgTi ____ FeNp ",
  k135x4: "____ CuUr PbSn ____ ____ NpFe ____ TiAg FeNp HgAu ____ SnPb ",
  k157x6: "HgHg PuFe SnTi ____ CuNp PbAu ____ ____ NpCu ____ ____ FePu ",
  k1j6y7: "____ CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp HgAu ____ ____ ",
  k257x1: "NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ",
  k25x17: "____ AgUr TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ",
  k2j5x1: "____ ____ TiSn FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
  k2j5y6: "NpCu ____ ____ FePu HgHg PuFe SnTi UrAg ____ ____ ____ AuPb ",
  k345x2: "UrCu ____ ____ ____ AuHg NpFe AgTi ____ FeNp HgAu ____ SnPb ",
  n167x4: "HgAu ____ ____ UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ",
  n345y7: "____ CuUr ____ ____ AuHg NpFe ____ TiAg FeNp HgAu ____ SnPb ",
 j2k56x4: "HgHg PuFe ____ ____ CuNp ____ ____ AuPb NpCu ____ TiSn FePu ",
 j3k56x4: "HgTi ____ SnNp UrAu ____ ____ ____ AuUr NpSn ____ TiHg FeFe ",
 k1j56y7: "____ AuUr NpSn ____ TiHg FeFe HgTi ____ SnNp UrAu ____ ____ ",
 k2j56y7: "NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp PbAu ____ ____ ",
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
  'fn', 'cn', 'gn', 'dn', 'an', 'en',
  'bn', 'fk', 'ck', 'gk', 'dk', 'ak',
];

Panopolis.vexillar = ['-ac', '-dc', '-lt', '-zh'];

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

Panopolis.regexps = [
  '__', 'Ti', 'Mn', 'Fe', 'Cu', 'Ag', 'Sn', 'Au', 'Hg', 'Pb', 'Ur', 'Np', 'Pu'
];

Panopolis.keyhole = /^([i|j|k|n][0-7]{1,3}){1,2}([x|y][1-7]{1,2})?[h|i]?$/;

Panopolis.signatures = Object.keys(Panopolis.zosimos).sort();

Panopolis.volume = Panopolis.signatures.length;

Panopolis.serialStamp = String(new Date().getTime());


/*
 * Takes a string argument and an array of substrings
 * which replace matched patterns in the first argument.
 * Returns a new string with replacements.
 */
Panopolis.crucible = function(cord, subs) {
  let wire = cord.slice(0);
  let rexp = new RegExp();

  for (let ndx = 0; ndx < this.regexps.length; ndx++) {
    rexp = new RegExp(this.regexps[ndx], 'g');
    wire = wire.replace(rexp, String.fromCharCode(subs[ndx]));
  }

  return wire;
};


/*
 * Takes a string argument and returns a string.
 * Parses flag and assigns name to returned mask.
 */
Panopolis.masquerade = function(kind) {
  let mask = new String();

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
 * Takes a string argument and returns a string.
 * Formats menu of unique tonalities tabulated.
 */
Panopolis.distillate = function(kind) {
  const iter = this.signatures.values();
  const mask = this.masquerade(kind);
  const bank = this.zosimos;
  const duos = new Set();
  const elms = new Array();
  let crow = new String();
  let star = new Array();

  for (const sign of iter) {

    if (mask === 'metals') {
      crow = bank[sign].trim();
    } else {
      crow = this.crucible(bank[sign], this[mask]).trim();
    }

    star = crow.split(' ')
      .filter(item =>
        ! item.startsWith("\x5F") &&
        ! item.startsWith("\u{4E00}")
      );

    for (let tone in star) {
        duos.add(star[tone]);
    }
  }

  star = [];

  duos.forEach((tone) => {
    star.push(tone);
  });

  star.sort();

  for (let ndx = 0; ndx < star.length; ndx++) {
    if (ndx % 7 === 0) elms.push('\n');

    elms.push(star[ndx]);
  }

  elms.push('\n\n');

  return elms.join("\x20\x20");
}


/*
 * Takes two arguments, a string and an array of two integers.
 * The two integers are indices to permute the received string.
 * Returns a new string the same length as the one pasted.
 */
Panopolis.pegbox = function(crow, gear) {
  const head = crow.slice(gear[0], gear[1]);
  const tail = crow.slice(0, gear[0]);
  const wire = head.concat(tail);

  return wire;
};


/*
 * Takes two string arguments and returns a string.
 * The first argument designates character style.
 * The second argument is a string to be processed
 * according to the string array of tuning pitches.
 */
Panopolis.fingerboard = function(kind, crow) {
  const elms = new Array();

  elms.push('\t');

  for (const item in this.pitches) {
    elms.push(this.pegbox(crow, this[kind][this.pitches[item]]));
  }

  return elms.join('\n\t');
};


/*
 * Takes a string argument and returns a string.
 * Formats menu of found keys tabulated.
 */
Panopolis.panther = function(kind) {
  const cart = this.signatures;
  const gems = cart.filter(sign => sign.match(kind));
  const elms = new Array();
  let flaw = new String();

  if (gems.length) {
    for (const ndx in gems) {
      if (ndx % 7 === 0) elms.push('\n');

      elms.push(gems[ndx]);
    }
  } else {
    flaw = '\n\t' + kind + ' ?';

    elms.push(flaw);
  }

  elms.push('\n\n');

  return elms.join('\t');
};


/*
 * Takes two string arguments and returns a string.
 * Formats menu of found tones tabulated.
 */
Panopolis.vulture = function(kind, spat) {
  const cart = this.signatures;
  const mask = this.masquerade(kind);
  const bank = this.zosimos;
  const rexp = new RegExp(spat);
  const gems = new Array();
  const elms = new Array();
  let crow = new String();
  let flaw = new String();

  cart.forEach(sign => {
    if (mask === 'metals') {
      crow = bank[sign].trim();
    } else {
      crow = this.crucible(bank[sign], this[mask]).trim();
    }

    if (rexp.test(crow)) {
      gems.push(sign);
    }
  });

  if (gems.length) {
    for (const ndx in gems) {
      if (ndx % 7 === 0) elms.push('\n');

      elms.push(gems[ndx]);
    }
  } else {
    flaw = '\n\t' + spat + ' ?';

    elms.push(flaw);
  }

  elms.push('\n\n');

  return elms.join('\t');
};


/*
 * Takes zero arguments and returns a string.
 * Formats menu of key signatures tabulated.
 */
Panopolis.selections = function() {
  const elms = new Array();

  for (const ndx in this.signatures) {
    if (ndx % 7 === 0) elms.push('\n');

    elms.push(this.signatures[ndx]);
  }

  elms.push('\n\n');

  return elms.join('\t');
};


/*
 * Takes a string argument and returns a string.
 * Formats all records in zosimos tabulated.
 */
Panopolis.dumpster = function(kind='-ac') {
  const iter = this.signatures.values();
  const bank = this.zosimos;
  const mask = this.masquerade(kind);
  const elms = new Array();
  let stem = new String();
  let flaw = new String();

  // ensure value consistency of kind
  if (! this.vexillar.includes(kind)) kind = '-ac';

  for (const sign of iter) {

    if (sign in bank && typeof(bank[sign]) === 'string') {
      stem = '\n\t' + sign + kind + this.serialStamp;

      elms.push(stem);

      if (mask === 'metals') {
        elms.push(this.fingerboard('quintet', bank[sign]));
      } else {
        elms.push(this.fingerboard('triplet',
          this.crucible(bank[sign], this[mask])));
      }

      elms.push('\n');
    } else {
      flaw = '\n\t' + 'zosimos: ' + sign + ' ?\n';

      elms.push(flaw);
    }
  }

  elms.push('\n');

  return elms.join('');
};


/*
 * Takes two strings and one string array for arguments.
 * Formats selected records tabulated, returns a string.
 */
Panopolis.retriever = function(kind, cart=[]) {
  const rexp = new RegExp(this.keyhole);
  const bank = this.zosimos;
  const mask = this.masquerade(kind);
  const elms = new Array();
  let stem = new String();
  let yarn = new String();
  let veil = new String();
  let flaw = new String();

  cart.forEach(sign => {
    if (rexp.test(sign) && sign in bank) {

      if (kind === '-lt') {
        yarn = bank[sign];
      } else {
        yarn = this.crucible(bank[sign], this[mask]);
      }

      if (typeof(yarn) === 'string') {

        if (yarn.length > 36) {
          veil = 'quintet';
        } else {
          veil = 'triplet';
        }

        stem = '\n\t' + sign + kind + this.serialStamp;

        elms.push(stem);
        elms.push(this.fingerboard(veil, yarn));
        elms.push('\n');
      } else {
        flaw = '\n\t' + 'zosimos: ' + sign + ' ?\n';

        elms.push(flaw);
      }
    } else {
      flaw = '\n\t' + sign + ' ?\n';

      elms.push(flaw);
    }
  });

  elms.push('\n');

  return elms.join('');
};


/*
 * Takes a string array argument and returns string array filtered.
 * Sanitizes input by limiting amount and word length of arguments.
 */
Panopolis.sentinel = function(args) {
  const limit = 16; // maximum characters
  let cart = new Array();

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
 * Takes zero arguments and returns a string.
 * User guide reference manual of command options.
 */
Panopolis.tutorial = function() {
  const exec = process.argv0;
  const path = process.argv[1].split('/');
  const cmds = `${exec} ${path.pop()}`;
  const wire = `
  Usage: ${cmds} [option [process [tonality | signatures]]]

  Options:
    -h  	Prints this user guide
    -ac 	ASCII characters [o-z]
    -dc		Standard deck of cards
    -lt 	Latin chemical symbols
    -zh 	Hanzi chemical symbols

  Processes:
    gamut 	Print records tabulated with optional flag
    group 	Correlate key signatures by tonal function
    query 	Search available key signatures by pattern
    tonal 	Correlate tonal functions by optional flag

  Samples:
		${cmds}

		${cmds} -h

		${cmds} n0 j36

		${cmds} -dc n0 j36

		${cmds} group yq

		${cmds} -lt group NpFe

		${cmds} query j2

		${cmds} query ^[jk]..$

		${cmds} tonal

		${cmds} -zh tonal

		${cmds} gamut

		${cmds} -dc gamut
  \n`;

  return wire;
}


/*
 * Takes string array argument and returns a string.
 * Value of cart[0] is not a member of vexillar.
 * Parse cart length then cart[0] value.
 */
Panopolis.monoglot = function(cart=['-h']) {
  let head = new String();
  let wire = new String();

  if (! cart.length) {
    wire = this.selections();
  } else if (cart.length === 1) {
    switch(cart[0]) {
      case '-h':
        wire = this.tutorial();
        break;
      case 'gamut':
        wire = this.dumpster();
        break;
      case 'tonal':
        wire = this.distillate();
        break;
      default:
        wire = this.retriever('-ac', cart);
    }
  } else if (cart.length === 2) {
    switch(cart[0]) {
      case 'group':
        wire = this.vulture('-ac', cart[1]);
        break;
      case 'query':
        wire = this.panther(cart[1]);
        break;
      default:
        if (cart[0].charAt(0) === '-') {
          head = cart.shift();
        }
        wire = this.retriever('-ac', cart);
    }
  } else {
    if (cart[0].charAt(0) === '-') {
      head = cart.shift();
    }
    wire = this.retriever('-ac', cart);
  }

  return wire;
}


/*
 * Takes string array argument and returns a string.
 * Value of head is a current member of vexillar.
 * Parse shifted cart length then cart[0] value.
 */
Panopolis.polyglot = function(cart=['-ac']) {
  const head = cart.shift();
  let wire = new String();

  if (! cart.length) {
    wire = this.selections();
  } else if (cart.length === 1) {
    switch(cart[0]) {
      case 'gamut':
        wire = this.dumpster(head);
        break;
      case 'tonal':
        wire = this.distillate(head);
        break;
      default:
        wire = this.retriever(head, cart);
    }
  } else if (cart.length === 2) {
    if (cart[0] === 'group') {
      wire = this.vulture(head, cart[1]);
    } else {
      wire = this.retriever(head, cart);
    }
  } else {
    wire = this.retriever(head, cart);
  }

  return wire;
}


/*
 * Takes string array argument and returns zero.
 * Application entry point.
 */
Panopolis.entryway = function(args) {
  const cart = this.sentinel(args);
  let wire = new String();

  if (! cart.length) {
    wire = this.selections();
  } else {
    if (this.vexillar.includes(cart[0])) {
      wire = this.polyglot(cart);
    } else {
      wire = this.monoglot(cart);
    }
  }

  process.stdout.write(wire);

  return 0;
};


// ensure data integrity
Object.freeze(Panopolis);

// negate condition to load as library
if ( Object.isFrozen(Panopolis) ) {
  Panopolis.entryway(process.argv);
} else {
  module.exports = Panopolis;
}


