document.addEventListener('DOMContentLoaded', function() {

var currentSerial = "";
var selectedLocation = "";
var lookupType = "serial";

// ─────────────────────────────────────────────
// CROSS-REFERENCE TIP ENGINE — LAZY INITIALIZED
// Tips are not built until the first decode is triggered.
// This eliminates the input lag on mobile caused by the
// JS engine parsing these large string literals at page load.
// ─────────────────────────────────────────────

var _UNIVERSAL_TIPS = null;
var _RANGE_TIPS = null;

function getUniversalTips() {
  if (_UNIVERSAL_TIPS) return _UNIVERSAL_TIPS;
  _UNIVERSAL_TIPS = [
    {
      label: "Headstock Logo",
      text: 'Gibson tweaked the style, font, and finish of the headstock logo at multiple points across its history. Comparing yours against the published logo timeline can confirm or narrow a date range fast.',
      link: "#headstock"
    },
    {
      label: "Pot Codes",
      text: 'The potentiometers (volume and tone pots) inside your guitar are date-coded from the factory. Reading those codes is one of the most reliable ways to confirm a build year, often more reliable than the serial number itself. See our guide to reading pot codes.',
      link: "#pots"
    },
    {
      label: "Knobs",
      text: 'Knob styles changed at specific points in Gibson\'s history. Bonnet/reflector (top hat) knobs dominated the 1950s through mid-1960s, while witch hat knobs arrived around late 1967 or 68. Confirming the knob style helps nail down the year when the serial number is fuzzy.',
      link: "#knobs"
    },
    {
      label: "Original Case",
      text: 'If the guitar still has its original case, the case style, hardware, and interior color all corroborate the build year. Case construction followed the same general timeline as the instruments themselves.',
      link: "#cases"
    }
  ];
  return _UNIVERSAL_TIPS;
}

function getRangeTips() {
  if (_RANGE_TIPS) return _RANGE_TIPS;
  _RANGE_TIPS = [
    {
      min: 71041, max: 96600,
      tips: [
        {
          label: "Model-Specific Features (ES Series)",
          text: 'This serial range falls in an in-between window that matters a lot for ES-series hollowbodies. On an ES-335, check whether the fingerboard has <strong>dot inlays</strong> (correct for 1962 through early 1964) or <strong>block inlays</strong> (which arrived mid-1964). Body shape matters too. The ES-335, ES-345, and ES-355 each have distinct proportions that can rule certain years in or out.',
          link: "#bridge"
        },
        {
          label: "Pot Codes: Critical for This Range",
          text: 'Pot codes matter <em>especially</em> here. These serial numbers overlap across 1962, 1963, and 1964, so the potentiometers are usually the most definitive way to pin down the exact year.',
          link: "#pots"
        }
      ]
    },
    {
      min: 100000, max: 106099,
      tips: [
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: 'Serials in this range can date to either <strong>1963 or 1967</strong>. Knob style is your best differentiator. A 1963 example should have <strong>reflector (top hat) knobs</strong>, while a 1967 example will almost always have <strong>witch hat knobs</strong>.',
          link: "#knobs"
        },
        {
          label: "Tuners: Single Line vs. Double Line",
          text: 'Look at the tuner buttons closely. <strong>Single-line Klusons</strong> point to 1963. <strong>Double-line Klusons</strong> were phased in during the mid-1960s and fit a 1967 date.',
          link: "#tuners"
        }
      ]
    },
    {
      min: 109000, max: 109999,
      tips: [
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: 'This range covers <strong>1963 and 1967</strong>. Reflector (top hat) knobs land you in 1963; witch hat knobs read strongly as 1967.',
          link: "#knobs"
        },
        {
          label: "Tuners: Single Line vs. Double Line",
          text: 'Single-line Kluson tuners here favor 1963. Double-line Klusons line up with 1967.',
          link: "#tuners"
        }
      ]
    },
    {
      min: 111550, max: 115799,
      tips: [
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: 'This range overlaps <strong>1963 and 1967</strong>. Reflector (top hat) knobs match 1963; witch hat knobs match 1967.',
          link: "#knobs"
        },
        {
          label: "Tuners: Single Line vs. Double Line",
          text: 'Single-line Klusons here suggest 1963. Double-line Klusons fit 1967.',
          link: "#tuners"
        }
      ]
    },
    {
      min: 118300, max: 120999,
      tips: [
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: 'This range covers <strong>1963 and 1967</strong>. Reflector (top hat) knobs send you to 1963; witch hat knobs send you to 1967.',
          link: "#knobs"
        },
        {
          label: "Tuners: Single Line vs. Double Line",
          text: 'Single-line Kluson tuners argue for 1963. Double-line Klusons argue for 1967.',
          link: "#tuners"
        }
      ]
    },
    {
      min: 140000, max: 140100,
      tips: [
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: 'This narrow range falls inside the 1963/1967 overlap. Reflector (top hat) knobs put you in 1963; witch hat knobs are characteristic of 1967.',
          link: "#knobs"
        },
        {
          label: "Tuners: Single Line vs. Double Line",
          text: 'Single-line Klusons in this range read as 1963. Double-line Klusons read as 1967.',
          link: "#tuners"
        }
      ]
    },
    {
      min: 174223, max: 176643,
      tips: [
        {
          label: "Hardware Finish: Nickel vs. Chrome",
          text: 'Hardware finish is a useful clue here. Throughout <strong>1964</strong>, Gibson was still using nickel-plated hardware across the board. By <strong>1965</strong> chrome was becoming more common, though some 1965 examples still shipped with nickel. Nickel narrows you toward 1964; chrome leans 1965 without ruling 1964 out entirely.',
          link: "#bridge"
        },
        {
          label: "Tuners: Single Line Klusons",
          text: '<strong>Single-line Kluson tuners</strong> argue reliably for 1964. Gibson transitioned to double-line Klusons during 1965. So if your guitar has single-line tuners, 1964 is almost certain. Both years could have double-line tuners, though, so those alone don\'t settle it.',
          link: "#tuners"
        }
      ]
    },
    {
      min: 306000, max: 310999,
      tips: [
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: 'Knob style is the cleanest clue for this range. <strong>Reflector (top hat) knobs</strong> place you firmly in <strong>1965</strong>. Witch hat knobs likely mean <strong>1967</strong> and are a sure thing if your guitar is a <strong>1968</strong>.',
          link: "#knobs"
        },
        {
          label: "Hardware Finish: Nickel vs. Chrome",
          text: '<strong>Nickel hardware</strong> locks the date to <strong>1965</strong> in this range. Gibson was still using nickel throughout that year. Either year could have chrome hardware, so chrome alone won\'t resolve it.',
          link: "#bridge"
        }
      ]
    },
    {
      min: 329180, max: 330199,
      tips: [
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: 'This range overlaps <strong>1965 and 1967</strong>. Reflector (top hat) knobs put you in 1965; witch hat knobs lean toward 1967.',
          link: "#knobs"
        },
        {
          label: "Hardware Finish: Nickel vs. Chrome",
          text: 'Nickel hardware nails the date to 1965. Chrome is possible on either year.',
          link: "#bridge"
        }
      ]
    },
    {
      min: 330200, max: 332240,
      tips: [
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: 'Knob style is your clearest separator here. <strong>Reflector knobs</strong> mean <strong>1965</strong>. Witch hat knobs likely mean <strong>1967</strong> and are a certainty for <strong>1968</strong>.',
          link: "#knobs"
        },
        {
          label: "Hardware Finish: Nickel vs. Chrome",
          text: 'Nickel hardware is a sure sign of <strong>1965</strong> in this range. Chrome was used across all three possible years, so it narrows the field but won\'t resolve the date by itself.',
          link: "#bridge"
        }
      ]
    },
    {
      min: 406667, max: 409670,
      tips: [
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: 'Knob style is the most useful clue for this range. <strong>Reflector (top hat) knobs</strong> place you in <strong>1966 or early 1967</strong>. <strong>Witch hat knobs</strong> push the date to <strong>mid-to-late 1967 or 1968</strong>.',
          link: "#knobs"
        }
      ]
    },
    {
      min: 500000, max: 500999,
      tips: [
        {
          label: "Hardware Finish: Nickel vs. Chrome",
          text: '<strong>Nickel hardware</strong> nails the date to <strong>1965</strong> in this range. Chrome was used across all three possible years, so chrome alone can\'t resolve the date.',
          link: "#bridge"
        },
        {
          label: "Tuners: Gibson Deluxe",
          text: '<strong>Gibson Deluxe tuners</strong> (the ones with the large, rounded buttons stamped with the Gibson logo) were introduced in 1969 and lock the build date to <strong>1969</strong>.',
          link: "#tuners"
        },
        {
          label: "Volute",
          text: 'Gibson started adding a <strong>volute</strong>, a small carved ridge on the back of the neck where it meets the headstock, in 1969. If your guitar has a volute, it\'s a <strong>certain 1969</strong>.',
          link: "#neck"
        },
        {
          label: "Neck Construction",
          text: 'A <strong>three-piece mahogany neck</strong> means <strong>1969</strong>, period. One-piece mahogany necks are correct for all three possible years.',
          link: "#neck"
        },
        {
          label: "Knobs",
          text: 'Reflector (top hat) knobs were standard through early 1967. <strong>Witch hat knobs</strong> took over from late 1967 onward and are correct for 1968 and 1969.',
          link: "#knobs"
        }
      ]
    },
    {
      min: 501703, max: 502706,
      tips: [
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: 'Knob style cleanly separates the two years. <strong>Reflector (top hat) knobs</strong> mean <strong>1965</strong>. <strong>Witch hat knobs</strong> mean <strong>1968</strong>.',
          link: "#knobs"
        },
        {
          label: "Hardware Finish: Nickel vs. Chrome",
          text: '<strong>Nickel hardware</strong> nails the date to <strong>1965</strong>. Chrome was used on both years, so chrome alone isn\'t conclusive.',
          link: "#bridge"
        }
      ]
    },
    {
      min: 503405, max: 520955,
      tips: [
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: 'Knob style cleanly separates these two years. Reflector (top hat) knobs send you to <strong>1965</strong>. Witch hat knobs send you to <strong>1968</strong>.',
          link: "#knobs"
        },
        {
          label: "Hardware Finish: Nickel vs. Chrome",
          text: '<strong>Nickel hardware</strong> means <strong>1965</strong>. Chrome hardware is possible on both years.',
          link: "#bridge"
        }
      ]
    },
    {
      min: 530061, max: 530850,
      tips: [
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: '<strong>Reflector (top hat) knobs</strong> in this range read as <strong>1966</strong>. <strong>Witch hat knobs</strong> push you toward <strong>1968 or 1969</strong>.',
          link: "#knobs"
        },
        {
          label: "Neck Construction",
          text: 'A <strong>three-piece mahogany neck</strong> nails the build at <strong>1969</strong>.',
          link: "#neck"
        },
        {
          label: "Tuners: Gibson Deluxe",
          text: '<strong>Gibson Deluxe tuners</strong> were introduced in 1969 and lock the date there.',
          link: "#tuners"
        }
      ]
    },
    {
      min: 540000, max: 540795,
      tips: [
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: '<strong>Reflector (top hat) knobs</strong> here mean <strong>1966</strong>. <strong>Witch hat knobs</strong> mean <strong>1969</strong>.',
          link: "#knobs"
        },
        {
          label: "Neck Construction",
          text: 'A <strong>three-piece mahogany neck</strong> places the guitar in <strong>1969</strong>.',
          link: "#neck"
        },
        {
          label: "Tuners: Gibson Deluxe",
          text: '<strong>Gibson Deluxe tuners</strong> place the build firmly in <strong>1969</strong>.',
          link: "#tuners"
        }
      ]
    },
    {
      min: 570645, max: 570755,
      tips: [
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: '<strong>Witch hat knobs</strong> nail the date to <strong>1967</strong> in this range. Either year could have reflector knobs, so reflectors alone aren\'t conclusive, though they are at least consistent with 1966.',
          link: "#knobs"
        }
      ]
    },
    {
      min: 580086, max: 580999,
      tips: [
        {
          label: "Neck Construction",
          text: 'A <strong>three-piece mahogany neck</strong> places the guitar firmly at <strong>1969</strong>.',
          link: "#neck"
        },
        {
          label: "Tuners: Gibson Deluxe",
          text: '<strong>Gibson Deluxe tuners</strong> debuted in 1969, so their presence locks the date to <strong>1969</strong>.',
          link: "#tuners"
        },
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: 'Witch hat knobs arrived around late 1967. If your guitar has witch hat knobs, you\'re likely looking at <strong>1967 or 1969</strong>. Reflector knobs fit 1966 or early 1967.',
          link: "#knobs"
        }
      ]
    },
    {
      min: 600000, max: 606090,
      tips: [
        {
          label: "Neck Construction",
          text: 'A <strong>three-piece mahogany neck</strong> means <strong>1969</strong>.',
          link: "#neck"
        },
        {
          label: "Tuners: Gibson Deluxe",
          text: '<strong>Gibson Deluxe tuners</strong> place the build at <strong>1969</strong>.',
          link: "#tuners"
        },
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: 'Witch hat knobs arrived around late 1967. So if your guitar has witch hat knobs, the most likely candidates are <strong>1967 or 1969</strong>.',
          link: "#knobs"
        }
      ]
    },
    {
      min: 700000, max: 700799,
      tips: [
        {
          label: "Neck Construction",
          text: 'A <strong>three-piece mahogany neck</strong> nails the build at <strong>1969</strong>.',
          link: "#neck"
        },
        {
          label: "Tuners: Gibson Deluxe",
          text: '<strong>Gibson Deluxe tuners</strong> debuted in 1969 and place the date there.',
          link: "#tuners"
        },
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: 'Witch hat knobs arrived in late 1967. Witch hat knobs in this range mean <strong>1967 or 1969</strong>.',
          link: "#knobs"
        }
      ]
    },
    {
      min: 750000, max: 750999,
      tips: [
        {
          label: "Neck Construction",
          text: 'A <strong>three-piece mahogany neck</strong> places the guitar in <strong>1969</strong>. Either year could have a one-piece neck, though.',
          link: "#neck"
        },
        {
          label: "Volute",
          text: 'A <strong>volute</strong> places the guitar in <strong>1969</strong>. Neither year is guaranteed to have one, though, so the absence of a volute doesn\'t rule 1969 out.',
          link: "#neck"
        },
        {
          label: "Tuners: Gibson Deluxe",
          text: '<strong>Gibson Deluxe tuners</strong> place the build firmly in <strong>1969</strong>.',
          link: "#tuners"
        }
      ]
    },
    {
      min: 800000, max: 800999,
      tips: [
        {
          label: "Neck Construction",
          text: 'A <strong>three-piece mahogany neck</strong> nails the build at <strong>1969</strong>.',
          link: "#neck"
        },
        {
          label: "Tuners: Gibson Deluxe",
          text: '<strong>Gibson Deluxe tuners</strong> place the build at <strong>1969</strong>.',
          link: "#tuners"
        },
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: 'Witch hat knobs arrived in late 1967. Witch hat knobs here mean <strong>1967, 1968, or 1969</strong>.',
          link: "#knobs"
        }
      ]
    },
    {
      min: 801000, max: 812838,
      tips: [
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: '<strong>Reflector (top hat) knobs</strong> mean <strong>1966</strong> in this range. <strong>Witch hat knobs</strong> mean <strong>1969</strong>.',
          link: "#knobs"
        },
        {
          label: "Neck Construction",
          text: 'A <strong>three-piece mahogany neck</strong> leans heavily toward <strong>1969</strong>, though either year could have a one-piece neck.',
          link: "#neck"
        },
        {
          label: "Volute",
          text: 'A <strong>volute</strong> leans toward <strong>1969</strong>, but either year could also have no volute.',
          link: "#neck"
        }
      ]
    },
    {
      min: 820000, max: 820087,
      tips: [
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: 'Reflector (top hat) knobs put you in <strong>1966</strong>. Witch hat knobs put you in <strong>1969</strong>.',
          link: "#knobs"
        },
        {
          label: "Neck Construction",
          text: 'A <strong>three-piece mahogany neck</strong> argues strongly for <strong>1969</strong>, though either year could also have a one-piece neck.',
          link: "#neck"
        },
        {
          label: "Volute",
          text: 'A <strong>volute</strong> argues for <strong>1969</strong>, but either year could lack one.',
          link: "#neck"
        }
      ]
    },
    {
      min: 828002, max: 858999,
      tips: [
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: '<strong>Reflector (top hat) knobs</strong> here read as <strong>1966</strong>. <strong>Witch hat knobs</strong> read as <strong>1969</strong>.',
          link: "#knobs"
        },
        {
          label: "Neck Construction",
          text: 'A <strong>three-piece mahogany neck</strong> reads as <strong>1969</strong>, though either year could ship with a one-piece neck.',
          link: "#neck"
        },
        {
          label: "Volute",
          text: 'A <strong>volute</strong> reads as <strong>1969</strong>, but either year could also lack one.',
          link: "#neck"
        }
      ]
    },
    {
      min: 897000, max: 898999,
      tips: [
        {
          label: "Knobs: Reflector vs. Witch Hat",
          text: 'Witch hat knobs are strongly associated with 1967 onward, but some early 1967 examples in this range still have <strong>reflector knobs</strong>, so reflectors here don\'t automatically mean an earlier date. Witch hat knobs fit both 1967 and 1969.',
          link: "#knobs"
        },
        {
          label: "Neck Construction",
          text: 'A <strong>three-piece mahogany neck</strong> places the build at <strong>1969</strong>.',
          link: "#neck"
        },
        {
          label: "Volute",
          text: 'A <strong>volute</strong> places the build at <strong>1969</strong>.',
          link: "#neck"
        }
      ]
    }
  ];
  return _RANGE_TIPS;
}

