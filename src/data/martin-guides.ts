import type { ImageMetadata } from 'astro';
import { resolveImage } from '../lib/images';
import { expandMartinGuides } from './martin-research';
// Use only Joe’s documented photo sets. See reports/martin-dating-photo-sources.json.
// Downloads interiors remain excluded until Joe confirms ownership.
const newPhotos = import.meta.glob<{ default: ImageMetadata }>([
  '../assets/martin-dating/1930-martin-0-21-*.jpg',
  '../assets/martin-dating/1937-martin-0-17-*.jpg',
  '../assets/martin-dating/1967-d28-*.jpg',
  '../assets/martin-dating/1965-d28-logo.jpg',
  '../assets/martin-dating/1955-d28-volute.jpg',
  '../assets/martin-tuners/*.jpg',
], { eager: true });
export function martinImage(path: string): ImageMetadata {
  const image = path.startsWith('images/') ? resolveImage(path) : (newPhotos[`../assets/martin-dating/${path}`]?.default ?? newPhotos[`../assets/martin-tuners/${path}`]?.default);
  if (!image) throw new Error(`Missing Martin guide photo: ${path}`);
  return image;
}
export interface MartinPhotoData { file: string; title: string; alt: string; caption: string; source?: string; sourceLabel?: string; thirdParty?: boolean; credit?: string; rotate?: 'left'; }
export interface MartinSection { id: string; anchorIds?: string[]; title: string; period?: string; paragraphs: string[]; points?: string[]; photos?: MartinPhotoData[]; link?: { href: string; label: string }; references?: { href: string; label: string }[]; table?: { caption: string; headers: string[]; rows: string[][] }; }
export interface MartinGuide { published?: string; updated?: { date: string; label: string }; showCreditsAndReferences?: boolean; timeline?: { title: string; intro: string; rows: string[][] }; slug: string; title: string; shortTitle: string; description: string; intro: string; cardImage: string; cardAlt?: string; cardCaption?: string; cardText: string; sections: MartinSection[]; faqs: {q:string;a:string}[]; sources: {label:string;href:string}[]; }
const drive1930 = 'https://drive.google.com/drive/folders/1Ht20GKwf8TaYshliiFN8EqBemeYrhou6';
const drive1937 = 'https://drive.google.com/drive/folders/1Y3QKWhEYaiiyG4p7Xd3_lWET35hvS_PG';
export const reverb1967 = 'https://reverb.com/item/95097608-martin-d-28-1967-vibey-player-great-sound';
const pearlStory = '/post/1976-martin-000-45-specs-history-value-guide/';
const p = (file: string, title: string, alt: string, caption: string, source?: string, sourceLabel = "Joe’s Photo Archive"): MartinPhotoData => ({file,title,alt,caption,source,sourceLabel});
export const martinGuides: MartinGuide[] = [
  {
    slug:'martin-headstock-logo-dating-guide',shortTitle:'Logo Evolution',title:'Martin Headstock Logo Evolution And Dating Guide',
    updated:{date:'2026-10-13',label:'October 13, 2026'},
    showCreditsAndReferences:false,
    description:"Martin began using gold front logos in 1932. Compare rear stamps, outlined script and vertical pearl lettering in dated guitar photos.",
    intro:"Martin began using gold front logos in 1932, but earlier rear stamps and later pearl lettering overlap with other designs. Check both sides of the headstock, then compare the logo with the model and serial number.",
    cardImage:'1937-martin-0-17-3.jpg',cardText:"Blank headstocks, rear stamps, gold script and vertical pearl lettering, with dated examples and notes on refinished headstocks.",
    sections:[
      {id:'before-front-logos',title:'Blank Headstocks And Rear Stamps',period:'Before The Early 1930s',paragraphs:["Many early steel-string Martins have a blank headstock face and a maker’s stamp pressed into the wood on the back. Check inside the body for stamps too.","The 1930 0-21 in these photos has no front logo. Its slotted headstock also appears on later 12-fret models, so check the serial before calling a slotted-headstock Martin prewar."],photos:[p('1930-martin-0-21-3.jpg','1930 0-21: Blank Front','Plain slotted front headstock of Joe’s 1930 Martin 0-21',"The front has no gold script. This guitar also has a serial-only neck block, shown in the stamp guide.",drive1930),p('images/martin-serial/martin-guitar-back-of-headstock-stamp-scaled.jpg','Impressed Rear Headstock Stamp','C F Martin maker’s stamp impressed into the rear of a vintage headstock',"The maker’s name is pressed into the wood on the back of the headstock. Photograph the lettering closely enough to read it.")]},
      {id:'early-gold-script',title:'The First Gold Front Logos',period:'Early To Mid-1930s',paragraphs:["Gold script began appearing on Martin headstocks in 1932. The earliest versions have little or no dark outline around the letters. Outlined logos followed, and some guitars carry both a front logo and the older rear stamp.","Amber lacquer and wear can hide the border around gold letters. Use a clear close-up under neutral light; a dark listing thumbnail won’t reliably separate the early versions. Logo size alone won’t give you a factory-wide cutoff year."],points:['Photograph the complete headstock and a close view of the script.','Look closely at the letter edges to separate a dark outline from amber lacquer.','Check the rear stamp and serial before narrowing a transition date.'],photos:[p('1937-martin-0-17-3.jpg','1937 0-17: Outlined Gold Logo','Gold Martin logo with a dark outline on a 1937 Martin 0-17 headstock',"An example of a gold logo with a dark outline on a 1937 Martin 0-17.",drive1937)]},
      {id:'outlined-script',title:'Outlined Gold Script Across Decades',period:'Mid-1930s And Later',paragraphs:["Martin kept the familiar C. F. Martin & Co. script for decades. Outlined gold lettering remained in use across many years, so that design alone cannot separate one year from the next.","Check the headplate, tuner holes and finish around the lettering for repair work. A refinished headstock may have a replacement decal, and a worn original decal may have lost part of its outline."],photos:[p('1965-d28-logo.jpg','1965 D-28: Outlined Gold Logo','Gold C F Martin and Co script with a dark outline and EST. 1833 lettering on a 1965 Martin D-28 headstock',"Gold script with a dark outline on a 1965 Martin D-28. The border around the letters is clearly visible, with EST. 1833 below the script.",'https://drive.google.com/file/d/19WhgkYloyQcy-ca8M2TK6rgWLIP4WY5V/view')]},
      {id:'vertical-pearl',title:'Vertical Pearl Lettering',period:'Model-Specific, Not One Era',paragraphs:["Vertical C. F. MARTIN pearl lettering appears on selected models alongside the more familiar gold script. It has roots in Martin’s early 1930s archtops, and solid-headstock Style 45 guitars adopted it during the 1930s.","The 1976 000-45 below carries that older design on a later guitar. Torch and other decorative headstock inlays also return on recreations, so check the model and serial before dating one by its pearl work."],photos:[p('images/blog/1976-martin-000-45-specs-history-value-guide/1976-martin-000-45-vertical-cf-martin-pearl-headstock.jpg','1976 000-45: Vertical Pearl','Vertical C F Martin pearl lettering on a 1976 Martin 000-45 headstock','Individual pearl letters run down the headstock. This 1976 guitar is a later example of a design with prewar roots.',pearlStory,'Read This Guitar’s Guide')],link:{href:'/martin-guitar-dating-guide/#trim-and-inlays',label:'Compare Style 18, 28 And 45 Appointments'}},
      {id:'headstock-shape-and-volute',title:'Headstock Shape, Slot Ends And The Volute',paragraphs:[],photos:[p('1955-d28-volute.jpg','1955 D-28: Headstock Volute','Pointed wooden volute rising from the neck onto the lower back of a 1955 Martin D-28 headstock',"The volute is the raised, pointed dart at the lower center of the headstock, between the lowest pair of tuners. This rear view of a 1955 D-28 shows its ridge and sloping sides.",'https://drive.google.com/file/d/1q2Dih5HJej1mU2DDOJBM1DblCqDq7oLT/view')],link:{href:'/martin-tuner-dating-guide/#slotted-headstock-tuners',label:'Compare Slotted-Headstock Tuners'}},
      {id:'logo-exceptions',title:'Classical Models, Reissues And Repairs',paragraphs:["Some nylon-string G and C models have the decal on the back of the headstock. A blank front on those models doesn’t mean the same thing as a blank front on an early steel-string guitar.","Modern vintage-style Martins can combine older script, open gears and period-style trim. Match the serial to the exact model’s specifications. If the headstock has been refinished, repair records may explain a replacement logo."],link:{href:'/martin-neck-block-stamps/',label:'Read The Neck-Block Stamp Guide'}}
    ],faqs:[{q:'When Did Martin Start Using A Front Headstock Logo?',a:'Gold front logos began appearing in 1932. Early forms and rear headstock stamps overlap, so use the serial and model to resolve the transition.'},{q:'Does A Vertical Pearl Logo Mean A Martin Is Prewar?',a:"No. The photographed 1976 000-45 has vertical pearl lettering too. Use the model and serial number to date it."},{q:'Can A Martin Logo Give Me An Exact Year?',a:"Usually not. Martin used similar script for decades, and reissues and replacement decals repeat older designs. Start with the serial number."}],sources:[{label:'Robert Corwin: Photographed Martin Stamps And Logos',href:'https://www.vintagemartin.com/stamps.html'},{label:'Robert Corwin: Martin Headstock And Fingerboard Inlays',href:'https://vintagemartin.com/inlays.html'}]
  },
  {
    slug:'martin-tuner-dating-guide',shortTitle:'Tuner Evolution',title:'Martin Tuner Dating Guide: Grover, Kluson And Waverly',
    updated:{date:'2026-10-13',label:'October 13, 2026'},
    showCreditsAndReferences:false,
    description:"Identify Martin Grover, Kluson and Waverly tuners with dated photos of clipped-end plates, wartime gears, wafflebacks, Rotomatics and strip tuners.",
    intro:"Compare the plate shape, gears, screws and buttons on the back of the headstock, then check the bushings around the string posts on the front. Martin used overlapping tuner designs, and owners often replaced them. A tuner match needs to agree with the guitar’s model and serial.",
    cardImage:'1937-martin-0-17-9.jpg',cardAlt:'Original Grover clipped-end plates and gears with replacement buttons on Joe’s 1937 Martin 0-17',cardCaption:'Grover clipped-end tuners on Joe’s 1937 0-17. The baseplates and gears are original; the buttons have been replaced.',cardText:"Compare Grover, Kluson and Waverly plate shapes, gears, buttons and housings in dated photos from Joe’s archive.",
    sections:[
      {
        id:'slotted-headstock-tuners',title:'Slotted Headstocks And Side-Mounted Strip Tuners',period:'Early Guitars And Later 12-Fret Models',
        paragraphs:[
          "Strip tuners put several machines on one long plate. On a slotted headstock, the string posts cross the slots and the gears sit along the sides. A side photo shows the plate, worm shafts and mounting screws much better than a front view.",
          "The engraved strip on the 1860s 2½-17 shows this arrangement clearly. The 1947 00-21 shows why a slotted headstock doesn’t establish a prewar date: the 00-21 remained a 12-fret model after many other Martins changed to 14 frets."
        ],
        photos:[
          p('1860s-martin-2-and-a-half-17-strip-tuners.jpg','1860s 2½-17: Early Engraved Strip Tuners','Side of an 1860s Martin 2½-17 headstock showing three gears on an engraved strip plate',"Three machines share one long, engraved plate. The large cogs sit above the worm shafts in this side view. Compare the supports and screw positions with later strip tuners.",'https://drive.google.com/file/d/13wClWVo0JxDUugYxtUgCd-fRHi3hOzTb/view'),
          p('1947-martin-00-21-strip-tuners.jpg','1947 00-21: Strip Tuners On A 12-Fret Model','Slotted headstock of a 1947 Martin 00-21 with string posts across the slots and side-mounted strip tuners',"The 00-21 kept its 12-fret body joint when many other Martin models changed to 14 frets. This front view shows the posts crossing the slots and the buttons along the sides; the full strip plates are clearer from the side.",'https://drive.google.com/file/d/1LiSFU78irtRLJToVfiWeZdFgsqrMvNc-/view')
        ]
      },
      {
        id:'classical-and-twelve-string-tuners',title:'Classical And 12-String Strip Tuners',period:'Postwar Slotted-Headstock Examples',
        paragraphs:[
          "The size and number of string posts help separate these two sets. The 1955 00-18G has Waverly classical tuners with large aluminum posts. Those broad posts are visible inside the slots, even though this angle does not show the complete side plates.",
          "The 1969 12-string has six machines along each side of its slotted headstock, for twelve in all. Count the buttons and posts before comparing a strip set with a six-string guitar."
        ],
        photos:[
          p('1955-martin-00-18g-classical-tuners.jpg','1955 00-18G: Waverly Classical Tuners','Large aluminum string posts inside the slots of a 1955 Martin 00-18G headstock with Waverly classical tuners',"Waverly classical tuners on a 1955 00-18G. Notice the larger aluminum posts across the slots, a useful comparison with the slimmer steel-string posts on the 00-21.",'https://drive.google.com/file/d/1YwyP79HC9jQlnDUJMT68Il8NjucZi1CJ/view'),
          p('1969-martin-d12-35-strip-tuners.jpg','1969 Martin 12-String: Strip Tuners','Rear slotted headstock of a 1969 Martin 12-string with six tuning machines and white buttons on each side',"Six machines run along each side of this 1969 Martin 12-string headstock. The rear view shows all twelve buttons and the posts crossing the slots.",'https://drive.google.com/file/d/1FtP0TNMEmGiapyE5Mk9K9-saJDqd1hOR/view')
        ]
      },
      {
        id:'open-gear-tuners',title:'Grover Clipped-End Tuners And Replaced Buttons',period:'1930s Examples',
        paragraphs:[
          "Grover, Waverly and Kluson all supplied open gears to Martin. Compare the ends of the baseplate, gear supports, button shape and screw spacing to identify a set. An exposed gear by itself won’t tell you the maker.",
          "Clipped-end plates have short, flattened ends around the mounting screws. The two Grover sets below show that shape. The 1937 0-17 still has its original baseplates and gears, but its buttons have been replaced. A button change doesn’t mean the whole machine was changed.",
          "Early OM guitars used banjo-style planetary tuners before guitar gears for solid headstocks became established. Read the exact model and serial before assigning a tuner design to every OM or every guitar from one year."
        ],
        photos:[
          p('1934-martin-tuners.jpg','1934 OM-28: Grover Clipped-End Tuners','Grover open-gear tuners with clipped-end plates and scalloped metal buttons on the guitar identified by Joe as a 1934 Martin OM-28',"Grover clipped-end tuners on the 1934 OM-28. The plate ends flatten around the mounting screws, and the metal buttons have a scalloped outline. Compare the plates with the 1937 0-17 beside it.",'https://drive.google.com/file/d/1x7XjRaldbYNfToizW7WKWs25AldzyP0e/view'),
          p('1937-martin-0-17-9.jpg','1937 0-17: Grover Clipped-End Tuners','Original Grover clipped-end baseplates and gears with replacement buttons on Joe’s 1937 Martin 0-17',"These are Grover clipped-end tuners. The baseplates and gears are original to the 1937 0-17; the tuner buttons have been replaced. Use the plates and gears when comparing the original hardware.",drive1937)
        ]
      },
      {
        id:'pointed-end-grover-sta-tite',title:'Prewar And Postwar Grover Pointed-End Tuners',period:'1938 And 1966 Examples',
        paragraphs:[
          "The plate ends on these Grovers taper toward the mounting screws. That pointed outline appears on both the 1938 000-18 and the 1966 0-18, so plate shape alone can’t separate prewar from postwar production.",
          "Compare the oval metal buttons on the 1938 set with the scalloped buttons on the 1966 Sta-Tites. Look closely at the gear’s top surface and center screw too. Those details help distinguish sets that look similar in a small photo."
        ],
        photos:[
          p('1938-martin-000-18-tuners.jpg','1938 000-18: Grover Open Gears','Six Grover open-gear tuners with pointed-end plates and oval metal buttons on a 1938 Martin 000-18',"Grover open gears on a 1938 000-18. The pointed plate ends, exposed cogs and oval metal buttons are visible across the complete set.",'https://drive.google.com/file/d/1gaFSBIumLqcRvvN50OZPL6VnYMkD0H0l/view'),
          p('1966-martin-0-18-grover-sta-tite.jpg','1966 0-18: Grover Pointed-End Sta-Tites','Grover Sta-Tite open-gear tuners with pointed-end plates and scalloped metal buttons on a 1966 Martin 0-18',"Grover pointed-end Sta-Tites on a 1966 0-18. Compare the scalloped buttons and recessed gear screws with the earlier 000-18 set.",'https://drive.google.com/file/d/10CScfdUGeH0RCs605QQiWswMIj6XZzcN/view')
        ]
      },
      {
        id:'wartime-tuners',title:'Wartime Kluson Flat Plates And Postwar Octagonal Plates',period:'1945 And 1952 Examples',
        paragraphs:[
          "The 1945 000-21 has Kluson flat-plate tuners with exposed gears and plastic buttons. The 1952 00-18 has broader octagonal baseplates with angled corners and raised edges. Follow the complete plate outline around each gear to see the difference.",
          "Some wartime Martins lack metal bushings around the string posts, but these rear photos cannot establish whether bushings are present. Check a front view as well. Wartime hardware varied, and plastic buttons also appear on postwar guitars, including the 1955 0-15 below."
        ],
        photos:[
          p('1945-martin-000-21-kluson-flat-plates.jpg','1945 000-21: Kluson Flat-Plate Tuners','Kluson flat-plate open-gear tuners with cream plastic buttons on a 1945 Martin 000-21',"Kluson flat-plate tuners on a 1945 000-21. The exposed gears sit on individual flat plates, with cream-colored plastic buttons. A front photo is needed to check the post bushings.",'https://drive.google.com/file/d/1md6QQGY8grlXXw_P3qHAnqdFCnlaWzAA/view'),
          p('1952-martin-00-18-octagonal-tuners.jpg','1952 00-18: Octagonal Baseplates','Open-gear tuners with broad octagonal baseplates, angled corners and metal buttons on a 1952 Martin 00-18',"Octagonal baseplate tuners on a 1952 00-18. Look at the flat ends, angled corners and raised plate edges around the exposed gears. These are open gears, with no enclosing housing.",'https://drive.google.com/file/d/1IF9_PJOHOxNJdnSKyPTb6hYHZIteV6FC/view')
        ]
      },
      {
        id:'waverly-round-end-tuners',title:'Waverly Round-End Tuners With Metal And Plastic Buttons',period:'Two 1955 Martins',
        paragraphs:[
          "The rounded tabs around both mounting screws distinguish these Waverly plates from the clipped-end Grovers and broad octagonal plates. Both sets have exposed gears, but the buttons differ.",
          "The 1955 000-18 has metal buttons; the 1955 0-15 has plastic buttons. These same-year examples show why button material needs to be checked with the plate design and model. Plastic does not automatically mean wartime."
        ],
        photos:[
          p('1955-martin-000-18-waverly-tuners.jpg','1955 000-18: Waverly Round Ends','Waverly open-gear tuners with rounded baseplate ends and metal buttons on a 1955 Martin 000-18',"Postwar Waverly round-end tuners on a 1955 000-18. The narrow plates end in rounded mounting tabs, and this set has oval metal buttons.",'https://drive.google.com/file/d/1OIiAZo37fwCu8vQO3Tr8WIKfJ_xRJUpi/view'),
          p('1955-martin-0-15-plastic-button-tuners.jpg','1955 0-15: Waverlys With Plastic Buttons','Waverly round-end open-gear tuners with cream plastic buttons on a 1955 Martin 0-15',"Waverly round-end tuners with plastic buttons on a 1955 0-15. Compare the similar mounting tabs and different buttons with the 000-18 from the same year.",'https://drive.google.com/file/d/1KWl069h_G0bb-ydeR-kf6OQb7Kj851TH/view')
        ]
      },
      {
        id:'covered-tuners',title:'Kluson Deluxe And Waffleback Housings',period:'Postwar D-28 Examples',
        paragraphs:[
          "The 1947 D-28 has Kluson Deluxe covers with the name stamped along the housings. Compare those rectangular covers with the raised grid pattern of the Kluson wafflebacks. Both enclose the gears, but they are different tuner designs.",
          "Kluson wafflebacks are associated with Martin D-28s from about 1950 to 1957, before the late-1957 change to Grover Rotomatics. Don’t apply the D-28 sequence to every 0, 00 or 000 model."
        ],
        references:[
          {label:'Folkway: Original Wafflebacks On A 1950 D-28',href:'https://folkwaymusic.com/vintage-instruments/martin%20guitar/1950-martin-d28-0718'},
          {label:'Galerie Casanova: Kluson K-500 Wafflebacks On A 1957 D-28',href:'https://www.galerie-casanova.com/en/produit/1957-martin-000-18-copie/'}
        ],
        photos:[
          p('1947-martin-d-28-kluson-deluxe.jpg','1947 D-28: Kluson Deluxe Tuners','Six rectangular Kluson Deluxe gear covers with metal buttons on a 1947 Martin D-28',"Kluson Deluxe tuners on a 1947 D-28. The vertical KLUSON DELUXE lettering, oil holes and rectangular covers distinguish this set from the waffleback housings beside it.",'https://drive.google.com/file/d/1hPE0SlrxU42P6BIGRBZ7CNQSf3PWvBiK/view'),
          p('images/martin-serial/martin-kluson-waffle-back-tuners-scaled.jpg','Kluson Wafflebacks: D-28, About 1950 To 1957','Kluson waffleback tuner housings with a raised grid pattern on a Martin headstock',"Kluson waffleback tuners, used on Martin D-28s from about 1950 to 1957. The raised grid covers the gears. This is a hardware close-up; the individual guitar’s year is not established by the photo.")
        ]
      },
      {
        id:'grover-rotomatic-tuners',title:'Grover Rotomatics On Later Martins',period:'1965 D-28 And 1976 000-45',
        paragraphs:[
          "Grover Rotomatics have rounded enclosed housings and kidney-shaped buttons. The 1965 D-28 below retains its original Grovers. The housings, lower mounting tabs and patent-pending markings are visible in the rear view.",
          "The 1976 000-45 shows gold Grovers on a later pearl-trimmed model. Plating color alone won’t date the tuners. Compare the housing and mounting pattern with the model’s specifications and serial year."
        ],
        photos:[
          p('1965-martin-d-28-original-grovers.jpg','1965 D-28: Original Grover Rotomatics','Original Grover Rotomatic enclosed tuners with metal kidney-shaped buttons and patent-pending markings on a 1965 Martin D-28',"Original Grover Rotomatics on a 1965 D-28. The rounded housings carry patent-pending markings, and each machine has a lower mounting tab and a metal kidney-shaped button.",'https://drive.google.com/file/d/1--WYsUePmYHtTPH6Xnahl5J24zffwjqF/view'),
          p('images/blog/1976-martin-000-45-specs-history-value-guide/1976-martin-000-45-gold-grover-tuners.jpg','1976 000-45: Gold Grovers','Gold Grover tuners on a 1976 Martin 000-45',"Gold-plated Grovers on the 1976 000-45. Compare the housings and mounting screws with the D-28 set.",pearlStory,'Read This Guitar’s Guide')
        ]
      }
    ],
    faqs:[
      {q:'Can I Date A Martin By Its Tuners Alone?',a:'No. Martin used overlapping tuner families, and tuners are often replaced. Compare the serial, model, screw holes, plate shape and bushings together.'},
      {q:'Do Plastic Tuner Buttons Mean A Martin Is From World War II?',a:'No. Wartime Martins can have plastic buttons, but so can later guitars. The 1955 0-15 shown here has Waverly round-end tuners with plastic buttons. Check the complete tuner design and serial number.'},
      {q:'Which Martins Used Kluson Waffleback Tuners?',a:'Martin D-28s used Kluson wafflebacks from about 1950 to 1957, before the change to Grover Rotomatics. Other models followed different tuner schedules.'},
      {q:'Are Grover Rotomatics Original On Every Old Martin?',a:'No. The 1965 D-28 shown here has its original Grovers, but other models used different hardware. Compare the housings and mounting holes with the guitar’s model and serial date.'}
    ],
    sources:[{label:'Robert Corwin: Photographed 14-Fret Martin Tuner Comparisons',href:'https://vintagemartin.com/tuners.html'},{label:'Folkway: Original Kluson Wafflebacks On A 1950 D-28',href:'https://folkwaymusic.com/vintage-instruments/martin%20guitar/1950-martin-d28-0718'},{label:'Galerie Casanova: 1957 D-28 With Kluson Wafflebacks',href:'https://www.galerie-casanova.com/en/produit/1957-martin-000-18-copie/'}]
  },
  {
    slug:'martin-neck-block-stamps',shortTitle:'Neck-Block Stamps',title:'Martin Neck-Block Stamps: Models, Serials And Maker’s Marks',
    updated:{date:'2026-10-13',label:'October 13, 2026'},
    showCreditsAndReferences:false,
    description:"Martin neck-block stamps show the serial and, from about October 1930, the model. Compare dated photos, hand stamping and separate maker’s marks.",
    intro:"Look through the soundhole toward the neck joint. The serial is stamped on the thick wooden neck block, usually below the model name. Earlier guitars may have the serial alone.",
    cardImage:'1930-martin-0-21-5.jpg',cardText:"Serial-only blocks, model stamps and the 1967 hand-stamping change, plus maker’s marks found elsewhere inside the guitar.",
    sections:[
      {id:'find-the-neck-block',title:"Where To Find The Neck-Block Stamp",paragraphs:["Rest the guitar securely and aim a light through the soundhole toward the neck. Take a photo of the whole block, then a close-up with the light at an angle so you can read the stamped lines.","Copy the serial’s digits exactly. If a string hides one, move the camera slightly. Don’t scrape, wet or darken the stamp, and keep the model name separate from the number you enter in the lookup."],photos:[p('images/martin-serial/Model-Name-Serial-Number-Martin.jpg','Model Above Serial','Model and serial number impressed on a Martin guitar neck block',"The arrows label the model and serial on the neck block. Enter the serial’s digits in the lookup.")]},
      {id:'early-maker-and-serial-stamps',title:'Early Maker’s Stamps And Serial Numbers',period:'Maker’s Marks Before Routine Model Stamping',paragraphs:["An early neck block may carry C. F. Martin & Co. and Nazareth, PA above its serial. That wording identifies the maker; it is not the guitar’s model number.","Read the serial separately from the maker’s mark. For example, serial 11825 falls in the 1914 range of 11822 to 12047. The number identifies the year; the body size and appointments help identify a model that has no model stamp."],link:{href:'/martin-serial-and-model-numbers/#martin-chart-title',label:'Check The Martin Serial Number Chart'}},
      {id:'serial-only',title:'Serial-Only Neck Blocks',period:'Before The Model Stamp Became Routine In 1930',paragraphs:["Martin’s regular guitar serial sequence starts in 1898. An earlier guitar needs to be dated from its maker’s stamps, construction and ownership history.","Serial-only neck blocks appear by the late 1910s. Martin began routinely adding the model around October 1930, so an earlier guitar can have a serial with no model above it. The 1930 0-21 below is an example."],photos:[p('1930-martin-0-21-5.jpg','1930 0-21: Serial Only','Serial number on the neck block of a 1930 Martin 0-21 with no model stamp above it',"The block has a serial but no model stamp above it. The body size and trim identify this guitar as an 0-21.",drive1930)],link:{href:'/post/martin-0-00-000-history-authentication-value-guide/',label:'Identify Martin 0, 00 And 000 Body Sizes'}},
      {id:'model-and-serial',title:'Model And Serial On Separate Lines',period:'From About October 1930',paragraphs:["On many later vintage Martins, the model sits above the serial. In 000-18, 000 identifies the body-size family and 18 the style. D-28 uses D for dreadnought and 28 for the style; those model digits aren’t a year code.","Hand-applied stamps can vary in spacing and depth. Wood grain and the angle of the stamp affect the impression, so one uneven character doesn’t prove that the marking was altered."],photos:[p('images/blog/one-owner-1956-martin-000-21/1956-martin-000-21-neck-block-stamp.jpg','1956 000-21: Two Lines','000-21 model designation and serial number on Joe’s 1956 Martin neck block','Read 000-21 as the model. The serial beneath it belongs in the lookup.','/post/one-owner-1956-martin-000-21/','Read This Guitar’s Story'),p('1967-d28-neck-block.jpg','1967 D-28: Serial 224411','Martin D-28 model stamp above serial number 224411','224411 falls in the 1967 guitar range of 217216 to 230095. The number dates the guitar; D-28 identifies its model.',reverb1967,'Joe’s Reverb Listing')]},
      {id:'maker-stamps',title:"Maker’s Stamps On The Body And Headstock",paragraphs:["Earlier Martins can have maker’s stamps on the interior center strip, rear headstock and other locations. Photograph the wording and location of each mark along with the neck-block serial.","A New York stamp can refer to Martin’s distribution arrangement. It doesn’t necessarily mean the guitar was built before the company moved its workshop to Pennsylvania."],photos:[p('images/martin-serial/martin-back-of-body-logo-stamp.jpg','External Body Stamp','Martin maker’s name stamped near the neck heel on the outside back',"A maker’s stamp on the outside back near the neck heel. The serial is a separate marking inside the neck block.")]},
      {id:'made-in-usa',title:'Where “Made In U.S.A.” Appears',period:'1960s And Later Examples',paragraphs:["On this 1967 D-28, C. F. Martin & Co., Nazareth, PA and Made in U.S.A. appear on the interior backstrip. The model D-28 and serial 224411 are on the neck block at the other location shown in this guide.","The country mark isn’t part of the serial. Its wording and location can vary with model, export markings and production period, so this example doesn’t establish a factory-wide starting year."],photos:[p('1967-d28-backstrip.jpg','1967 D-28: Interior Backstrip','Martin Nazareth PA Made in USA maker’s stamp on the center backstrip',"The maker and country stamp runs along the inside back. Look toward the neck joint for the separate model and serial stamp.",reverb1967,'Joe’s Reverb Listing')]},
      {id:'unusual-stamps',title:'Unusual Fonts, Labels And Modern Construction',paragraphs:["Compare an unfamiliar font, label or neck joint with another guitar from the same series and period. A traditional dovetail model and an entry-level modern Martin can have different markings.","If the stamp doesn’t match the guitar, photograph the body, both sides of the headstock, neck heel, bridge and inside labels. Replaced necks, repair work or altered markings may explain the mismatch. The lookup only matches numbers to a chart; it can’t verify who built the instrument."],link:{href:'/how-to-spot-a-fake-martin/',label:'Compare The Martin Counterfeit Guide'}}
    ],faqs:[{q:'Why Does My Martin Have A Serial But No Model Stamp?',a:'Routine model stamping began around October 1930. Earlier guitars may have a serial without a model designation. Identify the body size and style from the instrument itself.'},{q:'Is Made In U.S.A. Part Of The Martin Serial Number?',a:'No. It is a country marking. On the photographed 1967 D-28 it appears on the interior backstrip, while the model and serial are on the neck block.'},{q:'Does D-28 Mean The Guitar Was Made In 1928?',a:'No. D identifies the dreadnought body-size family and 28 identifies the style. Use the separate serial number to find the production year.'}],sources:[{label:'Martin’s Official Serial Tables',href:'https://www.martinguitar.com/support-serial-number-lookup.html'},{label:'Robert Corwin: Photographed Serial And Model Stamp Transitions',href:'https://www.vintagemartin.com/stamps.html'},{label:'Joe’s 1967 D-28, Serial 224411',href:reverb1967}]
  },
  {
    slug:'martin-guitar-dating-guide',shortTitle:'Construction Features',title:'Martin Guitar Construction Features And Dating',
    description:"Compare Martin body joints, bridges, pickguards, woods, inlays and neck reinforcement with dated photos. Check each feature against the serial.",
    intro:"Match the model and neck-block serial to the guitar’s body joint, bridge, pickguard, woods and trim. These features help check the date, while repairs and later recreations can explain details from another period.",
    cardImage:'1937-martin-0-17-4.jpg',cardText:"Compare body joints, bridges, pickguards, woods, inlays and neck reinforcement using dated photographs.",
    sections:[
      {id:'neck-joint-and-frets',title:'12-Fret And 14-Fret Body Joints',paragraphs:["Count up to the fret where the neck meets the body, excluding the frets over the top. A 12-fret Martin’s body outline differs from its 14-fret counterpart, and it often has a slotted headstock.","Martin’s OM introduced the 14-fret body joint around 1929, while 12-fret models continued in production. The 1930 0-21 below still has a 12-fret joint. Bar frets and T-shaped frets provide another clue, although a refret can change the fret type."],photos:[p('1930-martin-0-21-2.jpg','1930 0-21: 12-Fret Body','Full front of a 1930 Martin 0-21 showing the neck meeting the body at the twelfth fret',"The neck meets the body at the twelfth fret. The slotted headstock is visible in the same photo.",drive1930),p('1937-martin-0-17-2.jpg','1937 0-17: 14-Fret Body','Full front of Joe’s 1937 Martin 0-17 showing a 14-fret body joint and solid headstock',"The neck meets the body at the fourteenth fret. Compare the joint and solid headstock with the 12-fret 0-21 beside it.",drive1937)]},
      {id:'bridges-and-saddles',title:'Rectangular And Belly Bridges',period:'Model-Specific Changes Around 1930',paragraphs:["A rectangular bridge has a straight outline across its front and back. A belly bridge adds a rounded extension behind the pins. Pyramid bridges have raised ends. Martin introduced belly bridges around 1930, but the change did not reach every model at once.","The 1937 0-17 below has a rectangular bridge, while the 1930 0-21 has a belly bridge. Compare the visible outlines rather than treating either shape as a cutoff year.","A long saddle extends toward or through the ends of the bridge’s raised center. A short drop-in saddle sits within it. Check for a replacement bridge before using either shape to date the guitar, because repairs and later vintage-style models can repeat older designs."],photos:[p('1937-martin-0-17-4.jpg','1937 0-17: Rectangular Bridge','Rectangular bridge with straight front and back edges on Joe’s 1937 Martin 0-17','The close view shows the complete rectangular outline. There is no rounded belly behind the bridge pins.',drive1937),p('1930-martin-0-21-7.jpg','1930 0-21: Belly Bridge','Belly bridge with a curved extension behind the pins on Joe’s 1930 Martin 0-21','The rounded wood behind the pins identifies the belly shape. Compare it with the straight back edge of the 0-17 bridge.',drive1930)]},
      {id:'pickguards',title:'Pickguard Shape, Material And Repair Evidence',paragraphs:["Check the pickguard’s outline, its fit around the soundhole and the pattern in the material. Tortoise-pattern and plain black guards appear in different periods, but replacements and reissues can copy either type.","A finish outline or exposed footprint around the edge can show where another guard sat. Check for cracks beside it too, and leave the guard in place. The 1953 D-18 below shows a tortoise-pattern guard and the surrounding spruce top."],photos:[p('images/blog/martin-d18-history-value-guide/1953-martin-d18-pickguard.jpg','1953 D-18: Tortoise-Pattern Guard','Tortoise-pattern pickguard beside the soundhole on Joe’s 1953 Martin D-18',"The complete guard outline is visible beside the soundhole. Compare its shape, mottled pattern and fit around the rosette.",'/post/martin-d18-history-specs-authentication-value-guide/','Read The D-18 Guide')]},
      {id:'trim-and-inlays',title:'Binding, Purfling And Fingerboard Inlays',paragraphs:["Binding covers the body edge; purfling is the decorative border beside it. Style 28 herringbone, Style 18’s plainer trim and Style 45 pearl work help identify the model family. Those patterns also appear on later guitars.","The photographed 1976 000-45 has pearl top borders and a decorated headstock. Modern HD-28s have herringbone and scalloped braces too. Read the full model name before comparing either guitar with a prewar Martin."],photos:[p('images/blog/1976-martin-000-45-specs-history-value-guide/1976-martin-000-45-spruce-top-abalone-trim.jpg','1976 000-45: Pearl Top Border','Pearl purfling around the spruce top of a 1976 Martin 000-45',"The pearl border sits just inside the binding on this 1976 000-45.",pearlStory,'Read This Guitar’s Guide')],link:{href:'/martin-headstock-logo-dating-guide/#vertical-pearl',label:'Compare The Vertical Pearl Headstock Logo'}},
      {id:'tonewoods',title:'Brazilian Rosewood, Indian Rosewood And Mahogany',period:'The 1969 Standard-Production Rosewood Transition',paragraphs:["Martin stopped using Brazilian rosewood for complete back-and-side sets in standard production in 1969. That change concerns rosewood models. The D-18’s mahogany back is a separate specification.","Color and grain alone won’t identify the wood species. Lighting and finish can change how a back looks, and grain varies within a species. Check the model and records for special orders, limited editions or replaced backs. Spruce grain width won’t give you a reliable species or year either."],photos:[p('1930-martin-0-21-8.jpg','1930 0-21: Brazilian Rosewood','Brazilian rosewood back with center strip on Joe’s 1930 Martin 0-21',"Brazilian rosewood back on the 1930 0-21. Compare its dark grain and center strip with the Indian rosewood and mahogany examples.",drive1930),p('images/blog/1976-martin-000-45-specs-history-value-guide/1976-martin-000-45-indian-rosewood-back.jpg','1976 000-45: Indian Rosewood','Indian rosewood back on Joe’s 1976 Martin 000-45',"Indian rosewood back on the 1976 000-45. Compare it with the 0-21’s Brazilian rosewood, allowing for lighting and finish differences.",pearlStory,'Read This Guitar’s Guide'),p('1937-martin-0-17-7.jpg','1937 0-17: Mahogany Back','Mahogany back of Joe’s 1937 Martin 0-17 photographed in its case','The 1937 0-17 has a mahogany back. This close view shows its grain across both halves of the body for comparison with the rosewood backs.',drive1937)]},
      {id:'bracing-and-bridge-plates',title:"Scalloped Bracing, Tapered Bracing And Bridge Plates",paragraphs:["You need an interior view to check the braces. Scalloped braces have scooped sections, while tapered braces lose height toward their ends. Measure brace position separately from brace shape.","The bridge plate sits against the underside of the top beneath the bridge. A repair or replacement may change its wood or footprint. Use an inspection mirror or a technician’s photos to compare the plate and braces with the same model and era."],points:['Photograph the complete X-brace area, including the crossing and brace profiles.','Include the bridge plate, pin holes and surrounding top.','Ask whether braces were shaved or the plate was repaired.',"Record any areas the photographs don’t show."],link:{href:'/post/how-to-tell-if-your-acoustic-guitar-needs-a-neck-reset/',label:'Read About Neck Angle And Repair Assessment'}}
    ],faqs:[{q:'Does Herringbone Mean A Martin Is Prewar?',a:'No. Herringbone appears on later models and recreations, including the HD-28. Read the model name and serial before comparing the trim with a prewar guitar.'},{q:'Can A Photo Prove That A Martin Has Brazilian Rosewood?',a:"A photo shows grain and color, but those clues won’t reliably identify the species. Check the model, serial and ownership records, and have the wood examined when its identity is in doubt."},{q:'Can I Identify Scalloped Bracing From The Outside?',a:"No. You need an interior view that shows the brace profiles. The top’s appearance or the guitar’s sound won’t confirm their shape."}],sources:[{label:'Martin: Rosewood And Model Questions',href:'https://www.martinguitar.com/faqs.html'},{label:'Robert Corwin: Photographed Martin Bridge Comparisons',href:'https://vintagemartin.com/bridges.html'},{label:'Martin: Current HD-28 Construction Specifications',href:'https://www.martinguitar.com/guitars/standard-series/HD-28.html'},{label:'Martin: HD-28 Introduction In 1976',href:'https://www.martinguitar.com/news-070226-martin-guitar-introduces-the-HD-28-semiquincentennial.html'}]
  }
];

