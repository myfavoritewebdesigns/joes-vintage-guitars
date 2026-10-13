import type { MartinGuide, MartinSection } from './martin-guides';

// Original summaries of the linked studies. Keep observations tied to the
// photographed model; source conflicts and scope are recorded in reports.
const reference = (page: string, label: string) => ({
  href: `https://www.vintagemartin.com/${page}.html`,
  label: `Robert Corwin: ${label}`,
});
const refs = {
  stamps: reference('stamps', 'Stamps And Logos'),
  heads: reference('headstocks', 'Headstock Construction'),
  inlays: reference('inlays', 'Pearl Inlays'),
  tuners: reference('tuners', '14-Fret Tuner Comparisons'),
  tuners12: reference('tuners12', 'Slotted-Headstock Tuner Comparisons'),
  bridges: reference('bridges', 'Bridge And Saddle Development'),
  guards: reference('pickguards', 'Dated Pickguard Examples'),
  finish: reference('finishes', 'Finishes And Overspray'),
  braces: reference('xbraces', 'Brace Layouts And Profiles'),
  plates: reference('bridgeplates', 'Bridge-Plate Shapes And Measurements'),
  frets: reference('frets', 'Bar Frets And Neck Support'),
  necks: reference('necks', 'Neck Reinforcement And Shop-Order Notes'),
  strings: reference('strings', 'The Transition To Steel Strings'),
  sizes: reference('sizes', 'Historical Body Measurements'),
  styles: reference('styles15_17_18', 'Styles 15, 17 And 18'),
};

