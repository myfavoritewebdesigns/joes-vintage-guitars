import type { ModelGuideData } from '../../components/model-guide/types';
import { photos as ph } from './photos';
import { chart } from './helpers';

export const anniversaryGuides: ModelGuideData[] = [
  {
    "slug": "gretsch-anniversary-value-guide",
    "brand": "Gretsch",
    "kind": "value",
    "date": "October 29, 2026",
    "authorBio": "Joe Dampt owns Joe’s Vintage Guitars in Mesa, Arizona. He buys and evaluates vintage guitars and uses instrument photographs, serial records and repair history when assessing a guitar.",
    "title": "Gretsch Anniversary Value Guide",
    "seoTitle": "Gretsch Anniversary Value Guide: Single And Double Prices",
    "description": "See vintage Gretsch Single and Double Anniversary values by period, finish and configuration, with repair checks and Joe’s archive photos for comparison.",
    "eyebrow": "Single And Double Anniversary · Original U.S. Models",
    "dek": "Compare single-pickup, double-pickup and stereo Anniversary guitars without pricing an altered Single as a factory Double.",
    "hero": ph.anniversary7,
    "glanceTitle": "Anniversary Value Basics",
    "glance": [
      [
        "1958 To 1959 Single",
        "$2,600 to $4,450 across finishes"
      ],
      [
        "1958 To 1959 Double",
        "$4,250 to $6,000 across finishes"
      ],
      [
        "Later Chart Rows",
        "From $1,200, by version"
      ],
      [
        "Value Basis",
        "Excellent, original, original case"
      ]
    ],
    "secondaryActions": [
      {
        "label": "Compare Anniversary Prices",
        "href": "#values"
      },
      {
        "label": "Check Your Model",
        "href": "/post/gretsch-anniversary-authentication-guide/"
      }
    ],
    "intro": {
      "html": "<p>An original Gretsch Anniversary can be worth roughly $1,200 to $6,000 in the groups covered here, in excellent, original condition with a case. Early Double Anniversary guitars occupy the higher rows, while later Single and Double examples have lower ranges. The finish, production period and factory pickup configuration determine which comparison applies. A second pickup added to a Single doesn't automatically give it the value of an original Double. If the model line, wiring or year is unclear, use the <a href=\"/post/gretsch-anniversary-authentication-guide/\">Anniversary authentication guide</a> first. The price chart separates the versions so a familiar green finish doesn't become the only basis for an estimate.</p>",
      "calloutTitle": "Single And Double Describe Pickups",
      "callout": "A Single Anniversary normally has one pickup; a Double has two. The terms don't describe the number of cutaways, and they shouldn't be assigned solely from a modified guitar’s current equipment."
    },
    "sections": [
      {
        "type": "section",
        "id": "values",
        "title": "Single And Double Anniversary Values",
        "eyebrow": "The Configuration Comes First",
        "blocks": [
          chart("gretsch-anniversary"),
          {
            "type": "prose",
            "html": "<p>The dollar figures are estimates, not offers to buy. A 1958 to 1959 sunburst Double is shown at $4,300 to $6,000; a sunburst Single of that period is $2,650 to $4,450. That difference should not be treated as the profit available from adding a pickup. A modification changes the originality assessment and may leave permanent alterations.</p><p>The tenor and stereo rows are separate comparisons. A four-string tenor isn't simply a six-string missing two tuners, and a stereo guitar with altered wiring isn't an untouched mono Double. If your guitar doesn't fit a listed configuration, send its details rather than borrowing a figure from the nearest name.</p>"
          }
        ],
        "tone": "light"
      },
      {
        "type": "section",
        "id": "finishes",
        "title": "Green, Sunburst And The Correct Row",
        "eyebrow": "Color In Context",
        "blocks": [
          {
            "type": "columns",
            "items": [
              {
                "title": "Read Both Colors On A Two-Tone Guitar",
                "html": "<p>The front and rear can be quite different colors. On the Single photographed here, the light top and darker green back belong in the same appraisal set. A warm photograph can make the top appear cream or tan, so don't select a rare-color description from one image.</p><p>Use the model identification and actual finish evidence together. Photograph the sides and neck as well as the top, and mention any known repainting. A close color match after restoration doesn't restore an original finish history.</p>"
              },
              {
                "title": "Keep Sunburst Condition Visible",
                "html": "<p>Sunburst edges can hide binding work or local touch-up. Shoot the full face squarely, then show the rim and heel from the side. Reflections should help reveal the surface rather than wash it out.</p><p>The chart separates colors where a verified price row does. It doesn't supply a universal green-over-sunburst premium. Follow the specific period and configuration, then consider condition. Applying one color adjustment to every Anniversary would produce unsupported figures.</p>"
              }
            ]
          },
          {
            "type": "prose",
            "html": "<p>For an inherited instrument, retain older snapshots even if they aren't sharp enough for a serial reading. A picture taken before a pickup addition or finish repair may explain a current mismatch. A note saying who owned it and when can be useful history, but it should stay separate from a claim about its manufacture date.</p>"
          }
        ],
        "tone": "dark"
      },
      {
        "type": "section",
        "id": "changes",
        "title": "When A Second Pickup Changes The Question",
        "eyebrow": "Originality And Playing Use",
        "blocks": [
          {
            "type": "prose",
            "html": "<p>An Anniversary may have been modified because its owner wanted a bridge pickup, a vibrato or different controls. Those changes can make sense for the player who commissioned them. For valuation, document what was changed and how. Extra routing and drilled holes remain part of the guitar's history even if period-style parts were used.</p><p>Start with the label, then compare the body and control pattern. A replacement guard can cover an opening, and an added switch can look tidy from the front. If you know the work was done, state it plainly. Don't rely on an appraiser to infer a conversion from a distant image.</p>"
          },
          {
            "type": "cards",
            "variant": "condition",
            "items": [
              {
                "title": "Factory Configuration Retained",
                "html": "<p>The correct pickup count, supported finish and sound structure give the chart a closer basis. Wear still needs to be described, and each installed component should be assessed rather than assumed original from the model number.</p>"
              },
              {
                "title": "Reversible Parts Replaced",
                "html": "<p>A changed bridge or tuner set may be easier to address than an enlarged pickup cavity. Include the older parts if they survive, along with any receipt identifying the work. Don't assign them a fixed dollar credit without inspection.</p>"
              },
              {
                "title": "Body Or Finish Altered",
                "html": "<p>Added pickup routes, a refinish or structural repairs need a separate estimate. A carefully done modification can remain useful to a musician while putting the instrument outside an original-condition comparison.</p>"
              }
            ]
          },
          {
            "type": "prose",
            "html": "<p>Ask about the current playing condition as well as the history. A single pickup that cuts out, a high bridge setting or a heel gap can change the work needed before the guitar is ready for regular use. Joe’s <a href=\"/free-appraisal/\">condition and appraisal guidance</a> helps put those observations into a fuller description.</p>"
          },
          {
            "type": "prose",
            "html": "<p>A changed Anniversary needs a repair-by-repair description. Read about <a href=\"/what-lowers-vintage-guitar-value/\">condition and originality</a>, <a href=\"/how-much-does-a-refinish-hurt-guitar-value/\">refinishing</a>, <a href=\"/do-replaced-pickups-hurt-guitar-value/\">replacement pickups</a>, and <a href=\"/should-i-restore-my-guitar-before-selling/\">restoration before selling</a>. Describe work already done and ask about proposed repairs before spending money to prepare the guitar for sale.</p>"
          }
        ],
        "tone": "light"
      },
      {
        "type": "photo-band",
        "photos": [
          ph.anniversary1,
          ph.anniversary2
        ],
        "quote": "The pale top, darker back and one-pickup layout describe this Single Anniversary more clearly than its badge alone."
      },
      {
        "type": "section",
        "id": "archive",
        "title": "A Single Anniversary In The Photo Record",
        "eyebrow": "Photo Timeline",
        "blocks": [
          {
            "type": "archive",
            "items": [
              {
                "label": "1960 · Model 6125",
                "title": "Two-Tone Finish And One Pickup",
                "html": "<p>This 1960 Gretsch 6125 Single Anniversary comes from Joe’s customer-photo archive. Its readable serial is 36439, and the photographs show a single HiLo’Tron-style pickup, Space Control bridge and G-cutout tailpiece. The model field in the pictured label is blank, while the one-pickup, two-tone configuration identifies the 6125 Single Anniversary.</p><p>It illustrates the views that help with an estimate, not a current sale or an example of an untouched guitar at a stated price. The rear view records the darker finish; the front shows the controls and hardware. A description that only says “green Anniversary” would omit several of those useful distinctions.</p>",
                "photos": [
                  ph.anniversary7,
                  ph.anniversary5,
                  ph.anniversary6
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
        "title": "Decide Which Condition Comparison Fits",
        "eyebrow": "A Practical Ranking",
        "blocks": [
          {
            "type": "cards",
            "variant": "rank",
            "items": [
              {
                "title": "A Supported Original Example",
                "html": "<p>Use a matching chart row when the model, period and finish are reasonably established, repairs are disclosed and the case assumption fits. Keep any uncertainty about a part visible instead of stretching an “all original” description.</p>"
              },
              {
                "title": "A Maintained Player",
                "html": "<p>Refrets, replacement bridges and serviced electronics can keep a guitar working. Their quality and extent matter more than a single label such as “restored.” List the actual work and show the areas affected.</p>"
              },
              {
                "title": "A Project With Missing Evidence",
                "html": "<p>Missing parts, an unreadable label or extensive binding deterioration may require further inspection. Photograph what survives and keep removed pieces together. An unresolved detail isn't a reason to invent the most valuable configuration.</p>"
              }
            ]
          },
          {
            "type": "prose",
            "html": "<p>Binding repairs can be easy to underestimate on a lower-priced model. Show the entire perimeter so Joe can distinguish a small missing piece from widespread deterioration. Before commissioning restoration, compare the proposed work with the guitar's current condition and intended use. An appraisal can help with that decision without assuming every repair cost will be recovered in a sale.</p><p>A correct case protects the instrument and is part of the chart basis, but an old case doesn't independently prove the guitar's year. Include its fit and condition. Loose bridges, guards and paperwork should be photographed separately so they aren't mistaken for installed equipment.</p>"
          }
        ],
        "tone": "light"
      },
      {
        "type": "section",
        "id": "appraisal",
        "title": "Show Joe Your Anniversary’s Details",
        "eyebrow": "Make The Estimate Specific",
        "blocks": [
          {
            "type": "checklist",
            "items": [
              {
                "title": "Document The Version",
                "html": "Send a complete front view, the model and serial label, both headstock faces and the back. Include every visible pickup and control."
              },
              {
                "title": "Show Repairs Without Hiding Them",
                "html": "Add close-ups of the heel, body edges, changed parts and any unused holes. Explain known refinishing, routing or electronics work."
              },
              {
                "title": "Include What Comes With The Guitar",
                "html": "Photograph the case, removed hardware and dated paperwork. Distinguish installed parts from items supplied loose."
              }
            ]
          },
          {
            "type": "cta",
            "title": "Get An Anniversary Value Opinion",
            "html": "<p>Tell Joe whether you want an estimate, help identifying the model or a purchase discussion. You don't have to decide on a repair or a sale before sharing the photographs. Clear information about the instrument's present state gives the conversation a useful starting point.</p>",
            "appraisalLabel": "Request An Anniversary Appraisal",
            "sellLabel": "Sell My Gretsch",
            "sellHref": "/sell-my-gretsch-guitar/"
          }
        ],
        "tone": "light"
      }
    ],
    "faqs": [
      {
        "q": "Is A Double Anniversary Always Worth Twice A Single?",
        "a": "No. Compare the actual period and condition rows. Pickup count does not create a fixed multiplier."
      },
      {
        "q": "Will Adding A Bridge Pickup Increase My Single’s Value?",
        "a": "It changes the originality assessment and may require permanent routing. An altered Single should not be priced as an untouched factory Double."
      },
      {
        "q": "Is Every Green Anniversary The Same Finish?",
        "a": "No. Photograph the top, sides, back and neck, and establish the model and period. Lighting and later finish work can also change the apparent color."
      },
      {
        "q": "Can A Later Original Anniversary Still Have Value?",
        "a": "Yes. The later American rows have their own estimates. Condition, completeness and documented changes determine how an individual example compares."
      }
    ],
    "closing": "<p>Price an Anniversary by the version that was built, then account for the guitar it has become. The original pickup configuration, finish and repair history keep the estimate tied to evidence. If those details remain open, a <a href=\"/free-appraisal/\">photo appraisal</a> is the next useful step. For model and date checks, see the <a href=\"/post/gretsch-anniversary-authentication-guide/\">Gretsch Anniversary authentication guide</a>.</p>"
  },
  {
    "slug": "gretsch-anniversary-authentication-guide",
    "brand": "Gretsch",
    "kind": "authentication",
    "date": "October 29, 2026",
    "authorBio": "Joe Dampt owns Joe’s Vintage Guitars in Mesa, Arizona. He buys and evaluates vintage guitars and uses instrument photographs, serial records and repair history when assessing a guitar.",
    "title": "Gretsch Anniversary Authentication Guide",
    "seoTitle": "Gretsch Anniversary Authentication: Single And Double",
    "description": "Identify vintage Gretsch Anniversary models by pickup count, finish, model number and serial, using archive photos and checks for conversions or reissues.",
    "eyebrow": "Anniversary Family · Singles, Doubles And Stereo",
    "dek": "Sort the original Anniversary model numbers, inspect pickup changes and read a real label without confusing a later recreation with a vintage guitar.",
    "hero": ph.anniversary7,
    "glanceTitle": "Identify An Anniversary",
    "glance": [
      [
        "Single Pickup",
        "6124 sunburst, 6125 two-tone green"
      ],
      [
        "Two Pickups",
        "6117 sunburst, 6118 two-tone green"
      ],
      [
        "Stereo Models",
        "6111 and 6112"
      ],
      [
        "Photographed Number",
        "36439 · 1960"
      ]
    ],
    "secondaryActions": [
      {
        "label": "Find The Model Number",
        "href": "#models"
      },
      {
        "label": "See Anniversary Values",
        "href": "/post/gretsch-anniversary-value-guide/"
      }
    ],
    "intro": {
      "html": "<p>The original Gretsch Anniversary family includes single-pickup and double-pickup guitars, sunburst and two-tone finishes, and a separate stereo branch. “Double” describes the pickups, not a double cutaway. A green guitar with two pickups needs its model and production period checked before it can be called an original 6118. The 1958 anniversary design continued beyond its commemorative year and returned in later production. This guide follows the original American versions and uses later examples only to explain the boundary. After identification, the <a href=\"/post/gretsch-anniversary-value-guide/\">Anniversary value chart</a> separates the relevant period and finish comparisons.</p>",
      "calloutTitle": "Check The Model Field And The Body",
      "callout": "The pictured 1960 Gretsch 6125 Single Anniversary has a readable serial but a blank model field. Its single pickup and two-tone green finish identify the configuration; the model number is not printed on this label."
    },
    "sections": [
      {
        "type": "section",
        "id": "models",
        "title": "The Original Anniversary Model Map",
        "eyebrow": "Pickup Count And Finish",
        "blocks": [
          {
            "type": "table",
            "caption": "Original Anniversary Designations",
            "columns": [
              "Model",
              "Configuration",
              "Finish Or Distinction"
            ],
            "rows": [
              [
                "6124",
                "Single Anniversary",
                "Sunburst; a tenor version also appears in period model records"
              ],
              [
                "6125",
                "Single Anniversary",
                "Two-tone Smoke Green"
              ],
              [
                "6117",
                "Double Anniversary mono",
                "Sunburst"
              ],
              [
                "6118",
                "Double Anniversary mono",
                "Two-tone Smoke Green"
              ],
              [
                "6111",
                "Double Anniversary stereo",
                "Sunburst"
              ],
              [
                "6112",
                "Double Anniversary stereo",
                "Two-tone green"
              ],
              [
                "7560",
                "Later Double Anniversary",
                "Sunburst; compare its Baldwin-era equipment"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Anniversary Construction And Early Changes",
            "columns": [
              "Feature",
              "Period Comparison"
            ],
            "rows": [
              [
                "Body",
                "16 inches wide and 2½ inches deep in the 1968 catalog"
              ],
              [
                "1960 Single Example",
                "Laminated maple body and maple neck; measured 24½-inch scale"
              ],
              [
                "1958 To 1959 Comparison",
                "Filter’Tron pickups and ebony fingerboard"
              ],
              [
                "Around 1960 And Later",
                "HiLo’Tron pickups and rosewood fingerboard; one pickup on a Single, two on a Double"
              ]
            ],
            "note": "The 1960 instrument study records an unbound rosewood board with thumbnail markers. Read pickup type, board, label and construction together when checking a transition-period guitar."
          },
          {
            "type": "prose",
            "html": "<p>The 1968 Gretsch catalog explicitly pairs 6124 with the sunburst Single and 6125 with the two-tone Single; 6117 and 6118 are the corresponding Doubles. That mapping helps when a model field is absent or obscured, but it doesn't prove an original finish. Repainting and pickup conversions can imitate another row.</p><p>Keep a four-string instrument separate from a six-string model with missing hardware. Count the tuner positions, inspect the neck and read any model notation. Likewise, a stereo identification requires the correct circuit evidence. A second output jack added by an owner isn't enough to establish the factory stereo version.</p><p>The later 7560 belongs in the original American story as well. Georgia Southern’s Gretsch collection documents a 1970s 7560. Its appointments should be compared with that later period rather than forcing the guitar into a 1958 specification because the Anniversary name remained familiar.</p>"
          }
        ],
        "tone": "light"
      },
      {
        "type": "section",
        "id": "history",
        "title": "The Anniversary As An Accessible Hollowbody",
        "eyebrow": "Introduction And Later Production",
        "blocks": [
          {
            "type": "columns",
            "items": [
              {
                "title": "The 1958 Anniversary Family",
                "html": "<p>The Single and Double designations separated pickup configurations within a shared hollowbody family. Sunburst and two-tone green had different model numbers. Read those identifiers together: the color alone cannot tell you whether a guitar left the factory with one pickup or two.</p>"
              },
              {
                "title": "The HiLo’Tron Catalog Years",
                "html": "<p>The 1968 manufacturer catalog shows the family with HiLo’Tron pickups and a Space Control bridge. Joe’s 1960 archive example also has a visible HiLo’Tron and wheel-saddle bridge. Those observations prevent an early Filter’Tron specification from being applied across the entire Anniversary run.</p>"
              }
            ]
          }
        ],
        "tone": "light"
      },
      {
        "type": "section",
        "id": "chronology",
        "title": "The Anniversary Outlasted Its Birthday",
        "eyebrow": "Changes Through The American Run",
        "blocks": [
          {
            "type": "timeline",
            "items": [
              {
                "date": "1958",
                "title": "The Commemorative Family",
                "html": "<p>Gretsch’s manufacturer catalog history identifies the Anniversary’s 1958 introduction for the company’s 75th birthday. Early instruments used Filter’Tron pickups; the model-specific change to HiLo’Trons belongs in a later comparison.</p>"
              },
              {
                "date": "Around 1960",
                "title": "The HiLo’Tron Period",
                "html": "<p>The 1960 Single Anniversary shows a HiLo’Tron-style face with one row of adjustable poles. Compare that observation with its complete serial and body details. The date a pickup family was announced doesn't establish a universal changeover for every Gretsch model.</p>"
              },
              {
                "date": "Early 1960s",
                "title": "Stereo Joins The Family",
                "html": "<p>The 6111 and 6112 designations identify the stereo Double Anniversary branch. Preserve those numbers when recording a converted or partly disconnected instrument; its present mono function doesn't erase its original model identity.</p>"
              },
              {
                "date": "1968 And The 1970s",
                "title": "Continuing Models And Later Numbers",
                "html": "<p>The 1968 catalog still shows the familiar Single and Double versions with HiLo’Tron pickups. Later Baldwin instruments include the 7560 designation. Check the actual label, controls and appointments rather than extending one early spec across the whole run.</p>"
              }
            ]
          },
          {
            "type": "prose",
            "html": "<p>The Anniversary's long production life makes a short description such as “a sixties Gretsch” too broad for close identification. First establish the model branch and an approximate period. Then assess features that may have changed during that period. You can leave an exact year unresolved while still accurately describing a two-tone Single with a particular pickup and tailpiece.</p>"
          }
        ],
        "tone": "dark"
      },
      {
        "type": "section",
        "id": "pickup",
        "title": "One Pickup, Two Pickups And A Possible Conversion",
        "eyebrow": "Read The Top Before The Guard",
        "blocks": [
          {
            "type": "prose",
            "html": "<p>On the pictured Single, the neck pickup, upper-bout switch and volume control near the cutaway form a relatively simple layout. The Double adds a bridge pickup and additional controls. Photograph all of them together before concentrating on the pickup covers. A close crop can conceal a switch or filled opening that changes the interpretation.</p><p>The visible HiLo’Tron face has one row of pole screws and a dark center. A Filter’Tron presents two rows of six screw poles. Reflections and strings can obscure the difference, so take a straight-on view with even light. The housing’s outer shine is less useful than the pole arrangement.</p>"
          },
          {
            "type": "columns",
            "items": [
              {
                "title": "Inspect An Added Pickup",
                "html": "<p>If the label identifies a Single but two pickups are fitted, examine the bridge pickup's surround, nearby finish and control layout. Ask about installation history. A professional-looking job may still include new routing, and a replacement pickguard can cover evidence of earlier work.</p><p>Don't remove a pickup simply because a photograph leaves the opening unclear. Existing repair photos may answer the question. If internal inspection is needed, have a repairer document the route and wiring while protecting the surrounding finish.</p>"
              },
              {
                "title": "Investigate A Stereo Claim",
                "html": "<p>Record the model line, jack arrangement and what each control does with the appropriate connection. Don't infer factory stereo equipment from one extra socket. A changed harness or an incomplete circuit requires a description of its current state as well as its claimed history.</p><p>The stereo Anniversary should be compared with its own documentation, not with a Falcon's more elaborate Project-O-Sonic arrangement. Sharing the word stereo doesn't mean every Gretsch divided or controlled the signal in the same way.</p>"
              }
            ]
          },
          {
            "type": "prose",
            "html": "<p>Joe’s <a href=\"/gretsch-pickup-dating-guide/\">pickup identification page</a> and <a href=\"/gretsch-knobs-and-controls/\">control-layout reference</a> show the surrounding checks. The <a href=\"/post/gretsch-duo-jet-history-value/\">Duo Jet identification guide</a> also preserves model-specific Filter’Tron timing and plain arrow-knob distinctions. Don't transfer a Jet’s year boundary wholesale to an Anniversary.</p>"
          }
        ],
        "tone": "light"
      },
      {
        "type": "photo-band",
        "photos": [
          ph.anniversary1,
          ph.anniversary5
        ],
        "quote": "The Anniversary badge names a family. The pickup layout and full serial provide the next evidence."
      },
      {
        "type": "section",
        "id": "variants",
        "title": "Single, Double And Stereo Anniversaries",
        "eyebrow": "Separate Factory Configurations",
        "blocks": [
          {
            "type": "cards",
            "variant": "models",
            "items": [
              {
                "title": "6124 And 6125 Singles",
                "html": "<p>The 6124 identifies sunburst and the 6125 two-tone green in the original Single family. Confirm the pickup opening and controls when a second pickup has been added.</p>"
              },
              {
                "title": "6117 And 6118 Doubles",
                "html": "<p>The corresponding Double numbers are 6117 for sunburst and 6118 for two-tone green. Two installed pickups need compatible routing and wiring evidence before they establish a factory Double.</p>"
              },
              {
                "title": "6111, 6112 And Later Numbers",
                "html": "<p>The stereo Anniversary versions require their own circuit comparison. Later numbering also includes the 7560 Double. A modern model that reuses a familiar number needs its own production-date check.</p>"
              }
            ]
          }
        ],
        "tone": "light"
      },
      {
        "type": "section",
        "id": "archive",
        "title": "A Two-Tone Single In The Archive",
        "eyebrow": "Photo Timeline",
        "blocks": [
          {
            "type": "archive",
            "items": [
              {
                "label": "1960 Gretsch 6125 Single Anniversary",
                "title": "Front, Back And Headstock Of One Guitar",
                "html": "<p>The photographs show the same 1960 Gretsch 6125 Single Anniversary. Its light top contrasts with the darker green back, while the headstock carries the Anniversary badge. The face photograph shows the pickup and bridge without requiring disassembly. The photographs show this Single Anniversary’s one-pickup body and controls.</p><p>Take the same views of your instrument before drawing a conclusion about color. Phone white balance can turn pale green into cream, and glare can hide a sunburst transition. The guard's color should also be described separately from the painted body. A different guard shade doesn't by itself establish a refinish.</p>",
                "photos": [
                  ph.anniversary7,
                  ph.anniversary2,
                  ph.anniversary4,
                  ph.anniversary5
                ]
              }
            ]
          }
        ],
        "tone": "archive"
      },
      {
        "type": "section",
        "id": "label",
        "title": "Read The 1960 Single’s Label",
        "eyebrow": "The Digits Actually Visible",
        "blocks": [
          {
            "type": "serials",
            "items": [
              {
                "serial": "36439",
                "title": "A Blank Model Field Beside A Readable Number",
                "photo": ph.anniversary6,
                "html": "<p>The interior label in this 1960 Gretsch 6125 Single Anniversary reads 36439. The model line is blank. Its one-pickup, two-tone green configuration identifies the Single Anniversary version. Read the complete serial alongside the body, pickup and hardware details.</p><p>The photograph shows a rectangular Brooklyn label with an oval Gretsch emblem. The orange and gray paper, oval emblem and readable serial can be recorded without filling in the empty model field.</p>"
              }
            ]
          },
          {
            "type": "prose",
            "html": "<p>Gretsch’s published sequential chart places serial 36439 in 1960. A chart match still doesn't prove that a label has never moved or that every installed part is factory original. Compare the complete guitar when assessing originality. A model field left blank shouldn't be filled from what an owner hopes the guitar is.</p><p>Use the <a href=\"/gretsch-labels-and-serial-number-locations/\">Gretsch label examples</a> and <a href=\"/gretsch-serial-number-lookup/\">serial lookup</a> together. Later orange labels can carry a different sequence, and Baldwin month/year codes require their own interpretation. A number’s length is not enough to choose between systems.</p><p>The reused 1957-label batch discussed in Joe’s Gretsch guides is another warning against a serial-only verdict. If a number points to a period before the Anniversary's introduction, examine the format, label and body rather than declaring a previously unknown early Anniversary. Keep an unresolved mismatch visible until further evidence explains it.</p>"
          }
        ],
        "tone": "light"
      },
      {
        "type": "section",
        "id": "hardware",
        "title": "Bridge, Tailpiece And Construction Checks",
        "eyebrow": "Parts That Can Outlast A Setup",
        "blocks": [
          {
            "type": "prose",
            "html": "<p>The archive Single carries a Space Control bridge with wheel-shaped saddles along a threaded bar and a fixed G-cutout tailpiece. These are separate parts: the bridge supports the strings, while the tailpiece anchors them. Record both. A new bridge can sit on the old wooden base without leaving the holes associated with a vibrato installation.</p><p>Compare the hinge and lower body edge if a Bigsby has been fitted. Unused holes, outlines in the finish or hardware supplied in the case can help explain a change. An absence of visible extra holes doesn't certify originality. Joe’s <a href=\"/gretsch-bridges-and-tailpieces/\">bridge and tailpiece guide</a> explains these different mounting situations.</p><p>Inspect the neck heel and binding around the rim. A refret replaces the metal frets; it doesn't normally move the thumbnail inlays. A replaced fingerboard is a different category of work. On a Double, compare its fingerboard binding and trim with the relevant period rather than assuming every Anniversary shares the Single's exact appointments.</p>"
          },
          {
            "type": "checklist",
            "items": [
              {
                "title": "Record The Whole Finish Scheme",
                "html": "<p>Include the top, rear, sides and neck. Identify known overspray or refinishing, and leave uncertain color names open until the complete view and model record agree.</p>"
              },
              {
                "title": "Show Every Control Position",
                "html": "<p>Keep the pickup surrounds, guard and switches visible together. Note holes or plugs that the current layout doesn't use.</p>"
              },
              {
                "title": "Preserve The Neck Evidence",
                "html": "<p>Photograph the heel, rear headstock, tuners and fingerboard. Explain any documented neck repair or replacement rather than relying on a matching surface color.</p>"
              },
              {
                "title": "Separate Observation From Conclusion",
                "html": "<p>A stamp can be read, a hole can be photographed and a control can be tested. A claim of untouched factory condition needs those observations plus a supported model comparison.</p>"
              }
            ]
          }
        ],
        "tone": "light"
      },
      {
        "type": "section",
        "id": "reissue",
        "title": "Later Anniversary Guitars Repeat The Look",
        "eyebrow": "Where Original-Era Identification Stops",
        "blocks": [
          {
            "type": "prose",
            "html": "<p>Gretsch continued to use Anniversary names, badges, two-tone finishes and earlier-style pickups on later Japanese production. The 2006 manufacturer catalog describes contemporary Anniversary models while explaining the design's 1958 origin. That is direct evidence that the historical name and styling can appear on a much later instrument.</p><p>Read the country marking and full serial before applying a vintage chart. Some Japanese revival instruments predate the current factory-letter format. The absence of a JT prefix therefore doesn't establish a 1960s guitar. Joe’s <a href=\"/gretsch-vintage-vs-reissue/\">later-production comparisons</a> include a 1997 Double Anniversary whose model and period must remain separate from the original-era family.</p><p>A later guitar should be described by its own build date, even when a model name includes an older year. This page doesn't price those exclusions. Once the original American model and its condition are established, use the <a href=\"/post/gretsch-anniversary-value-guide/\">Single and Double Anniversary values</a> for the matching version.</p>"
          }
        ],
        "tone": "dark"
      },
      {
        "type": "section",
        "id": "request",
        "title": "Have The Anniversary Evidence Reviewed",
        "eyebrow": "Model, Date And Changes",
        "blocks": [
          {
            "type": "cta",
            "title": "Send Joe Your Anniversary Photos",
            "html": "<p>Include the serial and model fields, the entire front and rear, and the pickup or finish detail that prompted your question. Let Joe know which information came from the guitar and which came from a previous owner. Further inspection can refine a preliminary photo identification.</p>",
            "appraisalLabel": "Get Identification Help",
            "sellLabel": "Sell My Gretsch",
            "sellHref": "/sell-my-gretsch-guitar/"
          }
        ],
        "tone": "light"
      },
      {
        "type": "section",
        "id": "references",
        "title": "Anniversary Identification References",
        "eyebrow": "Period Catalogs And Photographed Evidence",
        "blocks": [
          {
            "type": "sources",
            "items": [
              {
                "title": "Gretsch 1968 Catalog",
                "href": "https://acousticmusic.org/wp-content/uploads/2016/02/Gretsch-1968-Catalog.pdf",
                "note": "Printed page 26: model-to-finish mapping, Single and Double equipment, HiLo’Trons and Space Control bridges."
              },
              {
                "title": "Gretsch 2006 Catalog",
                "href": "https://assets.ctfassets.net/3xaxfhpie9jb/5cyb04bUhGs8gSQ8sq8S0q/da3d4b7448b60bd15a82b2e6de07c9da/2006-Gretsch-Catalog.pdf",
                "note": "The 1958 commemorative origin and manufacturer-documented later Anniversary models."
              },
              {
                "title": "Georgia Southern’s Gretsch Collection",
                "href": "https://www.georgiasouthern.edu/campuses/visit/gretsch-museum/collection",
                "note": "The collection’s later American 7560 Anniversary example."
              },
              {
                "title": "Gretsch Product Dating",
                "href": "https://gretschguitars.com/support/product-dating",
                "note": "Sequential chart placement and changes in label and date-code systems."
              },
              {
                "title": "Joe’s Pickup Reference",
                "href": "/gretsch-pickup-dating-guide/",
                "note": "Visible HiLo’Tron and Filter’Tron differences and limits of cover identification."
              },
              {
                "title": "Joe’s Gretsch Body Guide",
                "href": "/gretsch-body-binding-and-inlays/",
                "note": "Anniversary branches, inlays and binding inspection context."
              },
              {
                "title": "Gretsch Early Serial History",
                "href": "https://blog.gretschguitars.com/2016/05/gretschtech-serial-numbers-1930s-1966/",
                "note": "The need to retain serial-location context and reused-label exceptions."
              },
              {
                "title": "Firsthand Examination Of A 1960 Single Anniversary",
                "href": "https://archive.12fret.com/sold/1960-gretsch-6124-single-anniversary/",
                "note": "Measured body and scale, rosewood board, HiLo’Tron equipment, and the earlier ebony/Filter’Tron comparison."
              }
            ]
          }
        ],
        "tone": "light"
      }
    ],
    "faqs": [
      {
        "q": "Does Double Anniversary Mean A Double Cutaway?",
        "a": "No. Single and Double refer to the pickup configurations. Count and inspect the pickups, then verify the model and any modification history."
      },
      {
        "q": "Which Numbers Identify The Original Two-Tone Models?",
        "a": "6125 identifies the two-tone Single and 6118 the two-tone mono Double in the period catalog. The stereo two-tone branch uses 6112."
      },
      {
        "q": "Can A Blank Model Line Still Allow Identification?",
        "a": "It can leave enough evidence for a model comparison, but the missing field should be disclosed. The 1960 6125 example combines serial 36439 with a one-pickup, two-tone body."
      },
      {
        "q": "Does A Green Finish And Anniversary Badge Prove A 1958 Build?",
        "a": "No. Later instruments repeated both details. Establish the serial system and production context before assigning a vintage date."
      }
    ],
    "closing": "<p>An Anniversary description should tell the reader which model branch the evidence supports and which features may have changed. Keep the full label, pickup layout and both finish colors together. That makes the next inspection or appraisal more useful without guessing at a missing field. For the matching price ranges, see the <a href=\"/post/gretsch-anniversary-value-guide/\">Gretsch Anniversary value guide</a>.</p>"
  }
];