// The additional comparisons separate broad historical transitions from the
// narrower claim that an individual photo shows a particular installed part.
const stampSection = martinGuides[2].sections.find(s => s.id === 'model-and-serial')!;
stampSection.paragraphs.push("The recorded 1967 change to machine stamping lists 220467 as the last hand-stamped model and serial. The D-28 below, serial 224411, comes after that change. Compare its lettering with the earlier 000-21, but allow for differences in stamp pressure, wood grain and repairs. The typeface helps check the serial date; it isn’t a date code of its own.");
martinGuides[2].sources.push({label:'Vintage Guitars Info: Recorded Martin Production Changes',href:'https://www.guitarhq.com/martin.html'});
const trimSection = martinGuides[3].sections.find(s => s.id === 'trim-and-inlays')!;
trimSection.paragraphs.push("The 1937 0-17 has round fingerboard dots, while the 1976 000-45 has large hexagonal pearl markers. Record the shape and fret positions. Dots, diamonds, snowflakes and hexagons vary with the style and period, so more pearl doesn’t mean an older guitar.");
trimSection.photos!.push(
  p('1937-martin-0-17-6.jpg','1937 0-17: Round Dot Markers','Close view of round fingerboard dots on Joe’s 1937 Martin 0-17','The close view clearly shows paired round dots and a single dot farther down the fingerboard. Compare their shape with the large hexagons on the 000-45.',drive1937),
  p('images/blog/1976-martin-000-45-specs-history-value-guide/1976-martin-000-45-full-front.jpg','1976 000-45: Hexagonal Pearl','Full front of a 1976 Martin 000-45 showing large hexagonal fingerboard markers',"Enlarge the photo to see the six-sided markers along the fingerboard of the 1976 000-45.",pearlStory,'Read This Guitar’s Guide')
);
martinGuides[3].sources.push({label:'Vintage Guitars Info: Bracing And Construction Transitions',href:'https://www.guitarhq.com/martin.html'});

