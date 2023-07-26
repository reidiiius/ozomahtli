#! /usr/bin/env node

"use strict";

import { Panopolis } from '../lib/rhinestone.js';

try {
  if ( 'entryway' in Panopolis ) {
    const wire = Panopolis.entryway(process.argv);

    process.stdout.write(wire);
  } else {
    const flaw = Error('entryway is not defined');
      flaw.name = 'ReferenceError';

    throw flaw;
  }
} catch ( { name, message } ) {
  console.error("\n\t%s: %s\n", name, message);
}


