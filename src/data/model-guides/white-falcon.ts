import type { ModelGuideData } from '../../components/model-guide/types';
import { photos as ph } from './photos';
import { chart } from './helpers';

export const whiteFalconGuides: ModelGuideData[] = [
  {
    "slug": "gretsch-white-falcon-value-guide",
    "brand": "Gretsch",
    "kind": "value",
    "date": "October 29, 2026",
    "authorBio": "Joe Dampt owns Joe’s Vintage Guitars in Mesa, Arizona. He buys and evaluates vintage guitars and uses instrument photographs, serial records and repair history when assessing a guitar.",
    "title": "Gretsch White Falcon Value Guide",
    "seoTitle": "Gretsch White Falcon Value Guide: Original Era Prices",
    "description": "Find vintage Gretsch White Falcon values by era and mono or stereo version, with condition checks, original guitar photos and appraisal help from Joe.",
    "eyebrow": "White And Gold · Original American Production",
    "dek": "What an original White Falcon is worth, from the first single-cutaway guitars to the later Baldwin models.",
    "hero": ph.falcon1,
    "glanceTitle": "White Falcon At A Glance",
    "glance": [
      [
        "Price Basis",
        "Excellent, original condition with case"
      ],
      [
        "Separate Versions",
        "Mono and stereo"
      ],
      [
        "Highest Chart Range",
        "1955 mono: $44,000 to $57,200"
      ],
      [
        "Pictured Guitar",
        "Joe’s 1976 mono Falcon"
      ]
    ],
    "secondaryActions": [
      {
        "label": "See Falcon Values",
        "href": "#values"
      },
      {
        "label": "Identify Your Falcon",
        "href": "/post/gretsch-white-falcon-authentication-guide/"
      }
    ],
    "intro": {
      "html": "<p>An original Gretsch White Falcon can be worth from the mid-thousands to more than fifty thousand dollars, depending on its period and configuration. Joe’s estimates for a 1973 to 1981 mono example are $6,250 to $8,000 in excellent, original condition with its case; a 1955 mono is $44,000 to $57,200. Those describe different versions of the model, not the low and high end of one interchangeable guitar. Start with the <a href=\"/post/gretsch-white-falcon-authentication-guide/\">White Falcon authentication guide</a> if you're uncertain about the build period, pickup system or body shape. Once those details are settled, the chart below gives a starting range. A guitar with major repairs needs its own assessment before that range becomes useful.</p>",
      "calloutTitle": "An Estimate Is Not An Offer",
      "callout": "The chart assumes an original, excellent-condition guitar with its case. A purchase offer depends on the instrument Joe can inspect, its present condition and the work it needs."
    },
    "sections": [
      {
        "type": "section",
        "id": "values",
        "title": "White Falcon Values By Era",
        "eyebrow": "Start With The Correct Version",
        "blocks": [
          chart("gretsch-white-falcon"),
          {
            "type": "prose",
            "html": "<p>Choose the mono or stereo model before matching a year. A stereo guitar that's been rewired for ordinary mono use still needs to be described by its original configuration and present changes. Don't price it as an untouched mono because it now works with one amplifier. The same caution applies to a replaced neck, a refinished body or a guitar assembled from parts of different Falcons.</p><p>The chart intentionally leaves some periods without a separate figure. In particular, later stereo Falcons need an individual appraisal here. A gap isn't a zero value, and it isn't a reason to borrow the neighboring mono range. Send the label and a full view of the controls so the right version can be identified.</p>"
          }
        ],
        "tone": "light"
      },
      {
        "type": "section",
        "id": "eras",
        "title": "Why Early Falcons Sit Apart",
        "eyebrow": "Date And Construction",
        "blocks": [
          {
            "type": "columns",
            "items": [
              {
                "title": "The First Single-Cutaway Guitars",
                "html": "<p>The 1955 mono row sits above the later mono ranges. For an owner, that makes a defensible date and an honest originality record especially useful. A familiar white finish and gold hardware don't establish that first-year identity. The body, headstock, pickups and serial evidence need to agree.</p><p>If family paperwork calls a guitar a 1955, retain that paperwork and photograph the instrument as it stands. Don't replace a part merely to make it resemble an early picture. An earlier photograph showing the actual guitar can help explain a change that a current close-up can't.</p>"
              },
              {
                "title": "Double Cutaways And Baldwin Models",
                "html": "<p>The later rows have their own price levels. A clean double-cutaway Falcon should be compared with the matching construction and period, rather than judged against the first single-cutaway instruments. The 1976 mono photographed here belongs in that later conversation.</p><p>Its padded back, rectangular label, adjustable bridge and fixed G-cutout tailpiece give you specific details to document. Each has a condition and originality question of its own. Calling the entire guitar “seventies” doesn't tell an appraiser whether the binding survives, the neck angle is usable or the pickup system works.</p>"
              }
            ]
          },
          {
            "type": "prose",
            "html": "<p>There isn't a useful flat premium for the word stereo. The earlier stereo rows have their own estimates, and a complete working circuit is a different proposition from a partly disconnected one. Include any original cable, instructions or removed controls with the appraisal photos. Those accessories help explain the configuration, though they don't turn an altered instrument into an untouched example.</p>"
          }
        ],
        "tone": "dark"
      },
      {
        "type": "photo-band",
        "photos": [
          ph.falcon11,
          ph.falcon8
        ],
        "quote": "Describe the bridge, tailpiece and padded back separately. One clean front photograph leaves too much unrecorded."
      },
      {
        "type": "section",
        "id": "condition",
        "title": "Binding, Finish And Playing Condition",
        "eyebrow": "Where The Estimate Changes",
        "blocks": [
          {
            "type": "prose",
            "html": "<p>White finishes make a Falcon easy to recognize, but they can also make condition difficult to judge in photographs. Direct flash may hide checking and small repairs; warm indoor light can make a pale finish look deeply yellow. Photograph the guitar in diffuse daylight, then add a second angle that shows reflections across the surface. Don't use the shade of white as a percentage adjustment.</p><p>Binding deserves close views around the entire body, the cutaways, neck and headstock. A small stable crack, a missing strip and widespread crumbling describe different repair needs. If someone has already repaired the binding, include the invoice or a description of what was done. A front-only image can conceal much of this work.</p>"
          },
          {
            "type": "cards",
            "variant": "condition",
            "items": [
              {
                "label": "Closer To The Chart",
                "title": "Complete And Well Preserved",
                "html": "<p>Original finish, period-consistent parts, sound binding and a playable neck support comparison with the chart’s condition basis. Normal evidence of use still needs to be described. An excellent guitar doesn’t have to look freshly manufactured.</p>"
              },
              {
                "label": "Needs An Adjustment",
                "title": "Playable With Disclosed Changes",
                "html": "<p>A refret, replacement bridge or repaired binding should be named individually. Keep older parts with the guitar. Their presence may help explain its history, but loose hardware isn't automatically proven original.</p>"
              },
              {
                "label": "Needs Inspection",
                "title": "Structural Or Extensive Finish Work",
                "html": "<p>A neck repair, uncertain neck angle, broad refinishing or severe binding loss calls for a separate assessment. Photographs help establish the next inspection step; they don't supply a reliable repair bill on their own.</p>"
              }
            ]
          },
          {
            "type": "prose",
            "html": "<p>Use Joe’s <a href=\"/free-appraisal/\">appraisal and condition guidance</a> to describe the whole instrument. Sound quality and collectibility are related questions, but a replacement pickup can work well while changing the originality assessment. Similarly, polished hardware may look bright while concealing how much plating remains. Avoid cleaning or replating before an appraisal. Preserve the condition you're asking Joe to evaluate.</p>"
          },
          {
            "type": "prose",
            "html": "<p>For a Falcon with changed paint or electronics, read Joe’s notes on <a href=\"/what-lowers-vintage-guitar-value/\">condition and originality</a>, <a href=\"/how-much-does-a-refinish-hurt-guitar-value/\">refinishing</a>, <a href=\"/do-replaced-pickups-hurt-guitar-value/\">replacement pickups</a>, and <a href=\"/should-i-restore-my-guitar-before-selling/\">restoration before selling</a>. Describe work already done and ask about proposed repairs before spending money to prepare the guitar for sale.</p>"
          }
        ],
        "tone": "light"
      },
      {
        "type": "section",
        "id": "archive",
        "title": "A 1976 Mono From Joe’s Archive",
        "eyebrow": "Photo Timeline",
        "blocks": [
          {
            "type": "archive",
            "items": [
              {
                "label": "1976 · Mono",
                "title": "The Later Falcon In Detail",
                "html": "<p>This is the mono White Falcon identified as 1976 in Joe’s archive. Its handwritten label reads 8.6014. The pictured bridge and G-cutout tailpiece should stay in the description together; this example isn't wearing a Bigsby. The photographs document this guitar's present equipment, rather than promising that every part was installed on the day it left the factory.</p><p>The back view records the pad and surrounding finish, while the headstock and pickup views show areas where replacements can be missed in an overall photograph. A valuation set should preserve that combination of context and detail. These are archive photographs, not a current offer or an asking-price comparison.</p>",
                "photos": [
                  ph.falcon20,
                  ph.falcon9,
                  ph.falcon16
                ]
              }
            ]
          }
        ],
        "tone": "archive"
      },
      {
        "type": "section",
        "id": "rank",
        "title": "Choose Comparisons That Fit Your Falcon",
        "eyebrow": "Originality Before A Number",
        "blocks": [
          {
            "type": "cards",
            "variant": "rank",
            "items": [
              {
                "title": "Match The Production Group",
                "html": "<p>Keep early mono, early stereo and later mono examples in their own rows. A model name covers too much variation to support a useful estimate by itself. Use the actual guitar’s date evidence rather than a year written on its case.</p>"
              },
              {
                "title": "Match The Repair History",
                "html": "<p>Compare an unrepaired neck with other unrepaired examples. A documented repair may make a guitar dependable, but its market description should still acknowledge that work. “Professionally repaired” doesn't mean the repair disappears from the valuation.</p>"
              },
              {
                "title": "Match What Comes With It",
                "html": "<p>Photograph the case, loose parts and paperwork. A period case that's damaged or doesn't fit is different from the sound, correct case assumed by the chart. Describe accessories without assigning them an unsupported premium.</p>"
              }
            ]
          },
          {
            "type": "prose",
            "html": "<p>If you've inherited the guitar, write down what you actually know about its ownership before sorting through the case. Keep dates from receipts separate from remembered purchase dates. A purchase made several years after production doesn't change the guitar's build year. You can send uncertain details as questions; there's no need to solve every feature before asking for help.</p>"
          }
        ],
        "tone": "light"
      },
      {
        "type": "section",
        "id": "send",
        "title": "Prepare Your Falcon For An Appraisal",
        "eyebrow": "Photos And Known History",
        "blocks": [
          {
            "type": "checklist",
            "items": [
              {
                "title": "Show The Full Instrument",
                "html": "Photograph the front, back, both sides and case. Keep the complete neck visible in at least one frame."
              },
              {
                "title": "Record The Model And Serial",
                "html": "Include the whole label or nameplate, plus front and rear headstock views. Type the number as it appears, including punctuation."
              },
              {
                "title": "Show The Expensive Unknowns",
                "html": "Add binding, heel, bridge, pickup and control close-ups. Mention a nonworking switch, high action or a known repair."
              }
            ]
          },
          {
            "type": "cta",
            "title": "Get A Value For Your White Falcon",
            "html": "<p>Send Joe the photographs and whatever ownership or repair history you've kept. If you're considering a sale, explain whether older parts and the case are included. That gives him a basis for discussing the instrument you own, instead of assuming it matches an excellent-condition chart row.</p>",
            "appraisalLabel": "Request A Falcon Appraisal",
            "sellLabel": "Sell My Gretsch",
            "sellHref": "/sell-my-gretsch-guitar/"
          }
        ],
        "tone": "light"
      }
    ],
    "faqs": [
      {
        "q": "Does Stereo Always Mean A Higher White Falcon Value?",
        "a": "No. Compare the matching stereo period, completeness and working condition. A converted or incomplete stereo guitar needs an individual assessment."
      },
      {
        "q": "Does Yellowed White Paint Increase The Value?",
        "a": "Color alone doesn't establish originality or a premium. Lighting, aging and finish work can change the appearance. Condition needs inspection."
      },
      {
        "q": "Should I Replace Damaged Binding Before Selling?",
        "a": "Ask for an appraisal first. Photograph the damage and include any repair estimate you already have so the work can be weighed against the guitar’s condition."
      },
      {
        "q": "Are The Chart Figures Purchase Offers?",
        "a": "No. They are estimated values for excellent, original examples with cases. Joe’s offer depends on the actual instrument and its present condition."
      }
    ],
    "closing": "<p>A White Falcon's value starts with the right version, then changes with what survives. Keep the model, date evidence and repairs together. If the chart doesn't describe your guitar well, send the details for a <a href=\"/free-appraisal/\">free appraisal</a> before choosing a number from another period. For model and date checks, see the <a href=\"/post/gretsch-white-falcon-authentication-guide/\">Gretsch White Falcon authentication guide</a>.</p>"
  },
  {
    "slug": "gretsch-white-falcon-authentication-guide",
    "brand": "Gretsch",
    "kind": "authentication",
    "date": "October 29, 2026",
    "authorBio": "Joe Dampt owns Joe’s Vintage Guitars in Mesa, Arizona. He buys and evaluates vintage guitars and uses instrument photographs, serial records and repair history when assessing a guitar.",
    "title": "Gretsch White Falcon Authentication Guide",
    "seoTitle": "Gretsch White Falcon Authentication And Dating Guide",
    "description": "Identify original Gretsch White Falcons using body changes, mono and stereo features, serial evidence and Joe’s photos, with checks for later reissues.",
    "eyebrow": "The White Falcon · 1955 Through Original U.S. Production",
    "dek": "Identify the body, circuit and production period before deciding which appointments belong on a White Falcon.",
    "hero": ph.falcon20,
    "glanceTitle": "Falcon Identification",
    "glance": [
      [
        "Original Models",
        "6136 mono and 6137 stereo"
      ],
      [
        "Later Numbers",
        "7593 single, 7594/7595 double"
      ],
      [
        "Body Changes",
        "Single and double cutaways"
      ],
      [
        "Archive Serial",
        "8.6014, on the 1976 mono"
      ]
    ],
    "secondaryActions": [
      {
        "label": "Start The Inspection",
        "href": "#identity"
      },
      {
        "label": "Check Falcon Values",
        "href": "/post/gretsch-white-falcon-value-guide/"
      }
    ],
    "intro": {
      "html": "<p>A vintage White Falcon is identified by a combination of construction, model number, serial system and equipment. Its white finish and gold appointments give you a starting point, but later Gretsches recreate those details. A single-cutaway outline or an elaborate winged headstock logo can't establish a 1950s build. This guide covers original American mono and stereo Falcons, including the double-cutaway and Baldwin periods. Later Japanese instruments appear only to explain exclusions. For prices after you've established the version, use the separate <a href=\"/post/gretsch-white-falcon-value-guide/\">White Falcon value guide</a>. Keep identity, parts originality and condition as separate findings when you describe a guitar.</p>",
      "calloutTitle": "Keep The Entire Serial Photograph",
      "callout": "The pictured label reads 8.6014. Its punctuation, model field and 1970s body context belong with the digits. A transcription detached from those details can suggest the wrong serial system."
    },
    "sections": [
      {
        "type": "section",
        "id": "identity",
        "title": "Identify The Large Hollowbody First",
        "eyebrow": "Falcon, Penguin Or Another Gretsch",
        "blocks": [
          {
            "type": "table",
            "caption": "White Falcon Construction And Model Families",
            "columns": [
              "Feature",
              "Original-Era Comparison"
            ],
            "rows": [
              [
                "Body",
                "Large hollowbody, with single- and double-cutaway versions"
              ],
              [
                "Early Model Numbers",
                "6136 mono; 6137 stereo"
              ],
              [
                "1978 Single Cutaway",
                "7593: 17-inch width, 2¾-inch depth, 25½-inch scale"
              ],
              [
                "1978 Double Cutaways",
                "7594 mono and 7595 stereo: 17-inch width, 2-inch depth"
              ],
              [
                "Fingerboard In The 1978 Catalog",
                "Ebony with block markers"
              ],
              [
                "Neck Joins In The 1978 Catalog",
                "7593 at fret 14; 7594 and 7595 at fret 18"
              ]
            ],
            "note": "Dimensions are period catalog specifications, not a blanket specification for every Falcon."
          },
          {
            "type": "prose",
            "html": "<p>Begin with a full front and rear view. The Falcon belongs to Gretsch's large hollowbody family. The similarly decorated White Penguin belongs to the smaller chambered Jet family. A tight picture of gold hardware or a white headstock can hide that difference. Body width, depth and the neck joint are harder to exchange than a pickguard carrying a model name.</p><p>Measure the lower bout at its widest point and the rim without including the bridge or padded back. Record those measurements rather than forcing a guitar into a remembered specification. Then count the cutaways and inspect the f-hole shapes from an angle. Some black shapes represent simulated openings on a sealed top; they aren't necessarily holes into the body.</p><p>Compare those observations with Joe’s <a href=\"/gretsch-body-binding-and-inlays/\">body, binding and inlay guide</a>. A Falcon, Country Club and Viking can share a large body or elaborate equipment without being the same model. A removed or replaced nameplate increases the need to examine construction. Don't let a loose plate in the case settle the identification.</p>"
          },
          {
            "type": "photos",
            "photos": [
              ph.falcon20,
              ph.falcon8
            ]
          }
        ],
        "tone": "light"
      },
      {
        "type": "section",
        "id": "development",
        "title": "Webster’s Showpiece Becomes A Model Family",
        "eyebrow": "The Early Design And Its Successors",
        "blocks": [
          {
            "type": "columns",
            "items": [
              {
                "title": "The White And Gold Beginning",
                "html": "<p>Jimmie Webster’s show guitar brought the large white body, gold appointments and elaborate headstock together before the production model appeared. Its 1954 presentation and 1955 catalog-line introduction explain why both years recur in Falcon histories. A photograph of the prototype isn't a specification sheet for every production guitar.</p>"
              },
              {
                "title": "A Name Across Different Bodies",
                "html": "<p>By the 1978 catalog, the Falcon name covered a deep single cutaway and thinner double cutaways. The 7593 joined the body at fret 14; the 7594 and 7595 joined at fret 18. That changes the neck-to-body relationship visible in a full photograph. Compare those proportions before focusing on removable trim.</p>"
              }
            ]
          }
        ],
        "tone": "light"
      },
      {
        "type": "section",
        "id": "history",
        "title": "From Show Guitar To Several Falcon Designs",
        "eyebrow": "Production Landmarks",
        "blocks": [
          {
            "type": "timeline",
            "items": [
              {
                "date": "1954 And 1955",
                "title": "The Design Reaches Production",
                "html": "<p>Gretsch’s company history credits Jimmie Webster with the White Falcon shown at the 1954 NAMM show and added to the 1955 lineup. A design’s public debut and an individual guitar’s production year are separate dates.</p>"
              },
              {
                "date": "Late 1950s",
                "title": "Mono And Project-O-Sonic",
                "html": "<p>The mono 6136 and stereo 6137 require separate comparisons. Gretsch dates Webster’s Project-O-Sonic introduction to 1958. A stereo claim needs the appropriate pickup and control system, not just two output paths added later.</p>"
              },
              {
                "date": "Early 1960s",
                "title": "The Double-Cutaway Form",
                "html": "<p>Falcons joined the move toward thinner twin-cutaway instruments. Compare the complete body, back arrangement and controls with the period specification. A generic cutaway rule taken from another Gretsch model isn't sufficient.</p>"
              },
              {
                "date": "1970s",
                "title": "Baldwin Model Designations",
                "html": "<p>The 1978 catalog lists the 7593 single cutaway, 7594 double-cutaway mono and 7595 double-cutaway stereo. These are model designations. Their four digits do not encode a manufacture date.</p>"
              }
            ]
          },
          {
            "type": "prose",
            "html": "<p>Use these landmarks to choose a comparison period, then investigate the individual instrument. Production transitions don't necessarily happen at a clean January boundary. The early Filter’Tron family introduction also shouldn't be copied into a claim that every Gretsch model used it that same year. Joe’s <a href=\"/post/gretsch-6120-history-value/\">6120 history</a> and <a href=\"/post/gretsch-duo-jet-history-value/\">Duo Jet guide</a> retain their own model-specific timing.</p>"
          }
        ],
        "tone": "dark"
      },
      {
        "type": "section",
        "id": "circuits",
        "title": "Separate Mono, Stereo And Changed Wiring",
        "eyebrow": "Pickup And Control Evidence",
        "blocks": [
          {
            "type": "table",
            "caption": "The Late-1950s Falcon Change",
            "columns": [
              "Comparison Period",
              "Pickup And Trim Evidence"
            ],
            "rows": [
              [
                "Earlier Mono Falcons",
                "DeArmond single coils, engraved hump-block markers, vertical headstock logo and Melita bridge"
              ],
              [
                "1958 Mono Comparison",
                "Filter’Tron humbuckers, thumbnail markers, horizontal headstock logo and Space Control bridge"
              ],
              [
                "1958 And 1959 Controls",
                "Gretsch’s retrospective describes both a tone knob and tone switch in the 1958 comparison, then a tone switch alone in 1959"
              ],
              [
                "Project-O-Sonic, Introduced In 1958",
                "Split pickup system and stereo routing; inspect separately from the mono arrangement"
              ]
            ],
            "note": "The firsthand study of a 1958 Falcon records its combination of changed parts. Compare the complete instrument; transitional examples and later replacements can mix features."
          },
          {
            "type": "columns",
            "items": [
              {
                "title": "The Mono Comparison",
                "html": "<p>Photograph each pickup straight on and include its surround. Identify the visible pickup family before deciding whether it's appropriate to the period. DynaSonic single coils, Filter’Tron screw-pole humbuckers and Super’Tron blade designs need different descriptions. A metal cover alone doesn't reveal what is underneath.</p><p>For Joe’s later mono example, keep the whole control layout beside the label photograph. The installed bridge is adjustable and the tailpiece has a G cutout. A Falcon description that automatically calls every tailpiece a Bigsby would misdescribe this instrument.</p>"
              },
              {
                "title": "The Stereo Comparison",
                "html": "<p>Project-O-Sonic used split pickup arrangements and routing intended for separate amplification. Establish the actual model, controls and jack arrangement before testing a suspected stereo Falcon. A regular mono lead can give an incomplete impression of how a stereo circuit behaves.</p><p>If the wiring has been changed, record what each switch and output currently does. Don't call a silent channel a missing pickup without checking the correct connection. A repairer can investigate inaccessible wiring when necessary; a first identification doesn't require pulling an old harness out of a hollowbody.</p>"
              }
            ]
          },
          {
            "type": "callout",
            "title": "A Function Test Does Not Prove Originality",
            "html": "<p>A working replacement harness can imitate a period control arrangement. Conversely, an original circuit may need service. Ask about previous repairs and preserve any removed switches or pickups with their documentation.</p>"
          },
          {
            "type": "prose",
            "html": "<p>Joe’s <a href=\"/gretsch-pickup-dating-guide/\">pickup comparisons</a> show the visible families, and the <a href=\"/gretsch-knobs-and-controls/\">control guide</a> separates electrical switches from mechanical mutes. Count and photograph the controls before attaching names to them. A knob near the bridge can be associated with equipment that doesn't alter the electrical signal at all.</p>"
          }
        ],
        "tone": "light"
      },
      {
        "type": "photo-band",
        "photos": [
          ph.falcon15,
          ph.falcon11
        ],
        "quote": "The pickup face, surrounding mount and complete control layout belong in the same inspection record."
      },
      {
        "type": "section",
        "id": "variants",
        "title": "The Falcon Versions To Keep Separate",
        "eyebrow": "Model And Circuit",
        "blocks": [
          {
            "type": "cards",
            "variant": "models",
            "items": [
              {
                "title": "6136 And 6137",
                "html": "<p>The earlier mono and stereo designations identify different electrical arrangements. Read the number with the pickup configuration and full control layout.</p>",
                "label": "Earlier Designations"
              },
              {
                "title": "7593 Single Cutaway",
                "html": "<p>The 1978 single-cutaway Falcon retains a deeper 2¾-inch body and a fret-14 neck join. Its outline should not be compared with the thinner twin-cutaway specification.</p>",
                "label": "Later Single Cutaway"
              },
              {
                "title": "7594 And 7595",
                "html": "<p>Both are later double-cutaway Falcons. The catalog distinguishes the mono 7594 from the 7595 stereo system with separate bass and treble pickup sections.</p>",
                "label": "Later Double Cutaways"
              }
            ]
          }
        ],
        "tone": "light"
      },
      {
        "type": "section",
        "id": "archive",
        "title": "A Later Mono Falcon In The Photo Archive",
        "eyebrow": "One Instrument, Several Views",
        "blocks": [
          {
            "type": "archive",
            "items": [
              {
                "label": "1976 · American Mono",
                "title": "Body, Headstock And Binding",
                "html": "<p>These views belong to one instrument from Joe’s archive. The headstock decoration, tuners, back pad and body-edge binding can be compared without borrowing details from another Falcon. Keep the views grouped when you use them to describe the example.</p><p>The photographs show what is installed and visible. They don't reveal hidden solder joints, establish the age of every screw or confirm the condition beneath the pad. Those limits matter when moving from model identification to an “all original” description. If your guitar differs, photograph the difference rather than treating the archive guitar as a parts checklist for every production year.</p>",
                "photos": [
                  ph.falcon9,
                  ph.falcon6,
                  ph.falcon8,
                  ph.falcon16
                ]
              }
            ]
          }
        ],
        "tone": "archive"
      },
      {
        "type": "section",
        "id": "dating",
        "title": "Read The Number In Its Production Context",
        "eyebrow": "A Real Label, Not A Sample Code",
        "blocks": [
          {
            "type": "serials",
            "items": [
              {
                "serial": "8.6014",
                "title": "Joe’s 1976 Mono White Falcon",
                "photo": ph.falcon2,
                "html": "<p>The archive photograph visibly reads 8.6014, including a dot. With the documented 1976 instrument and its later features, this supports August 1976, sequence 014, in the month/year system. The year digit alone repeats by decade. The date comes from the format and the guitar together.</p><p>Keep the full rectangular label in the record. A cropped string of digits loses the model line and label design that help establish context. The <a href=\"/gretsch-labels-and-serial-number-locations/\">Gretsch label guide</a> uses this same example and preserves the printed punctuation.</p>"
              }
            ]
          },
          {
            "type": "prose",
            "html": "<p>Earlier Falcons can use a sequential number and a different location, including a headstock model plate. Inspect the entire headstock, its top edge and any accessible interior label before reporting that a number is missing. A five-digit marking should not automatically be parsed as a Baldwin month and year.</p><p>Gretsch’s early serial history also records misplaced 1957 labels used later. Joe’s existing Jet guide treats those reused numbers as a reason to check the physical features. Don't create an exact 1957 date from a label when the instrument's construction belongs to a different period. Retain both observations and seek a model-specific assessment.</p><p>Use the <a href=\"/gretsch-serial-number-lookup/\">Gretsch serial lookup</a> as a comparison tool. When its result conflicts with the guitar, recheck the transcription first. Side lighting may separate an 8 from a 3 or reveal punctuation that disappeared in a phone screenshot. Don't add chalk, ink or abrasives to make a faint stamp easier to read.</p>"
          }
        ],
        "tone": "light"
      },
      {
        "type": "section",
        "id": "reissues",
        "title": "Exclude Later Japanese Falcons",
        "eyebrow": "Historical Styling Returns",
        "blocks": [
          {
            "type": "prose",
            "html": "<p>A modern Falcon may intentionally repeat a single-cutaway body, vertical logo, gold trim and earlier-style pickups. The historical year in a Vintage Select model name describes the design being recreated. It isn't the manufacture date of that individual guitar. Read the complete model suffix and country information with its own serial.</p><p>Gretsch’s modern system uses factory letters followed by year and month digits. JT identifies Terada in Japan in that system. Earlier revival-era Japanese guitars used other formats, so the absence of JT doesn't establish American vintage production. Compare the full marking with the correct period in Joe’s <a href=\"/gretsch-vintage-vs-reissue/\">vintage and reissue guide</a>.</p><p>Don't use an aged white finish as a shortcut. A recently made guitar can have a deliberately warm color, and an older one can remain pale. Hardware can also move between instruments. If a vintage-looking body carries a later serial format, investigate the actual model before explaining away the number. If an old body has replacement pickups, document the replacements without calling the whole instrument a reissue.</p>"
          }
        ],
        "tone": "dark"
      },
      {
        "type": "section",
        "id": "inspection",
        "title": "Check The Parts That The Number Cannot Date",
        "eyebrow": "Originality And Condition",
        "blocks": [
          {
            "type": "checklist",
            "items": [
              {
                "title": "Follow The Body Edges",
                "html": "<p>Inspect the binding around both cutaways, the neck and the headstock. Record missing sections, visible replacement strips and finish disturbance. Shrinkage is a condition observation; it doesn't establish a build year.</p>"
              },
              {
                "title": "Inspect The Neck And Heel",
                "html": "<p>Take a side view showing the strings, bridge height and neck joint. A gap, finish line or unusually low bridge is a reason for closer inspection. A photograph alone shouldn't be turned into a definite structural diagnosis.</p>"
              },
              {
                "title": "Compare Bridge And Tailpiece Footprints",
                "html": "<p>Look for unused holes and exposed outlines around the hinge or base. Movable bridge assemblies may be replaced without obvious new holes. The absence of a hole doesn't certify that a part has never changed.</p>"
              },
              {
                "title": "Keep The Tuner Views Clear",
                "html": "<p>Photograph housing marks, buttons, screws and bushings. An older button can sit on a different mechanism. Document mismatched or plugged mounting holes without removing hardware solely for an online identification.</p>"
              }
            ]
          },
          {
            "type": "prose",
            "html": "<p>Once the model and period are reasonably established, use the <a href=\"/post/gretsch-white-falcon-value-guide/\">Falcon value chart</a> with a separate condition description. Don't treat a serial result as proof that the guitar meets an excellent-condition price row. An inspection can confirm or revise an assessment made from photographs.</p>"
          },
          {
            "type": "cta",
            "title": "Have Joe Review Your Falcon",
            "html": "<p>Include the full front and back, serial location, controls and any disputed part. Tell Joe what you know about repairs and what remains uncertain. Unanswered questions are useful information when deciding which views or inspection are needed next.</p>",
            "appraisalLabel": "Ask About Your Falcon",
            "sellLabel": "Sell My Gretsch",
            "sellHref": "/sell-my-gretsch-guitar/"
          }
        ],
        "tone": "light"
      },
      {
        "type": "section",
        "id": "references",
        "title": "Falcon References And Comparison Guides",
        "eyebrow": "Sources For The Identification Details",
        "blocks": [
          {
            "type": "sources",
            "items": [
              {
                "title": "Gretsch’s White Falcon History",
                "href": "https://www.gretsch.com/2020/01/webster-designed-gretsch-white-falcon-turns-60/",
                "note": "Webster, the 1954 presentation, 1955 lineup, stereo introduction and Electrotone development."
              },
              {
                "title": "Gretsch 1978 Catalog",
                "href": "https://acousticmusic.org/wp-content/uploads/2016/02/Gretsch-1978-Catalog.pdf",
                "note": "PDF pages 3 and 4: 7593, 7594 and 7595 dimensions, neck joins and equipment."
              },
              {
                "title": "Gretsch’s Early Serial History",
                "href": "https://blog.gretschguitars.com/2016/05/gretschtech-serial-numbers-1930s-1966/",
                "note": "Sequential systems, serial locations and reused labels."
              },
              {
                "title": "Gretsch’s Modern Serial Format",
                "href": "https://blog.gretschguitars.com/2013/07/gretschtech-understanding-modern-gretsch-serial-numbers/",
                "note": "Factory prefixes and year/month fields on later instruments."
              },
              {
                "title": "Joe’s Gretsch Pickup Guide",
                "href": "/gretsch-pickup-dating-guide/",
                "note": "Pickup-family identification and model-specific timing cautions."
              },
              {
                "title": "Joe’s White Falcon Label Example",
                "href": "/gretsch-labels-and-serial-number-locations/",
                "note": "The photographed 8.6014 label and its documented 1970s context."
              },
              {
                "title": "Firsthand Study Of A 1958 White Falcon",
                "href": "https://www.premierguitar.com/gear/1958-gretsch-6136-white-falcon",
                "note": "The instrument’s caretakers document the pickup, logo, fingerboard-inlay and bridge changes visible on their 1958 example."
              },
              {
                "title": "Gretsch’s 1958 Design Retrospective",
                "href": "https://blog.gretschguitars.com/2017/02/great-8-58/",
                "note": "Manufacturer explanation of the Falcon’s transitional tone-knob and tone-switch arrangement, presented with later recreations of the design."
              }
            ]
          }
        ],
        "tone": "light"
      }
    ],
    "faqs": [
      {
        "q": "Is Every White Falcon A Hollowbody?",
        "a": "The original White Falcon belongs to the large hollowbody family. The white and gold White Penguin is a different, smaller chambered Jet-family instrument. Check the full body rather than a headstock crop."
      },
      {
        "q": "Can A Falcon Serial Appear On A Metal Nameplate?",
        "a": "Yes. Some earlier Falcons carry serial information on a headstock model plate. Check the headstock and accessible label locations before concluding that a serial is missing."
      },
      {
        "q": "Does A G-Cutout Tailpiece Make A Falcon Incorrect?",
        "a": "No blanket rule applies. Joe’s pictured later mono Falcon carries a G-cutout tailpiece. Compare the exact model, period and mounting evidence instead of assuming every Falcon must have a Bigsby."
      },
      {
        "q": "Does A 1950s Model Name Prove A Vintage Build?",
        "a": "No. Later instruments can use a historical year in their model designation. Their own serial format, country marking and production context establish their build period."
      }
    ],
    "closing": "<p>Build the description from the body outward: model, circuit, serial context, then installed parts. Keep a disagreement visible until evidence resolves it. A clear set of photographs and a candid repair history will help Joe assess a Falcon far more than an unsupported claim that every detail is original. For the matching price ranges, see the <a href=\"/post/gretsch-white-falcon-value-guide/\">Gretsch White Falcon value guide</a>.</p>"
  }
];