export const martinTunerTimeline = [
  ['1800s And Later', 'Side-mounted strip tuners', 'Engraving, gear position and shared plates; shown on an 1860s 2½-17.'],
  ['Early 1930s', 'Grover planetary gears on early OMs', 'Banjo-style mechanism; check the specific model and year.'],
  ['1930s', 'Clipped-end Grovers', 'Plate bevels, gear details and button seams; the pictured 1937 set has replacement buttons.'],
  ['1936 To 1941', 'Pointed-end Grover G-93 / G-98', 'Earlier and later versions differ; compare the photographed 1938 000-18.'],
  ['1939 To 1942', 'Enclosed Grover G-111 on D-28', 'Enclosed gears predate Rotomatics.'],
  ['Wartime 1940s', 'Waverly and Kluson open gears', 'The 1945 000-21 shows Kluson flat plates and plastic buttons.'],
  ['Postwar 1940s', 'Kluson Deluxe covered gears', 'The 1947 D-28 shows rectangular covers with vertical lettering.'],
  ['About 1950 To 1957', 'Kluson wafflebacks on D-28', 'Raised grid pattern on enclosed housings; other models followed different schedules.'],
  ['Early 1950s', 'Wide open-gear baseplates', 'The 1952 00-18 shows octagonal plates with angled corners and raised edges.'],
  ['1950s', 'Round-end Waverly open gears', '1955 examples show both metal and plastic buttons.'],
  ['1950s And 1960s', 'Postwar Grover pointed-end Sta-Tites', 'Compare the 1966 0-18 with the prewar pointed-end set.'],
  ['Late 1957 Onward', 'Grover Rotomatic', 'Common on 1960s D-28 and D-35; the 1965 D-28 shown here retains its original set.'],
  ['Later Slotted-Headstock Models', 'Classical and 12-string strip tuners', 'Compare large aluminum posts on the 1955 00-18G and twelve machines on the 1969 12-string.'],
  ['Later Production', 'Open and enclosed designs coexist', 'Check model specifications and replacement footprints.'],
];