function resultIsReusedEra(resultHTML) {
  var stripped = resultHTML.replace(/<[^>]*>/g, '');
  var years = stripped.match(/\b(19[6-9]\d|1970)\b/g);
  if (!years) return false;
  return years.some(function(y) {
    var n = parseInt(y);
    return n >= 1960 && n <= 1970;
  });
}

function getCrossRefTips(serialNum, isFon, resultHTML) {
  var tips = [];
  var universal = getUniversalTips();
  for (var i = 0; i < universal.length; i++) {
    tips.push(universal[i]);
  }
  if (!isFon && !isNaN(serialNum) && resultHTML && resultIsReusedEra(resultHTML)) {
    var num = parseInt(serialNum);
    var ranges = getRangeTips();
    for (var r = 0; r < ranges.length; r++) {
      if (num >= ranges[r].min && num <= ranges[r].max) {
        for (var t = 0; t < ranges[r].tips.length; t++) {
          tips.push(ranges[r].tips[t]);
        }
      }
    }
  }
  return tips;
}

function renderCrossRefTips(tips) {
  if (!tips || tips.length === 0) return '';
  var html = '<div class="crossref-box" aria-label="Cross-reference dating tips"><div class="crossref-header">Cross-Reference Dating Tips</div><div class="crossref-body">';
  for (var i = 0; i < tips.length; i++) {
    html += '<div class="crossref-tip"><strong><a href="' + tips[i].link + '">' + tips[i].label + ' <span aria-hidden="true">\u2192</span></a></strong>' + tips[i].text + '</div>';
  }
  html += '</div></div>';
  return html;
}

