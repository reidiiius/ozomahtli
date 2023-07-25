#! /usr/bin/env node

"use strict";

import { Panopolis } from '../lib/rhinestone.js';

if (! Object.entries(Panopolis).length ) {
  console.clear();
  console.warn("\n\t%s\n", 'Warning: check export declaration of rhinestone');
  process.exit(0);
}

if ( Object.isFrozen(Panopolis) ) {
  const wire = Panopolis.entryway(process.argv);

  process.stdout.write(wire);
}