export const martinFeatureTimeline = [
  ['Around 1929', 'The OM brings the 14-fret body joint.', '12-fret instruments continue alongside it.'],
  ['Around 1930', 'Belly bridges appear; model stamps become routine late in the year.', 'Rectangular bridges and serial-only blocks overlap the transition.'],
  ['Late 1934', 'T-frets replace bar frets on many standard models.', 'Some Hawaiian models retain bar frets; later refrets can change the evidence.'],
  ['1938', 'Dreadnought X-bracing moves farther from the soundhole.', 'Compare brace position separately from scalloping; small-body changes followed different schedules.'],
  ['1939', 'Many 14-fret necks narrow from 1 3/4 inches to 1 11/16 inches at the nut.', '12-fret models and later recreations need their own specifications.'],
  ['Late 1944 To Late 1940s', 'Scalloped bracing gives way to tapered, then straighter profiles.', 'Inspect the interior; altered braces cannot date themselves.'],
  ['1946 To Early 1947', '1946 is the last full year of the original Style 28 herringbone trim; some early 1947 guitars retain it.', 'Later HD and vintage-style models revive herringbone.'],
  ['Mid-1960s', 'Shorter drop-in saddles become a useful comparison on standard models.', 'A replacement bridge can change the saddle arrangement.'],
  ['1967', 'Black guards become common after tortoise-pattern guards.', 'Model exceptions and replacement guards need separate checking.'],
  ['1967', 'Square steel tubes replace T-bars in regular neck construction.', 'These are hidden, nonadjustable reinforcements; a soundhole photo cannot identify the cross-section.'],
  ['1969', 'Standard rosewood back-and-side sets change from Brazilian to Indian rosewood.', 'This is not a change for mahogany models or every later special order.'],
  ['1976', 'The HD-28 revives herringbone and scalloped bracing.', 'Those features no longer identify an early original by themselves.'],
  ['1985', 'Martin introduces a one-way adjustable truss rod.', 'Access is through the soundhole; some historical recreations use nonadjustable reinforcement.'],
];