function injectCrossRefTips(serialNum, isFon, resultHTML) {
  var tips = getCrossRefTips(serialNum, isFon, resultHTML);
  document.getElementById('crossref-tips').innerHTML = renderCrossRefTips(tips);
}

// ─────────────────────────────────────────────
// CUSTOM SHOP PANEL
// ─────────────────────────────────────────────
window.toggleCSPanel = function() {
    var btn = document.getElementById('cs-toggle-btn');
    var panel = document.getElementById('cs-panel');
    var isOpen = panel.classList.contains('open');
    panel.classList.toggle('open', !isOpen);
    btn.classList.toggle('open', !isOpen);
    btn.setAttribute('aria-expanded', !isOpen);
    panel.setAttribute('aria-hidden', isOpen);
};

window.updateCSHint = function() {
    var model = document.getElementById('cs-model-select').value;
    var hints = {
        cs_prefix:   'Enter the full serial as-is, including the CS prefix. Example: CS91234',
        lp_reissue:  'Enter the full number. First digit = model year reissued (4=\'54, 9=\'59 etc). Example: 991234 = 1959 reissue built in 1999.',
        sg_reissue:  'Enter the full impressed number. First digit = build year, last digit = model code. Example: 9RRRR3 = built 1999, 1963 reissue.',
        es_61_64:    'Enter the 6-digit number from the headstock or f-hole label. Format: 1YRRRR.',
        es_58:       'Enter the number from the f-hole label including A8 prefix. Format: A8YRRRR.',
        es_59:       'Enter the number from the f-hole label including A9 prefix. Format: A9YRRRR.',
        carved_top:  'Enter the full number. Format: YDDDYRRR. Uses the same split-year system as standard modern Gibsons.',
        lp_classic:  'Enter the full number without spaces. 1989\u20131999: first digit is last digit of year. 2000\u20132014: first two digits are the year.',
    };
    document.getElementById('cs-hint').textContent = hints[model] || '';
};

