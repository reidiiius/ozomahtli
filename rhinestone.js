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
  var wire = cord.slice(0);
  var rexp = new RegExp();

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
  var mask = new String();

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
 * Takes a string argument and returns undefined.
 * Formats and prints table of unique tonalities.
 */
Panopolis.distillate = function(kind) {
  var bank = this.zosimos;
  var sign = new String();
  var mask = this.masquerade(kind);
  var crow = new String();
  var star = new Array();
  var duos = new Set();

  for (let ndx in this.signatures) {
    sign = this.signatures[ndx];

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

    for (let elm in star) {
        duos.add(star[elm]);
    }
  }

  star = [];

  duos.forEach((item) => {
    star.push(item);
  });

  star.sort();

  for (let ndx = 0; ndx < star.length; ndx++) {
    if (ndx % 7 === 0) process.stdout.write('\n');

    process.stdout.write('  ' + star[ndx]);
  }

  console.log('\n');
  return;
}


/*
 * Takes two arguments, a string and an array of two integers.
 * The two integers are indices to permute the received string.
 * Returns a mutated string the same length as the one pasted.
 */
Panopolis.pegbox = function(crow, gear) {
  var head = crow.slice(gear[0], gear[1]);
  var tail = crow.slice(0, gear[0]);
  var wire = head.concat(tail);

  return wire;
};


/*
 * Takes two string arguments and returns undefined.
 * The first argument designates character style.
 * The second is a string to be mutated and printed
 * according to the string array of tuning pitches.
 */
Panopolis.fingerboard = function(kind, crow) {
  for (let item in this.pitches) {
    console.log('\t' +
      this.pegbox(crow, this[kind][this.pitches[item]])
    );
  }

  return;
};


/*
 * Takes a string argument and returns undefined.
 * Formats and prints table of found keys.
 */
Panopolis.panther = function(kind) {
  var cart = this.signatures;
  var gems = new Array();

  gems = cart.filter(sign => sign.match(kind));

  if (gems.length) {
    for (let ndx in gems) {
      if (ndx % 7 === 0) process.stdout.write('\n');

      process.stdout.write('\t' + gems[ndx]);
    }
  } else {
    process.stdout.write('\n\t' + kind + ' ?');
  }

  console.log('\n');
  return;
};


/*
 * Takes two string arguments and returns undefined.
 * Formats and prints table of found tones.
 */
Panopolis.vulture = function(kind, spat) {
  var cart = this.signatures;
  var mask = this.masquerade(kind);
  var bank = this.zosimos;
  var crow = new String();
  var rexp = new RegExp(spat);
  var gems = new Array();

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
    for (let ndx in gems) {
      if (ndx % 7 === 0) process.stdout.write('\n');

      process.stdout.write('\t' + gems[ndx]);
    }
  } else {
    process.stdout.write('\n\t' + spat + ' ?');
  }

  console.log('\n');
  return;
};


/*
 * Takes zero arguments and returns undefined.
 * Formats and prints menu of key signatures.
 */
Panopolis.selections = function() {
  for (let ndx in this.signatures) {
    if (ndx % 7 === 0) process.stdout.write('\n');

    process.stdout.write('\t' + this.signatures[ndx]);
  }

  console.log('\n');
  return;
};


/*
 * Takes a string argument and returns undefined.
 * Formats and prints all records tabulated.
 */
Panopolis.dumpster = function(kind='-ac') {
  var sign = new String();
  var bank = this.zosimos;
  var mask = this.masquerade(kind);

  // ensure value consistency of kind
  if (! this.vexillar.includes(kind)) kind = '-ac';

  console.log();

  for (let ndx in this.signatures) {
    sign = this.signatures[ndx];

    if (sign in bank && typeof(bank[sign]) === 'string') {
      console.log('\n\t' + sign + kind + this.serialStamp);

      if (mask === 'metals') {
        this.fingerboard('quintet', bank[sign]);
      } else {
        this.fingerboard('triplet', this.crucible(bank[sign], this[mask]));
      }

      console.log();
    } else {
      console.log('\n\t' + 'zosimos: ' + sign + ' ?\n');
    }
  }

  console.log();
  return;
};