// Requested expansion: keep dating evidence distinct from model identification,
// and never assign an unseen internal feature from a front or headstock photo.
const construction = martinGuides[3];
construction.sections.push({
  id:'neck-reinforcement',title:'Ebony Bars, Steel T-Bars, Square Tubes And Truss Rods',
  paragraphs:[
    'Martin replaced earlier ebony reinforcement with a steel T-bar in late 1934. Wartime metal shortages brought ebony back on many guitars; steel returned after the war. Regular production moved to a square steel tube in 1967 and an adjustable rod in 1985. Model exceptions matter, especially on 12-fret guitars and later recreations.',
    'The ebony bar, T-bar and square tube are hidden inside the neck. Their shape is not visible in a normal soundhole or headstock photo. An adjustable rod’s access is inside the soundhole toward the neck. Martin’s two-way rod, introduced in 2006, is recessed farther inside.',
    'Use the serial, exact model and repair records to narrow the reinforcement type. A headstock truss-rod cover is not the normal access point on these Martins, and its absence cannot separate an ebony bar from a steel T-bar.',
  ],link:{href:'https://www.martin-gitarren.de/files/downloads/martinstory.pdf',label:'Read Martin’s Neck-Reinforcement History On Page 12'},
});
construction.sections.push({
  id:'finish-endpin-and-case',title:'Finish, Sunburst, Endpins And Case Records',
  paragraphs:[
    'Photograph the finish in daylight, including the neck heel, bridge edges, headstock and worn areas. An uneven color boundary or finish over old wear deserves a closer look. Sunburst color and amber lacquer alone do not give a year; later guitars and refinishes can copy an older appearance.',
    'At the tail, photograph the endpin and the wood around it. An endpin jack may record a pickup installation, while an oversized hole or adapter can show earlier work. Endpins are replaceable, so their color or material cannot date the body.',
    'Keep the case, receipts, warranty papers, repair invoices and old photographs together. Match any written model and serial to the guitar. A case can support its ownership story, but a case bought later does not change the guitar’s production date.',
  ],photos:[p('images/blog/one-owner-1956-martin-000-21/1956-martin-000-21-case.jpg','1956 000-21: Accompanying Case','Brown hardshell case photographed with Joe’s one-owner 1956 Martin 000-21','This case was photographed with the family’s 1956 000-21. Its appearance alone does not establish its maker, date or whether it was sold with the guitar new.','/post/one-owner-1956-martin-000-21/','Read This Guitar’s Ownership Story')],
  link:{href:'/post/one-owner-1955-martin-d28/',label:'See The Ownership Records For A 1955 D-28'},
});
construction.sources.push(
  {label:'Martin: The Original 1933 To 1942 D-45 Run',href:'https://www.martinguitar.com/blog-categories/from-the-factory/blog-072325-the-holy-grail-of-martin-guitars-a-closer-look-at-the-pre-war-d-45.html'},
  {label:'The Martin Story: Construction And Neck Reinforcement, Page 12',href:'https://www.martin-gitarren.de/files/downloads/martinstory.pdf'},
  {label:'Smithsonian 1971 Festival Program: Hidden Neck Reinforcement, Page 58',href:'https://repository.si.edu/bitstreams/cdcf23c5-3ba7-45c1-b1ca-99dfdcbe4c9b/download'},
);
construction.sections.find(s=>s.id==='finish-endpin-and-case')!.photos!.push(
  p('images/martin-serial/2003-martin-d-35-sunburst-683x1024.jpg','Sunburst Finish In Joe’s Archive','Sunburst Martin guitar with a light amber center and dark brown top edges in Joe’s shop','Compare the light center with the darker edge of the top. This photograph shows the color pattern; it does not establish a factory finish date or rule out refinishing.'),
);
construction.faqs.unshift(
  {q:'How Old Is My Martin Guitar?',a:'Look up the serial on the neck block, then compare the model’s construction with that year. A replaced bridge, tuner set or pickguard may be newer than the guitar. Earlier instruments without a regular serial need a review of their stamps, measurements and construction.'},
  {q:'Can A Soundhole Photo Identify An Ebony Or Steel Neck Bar?',a:'No. Those nonadjustable reinforcements are hidden inside the neck. A soundhole view may show adjustable-rod access, but it cannot show the cross-section of an ebony bar, T-bar or square tube.'},
);
martinGuides[0].faqs.push(
  {q:'Does A Missing Front Logo Mean My Martin Is Fake?',a:'No. Early guitars can have a blank headstock face, and some nylon-string models place the decal on the back. Compare the model, serial, interior maker’s marks and both sides of the headstock.'},
  {q:'How Can I Check A Replaced Martin Logo?',a:'Photograph the letter edges and the surrounding finish in neutral light. Check for refinishing or repair records, then compare a dated example of the same model. A replacement decal does not by itself identify the guitar’s maker.'},
);
martinGuides[1].faqs.push(
  {q:'How Can I Tell Whether Martin Tuners Were Replaced?',a:'Look for unused screw holes, old plate outlines, mismatched wear and enlarged washers. Photograph both sides of the headstock. Some replacements reuse the original holes, so a clean fit does not prove originality.'},
  {q:'Do Plastic Tuner Buttons Date A Martin To The War Years?',a:'They can support a wartime date when the plates, bushings, model and serial agree. Buttons can also be replaced. Compare the complete set instead of dating a guitar from button material alone.'},
  {q:'Are Open-Gear Tuners Always Older Than Enclosed Tuners?',a:'No. Open and enclosed designs overlapped, and later Martins use open gears too. Identify the hardware family and check its mounting evidence against the guitar’s serial date.'},
);
martinGuides[2].faqs.push(
  {q:'Can A Martin Serial Number Tell Me Which Model I Have?',a:'The regular serial sequence gives a year, not a model code. Read the separate model stamp above it. If that stamp is missing, body measurements, trim and factory records may identify the model.'},
  {q:'How Can I Tell If A Martin Serial Number Is Fake?',a:'A valid number can be copied. Compare the stamp’s location and lettering with the full guitar, including its model, construction, logo and hardware. One uneven character is not enough to call it counterfeit.'},
  {q:'What If My Martin Neck Block Says CUSTOM?',a:'Photograph the full stamp and serial, and keep the original specification sheet if available. CUSTOM does not identify one standard body-and-style combination; the individual build records matter.'},
);
stampSection.link = {href:'/martin-guitar-model-numbers/',label:'Decode Martin Body Sizes And Style Numbers'};
martinGuides.push({
  slug:'martin-guitar-model-numbers',shortTitle:'Model Numbers',title:'Martin Guitar Model Numbers: Body Sizes And Styles',
  description:'Decode Martin model stamps from 0-18 and 000-21 to D-28 and 000-45. Compare body sizes, style numbers, trim and dated photos.',
  intro:'A traditional Martin model name combines body size with style. D-28 means a dreadnought in Style 28; 000-18 means an Auditorium body in Style 18. The separate serial number gives the year. Read both lines before comparing guitars.',
  cardImage:'images/blog/one-owner-1956-martin-000-21/1956-martin-000-21-neck-block-stamp.jpg',cardText:'Read the body-size and style codes in a model stamp, with an interactive decoder, comparison tables and dated examples.',
  sections:[
    {id:'model-stamp-examples',title:'Model Numbers On Real Martin Guitars',paragraphs:['The model is stamped above the serial on these examples. Copy each line separately: 000-21 is a model, while 224411 is a serial. A serial lookup cannot turn one into the other.'],photos:[stampSection.photos![0],stampSection.photos![1]],link:{href:'/martin-neck-block-stamps/',label:'Compare Model Stamps And Serial-Only Neck Blocks'}},
    {id:'style-photos',title:'Compare Style 17, 21 And 45 Details',paragraphs:['Use dated photographs to compare the appointments. The 0-17’s dots and the 000-45’s pearl work show different styles, not a simple progression from old to new. The model’s year still controls which details belong.'],photos:[{...trimSection.photos![1],caption:'Round fingerboard dots are clearly visible on this 1937 0-17. Compare these plain appointments with the pearl body border on the 1976 000-45 below.'},p('images/blog/one-owner-1956-martin-000-21/1956-martin-000-21-bridge-pickguard.jpg','1956 000-21: Style 21 Detail','Belly bridge, spruce top and soundhole trim on a 1956 Martin 000-21','This 000-21 pairs rosewood construction with restrained decoration. Read the neck-block stamp above before using trim alone to identify a style.','/post/one-owner-1956-martin-000-21/','Read This Guitar’s Story'),trimSection.photos![0]],link:{href:'/martin-guitar-dating-guide/#trim-and-inlays',label:'Compare Binding, Purfling And Fingerboard Inlays'}},
    {id:'suffixes-and-special-models',title:'Model Suffixes, CUSTOM Stamps And Reissues',paragraphs:['Keep the complete designation, including letters after the style number. E often indicates electronics, but a vintage D-18E and a later acoustic-electric Martin need different specifications. HD-28 adds herringbone to the dreadnought designation.','A CUSTOM stamp needs the build sheet or factory records. X, LX, Junior, artist editions and other modern names do not all follow the vintage body-and-style system. A year printed in a recreation’s model name describes its historical target, not necessarily the year the guitar was built.'],link:{href:'/post/martin-d18e-vs-d28e-authentication-guide/',label:'Compare The Original D-18E And D-28E'}},
  ],faqs:[
    {q:'What Model Is My Martin Guitar From Its Serial Number?',a:'The regular serial sequence identifies a production year, not a model. Read the separate model designation on the neck block. If it is absent or says CUSTOM, use measurements, photographs and factory records.'},
    {q:'What Does 000-18 Mean?',a:'000 identifies the Auditorium body-size family and 18 identifies the style. It is not a 1918 date code. The separate serial number supplies the year.'},
    {q:'Are The Characters In 0, 00 And 000 Zeros Or Letters?',a:'They are zeros. OM is a separate letter designation for Orchestra Model. Copy the stamp carefully when looking up specifications.'},
    {q:'Does A Higher Martin Style Number Mean An Older Guitar?',a:'No. Style numbers describe appointments and model families. A higher number does not give the year, condition or value.'},
    {q:'Can I Use One Specification For Every Year Of A Martin Model?',a:'No. Woods, trim, neck dimensions and construction changed while some model names stayed in use. Match the full model name to the serial-number year before comparing specifications.'},
  ],sources:[
    {label:'Martin: Model Designations And Serial Locations',href:'https://www.martinguitar.com/faqs.html'},
    {label:'Robert Corwin: Styles 15, 17 And 18',href:'https://www.vintagemartin.com/styles15_17_18.html'},
    {label:'Martin: D-41 Appointments',href:'https://www.martinguitar.com/guitars/standard-series/D-41.html'},
    {label:'Martin: D-42 Appointments',href:'https://www.martinguitar.com/guitars/standard-series/D-42.html'},
    {label:'Joe’s Photographed 1956 000-21',href:'/post/one-owner-1956-martin-000-21/'},
    {label:'Joe’s Photographed 1976 000-45',href:pearlStory},
  ],
});