window.decodeCSSerial = function() {
    var model = document.getElementById('cs-model-select').value;
    var raw = document.getElementById('cs-serial-input').value.trim().toUpperCase().replace(/\s/g, '');
    if (!model) { alert('Please select a model type first.'); return; }
    if (!raw || raw.length < 3) { alert('Please enter a valid serial number.'); return; }

    var result = '';

    if (model === 'cs_prefix') {
        if (!raw.startsWith('CS') || raw.length < 5) {
            result = 'That doesn\'t look like a CS prefix serial. It should start with CS followed by digits. Example: CS91234.';
        } else {
            var yearDigit = raw[2];
            var decade = (parseInt(yearDigit) <= 2) ? '200' : '199';
            var year = decade + yearDigit;
            result = 'Gibson Custom Shop instrument built in <strong>' + year + '</strong>.';
        }
    } else if (model === 'lp_reissue') {
        if (raw.length < 5 || isNaN(raw)) {
            result = 'Please enter a numeric serial number for a Historic Reissue Les Paul. Example: 991234.';
        } else {
            var modelDigit = raw[0];
            var yearDigit = raw[1];
            var modelYears = { '4':'1954','5':'1955','6':'1956','7':'1957','8':'1958','9':'1959','0':'1960' };
            var modelYear = modelYears[modelDigit] || ('195' + modelDigit);
            var decade = (parseInt(yearDigit) <= 4) ? '200' : '199';
            var buildYear = decade + yearDigit;
            var modelModels = {
                '4':'Les Paul Standard, Les Paul Custom',
                '5':'Les Paul Standard','6':'Les Paul Standard',
                '7':'Les Paul Standard, Les Paul Custom, Les Paul Jr Single Cut, Les Paul Special Single Cut',
                '8':'Les Paul Standard, Les Paul Jr Double Cut, Korina Flying V, Korina Explorer',
                '9':'Les Paul Standard','0':'Les Paul Standard, Les Paul Special Double Cut'
            };
            var modelName = modelModels[modelDigit] ? ' (' + modelModels[modelDigit] + ')' : '';
            result = '<strong>' + modelYear + ' Historic Reissue' + modelName + '</strong>, built in <strong>' + buildYear + '</strong>.';
        }
    } else if (model === 'sg_reissue') {
        if (raw.length < 5 || isNaN(raw)) {
            result = 'Please enter a numeric serial number for an impressed reissue. Example: 912343.';
        } else {
            var yearDigit = raw[0];
            var modelCode = raw[raw.length - 1];
            var decade = (parseInt(yearDigit) <= 4) ? '200' : '199';
            var buildYear = decade + yearDigit;
            var modelCodes = {
                '1':'1961 SG Standard','2':'1962 SG Standard, SG Custom',
                '3':'1963 SG Custom, SG Special, SG Junior, Firebird','4':'1964 SG Standard',
                '5':'1965 Non-Reverse Firebird','7':'1967 Flying V',
                '8':'1968 Les Paul Custom, Les Paul Standard'
            };
            var modelName = modelCodes[modelCode] || 'Unknown model code. Check the model code table above.';
            result = '<strong>' + modelName + '</strong> reissue, built in <strong>' + buildYear + '</strong>.';
        }
    } else if (model === 'es_61_64') {
        if (!raw.startsWith('1') || raw.length < 5) {
            result = 'ES 1961/1964 reissue serials start with 1 followed by the build year digit. Example: 191234.';
        } else {
            var yearDigit = raw[1];
            var decade = (parseInt(yearDigit) <= 4) ? '200' : '199';
            var buildYear = decade + yearDigit;
            result = '1961 or 1964 ES Reissue built in <strong>' + buildYear + '</strong>.';
        }
    } else if (model === 'es_58') {
        if (!raw.startsWith('A8') || raw.length < 6) {
            result = '1958 ES-335 reissue serials start with A8. Example: A891234.';
        } else {
            var yearDigit = raw[2];
            var decade = (parseInt(yearDigit) <= 4) ? '200' : '199';
            var buildYear = decade + yearDigit;
            result = '1958 ES-335 Reissue built in <strong>' + buildYear + '</strong>.';
        }
    } else if (model === 'es_59') {
        if (!raw.startsWith('A9') || raw.length < 6) {
            result = '1959 ES reissue serials start with A9. Example: A991234.';
        } else {
            var yearDigit = raw[2];
            var decade = (parseInt(yearDigit) <= 4) ? '200' : '199';
            var buildYear = decade + yearDigit;
            result = '1959 ES Reissue built in <strong>' + buildYear + '</strong>.';
        }
    } else if (model === 'carved_top') {
        if (raw.length < 7 || isNaN(raw)) {
            result = 'Please enter the full numeric serial for a carved-top Custom Shop model. Format: YDDDYRRR.';
        } else {
            var y1 = raw[0]; var y2 = raw[4];
            var yearDigits = y1 + y2;
            var fullYear = (parseInt(y1) <= 2) ? '20' + yearDigits : '19' + yearDigits;
            var dayOfYear = parseInt(raw.substring(1,4));
            var date = dayOfYearToDate(dayOfYear, parseInt(fullYear));
            result = 'Carved-top Custom Shop instrument built in <strong>' + fullYear + '</strong>' + (date ? ', around <strong>' + date + '</strong>' : '') + '.';
        }
    } else if (model === 'lp_classic') {
        if (isNaN(raw)) {
            result = 'Les Paul Classic serials are numeric only, no prefix. Example: 91234 or 071234.';
        } else if (raw.length <= 5) {
            var yearDigit = raw[0];
            result = 'Les Paul Classic built in <strong>199' + yearDigit + '</strong>.';
        } else if (raw.length === 6) {
            var yearStr = raw.substring(0, 2);
            var yearNum = parseInt(yearStr);
            var fullYear = (yearNum >= 0 && yearNum <= 14) ? '20' + yearStr : '19' + yearStr;
            var madeUsaNote = (yearNum >= 7 && yearNum <= 14) ? ' "Made in USA" stamp should be present on this example.' : ' No "Made in USA" stamp on most examples from this year.';
            result = 'Les Paul Classic built in <strong>' + fullYear + '</strong>.' + madeUsaNote;
        } else {
            result = 'Unexpected length for a Les Paul Classic serial. Check the number and try again, or refer to the chart above.';
        }
    }

    showCSResult(raw, result);
};

