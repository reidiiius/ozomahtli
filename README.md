# Ozomahtli
Codex Harmonia

---

### Download

    git clone https://github.com/reidiiius/ozomahtli.git

---

### Usage
Command-line

    cd ozomahtli

:

    node bin/prelude.js

:

    node bin/prelude.js -h

:

    node bin/prelude.js n0 j3

:

    node bin/prelude.js -dc n0 j3

:

    node bin/prelude.js -lt n0 j3

:

    node bin/prelude.js -zh n0 j3

:

    node bin/prelude.js bfbfb n0 j3

:

    node bin/prelude.js cgdae n0 j3

:

    node bin/prelude.js eadgbe n0 j3

:

    node bin/prelude.js fkbjdn n0 j3

:

    node bin/prelude.js -dc eadgbe n0 j3

:

    node bin/prelude.js -lt eadgbe n0 j3

:

    node bin/prelude.js -zh eadgbe n0 j3

:

    node bin/prelude.js tonal

:

    node bin/prelude.js -dc tonal

:

    node bin/prelude.js -lt tonal

:

    node bin/prelude.js -zh tonal

:

    node bin/prelude.js group yq

:

    node bin/prelude.js -dc group Q4

:

    node bin/prelude.js -lt group NpFe

:

    node bin/prelude.js -zh group 镎铁

:

    node bin/prelude.js query 56

:

    node bin/prelude.js query '^[jk]..$'

:

    node bin/prelude.js gamut

:

    node bin/prelude.js -dc gamut

:

    node bin/prelude.js -lt gamut

:

    node bin/prelude.js -zh gamut

:

    node bin/prelude.js cgdae gamut

:

    node bin/prelude.js -dc cgdae gamut

:

    node bin/prelude.js -lt cgdae gamut

:

    node bin/prelude.js -zh cgdae gamut | sensible-pager

REPL

    node

;

    let oz, ns = {};

;

    (async ()=> { oz = await import('./lib/rhinestone.js').catch(()=> {}) })();

;

    typeof oz === 'object' ? 'success' : 'failure';

;

    ns.show = function(txt) { process.stdout.write(txt) };

;

    ns.args = [process.title, process.execPath, '-dc', 'eadgbe'];

;

    ns.recs = oz.Panopolis.estates(ns.args);

;

    oz.Panopolis.inspecto(ns.recs);

;

    ns.wire = oz.Panopolis.dashboard();

;

    ns.show(ns.wire);

;

    ns.args.push('n0'); ns.args.push('j3');

;

    ns.recs = oz.Panopolis.estates(ns.args);

;

    console.table(ns.recs);

;

    ns.wire = oz.Panopolis.retrieve(ns.recs);

;

    ns.show(ns.wire);

;

    ns.wire = oz.Panopolis.distill(ns.recs);

;

    ns.show(ns.wire);

;

    ns.args.pop(); ns.args.pop();

;

    ns.args.push('group'); ns.args.push('Q4');

;

    ns.recs = oz.Panopolis.estates(ns.args);

;

    oz.Panopolis.inspecto(ns.recs);

;

    ns.wire = oz.Panopolis.vulture(ns.recs);

;

    ns.show(ns.wire);

;

    ns.args.pop(); ns.args.pop();

;

    ns.args.push('j56'); ns.args.push('k56');

;

    ns.recs = oz.Panopolis.estates(ns.args);

;

    console.table(ns.recs);

;

    ns.wire = oz.Panopolis.retrieve(ns.recs);

;

    ns.show(ns.wire);

;

    ns.args.pop(); ns.args.pop();

;

    ns.args.push('query'); ns.args.push('56');

;

    ns.recs = oz.Panopolis.estates(ns.args);

;

    oz.Panopolis.inspecto(ns.recs);

;

    ns.wire = oz.Panopolis.panther(ns.recs);

;

    ns.show(ns.wire);

;

    ns.args.pop(); ns.args.pop();

;

    ns.args.push('j256'); ns.args.push('k256');

;

    ns.recs = oz.Panopolis.estates(ns.args);

;

    console.table(ns.recs);

;

    ns.wire = oz.Panopolis.retrieve(ns.recs);

;

    ns.show(ns.wire);

;

    ns.show('\n\t' + Object.keys(oz.Panopolis.pegbox).join('  ') + '\n');

;

    ns.show(oz.Panopolis.dashboard());

;

    ns.args = [process.title, process.execPath, 'cgdae', 'k6', 'j5'];

;

    ns.show(oz.Panopolis.entryway(ns.args));

;

    .exit

---

### Distribution
MIT License

