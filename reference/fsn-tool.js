
(function(){
  'use strict';
  // All numeric ranges in priority order — checked top to bottom
  // Overlapping ranges are intentional (Fender reused numbers across eras)
  // The lookup returns ALL matches and picks the most likely one
  var NUMERIC_RANGES = [
    // ── Bridge plate guitar (1950–1954) ──────────────────────────────
    {min:1,     max:500,    year:"1950",             note:"Bridge plate serial (Broadcaster/Telecaster/Esquire)"},
    {min:501,   max:999,    year:"1951",             note:"Bridge plate serial (Telecaster/Esquire)"},
    {min:1000,  max:2500,   year:"1952",             note:"Bridge plate serial (Telecaster/Esquire)"},
    {min:2501,  max:4500,   year:"1953",             note:"Bridge plate serial (Telecaster/Esquire)"},
    {min:4501,  max:5999,   year:"1954",             note:"Bridge plate serial (Telecaster/Esquire)"},
    // ── Bridge plate bass (1951–1954) ────────────────────────────────
    {min:100,   max:350,    year:"1951",             note:"Bridge plate serial (Precision Bass)"},
    {min:351,   max:700,    year:"1952",             note:"Bridge plate serial (Precision Bass)"},
    {min:701,   max:1300,   year:"1953",             note:"Bridge plate serial (Precision Bass)"},
    {min:1301,  max:1999,   year:"1954",             note:"Bridge plate serial (Precision Bass)"},
    // ── Neck plate (1954–1964) ────────────────────────────────────────
    {min:6000,  max:9999,   year:"1954",             note:"Neck plate serial"},
    {min:10000, max:16000,  year:"1955",             note:"Neck plate serial"},
    {min:16001, max:25000,  year:"1956",             note:"Neck plate serial"},
    {min:25001, max:30000,  year:"1957",             note:"Neck plate serial"},
    {min:30001, max:40000,  year:"1958",             note:"Neck plate serial"},
    {min:40001, max:58000,  year:"1959",             note:"Neck plate serial"},
    {min:58001, max:72000,  year:"1960",             note:"Neck plate serial"},
    {min:72001, max:93000,  year:"1961",             note:"Neck plate serial"},
    {min:93001, max:99999,  year:"1962",             note:"Neck plate serial"},
    {min:100000,max:110000, year:"1963",             note:"Neck plate serial"},
    {min:110001,max:149999, year:"1963",             note:"Neck plate L-series serial"},
    {min:150000,max:199999, year:"1964",             note:"Neck plate L-series serial"},
    // ── F-plate / CBS era (1965–1976) ────────────────────────────────
    {min:100000,max:110000, year:"1965",             note:"F-plate serial (CBS Transition)"},
    {min:110001,max:199999, year:"1966",             note:"F-plate serial (CBS Era)"},
    {min:180000,max:210000, year:"1967",             note:"F-plate serial (CBS Era)"},
    {min:210001,max:250000, year:"1968",             note:"F-plate serial (CBS Era)"},
    {min:250001,max:280000, year:"1969",             note:"F-plate serial (CBS Era)"},
    {min:280001,max:300000, year:"1970",             note:"F-plate serial (CBS Era)"},
    {min:300001,max:330000, year:"1971",             note:"F-plate serial (CBS Era)"},
    {min:330001,max:370000, year:"1972",             note:"F-plate serial (CBS Era)"},
    {min:370001,max:520000, year:"1973",             note:"F-plate serial (CBS Era)"},
    {min:500001,max:580000, year:"1974",             note:"F-plate serial (CBS Era)"},
    {min:580001,max:690000, year:"1975",             note:"F-plate serial (CBS Era)"},
    {min:690001,max:750000, year:"1976",             note:"F-plate serial (CBS Era)"}
  ];

  var DB = {
    bridge:{
      guitar:[
        {min:1,   max:500,  year:"1950"},{min:501, max:999,  year:"1951"},
        {min:1000,max:2500, year:"1952"},{min:2501,max:4500, year:"1953"},{min:4501,max:5999,year:"1954"}
      ],
      bass:[
        {min:100, max:350,  year:"1951"},{min:351, max:700,  year:"1952"},
        {min:701, max:1300, year:"1953"},{min:1301,max:1999, year:"1954"}
      ]
    },
    neck:{
      guitar:[
        {min:6000,  max:9999,  year:"1954"},{min:10000, max:16000, year:"1955"},
        {min:16001, max:25000, year:"1956"},{min:25001, max:30000, year:"1957"},
        {min:30001, max:40000, year:"1958"},{min:40001, max:58000, year:"1959"},
        {min:58001, max:72000, year:"1960"},{min:72001, max:93000, year:"1961"},
        {min:93001, max:99999, year:"1962"},{min:100000,max:110000,year:"1963"},
        {min:110001,max:149999,year:"1963 (L-series)"},{min:150000,max:199999,year:"1964 (L-series)"}
      ],
      bass:[
        {min:6000,  max:9999,  year:"1954"},{min:10000, max:16000, year:"1955"},
        {min:16001, max:25000, year:"1956"},{min:25001, max:30000, year:"1957"},
        {min:30001, max:40000, year:"1958"},{min:40001, max:58000, year:"1959"},
        {min:58001, max:72000, year:"1960"},{min:72001, max:93000, year:"1961"},
        {min:93001, max:99999, year:"1962"},{min:100000,max:130000,year:"1963"},
        {min:130001,max:160000,year:"1964"},{min:160001,max:199999,year:"1965"}
      ]
    },
    prefixes:{
      // American post-CBS — S prefix (year = digit after S)
      "76":"1976",
      // S-prefix handled by dedicated location step
      // E prefix — E = 1980s, digit after E = last digit of year
      "E0":"1980","E1":"1981","E2":"1982","E3":"1983","E4":"1984",
      "E5":"1985","E6":"1986","E7":"1987","E8":"1988","E9":"1989",
      // N prefix (American Standard era)
      // N-prefix handled by dedicated location step
      // Z prefix
      "Z0":"2000","Z1":"2001","Z2":"2002","Z3":"2003","Z4":"2004",
      "Z5":"2005","Z6":"2006","Z7":"2007","Z8":"2008","Z9":"2009",
      // US prefix (4-digit year encoded)
      "US10":"2010","US11":"2011","US12":"2012","US13":"2013","US14":"2014",
      "US15":"2015","US16":"2016","US17":"2017","US18":"2018","US19":"2019",
      "US20":"2020","US21":"2021","US22":"2022","US23":"2023","US24":"2024","US25":"2025","US26":"2026",
      // Rare 80s American
      "CA":"1981–1983 (Gold Series, see serial charts)",
      "CB":"1981–1983 (P-Bass Special, see serial charts)",
      "CE":"1981–1983 (Black & Gold Tele, see serial charts)",
      // Mexican (MIM)
      // MN, MZ, MX handled by dedicated handlers below
      // Japanese (MIJ)
      "JV":"1982–1984 (Made in Japan, see serial charts)",
      "SQ":"1983–1984 (Made in Japan)",
      // MIJ single-letter prefixes (Made in Japan)
      // A and B handled by dedicated digit-count handler
      "F":"1986–1987 (Made in Japan)",
      "G":"1987–1988 (Made in Japan)",
      "H":"1988–1989 (Made in Japan)",
      "I":"1989–1990 (Made in Japan)",
      "J":"1989–1990 (Made in Japan)",
      "K":"1990–1991 (Made in Japan)",
      // L-prefix handled by dedicated digit-count handler
      "M":"1992–1993 (Made in Japan)",
      // CIJ (Crafted in Japan)
      "O":"1997 (Crafted in Japan)","P":"1999 (Crafted in Japan)",
      "Q":"2002 (Crafted in Japan)", // T and U handled by dedicated location step
      // Reissue
      // V-prefix handled separately — see V-prefix handler in doSearch
    }
  };

  var input=document.getElementById('fsn-input'),
      btnS=document.getElementById('fsn-btn-search'),
      btnR=document.getElementById('fsn-btn-reset'),
      sLoc=document.getElementById('fsn-step-location'),
      sInst=document.getElementById('fsn-step-instrument'),
      rBox=document.getElementById('fsn-result'),
      sPill=document.getElementById('fsn-serial-pill'),
      yVal=document.getElementById('fsn-year-value'),
      rWarn=document.getElementById('fsn-r-warning'),
      fall=document.getElementById('fsn-fallback'),
      state={serial:'',location:'',instrument:'',_bridgeNum:null,_numericMatches:null,_tuPrefix:null};

  function hideAll(){[sLoc,sInst,document.getElementById('fsn-step-vneck'),document.getElementById('fsn-step-rneck'),document.getElementById('fsn-step-sneck'),document.getElementById('fsn-step-sjapan'),document.getElementById('fsn-step-tuneck'),document.getElementById('fsn-step-nloc'),document.getElementById('fsn-step-lloc'),document.getElementById('fsn-step-bjapan'),rBox,fall].forEach(function(e){if(e)e.classList.add('fsn-hidden');});}

  function showResult(year,rPrefix){
    hideAll();
    sPill.textContent=state.serial.toUpperCase();
    yVal.textContent=year;
    rWarn.classList.toggle('fsn-hidden',!rPrefix);
    rBox.classList.remove('fsn-hidden');
    btnR.style.display='inline-block';
    btnS.style.display='none';
    rBox.scrollIntoView({behavior:'smooth',block:'nearest'});
  }

  function showFallback(){
    hideAll();
    fall.classList.remove('fsn-hidden');
    btnR.style.display='inline-block';
    btnS.style.display='none';
  }

  function lookupNum(num,loc,inst){
    var t=(DB[loc]||{})[inst];
    if(!t)return null;
    for(var i=0;i<t.length;i++)if(num>=t[i].min&&num<=t[i].max)return t[i].year;
    return null;
  }

  function lookupPrefix(raw){
    var up=raw.toUpperCase();
    var keys=Object.keys(DB.prefixes).sort(function(a,b){return b.length-a.length;});
    for(var i=0;i<keys.length;i++)if(up.startsWith(keys[i]))return{prefix:keys[i],year:DB.prefixes[keys[i]]};
    return null;
  }

  function doSearch(){
    var raw=input.value.trim();
    if(!raw){input.classList.add('fsn-error');input.focus();return;}
    input.classList.remove('fsn-error');
    state.serial=raw;
    var up=raw.toUpperCase();

    // R-prefix — neck plate = Custom Shop unreliable, neck heel = Japanese CIJ
    if(/^R\d+$/i.test(raw)){
      hideAll();
      var sRneck = document.getElementById('fsn-step-rneck');
      sRneck.classList.remove('fsn-hidden');
      btnR.style.display='inline-block';
      btnS.style.display='none';
      return;
    }
    // CN prefix — Custom Shop, first digit after CN = last digit of year (same as N-prefix)
    if(/^CN\d/i.test(up)){
      var cnMap={'0':'1990','1':'1991','2':'1992','3':'1993','4':'1994','5':'1995','6':'1996','7':'1997','8':'1998','9':'1999'};
      var cnDigit=raw.replace(/^CN/i,'').charAt(0);
      var cnY=cnMap[cnDigit];
      showResult(cnY?cnY+' (Custom Shop, CN prefix)':'Custom Shop, CN prefix (1990s)',false);
      return;
    }
    // CZ prefix — Custom Shop, first digit after CZ = last digit of year (same as Z-prefix)
    if(/^CZ\d/i.test(up)){
      var czMap={'0':'2000','1':'2001','2':'2002','3':'2003','4':'2004','5':'2005','6':'2006','7':'2007','8':'2008','9':'2009'};
      var czDigit=raw.replace(/^CZ/i,'').charAt(0);
      var czY=czMap[czDigit];
      showResult(czY?czY+' (Custom Shop, CZ prefix)':'Custom Shop, CZ prefix (2000s)',false);
      return;
    }
    // MX prefix — Made in Mexico 2010s–2020s (2 digits after MX = year)
    if(/^MX\d/i.test(raw)){
      var mxYear = raw.replace(/^MX/i,'').substring(0,2);
      var mxFull = '20' + mxYear;
      if(parseInt(mxYear) >= 10 && parseInt(mxYear) <= 30){
        showResult(mxFull + ' (Made in Mexico)', false);
      } else {
        showResult('Made in Mexico (2010s–2020s). Could not determine exact year.', false);
      }
      return;
    }

    // MN prefix — Made in Mexico 1990s (1 digit after MN = last digit of year)
    if(/^MN\d/i.test(raw)){
      var mnDigit = raw.replace(/^MN/i,'').charAt(0);
      showResult('199' + mnDigit + ' (Made in Mexico)', false);
      return;
    }

    // MZ prefix — Made in Mexico 2000s (1 digit after MZ = last digit of year)
    if(/^MZ\d/i.test(raw)){
      var mzDigit = raw.replace(/^MZ/i,'').charAt(0);
      showResult('200' + mzDigit + ' (Made in Mexico)', false);
      return;
    }

    // JD prefix — Japan Dyna (2010s), must check before single-letter J (MIJ 1989-90)
    // JD + 2-digit year, e.g. JD11XXXXXX = 2011
    if(/^JD\d/i.test(raw)){
      var jdYear = raw.replace(/^JD/i,'').substring(0,2);
      var jdFull = '20' + jdYear;
      if(parseInt(jdYear) >= 10 && parseInt(jdYear) <= 30){
        showResult(jdFull + ' (Japan Dyna, back of headstock serial)', false);
      } else {
        showResult('2010s (Japan Dyna, back of headstock serial)', false);
      }
      return;
    }

    // T and U prefix — appear in both MIJ (1994–95 / 1995–96) and CIJ (2007–10 / 2010–11)
    if(/^[TU]\d/i.test(raw)){
      hideAll();
      var sTUneck = document.getElementById('fsn-step-tuneck');
      sTUneck.classList.remove('fsn-hidden');
      // Store which letter for the result
      state._tuPrefix = raw.charAt(0).toUpperCase();
      btnR.style.display='inline-block';
      btnS.style.display='none';
      return;
    }

    // N-prefix — headstock = American 1990s, neck heel = Japanese MIJ 1995–1996
    if(/^N\d/i.test(raw) && !/^MN/i.test(raw) && !/^CN/i.test(raw)){
      hideAll();
      var sNloc = document.getElementById('fsn-step-nloc');
      sNloc.classList.remove('fsn-hidden');
      btnR.style.display='inline-block';
      btnS.style.display='none';
      return;
    }

    // S-prefix — front of headstock = 1970s American, back of neck heel = Japanese MIJ
    if(/^S\d/i.test(raw)){
      hideAll();
      var sSneck = document.getElementById('fsn-step-sneck');
      sSneck.classList.remove('fsn-hidden');
      btnR.style.display='inline-block';
      btnS.style.display='none';
      return;
    }

    // A-prefix — 5 digits = MIJ Mid-1980s, 6 digits = CIJ 1997–1998
    if(/^A\d+$/i.test(raw)){
      var aDigits = raw.replace(/^A/i,'');
      if(aDigits.length === 5){
        showResult('Mid-1980s (Made in Japan)', false);
      } else if(aDigits.length === 6){
        showResult('1997–1998 (Crafted in Japan)', false);
      } else {
        showResult('Could not determine year. A-prefix MIJ serials have 5 digits after the A; CIJ serials have 6. Please make sure you entered the correct number of digits.', false);
      }
      return;
    }

    // B-prefix — always 6 digits but appears in both MIJ (1985–1986) and CIJ (1997–1999)
    // Must ask MIJ or CIJ
    if(/^B\d+$/i.test(raw)){
      hideAll();
      var sBjapan = document.getElementById('fsn-step-bjapan');
      sBjapan.classList.remove('fsn-hidden');
      btnR.style.display='inline-block';
      btnS.style.display='none';
      return;
    }

    // L-prefix — 5 digits after L = L-series neck plate (1963–1965)
    //             6 digits after L = Japanese MIJ (1991–1992)
    if(/^L\d+$/i.test(raw)){
      var lDigits = raw.replace(/^L/i,'');
      var lNum = parseInt(lDigits, 10);
      if(lDigits.length === 6){
        showResult('1991–1992 (Made in Japan, back of neck heel serial). Note: make sure you entered the correct number of digits. Japanese MIJ L-serials have 6 digits after the L.', false);
      } else if(lDigits.length === 5){
        var lYear;
        if(lNum >= 1     && lNum <= 20000) lYear = '1963';
        else if(lNum >= 20001 && lNum <= 55000) lYear = '1964';
        else if(lNum >= 55001 && lNum <= 99999) lYear = '1965';
        if(lYear){
          showResult(lYear + ' (L-series neck plate serial). Note: make sure you entered the correct number of digits. L-series neck plate serials have 5 digits after the L.', false);
        } else {
          showFallback();
        }
      } else {
        // Ambiguous digit count — ask user to recheck
        showResult('Could not determine year. L-series neck plate serials have 5 digits after the L; Japanese MIJ serials have 6. Please recount your digits and try again.', false);
      }
      return;
    }

    // Standard prefix
    var pm=lookupPrefix(raw);
    if(pm){showResult(pm.year,false);return;}
    // V-prefix — neck plate = Vintage Reissue, back of neck heel = Japanese MIJ
    if(/^V\d+$/i.test(raw)){
      hideAll();
      var sVneck = document.getElementById('fsn-step-vneck');
      sVneck.classList.remove('fsn-hidden');
      btnR.style.display='inline-block';
      btnS.style.display='none';
      return;
    }


    // Pure numeric lookup
    if(/^\d+$/.test(raw)){
      var num = parseInt(raw, 10);

      // ── Auto-resolve rules (no location/instrument question needed) ──────

      // 1–99: too short, not a valid Fender serial
      if(num < 100){
        showFallback();
        return;
      }

      // 4-digit serial with leading zero (e.g. 0301, 0455, 0900)
      // Could be bridge plate (Tele/Broadcaster or P-Bass) OR neck plate (1954)
      // Ask location first, then guitar/bass if bridge
      if(/^0\d{3}$/.test(raw)){
        state._bridgeNum = num;
        state._numericMatches = null;
        hideAll();
        var locNoteZ = document.getElementById('fsn-loc-note');
        if(!locNoteZ){
          locNoteZ = document.createElement('p');
          locNoteZ.id = 'fsn-loc-note';
          locNoteZ.style.cssText = 'font-size:.85rem;color:#6b4f2e;margin-bottom:.75rem;font-style:italic;';
          sLoc.insertBefore(locNoteZ, sLoc.querySelector('.fsn-card-grid'));
        }
        locNoteZ.textContent = 'Serial ' + raw + ' could be a bridge plate or neck plate serial from 1950–1954. Where is the serial located?';
        sLoc.classList.remove('fsn-hidden');
        btnR.style.display='inline-block';
        btnS.style.display='none';
        return;
      }

      // 100–8000: could be bridge plate OR neck plate (both start from ~0001 in 1954)
      // Always ask location first, then instrument if bridge
      if(num >= 100 && num <= 8000){
        state._bridgeNum = num;
        state._numericMatches = null;
        hideAll();
        var locNote3 = document.getElementById('fsn-loc-note');
        if(!locNote3){
          locNote3 = document.createElement('p');
          locNote3.id = 'fsn-loc-note';
          locNote3.style.cssText = 'font-size:.85rem;color:#6b4f2e;margin-bottom:.75rem;font-style:italic;';
          sLoc.insertBefore(locNote3, sLoc.querySelector('.fsn-card-grid'));
        }
        locNote3.textContent = 'Low serials like ' + raw + ' appear on both bridge plates (1950–1954) and early neck plates (1954–1955). Where is the serial located?';
        sLoc.classList.remove('fsn-hidden');
        btnR.style.display='inline-block';
        btnS.style.display='none';
        return;
      }

      // 8001–99999: neck plate only (1954–1963, with genuine year overlaps)
      if(num >= 8001 && num <= 99999){
        var neckEarly = [
          {min:8001, max:10000, year:"1955"},
          {min:9000, max:16000, year:"1956"},
          {min:16000,max:25000, year:"1957"},
          {min:25000,max:30000, year:"1958"},
          {min:30000,max:40000, year:"1959"},
          {min:40000,max:58000, year:"1960"},
          {min:55000,max:72000, year:"1961"},
          {min:72000,max:93000, year:"1962"},
          {min:93000,max:99999, year:"1963"}
        ];
        var neckMatches = [];
        for(var n=0;n<neckEarly.length;n++){
          if(num>=neckEarly[n].min && num<=neckEarly[n].max) neckMatches.push(neckEarly[n].year);
        }
        if(neckMatches.length===1){
          showResult(neckMatches[0] + ' (Neck plate serial)', false);
        } else if(neckMatches.length>1){
          var uniq = neckMatches.filter(function(v,i,a){return a.indexOf(v)===i;});
          showResult(uniq[0] + '–' + uniq[uniq.length-1] + ' (Neck plate serial, overlapping production run; cross-date with pot codes)', false);
        } else {
          showFallback();
        }
        return;
      }

      // 100000–199999: without L prefix this is always F-plate CBS era
      // L-series are caught earlier by the L-prefix handler
      if(num >= 100000 && num <= 199999){
        var fRanges2 = [
          {min:100000,max:110000,year:"1965",note:"F-plate serial (CBS Transition)"},
          {min:110001,max:199999,year:"1966",note:"F-plate serial (CBS Era)"}
        ];
        for(var f2=0;f2<fRanges2.length;f2++){
          if(num>=fRanges2[f2].min && num<=fRanges2[f2].max){
            showResult(fRanges2[f2].year + ' (' + fRanges2[f2].note + ')', false);
            return;
          }
        }
        showFallback();
        return;
      }

      // 200000–750000: F-plate only (1967–1976)
      if(num >= 200000 && num <= 750000){
        var fplate = [
          {min:200000,max:210000,year:"1967"},{min:210001,max:250000,year:"1968"},
          {min:250001,max:280000,year:"1969"},{min:280001,max:300000,year:"1970"},
          {min:300001,max:330000,year:"1971"},{min:330001,max:370000,year:"1972"},
          {min:370001,max:520000,year:"1973"},{min:500001,max:580000,year:"1974"},
          {min:580001,max:690000,year:"1975"},{min:690001,max:750000,year:"1976"}
        ];
        for(var f=0;f<fplate.length;f++){
          if(num>=fplate[f].min && num<=fplate[f].max){
            showResult(fplate[f].year + ' (F-plate serial, CBS Era)', false);
            return;
          }
        }
        showFallback();
        return;
      }

      showFallback();
      return;
    }
    showFallback();
  }

  // S-prefix headstock vs neck heel handler
  var sSneck = document.getElementById('fsn-step-sneck');
  sSneck.querySelectorAll('.fsn-card').forEach(function(card){
    function pick(){
      var sloc = card.dataset.sloc;
      sSneck.classList.add('fsn-hidden');
      if(sloc === 'headstock'){
        // S + digit = 1970s American headstock
        var sDigit = state.serial.replace(/^S/i,'').charAt(0);
        var sYear = '197' + sDigit;
        showResult(sYear + ' (Made in USA, front of headstock serial)', false);
      } else {
        // Back of neck heel = Japanese MIJ (S prefix = mid-1980s)
        // S on neck heel could be MIJ (1994–1995) or CIJ (2006–2008) — ask
        var sSjapan = document.getElementById('fsn-step-sjapan');
        sSjapan.classList.remove('fsn-hidden');
        return;
      }
    }
    card.addEventListener('click', pick);
    card.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' ') pick(); });
  });

  // B-prefix MIJ vs CIJ handler
  var sBjapan = document.getElementById('fsn-step-bjapan');
  sBjapan.querySelectorAll('.fsn-card').forEach(function(card){
    function pick(){
      var bj = card.dataset.bjapan;
      sBjapan.classList.add('fsn-hidden');
      if(bj === 'mij'){
        showResult('1985–1986 (Made in Japan)', false);
      } else {
        showResult('1997–1999 (Crafted in Japan)', false);
      }
    }
    card.addEventListener('click', pick);
    card.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' ') pick(); });
  });

  // L-prefix neck plate vs neck heel handler
  var sLloc = document.getElementById('fsn-step-lloc');
  sLloc.querySelectorAll('.fsn-card').forEach(function(card){
    function pick(){
      var lloc = card.dataset.lloc;
      sLloc.classList.add('fsn-hidden');
      if(lloc === 'neckplate'){
        // L-series neck plate — decode by number
        var lNum = parseInt(state.serial.replace(/^L/i,''), 10);
        var lYear;
        if(lNum >= 1     && lNum <= 20000) lYear = '1963';
        else if(lNum >= 20001 && lNum <= 55000) lYear = '1964';
        else if(lNum >= 55001 && lNum <= 99999) lYear = '1965';
        if(lYear){
          showResult(lYear + ' (L-series neck plate serial)', false);
        } else {
          showFallback();
        }
      } else {
        // Neck heel = Japanese MIJ 1991–1992
        showResult('1991–1992 (Made in Japan, back of neck heel serial)', false);
      }
    }
    card.addEventListener('click', pick);
    card.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' ') pick(); });
  });

  // N-prefix headstock vs neck heel handler
  var sNloc = document.getElementById('fsn-step-nloc');
  sNloc.querySelectorAll('.fsn-card').forEach(function(card){
    function pick(){
      var nloc = card.dataset.nloc;
      sNloc.classList.add('fsn-hidden');
      if(nloc === 'headstock'){
        // American headstock — N + digit = year
        var nDigit = state.serial.replace(/^N/i,'').charAt(0);
        var nYear = '199' + nDigit;
        showResult(nYear + ' (Made in USA, back of headstock serial)', false);
      } else {
        // Neck heel = Japanese MIJ 1995–1996
        showResult('1995–1996 (Made in Japan, back of neck heel serial)', false);
      }
    }
    card.addEventListener('click', pick);
    card.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' ') pick(); });
  });

  // T/U-prefix MIJ vs CIJ handler
  var sTUneck = document.getElementById('fsn-step-tuneck');
  sTUneck.querySelectorAll('.fsn-card').forEach(function(card){
    function pick(){
      var tuj = card.dataset.tujapan;
      sTUneck.classList.add('fsn-hidden');
      var p = state._tuPrefix;
      if(tuj === 'mij'){
        var mijYear = p === 'T' ? '1994–1995' : '1995–1996';
        showResult(mijYear + ' (Made in Japan, back of neck heel serial)', false);
      } else {
        var cijYear = p === 'T' ? '2007–2010' : '2010–2011';
        showResult(cijYear + ' (Crafted in Japan, back of neck heel serial)', false);
      }
    }
    card.addEventListener('click', pick);
    card.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' ') pick(); });
  });

  // S-prefix MIJ vs CIJ handler
  var sSjapan = document.getElementById('fsn-step-sjapan');
  sSjapan.querySelectorAll('.fsn-card').forEach(function(card){
    function pick(){
      var sj = card.dataset.sjapan;
      sSjapan.classList.add('fsn-hidden');
      if(sj === 'mij'){
        showResult('1994–1995 (Made in Japan, back of neck heel serial)', false);
      } else {
        showResult('2006–2008 (Crafted in Japan, back of neck heel serial)', false);
      }
    }
    card.addEventListener('click', pick);
    card.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' ') pick(); });
  });

  // R-prefix neck plate vs neck heel handler
  var sRneck = document.getElementById('fsn-step-rneck');
  sRneck.querySelectorAll('.fsn-card').forEach(function(card){
    function pick(){
      var rloc = card.dataset.rloc;
      sRneck.classList.add('fsn-hidden');
      if(rloc === 'neckplate'){
        showResult('Unknown. R-prefix Custom Shop dating is unreliable.', true);
      } else {
        // Back of neck heel = Japanese CIJ 2004–2005
        showResult('2004–2005 (Crafted in Japan, back of neck heel serial)', false);
      }
    }
    card.addEventListener('click', pick);
    card.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' ') pick(); });
  });

  // V-prefix neck plate vs neck heel handler
  var sVneck = document.getElementById('fsn-step-vneck');
  sVneck.querySelectorAll('.fsn-card').forEach(function(card){
    function pick(){
      var vloc = card.dataset.vloc;
      sVneck.classList.add('fsn-hidden');
      if(vloc === 'neckplate'){
        showResult('Vintage Reissue (1982 to present), V-prefix neck plate serial. Serial alone cannot date V-prefix guitars; cross-date with neck heel stamp and pot codes.', false);
      } else {
        // Back of neck heel = Japanese MIJ V-prefix = 1996–1997
        showResult('1996–1997 (Made in Japan, back of neck heel serial)', false);
      }
    }
    card.addEventListener('click', pick);
    card.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' ') pick(); });
  });

  sLoc.querySelectorAll('.fsn-card').forEach(function(card){
    function pick(){
      state.location = card.dataset.location;
      var loc = state.location;
      var num = parseInt(state.serial, 10);
      sLoc.classList.add('fsn-hidden');

      // ── Bridge plate selected ─────────────────────────────────────────
      if(loc === 'bridge'){

        // Need to know guitar vs bass for bridge plate serials
        state._bridgeNum = num;
        var instNote2 = document.getElementById('fsn-inst-note');
        if(!instNote2){
          instNote2 = document.createElement('p');
          instNote2.id = 'fsn-inst-note';
          instNote2.style.cssText = 'font-size:.85rem;color:#6b4f2e;margin-bottom:.75rem;font-style:italic;';
          sInst.insertBefore(instNote2, sInst.querySelector('.fsn-card-grid'));
        }
        instNote2.textContent = 'Bridge plate serials were used on both guitars and basses. Is this a guitar or bass?';
        sInst.classList.remove('fsn-hidden');
        return;
      }

      // ── Headstock selected ────────────────────────────────────────────
      if(loc === 'headstock'){
        showFallback();
        return;
      }

      // ── "Neck heel" — we repurpose headstock card for this in V-prefix context ──
      // Actually V-prefix neck heel is handled via bridge card relabeled — see below

      // ── Neck plate selected ───────────────────────────────────────────
      if(loc === 'neck'){

        // Check stored matches first (100000–199999 L-series vs F-plate overlap)
        if(state._numericMatches && state._numericMatches.length){
          var filtered = state._numericMatches.filter(function(m){
            return m.note.indexOf('Neck plate')!==-1 || m.note.indexOf('L-series')!==-1;
          });
          if(filtered.length > 0){
            var years = filtered.map(function(m){return m.year;}).filter(function(v,i,a){return a.indexOf(v)===i;});
            if(years.length===1){
              showResult(filtered[0].year + ' (' + filtered[0].note + ')', false);
            } else {
              showResult(years[0] + '–' + years[years.length-1] + ' (' + filtered[0].note + ', overlapping production run; cross-date with pot codes)', false);
            }
            return;
          }
        }
        // Low serial neck plate
        // 0001–8000 = 1954 per guide (leading zero or not)
        // 6000–8000 also overlaps into 1955
        if(num >= 1 && num < 6000){
          showResult('1954 (Neck plate serial)', false);
          return;
        }
        if(num >= 6000 && num <= 8000){
          showResult('1954–1955 (Neck plate serial, overlapping production run; cross-date with pot codes)', false);
          return;
        }
        // Standard neck plate lookup
        var neckRanges = [
          {min:8001, max:10000, year:"1955"},
          {min:9000, max:16000, year:"1956"},
          {min:16000,max:25000, year:"1957"},
          {min:25000,max:30000, year:"1958"},
          {min:30000,max:40000, year:"1959"},
          {min:40000,max:58000, year:"1960"},
          {min:55000,max:72000, year:"1961"},
          {min:72000,max:93000, year:"1962"},
          {min:93000,max:99999, year:"1963"},
          {min:100000,max:110000,year:"1963"},
          {min:110001,max:149999,year:"1963 (L-series)"},
          {min:150000,max:199999,year:"1964 (L-series)"}
        ];
        var neckMatches = [];
        for(var n=0;n<neckRanges.length;n++){
          if(num>=neckRanges[n].min && num<=neckRanges[n].max) neckMatches.push(neckRanges[n].year);
        }
        var uniq = neckMatches.filter(function(v,i,a){return a.indexOf(v)===i;});
        if(uniq.length===1){
          showResult(uniq[0] + ' (Neck plate serial)', false);
        } else if(uniq.length>1){
          showResult(uniq[0] + '–' + uniq[uniq.length-1] + ' (Neck plate serial, overlapping production run; cross-date with pot codes)', false);
        } else {
          showFallback();
        }
        return;
      }
    }
    card.addEventListener('click', pick);
    card.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' ') pick(); });
  });

  sInst.querySelectorAll('.fsn-card').forEach(function(card){
    function pick(){
      state.instrument = card.dataset.instrument;
      sInst.classList.add('fsn-hidden');

      // Bridge plate low-number path
      if(state._bridgeNum !== null && state._bridgeNum !== undefined){
        var bNum = state._bridgeNum;

        if(state.instrument === 'bass'){
          var rawS = state.serial.trim();
          var hasLeadingZero = rawS.charAt(0) === '0';
          var bassYear;
          if(!hasLeadingZero && bNum >= 100 && bNum <= 600){
            // 100–600 no leading zero = 1951–1952
            bassYear = "1951–1952";
          } else if(hasLeadingZero && bNum >= 1 && bNum <= 900){
            // 0001–0900 with leading zero = 1952–1953
            bassYear = "1952–1953";
          } else if(bNum >= 900 && bNum <= 2000){
            // 0900–2000 = 1954
            bassYear = "1954";
          }
          if(bassYear){
            showResult(bassYear + ' (Bridge plate, Precision Bass)', false);
          } else {
            showFallback();
          }
          return;
        }

        if(state.instrument === 'guitar'){
          var guitarRanges = [
            {min:1,    max:1300, year:"1950–1952", note:"Broadcaster/No-Caster/Early Telecaster"},
            {min:1300, max:3000, year:"1951–1954", note:"Telecaster name established ~mid-1951"},
            {min:3000, max:5999, year:"1952–1954", note:"Transition to neck plate approaching"}
          ];
          for(var j=0;j<guitarRanges.length;j++){
            if(bNum>=guitarRanges[j].min && bNum<=guitarRanges[j].max){
              showResult(guitarRanges[j].year + ' (Bridge plate, ' + guitarRanges[j].note + ')', false);
              return;
            }
          }
          showFallback();
          return;
        }

        showFallback();
        return;
      }

      // Standard neck plate path
      var y = lookupNum(parseInt(state.serial,10), state.location, state.instrument);
      y ? showResult(y, false) : showFallback();
    }
    card.addEventListener('click', pick);
    card.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' ') pick(); });
  });

  btnS.addEventListener('click',doSearch);
  input.addEventListener('keydown',function(e){if(e.key==='Enter')doSearch();});
  btnR.addEventListener('click',function(){
    state={serial:'',location:'',instrument:'',_bridgeNum:null,_numericMatches:null,_tuPrefix:null};
    input.value='';hideAll();
    btnR.style.display='none';btnS.style.display='';input.focus();
  });
})();