function dayOfYearToDate(day, year) {
    if (!day || day < 1 || day > 366) return null;
    try {
        var d = new Date(year, 0);
        d.setDate(day);
        return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    } catch(e) { return null; }
}

function showCSResult(serial, result) {
    document.getElementById('result-text').innerHTML = '<strong>Serial Number: ' + serial + '</strong><br><br>' + result;
    document.getElementById('crossref-tips').innerHTML = renderCrossRefTips(getUniversalTips());
    document.getElementById('input-step').classList.add('hidden');
    document.getElementById('tool-results').classList.remove('hidden');
    document.getElementById('tool-results').focus();
}

// ─────────────────────────────────────────────
// STANDARD TOOL LOGIC
// ─────────────────────────────────────────────
window.setLookupType = function(type) {
    lookupType = type;
    document.getElementById('select-serial').classList.toggle('active', type === 'serial');
    document.getElementById('select-fon').classList.toggle('active', type === 'fon');
    document.getElementById('select-serial').setAttribute('aria-checked', type === 'serial');
    document.getElementById('select-fon').setAttribute('aria-checked', type === 'fon');
};

window.startLookup = function() {
    currentSerial = document.getElementById('serial-input').value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    if (currentSerial.length < 2) { alert("Please enter a valid number."); return; }
    if (lookupType === 'serial' && currentSerial.startsWith('A')) {
        selectedLocation = 'label';
        showSerialResults();
    } else if (lookupType === 'fon') {
        showFonResults();
    } else {
        document.getElementById('input-step').classList.add('hidden');
        document.getElementById('location-step').classList.remove('hidden');
    }
};