// Joe requested separate construction and prewar spokes on October 6, 2026.
// Keep the old construction fragments as entry points to the new bracing guide.
construction.sections = construction.sections.map(section => section.id === 'bracing-and-bridge-plates' ? {
  id:'bracing-and-bridge-plates', anchorIds:['prewar-martin','x-brace-position-and-neck-width'],
  title:'Bracing And Internal Inspection',
  paragraphs:[
    'The braces support the top, and the bridge plate sits beneath the bridge pins. Exterior photographs cannot show the brace profiles, plate repairs or X-brace position. Use an inspection mirror or a repairer’s interior photographs.',
    'For a prewar or wartime Martin, compare the brace layout with the exact model and year. The separate prewar guide covers forward and rearward X-bracing, scalloped and tapered profiles, bridge plates and the 1939 neck changes.',
  ],link:{href:'/prewar-martin-guitar-guide/',label:'Open The Prewar Martin Bracing And Identification Guide'},
} : section);

export const prewarMartinGuide: MartinGuide = {
  slug:'prewar-martin-guitar-guide', shortTitle:'Prewar Martins',
  title:'Prewar Martin Guitar Guide: Bracing And Identification',
  published:'2026-10-06',
  description:'Identify prewar Martin guitars by X-brace position, scalloping, bridge plates, neck width and reinforcement. Compare dated photos and repair evidence.',
  intro:'Date a claimed prewar Martin from its serial and model, then check the construction inside and outside the guitar. Brace position, brace carving, neck dimensions and repairs can distinguish instruments that share the same model name.',
  cardImage:'1937-martin-0-17-1.jpg',
  cardAlt:'Front body, bridge and pickguard of Joe’s 1937 Martin 0-17 in its case',
  cardCaption:'The body, bridge and pickguard on Joe’s 1937 0-17, photographed in its case.',
  cardText:'Identify prewar and wartime Martins through X-bracing, scalloped profiles, bridge plates, neck changes and repair history.',
  sections:[
    {id:'prewar-martin',title:'What Prewar Means For A Martin Guitar',paragraphs:[
      'Collectors commonly use prewar for 1930s Martins and sometimes include wartime examples made before the late-1944 change away from scalloped braces. Record the actual production year. The label does not describe one fixed set of specifications.',
      'Separate the body family from the period. A small-body 0-17, an OM and a dreadnought need their own construction comparisons. A slotted headstock or a 12-fret joint can also appear on later guitars.',
      'The 1937 0-17 below is a small-body example with a mahogany top, back and sides. Its 14-fret body joint and solid headstock are visible here. The front view doesn’t reveal its internal bracing.',
    ],photos:[p('1937-martin-0-17-2.jpg','1937 0-17: Prewar Small-Body Martin','Full front of Joe’s 1937 Martin 0-17 with a mahogany top and 14-fret body joint','This 1937 0-17 shows the body joint, solid headstock and rectangular bridge. Inspect the interior separately to establish the brace layout.',drive1937)],link:{href:'/martin-guitar-model-numbers/',label:'Identify The Body Size And Style Number'}},
    {id:'x-brace-position-and-neck-width',title:'Forward And Rearward X-Brace Position',paragraphs:[
      'The main top braces cross below the soundhole. Forward and rearward describe where that crossing sits. Scalloped describes the carved profile of a brace. Record position and profile separately.',
      'Martin moved the dreadnought X-brace crossing farther from the soundhole during 1938. A rear-braced late-1930s D-18 or D-28 can still have scalloped braces. Small-body and 12-fret models need their own chronology.',
      'To document the position, photograph the soundhole edge and complete X crossing with a ruler in the same plane. Record the measurement and the points used. An isolated photograph of a tone bar cannot establish where the X crosses.',
    ],link:{href:'https://www.guitarhq.com/martin.html',label:'See Dated 1938 And 1939 Dreadnought Examples'}},
    {id:'bracing-and-bridge-plates',title:'Scalloped Braces And The Postwar Transition',paragraphs:[
      'Scalloped braces have scooped sections between higher areas. Tapered braces reduce in height toward their ends. Follow the whole visible profile; a dark patch or a camera angle can hide the carving.',
      'Regular vintage flat-tops began changing from scalloped to tapered braces in late 1944. Tapered profiles gradually became straighter through the late 1940s. A 1946 herringbone D-28 therefore belongs to a different bracing period from a 1930s example.',
      'When comparing two guitars, inspect the same parts of their brace layouts. A close-up of a lower tone bar cannot establish the X-brace position. Photograph the complete crossing separately, with a measurement scale.',
      'Later brace shaving can change the profile. Compare repair records with the wood itself before treating visible scalloping as factory work.',
    ],link:{href:'https://www.martin-gitarren.de/files/downloads/martinstory.pdf',label:'Read Martin’s Bracing History On Page 12'}},
    {id:'bridge-plate-inspection',title:'Bridge Plates, Pin Holes And Repairs',paragraphs:[
      'The bridge plate lies against the underside of the top, below the bridge. Photograph its outline, the pin holes, string ball ends and the surrounding wood. Keep the full plate in view so its size and any added patches can be compared.',
      'Ask whether the plate was replaced, capped or repaired and whether nearby braces were reglued or shaved. An added patch can hide the original plate surface. A photograph alone may not establish the wood species or the history of every glue joint.',
    ],link:{href:'/post/how-to-tell-if-your-acoustic-guitar-needs-a-neck-reset/',label:'Compare Neck Angle And Other Structural Repairs'}},
    {id:'prewar-necks-and-frets',title:'Nut Width, Body Joints And Frets',paragraphs:[
      'Many 14-fret necks narrowed from 1 3/4 inches to 1 11/16 inches at the nut during 1939. Measure across the fingerboard at the nut, rather than between the outer strings. The 1938 brace shift and 1939 neck change are separate events.',
      'Check the fret where the neck meets the body before comparing dimensions. Neck width, neck profile and string spacing describe different measurements. A replacement nut may change string spacing without changing the fingerboard width.',
      'Martin changed from bar frets to T-frets on many models during 1934. Refretting can alter that evidence. The photographed 0-17 below clearly shows its round markers and visible fret crowns; this view alone does not establish the shape of the metal hidden in each fret slot.',
    ],photos:[{...trimSection.photos![1],caption:'Round fingerboard dots and fret crowns on Joe’s 1937 0-17. The hidden part of a fret cannot be identified from this top view.'}],link:{href:'https://vintagemartin.com/necks.html',label:'Compare Corwin’s Neck And Fret Examples'}},
    {id:'prewar-neck-reinforcement',title:'Ebony Reinforcement And Steel T-Bars',paragraphs:[
      'Martin introduced steel T-bar neck reinforcement with the move to T-frets in 1934. Wartime shortages brought ebony reinforcement back on many guitars, followed by a postwar return to steel. The serial and model help narrow which system to expect.',
      'These bars are hidden inside the neck and are not adjustable truss rods. A soundhole photograph does not reveal their cross-section. Ask for repair documentation rather than assigning a bar type from an exterior view.',
    ],link:{href:'/martin-guitar-dating-guide/#neck-reinforcement',label:'Compare Later Square Tubes And Adjustable Rods'}},
    {id:'prewar-woods-and-trim',title:'Model Woods, Herringbone And Pearl Trim',paragraphs:[
      'Prewar D-18s have mahogany backs and sides with plainer Style 18 appointments. D-28s use Brazilian rosewood and herringbone top trim. The original D-45 run, made from 1933 to 1942, adds extensive pearl decoration. Confirm the style from the guitar and records before comparing value.',
      'Herringbone outlasted the change away from scalloped bracing. It also returned on later models, including the HD-28. Pearl, herringbone and a historic model name are not enough to establish a prewar production date.',
      'The 1930 0-21 below has Brazilian rosewood, as identified in Joe’s archive. Wood identification needs the model and history as well as grain; finish and lighting can change its appearance.',
    ],photos:[{...construction.sections.find(section=>section.id==='tonewoods')!.photos![0],caption:'Brazilian rosewood on Joe’s 1930 0-21. The dark grain and center strip are visible across the back.'}],link:{href:'/martin-guitar-dating-guide/#tonewoods',label:'Compare Brazilian Rosewood, Indian Rosewood And Mahogany'}},
    {id:'prewar-bridges-and-repairs',title:'Bridge Shape, Original Parts And Repair History',paragraphs:[
      'A bridge’s outline and saddle arrangement are separate details. The rectangular bridge on this 1937 0-17 differs from the belly bridge on Joe’s 1930 0-21. Match the exact model rather than treating every rectangular bridge as older than every belly bridge.',
      'Check for an enlarged bridge footprint, altered saddle slot, repaired top and documented bridge replacement. Record neck resets, refrets and finish work separately. A repaired prewar guitar retains its production year, but its installed parts may be much newer.',
    ],photos:[construction.sections.find(section=>section.id==='bridges-and-saddles')!.photos![0]],link:{href:'/martin-guitar-dating-guide/#bridges-and-saddles',label:'Compare Rectangular And Belly Bridge Photos'}},
    {id:'prewar-inspection-photos',title:'Photos And Records For A Prewar Martin Assessment',paragraphs:[
      'Start with clear overall photographs, then document the details that can confirm or contradict the serial date. Have a repairer photograph the interior if the X crossing or brace profiles are difficult to capture.',
    ],points:[
      'Full front and back, plus the complete model and serial stamp.',
      'Front and rear headstock, tuners and any unused mounting holes.',
      'Body joint, fingerboard, nut-width measurement and fret detail.',
      'Complete bridge, saddle, pickguard and surrounding finish.',
      'X-brace crossing with a scale, brace profiles and the entire bridge plate.',
      'Repair invoices, older photographs, case records and ownership history.',
    ],link:{href:'/free-appraisal/martin/',label:'Send Joe Photos Of Your Martin'}},
  ],
  timeline:{title:'Prewar And Wartime Martin Construction Timeline',intro:'Use these transitions with the model and physical evidence. The chart includes the postwar changes needed to distinguish a later guitar from a prewar example.',rows:martinFeatureTimeline.slice(0,7)},
  faqs:[
    {q:'What Years Are Considered Prewar Martins?',a:'Collectors commonly mean 1930s guitars and sometimes include wartime examples with scalloped braces through the late-1944 transition. Record the exact production year and model because prewar is not one fixed factory specification.'},
    {q:'Does Every Prewar D-28 Have Forward-Shifted Bracing?',a:'No. Dreadnought bracing moved rearward during 1938 while scalloped brace profiles continued. Position and carving are separate features.'},
    {q:'Can Scalloped Bracing Prove A Martin Is Prewar?',a:'No. Later factory models also use scalloped braces, and braces can be shaved during repairs. Check the serial, model, complete brace layout and repair history.'},
    {q:'Is A 1946 Herringbone D-28 The Same As A 1930s D-28?',a:'No. Herringbone remained after the late-1944 bracing transition. Compare the actual braces, neck dimensions and repairs before grouping those guitars together.'},
    {q:'Can I Identify A Neck T-Bar Through The Soundhole?',a:'No. A nonadjustable T-bar is hidden in the neck. The absence of a visible adjustment point does not distinguish it from ebony reinforcement.'},
    {q:'What Photos Are Needed To Check Prewar Bracing?',a:'Include the complete X crossing and soundhole edge with a scale, views along the brace profiles, and the full bridge plate. A close-up of one tone bar cannot establish the position of the X crossing.'},
  ],sources:[
    {label:'Martin: The Martin Story, Bracing And Neck Reinforcement On Page 12',href:'https://www.martin-gitarren.de/files/downloads/martinstory.pdf'},
    {label:'Vintage Guitars Info: Dated 1938 And 1939 Dreadnought Examples',href:'https://www.guitarhq.com/martin.html'},
    {label:'Robert Corwin: Neck Dimensions, Reinforcement And Frets',href:'https://vintagemartin.com/necks.html'},
    {label:'Robert Corwin: Photographed Martin Bridge Comparisons',href:'https://vintagemartin.com/bridges.html'},
    {label:'Robert Corwin: Styles 15, 17 And 18',href:'https://www.vintagemartin.com/styles15_17_18.html'},
    {label:'Martin: The Original 1933 To 1942 D-45 Run',href:'https://www.martinguitar.com/blog-categories/from-the-factory/blog-072325-the-holy-grail-of-martin-guitars-a-closer-look-at-the-pre-war-d-45.html'},
  ],
};
martinGuides.splice(4,0,prewarMartinGuide);
expandMartinGuides(martinGuides);