export function expandMartinGuides(guides: MartinGuide[]) {
  const guide = (slug: string) => {
    const result = guides.find(item => item.slug === slug);
    if (!result) throw new Error(`Missing Martin guide: ${slug}`);
    return result;
  };
  const section = (owner: MartinGuide, id: string) => {
    const result = owner.sections.find(item => item.id === id);
    if (!result) throw new Error(`Missing Martin section: ${owner.slug}#${id}`);
    return result;
  };
  const add = (owner: MartinGuide, id: string, paragraphs: string[], references: MartinSection['references']) => {
    const target = section(owner, id);
    target.paragraphs.push(...paragraphs);
    target.references = [...(target.references || []), ...(references || [])];
  };

  const logos = guide('martin-headstock-logo-dating-guide');
  section(logos, 'early-gold-script').paragraphs[0] = 'The first front logos, introduced in 1932, were printed in gold leaf without a black border. The outlined gold decal followed. Front logos overlapped with rear headstock stamps through the 1934 transition.';
  section(logos, 'early-gold-script').references = [refs.stamps];
  add(logos, 'outlined-script', [
    'Compare the script’s width relative to the headstock, including the space between the outer letters and the edges. Logo sizes can differ even on guitars of the same model and year, so size alone won’t establish a date.',
  ], [refs.stamps]);
  add(logos, 'vertical-pearl', [
    'An early fern design appears on the 1902 00-42S, followed by torch or flowerpot patterns. The 1931 C-1 archtop prototype has pearl MARTIN lettering; C and F were added in 1932. During the early 1930s, lettering spread to solid-headstock Style 45 guitars while slotted examples retained the torch.',
    'Read the design before trying to date it: a floral torch, separate vertical letters and flowing gold script are three different treatments. Photograph the entire pattern, including its lower end above the nut. A partial close-up can hide the detail that distinguishes them.',
  ], [refs.inlays]);
  add(logos, 'headstock-shape-and-volute', [
      'The small dart behind the headstock is called a volute. On early cedar necks it helped reinforce a separate headstock joint. As one-piece mahogany necks arrived around 1916, the dart continued as decoration on some styles. Its presence does not mean the neck has an adjustable rod.',
      'Rounded slot ends appear on lower styles from 1919, alongside square-ended slots on other models. Some 19th-century Martins have solid headstocks with friction pegs, so a solid headstock doesn’t automatically mean “1930s or later.”',
      'Take a straight-on photograph and a side view. Include the slot ends, headstock corners, rear dart and any joint line. Compare those details with the logo instead of using the headstock outline alone.',
  ], [refs.heads]);

  const tuners = guide('martin-tuner-dating-guide');
  add(tuners, 'slotted-headstock-tuners', [
    'A shared plate can hold three machines, but that arrangement spans many generations. Early Martin sets include French Jerome machines and later German Seidel types. Early-1900s Dinsmore & Jager and Handel-supplied sets can have similar plate outlines, with decoration and buttons varying by model.',
    'Waverly WG-31 sets appear from about 1925, and related designs continued on later 12-fret guitars. Look at which side of the cog the button shaft sits on, the shape of the shaft support, plate engraving and mounting-screw positions. These details help separate early sets from later versions, including those on 1960s New Yorkers.',
  ], [refs.tuners12]);
  add(tuners, 'open-gear-tuners', [
    'The plate bevel, button shape and gear screw help distinguish early clipped-end Grovers from similar unmarked sets. On pointed-end Grovers, prewar and postwar examples differ in button seams and the top of the cog. Photograph these small details squarely; the maker’s name and plate silhouette alone leave too much overlap.',
  ], [refs.tuners]);
  add(tuners, 'wartime-tuners', [
    'Kluson sets from 1943 and early 1944 can have unusually thin gears; later wartime versions have thicker, beveled gears. Some Style 17s used three machines on one strip. Record the gear thickness and plate arrangement along with the buttons.',
  ], [refs.tuners]);
  add(tuners, 'covered-tuners', [
    'Enclosed doesn’t automatically mean postwar: Martin used Grover G-111 sets on D-28s from 1939 to 1942. Identify the housing before assigning a Rotomatic date to it.',
  ], [refs.tuners]);
  tuners.sections.push({
    id: 'tuner-photo-comparison', title: 'How To Compare A Complete Tuner Set',
    paragraphs: ['Photograph the complete set, then take one sharp close-up and a matching front view. Include a side view for strip tuners. That gives you the layout, mechanical details and post hardware without removing anything.'],
    points: [
      'Plate: trace the ends, side notches and screw locations. Include any unused holes beside it.',
      'Gear: show the top edge, center screw or rivet, and the worm shaft that turns it.',
      'Button: show its outline and edge, where a seam may be visible.',
      'Front hardware: include the post, bushing and washer, plus the surrounding finish.',
    ],
  });

  const stamps = guide('martin-neck-block-stamps');
  add(stamps, 'maker-stamps', [
    'Interior stamps gained “& Co.” after incorporation in 1867 while rear headstock stamps kept the earlier wording. Nazareth generally replaced New York in 1898. Read the location as well as the name.',
  ], [refs.stamps]);
  stamps.sections.splice(stamps.sections.length - 1, 0, {
    id: 'pencil-dates-and-case-labels', title: 'Pencil Dates, Case Labels And Dealer Names',
    paragraphs: [
      'Pencil dates appear beneath many tops from the 1870s into the 1910s, and size/style labels can appear inside coffin-case lids. Photograph the whole inscription: a repair date can record later work, and a case may have been exchanged.',
      'Record each mark separately: where it is, what it says and whether it is stamped, printed or handwritten. Include a wider interior photograph so someone reviewing the close-up can locate it. Keep uncertain digits in your notes instead of silently filling them in.',
    ], references: [refs.stamps],
    link: {href: '/martin-guitar-model-numbers/#dealer-and-historical-model-names', label: 'Read About Dealer Names And Historical Model Codes'},
  });
  add(stamps, 'unusual-stamps', [
    'Added finish can fill the lettering and soften the edges of an impressed mark. Stamp depth also varies naturally. Inspect the surrounding surface and repair history before treating a shallow letter as evidence of alteration.',
  ], [refs.finish]);

  const construction = guide('martin-guitar-dating-guide');
  add(construction, 'bridges-and-saddles', [
    'The move from pyramid ends to plain rectangular wings came on Style 18 in 1926 and Style 21 in 1929. This is a style-specific change before the belly bridge appeared, not one sequence shared by all Martins.',
    'Early bridges can have notched drop-in saddles, long before the familiar mid-1960s return to short saddles. A short saddle on a 19th-century guitar and one on a 1960s guitar need different comparisons. Record the slot ends, saddle angle and bridge footprint as separate details.',
  ], [refs.bridges]);
  add(construction, 'pickguards', [
    'The small early OM guard differs from the larger outline used in 1933. The material varied too: reddish swirls appear on some late-1930s guards as well as on later examples, so that color does not by itself identify a 1960s replacement.',
    'Some dark wartime guards have small clear windows; later patterns include bright orange in 1956 and 1957 and larger reddish swirls into 1966. Black guards became standard in 1967, with exceptions. Compare the whole pattern and outline; one patch of color is too little evidence.',
  ], [refs.guards]);
  add(construction, 'trim-and-inlays', [
    'On early-1930s examples, Style 17 uses paired dots at the seventh and twelfth frets, while Style 18 uses single dots. That makes dot placement useful alongside the top wood and binding. Count the fret positions and note paired markers; “dot inlays” is too broad a description.',
    'For pearl models, check where the border stops. Historical Style 40 omits the pearl around the fingerboard extension that distinguishes Style 42. Style 45 extends pearl decoration to the back and side borders. A front photograph alone leaves that back and side decoration unverified.',
  ], [refs.styles, refs.inlays]);
  add(construction, 'tonewoods', [
    'Style numbers kept their names while materials changed. Early Style 18 guitars had spruce tops and Brazilian rosewood bodies; mahogany backs and sides arrived in 1917. Style 17 was reintroduced as an all-mahogany 2-17 in 1922. Check the period before applying familiar later specifications to an older guitar.',
  ], [refs.styles]);
  add(construction, 'finish-endpin-and-case', [
    'The change from French polish and varnish to lacquer came gradually in the 1920s, with exceptions still present in 1930. Gloss alone cannot identify the finish material. Compare wear around the bridge, binding and stamps, and distinguish added finish over an existing surface from a complete refinish.',
  ], [refs.finish]);

  const prewar = guide('prewar-martin-guitar-guide');
  prewar.sections.splice(1, 0, {
    id: 'early-x-bracing-and-steel-strings', title: 'Early X-Bracing And The Move To Steel Strings',
    paragraphs: [
      'X-bracing alone does not prove that an early Martin left the factory with steel strings. Martin used X-bracing on gut-string guitars long before steel became standard. The factory’s original string choice and setup are separate from the instrument’s present ability to withstand string tension.',
      'Two 2-17s shipped with steel strings on March 27, 1922. Style 18 followed as standard equipment in 1923, and Style 28 by 1926. Construction grew stronger gradually, so those shipping dates are not universal bracing-change dates.',
      'For an early guitar, ask a repairer to assess the actual top, bridge, plate, neck and repairs before selecting strings. Its production year and an X-shaped brace pattern can’t make that decision for you.',
    ], photos: [
      {file:'1914-martin-0-18-bracing.jpg',title:'1914 0-18: X-Bracing Before Standard Steel Strings',alt:'X-bracing and bridge plate inside a 1914 Martin 0-18',caption:'The X crossing and bridge plate are visible in this 1914 guitar, made before steel strings became standard on Style 18. The current strings do not establish its original setup.'},
      {file:'1914-martin-0-18-neck-block.jpg',title:'1914 0-18: Neck Block And Serial 11825',alt:'C F Martin Nazareth maker’s stamp and serial 11825 on a 1914 Martin 0-18 neck block',caption:'The neck block carries the maker’s stamp and serial 11825, with no model stamp. The serial dates this 0-18 to 1914; inspect its construction and condition before choosing strings.'},
    ], references: [refs.strings],
  });
  add(prewar, 'x-brace-position-and-neck-width', [
    'Record the body joint as well as the body size. The 12-fret and 14-fret layouts need separate comparisons, and smaller 14-fret bodies changed on a different schedule from dreadnoughts. Avoid applying the 1938 dreadnought date to smaller bodies such as the 00-21.',
    'The two arms of the X frame the bridge area; smaller tone bars continue behind it. Above the soundhole, the transverse brace and any flat brace under the fingerboard extension are another part of the structure. Include that upper area in an inspection set instead of photographing only the lower bout.',
  ], [refs.braces]);
  add(prewar, 'bracing-and-bridge-plates', [
    'The term “tapered” still covers different profiles. Some 1945 guitars have slimmer tapers than the rounder profiles seen in 1946 examples. Compare the actual carving without assuming every guitar in either year received identical braces.',
  ], [refs.braces]);
  const plate = section(prewar, 'bridge-plate-inspection');
  plate.paragraphs.push('Early X-braced Martins used thin mahogany plates before maple became common by the 1880s. For the later plates in this chart, width means the front-to-back dimension, not the span across the guitar. These are approximate comparisons; body size, production overlap and repairs still matter.');
  plate.table = {
    caption: 'Martin Bridge-Plate Shapes And Dimensions',
    headers: ['Period', 'Plate Detail', 'What To Photograph'],
    rows: [
      ['Early 1900s', 'About 1 inch wide; trapezoidal outline, ends tucked into the X-braces.', 'Full outline and the joints at both ends.'],
      ['1927', 'Plates begin getting slightly thicker as construction develops for steel strings.', 'Thickness at an exposed edge, plus any repair layer.'],
      ['By Early 1933', 'About 1 3/8 inches wide; six-sided outline with tucked ends.', 'Clipped corners as well as the pin-hole row.'],
      ['Around 1940 To 1941', 'Trapezoidal maple plates again, about 1 3/8 inches wide and thicker in the examples.', 'A side angle showing thickness and any added layer.'],
    ],
  };
  plate.references = [refs.plates];
  add(prewar, 'prewar-necks-and-frets', [
    'A bar fret is a rectangular strip with its exposed top rounded for playing. A T-fret has a wider crown above a narrower tang. The tight fit of bar frets also helps control neck relief. A conversion between fret types therefore involves more than changing the feel under your fingers.',
    'If refret work is documented, record the installed fret type and any fingerboard or reinforcement changes. Don’t infer the original neck system from a newly installed set of frets.',
  ], [refs.frets]);
  add(prewar, 'prewar-neck-reinforcement', [
    'The return to steel wasn’t a single clean boundary. Ebony reinforcement also appeared in 1945 and 1946, plus some late-1953 production. Some shop-order entries are ambiguous. Check the individual instrument or repair record before describing a wartime or early-postwar neck as certainly steel or ebony.',
  ], [refs.necks]);
  add(prewar, 'prewar-bridges-and-repairs', [
    'An early serial with a belly bridge deserves investigation before a replacement verdict. Some unsold late-1920s guitars received newer bridges at the factory before sale, and dealer stock was returned for updates. Look for records that separate factory work from later repairs.',
  ], [refs.bridges]);

  const models = guide('martin-guitar-model-numbers');
  models.sections.splice(1, 0, {
    id: 'measure-a-body-without-a-model-stamp', title: 'Measure A Body Without A Model Stamp',
    paragraphs: [
      'Measure straight across the widest part of the lower bout, then record the body length, depth and fret where the neck meets the body. Compare the measurements together. A 12-fret and 14-fret guitar can share a size name but have different upper-bout shapes.',
      'The historical measurements below help narrow an unstamped guitar. They are reference dimensions, not machining tolerances. They also explain why an old Size 1 is smaller than an 0: the numbered sizes and zero-size family do not form a simple ascending scale.',
    ], table: {
      caption: 'Historical Martin Lower-Bout Widths', headers: ['Body Family', '12-Fret Examples', '14-Fret Examples'],
      rows: [
        ['2 1/2', '11 5/8 inches', 'Not Listed'],
        ['2', '12 inches', 'Not Listed'],
        ['1', '12 3/4 inches', 'Not Listed'],
        ['0', '13 1/2 inches', '13 1/2 inches'],
        ['00', '14 1/8 inches', '14 5/16 inches'],
        ['000', '15 inches', '15 inches'],
      ],
    }, references: [refs.sizes],
  });
  models.sections.push({
    id: 'dealer-and-historical-model-names', title: 'Dealer Names And Historical Model Codes',
    paragraphs: [
      'A dealer designation may use a different naming system. Early Ditson guitars, for example, used one, two or three digits for three body sizes and 1, 2 or 3 for trim. A Ditson 111 cannot be decoded as a conventional Martin body number followed by Style 11.',
      'The spruce-top 0-17S was made for Montgomery Ward. That S describes a historical special order; it does not justify applying one modern suffix meaning to all older guitars. Photograph the complete stamp, label and body before trying to shorten the name.',
      'For an unstamped guitar, write down an identification separately from the evidence: “possible 0-21” is a working description, while a measured body width and photographed trim are observations. Factory records or a matching documented example can resolve the remaining question.',
    ], references: [{href: 'https://www.vintagemartin.com/', label: 'Robert Corwin: Ditson Models'}, refs.styles],
  });

  // Keep the reference list aligned with links attached to individual sections.
  for (const owner of guides) {
    const normalize = (href: string) => href.replace('://www.', '://');
    const known = new Set(owner.sources.map(item => normalize(item.href)));
    for (const source of owner.sections.flatMap(item => item.references || [])) {
      if (!known.has(normalize(source.href))) {
        owner.sources.push(source);
        known.add(normalize(source.href));
      }
    }
  }
}