window.processSelection = function(location) {
    selectedLocation = location;
    var len = currentSerial.length;
    var prefix = currentSerial.substring(0, 2);
    if (len === 8 && ['99', '00', '06'].includes(prefix)) {
        document.getElementById('location-step').classList.add('hidden');
        document.getElementById('conflict-step').classList.remove('hidden');
    } else if (selectedLocation === 'label' && (len === 4 || len === 5) && !isNaN(currentSerial)) {
        document.getElementById('location-step').classList.add('hidden');
        document.getElementById('conflict-label-color').classList.remove('hidden');
    } else if (selectedLocation === 'wood' && len === 6 && !isNaN(currentSerial)) {
        document.getElementById('location-step').classList.add('hidden');
        document.getElementById('conflict-usa-stamp').classList.remove('hidden');
    } else {
        showSerialResults();
    }
};

window.resolveConflict = function(type) {
    document.getElementById('conflict-step').classList.add('hidden');
    document.getElementById('conflict-label-color').classList.add('hidden');
    document.getElementById('conflict-usa-stamp').classList.add('hidden');
    showSerialResults(type);
};

function showSerialResults(resolvedType) {
    var result = "";
    var s = currentSerial;
    var len = s.length;
    var firstDigit = s[0];
    var modernPrefixes = ['7', '8', '9', '0', '1', '2'];
    if (s.startsWith('A')) {
        result = decodeASeries(s);
    } else if (len === 6 && s[0] === '0' && (resolvedType === 'usa_yes' || resolvedType === 'usa_no')) {
        result = resolvedType === 'usa_yes'
            ? "Sequence with 'MADE IN USA' stamp points to <strong>1970</strong>. Norlin serials are notoriously unreliable, so cross-check with <a href=\"#pots\">Pot Codes</a> for confirmation."
            : "Sequence points to <strong>1967</strong>. Gibson reused these numbers in the 60s, so verify with <a href=\"#pots\">Pot Codes</a> or a <strong><a href=\"/free-appraisal/\">Free Appraisal</a></strong> for certainty.";
    } else if (resolvedType === 'white_label') {
        result = decodeEarlyLabel(s);
    } else if (resolvedType === 'usa_yes') {
        result = decodeExactNorlinSeventies(s);
    } else if ((selectedLocation === 'wood' || selectedLocation === 'label') && len >= 7 && modernPrefixes.includes(firstDigit) && resolvedType !== 'decal') {
        var yearDigits = s[0] + s[4];
        var fullYear = (parseInt(s[0]) <= 2) ? "20" + yearDigits : "19" + yearDigits;
        result = 'Modern Standard serial (1977\u2013Present). Your guitar was built in <strong>' + fullYear + '</strong>.';
    } else if (resolvedType === 'decal') {
        var prefix = s.substring(0, 2);
        var year = prefix === '99' ? "1975" : prefix === '00' ? "1976" : "1977";
        result = 'Decal Prefix from the mid-70s Norlin Era. Built in <strong>' + year + '</strong>.';
    } else if ((selectedLocation === 'wood' || resolvedType === 'orange_label' || resolvedType === 'usa_no' || selectedLocation === 'label') && len >= 4 && len <= 6 && !isNaN(s)) {
        result = decodeExactReusedEras(s);
    } else if (selectedLocation === 'ink_headstock' && len >= 5 && len <= 6 && !isNaN(firstDigit)) {
        var year = firstDigit === '0' ? '1960' : '195' + firstDigit;
        result = 'Golden Era ink-stamped headstock serial from <strong>' + year + '</strong>.';
    } else {
        result = "Tricky format. Common with vintage instruments. Match it against the charts below, or text Joe for expert help.";
    }

    document.getElementById('result-text').innerHTML = '<strong>Serial Number: ' + s + '</strong><br><br>' + result;
    injectCrossRefTips(s, false, result);

    document.getElementById('input-step').classList.add('hidden');
    document.getElementById('location-step').classList.add('hidden');
    document.getElementById('tool-results').classList.remove('hidden');
    document.getElementById('tool-results').focus();
}