/*
 * Takes two string and one string array for arguments.
 * Formats and prints selected records tabulated,
 * afterwards returns undefined.
 */
Panopolis.retriever = function(kind, cart=[]) {
  var rexp = new RegExp(this.keyhole);
  var bank = this.zosimos;
  var yarn = new String();
  var mask = this.masquerade(kind);
  var veil = new String();

  console.log();

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

        console.log('\n\t' + sign + kind + this.serialStamp);
        this.fingerboard(veil, yarn);
        console.log();
      } else {
        console.log('\n\t' + 'zosimos: ' + sign + ' ?\n');
      }
    } else {
      console.log('\n\t' + sign + ' ?\n');
    }
  });

  console.log();
  return;
};


/*
 * Takes string array argument and returns string array filtered.
 * Sanitizes input arguments by limiting amount and word length.
 */
Panopolis.sentinel = function(args) {
  var cart = new Array();

  if (args.length > this.volume) {
    cart = [String(args.length)];
  }
  else {
    cart = args.slice(2, args.length);
    cart = cart.filter(sign => sign.length < 9);
  }

  return cart;
}


/*
 * Takes zero arguments and returns undefined.
 * Prints template literal of command options.
 */
Panopolis.tutorial = function() {
  var exec = process.argv0;
  var path = process.argv[1].split('/');
  var cmds = `${exec} ${path.pop()}`;

  console.log(`
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

		${cmds} n0 j36

		${cmds} -dc n0 j36

		${cmds} group yq

		${cmds} -lt group NpFe

		${cmds} query j2

		${cmds} tonal

		${cmds} -zh tonal

		${cmds} gamut

		${cmds} -dc gamut
  `);

  return;
}


/*
 * Takes string array argument and returns undefined.
 * Value of cart[0] is not a member of vexillar.
 * Parse cart length then cart[0] value.
 */
Panopolis.monoglot = function(cart=['-h']) {
  var head = new String();

  if (cart.length === 0) {
    this.selections();
  } else if (cart.length === 1) {
    switch(cart[0]) {
      case '-h':
        this.tutorial();
        break;
      case 'gamut':
        this.dumpster();
        break;
      case 'tonal':
        this.distillate();
        break;
      default:
        this.retriever('-ac', cart);
    }
  } else if (cart.length === 2) {
    switch(cart[0]) {
      case 'group':
        this.vulture('-ac', cart[1]);
        break;
      case 'query':
        this.panther(cart[1]);
        break;
      default:
        if (cart[0].charAt(0) === '-') {
          head = cart.shift();
        }
        this.retriever('-ac', cart);
    }
  } else {
    if (cart[0].charAt(0) === '-') {
      head = cart.shift();
    }
    this.retriever('-ac', cart);
  }

  return;
}


/*
 * Takes string array argument and returns undefined.
 * Value of head is a current member of vexillar.
 * Parse shifted cart length then cart[0] value.
 */
Panopolis.polyglot = function(cart=['-ac']) {
  var head = cart.shift();

  if (cart.length === 0) {
    this.selections();
  } else if (cart.length === 1) {
    switch(cart[0]) {
      case 'gamut':
        this.dumpster(head);
        break;
      case 'tonal':
        this.distillate(head);
        break;
      default:
        this.retriever(head, cart);
    }
  } else if (cart.length === 2) {
    if (cart[0] === 'group') {
      this.vulture(head, cart[1]);
    } else {
      this.retriever(head, cart);
    }
  } else {
    this.retriever(head, cart);
  }

  return;
}


/*
 * Takes string array argument and returns undefined.
 * Application entry point.
 */
Panopolis.entryway = function(args) {
  var cart = this.sentinel(args);

  if (cart.length < 1) {
    this.selections();
  } else {
    if (this.vexillar.includes(cart[0])) {
      this.polyglot(cart);
    } else {
      this.monoglot(cart);
    }
  }

  return;
};


// ensure data integrity
Object.freeze(Panopolis);

// negate condition to load as library
if ( Object.isFrozen(Panopolis) ) {
  Panopolis.entryway(process.argv);
} else {
  module.exports = Panopolis;
}