function decodeExactNorlinSeventies(s) {
    var num = parseInt(s);
    var year = "";
    if (num <= 100000) year = "1973";
    else if (num <= 200000) year = "1970, 1971, 1972, 1973, 1974, or 1975";
    else if (num <= 300000) year = "1973, 1974, or 1975";
    else if (num <= 400000) year = "1974 or 1975";
    else if (num <= 500000) year = "1974 or 1975";
    else if (num <= 600000) year = "1974 or 1975";
    else if (num <= 700000) year = "1970, 1971, 1972, 1974, or 1975";
    else if (num <= 800000) year = "1970, 1971, or 1972";
    else if (num <= 900000) year = "1973, 1974, or 1975";
    else year = "1970, 1971, or 1972";
    return "Sequence with 'MADE IN USA' stamp points to <strong>" + year + "</strong>. Norlin serials are notoriously unreliable, so cross-check with <a href=\"#pots\">Pot Codes</a> for confirmation.";
}

function decodeExactReusedEras(s) {
    var num = parseInt(s);
    var year = "";
    if (num <= 42440) year = "1961";
    else if (num <= 61180) year = "1962";
    else if (num <= 64222) year = "1963";
    else if (num <= 71040) year = "1964";
    else if (num <= 96600) year = "1962, 1963, or 1964";
    else if (num <= 99999) year = "1963";
    else if (num <= 106099) year = "1963 or 1967";
    else if (num <= 106899) year = "1963";
    else if (num <= 109999) year = "1963 or 1967";
    else if (num <= 111549) year = "1963";
    else if (num <= 115799) year = "1963 or 1967";
    else if (num <= 118299) year = "1963";
    else if (num <= 120999) year = "1963 or 1967";
    else if (num <= 139999) year = "1963";
    else if (num <= 140100) year = "1963 or 1967";
    else if (num <= 144304) year = "1963";
    else if (num <= 144380) year = "1964";
    else if (num <= 149864) year = "1963";
    else if (num <= 149891) year = "1964";
    else if (num <= 152989) year = "1963";
    else if (num <= 174222) year = "1964";
    else if (num <= 176643) year = "1964 or 1965";
    else if (num <= 250335) year = "1964";
    else if (num <= 305983) year = "1965";
    else if (num <= 310999) year = "1965 or 1967";
    else if (num <= 320149) year = "1965";
    else if (num <= 320699) year = "1967";
    else if (num <= 329179) year = "1965";
    else if (num <= 330199) year = "1965 or 1967";
    else if (num <= 332240) year = "1965, 1967, or 1968";
    else if (num <= 348092) year = "1965";
    else if (num <= 349100) year = "1966";
    else if (num <= 368638) year = "1965";
    else if (num <= 369890) year = "1966";
    else if (num <= 370999) year = "1967";
    else if (num <= 385309) year = "1966";
    else if (num <= 390998) year = "1967";
    else if (num <= 406666) year = "1966";
    else if (num <= 409670) year = "1966, 1967, or 1968";
    else if (num <= 410900) year = "1966";
    else if (num <= 429193) year = "1966";
    else if (num <= 500999) year = "1965, 1966, 1968, or 1969";
    else if (num <= 501600) year = "1965";
    else if (num <= 501702) year = "1968";
    else if (num <= 502706) year = "1965 or 1968";
    else if (num <= 503109) year = "1968";
    else if (num <= 520955) year = "1965 or 1968";
    else if (num <= 530056) year = "1968";
    else if (num <= 530850) year = "1966, 1968, or 1969";
    else if (num <= 530993) year = "1968 or 1969";
    else if (num <= 540795) year = "1966 or 1969";
    else if (num <= 557999) year = "1966";
    else if (num <= 570643) year = "1966";
    else if (num <= 570755) year = "1966 or 1967";
    else if (num <= 570964) year = "1966";
    else if (num <= 580999) year = "1966, 1967, or 1969";
    else if (num <= 600998) year = "1966, 1967, or 1968";
    else if (num <= 606090) year = "1969";
    else if (num <= 700799) year = "1966, 1967, or 1969";
    else if (num <= 750999) year = "1968 or 1969";
    else if (num <= 800999) year = "1966, 1967, 1968, or 1969";
    else if (num <= 812838) year = "1966 or 1969";
    else if (num <= 820087) year = "1966 or 1969";
    else if (num <= 823830) year = "1966";
    else if (num <= 847488) year = "1966 or 1969";
    else if (num <= 858999) year = "1966 or 1969";
    else if (num <= 895038) year = "1967";
    else if (num <= 896999) year = "1968";
    else if (num <= 898999) year = "1967 or 1969";
    else if (num <= 899999) year = "1968";
    else if (num <= 909999) year = "1970";
    else year = "1968";
    return "Sequence points to <strong>" + year + "</strong>. Gibson reused these numbers in the 60s, so verify with <a href=\"#pots\">Pot Codes</a> or a <strong><a href=\"/free-appraisal/\">Free Appraisal</a></strong> for certainty.";
}

function decodeASeries(s) {
    var numPart = parseInt(s.substring(1));
    var year = numPart <= 1305 ? "1947" : numPart <= 2665 ? "1948" : numPart <= 4410 ? "1949" : numPart <= 6596 ? "1950" : numPart <= 9420 ? "1951" : numPart <= 12460 ? "1952" : numPart <= 17435 ? "1953" : numPart <= 18665 ? "1954" : numPart <= 21910 ? "1955" : numPart <= 24755 ? "1956" : numPart <= 26820 ? "1957" : numPart <= 28880 ? "1958" : numPart <= 32285 ? "1959" : numPart <= 34645 ? "1960" : "Beyond 1960 Range";
    return "Post-War 'A' Series serial (on interior orange label) built in: <strong>" + year + "</strong>.";
}

function decodeEarlyLabel(s) {
    var num = parseInt(s);
    var year = num <= 1150 ? "1903" : num <= 1850 ? "1904" : num <= 2550 ? "1905" : num <= 3350 ? "1906" : num <= 4250 ? "1907" : num <= 5450 ? "1908" : num <= 6950 ? "1909" : num <= 8750 ? "1910" : num <= 10850 ? "1911" : num <= 13350 ? "1912" : num <= 16100 ? "1913" : num <= 20150 ? "1914" : num <= 25150 ? "1915" : num <= 32000 ? "1916" : num <= 39500 ? "1917" : num <= 47900 ? "1918" : num <= 53800 ? "1919" : num <= 62200 ? "1920" : num <= 69300 ? "1921" : num <= 71400 ? "1922" : num <= 74900 ? "1923" : num <= 80300 ? "1924" : num <= 82700 ? "1925" : num <= 83600 ? "1926" : num <= 85400 ? "1927" : num <= 87300 ? "1928" : num <= 89750 ? "1929" : num <= 90200 ? "1930" : num <= 90450 ? "1931" : num <= 90700 ? "1932" : num <= 91400 ? "1933" : num <= 92300 ? "1934" : num <= 92800 ? "1935" : num <= 94100 ? "1936" : num <= 95200 ? "1937" : num <= 96050 ? "1938" : num <= 96600 ? "1940" : num <= 97400 ? "1941" : num <= 97700 ? "1942" : num <= 97850 ? "1943" : num <= 98250 ? "1944" : num <= 98650 ? "1945" : num <= 99300 ? "1946" : "1947";
    return "Early White Label serial built in: <strong>" + year + "</strong>.";
}

function showFonResults() {
    var s = currentSerial;
    var result = s.startsWith('Z') ? "1952" : s.startsWith('Y') ? "1953" : s.startsWith('X') ? "1954" : s.startsWith('W') ? "1955" : s.startsWith('V') ? "1956" : s.startsWith('U') ? "1957" : s.startsWith('S') ? "1959" : s.startsWith('T') ? "1958" : s.endsWith('A') ? "1935" : "1902\u20131951 Era";
    document.getElementById('result-text').innerHTML = '<strong>FON: ' + s + '</strong><br><br>Built in: <strong>' + result + '</strong>.';
    document.getElementById('crossref-tips').innerHTML = renderCrossRefTips(getUniversalTips());
    document.getElementById('input-step').classList.add('hidden');
    document.getElementById('tool-results').classList.remove('hidden');
    document.getElementById('tool-results').focus();
}

window.resetTool = function() {
    document.getElementById('serial-input').value = "";
    document.getElementById('cs-serial-input').value = "";
    document.getElementById('cs-model-select').value = "";
    document.getElementById('cs-hint').textContent = "";
    document.getElementById('input-step').classList.remove('hidden');
    document.getElementById('location-step').classList.add('hidden');
    document.getElementById('conflict-step').classList.add('hidden');
    document.getElementById('conflict-label-color').classList.add('hidden');
    document.getElementById('conflict-usa-stamp').classList.add('hidden');
    document.getElementById('tool-results').classList.add('hidden');
    document.getElementById('crossref-tips').innerHTML = "";
    currentSerial = "";
    selectedLocation = "";
};

}); // end DOMContentLoaded
