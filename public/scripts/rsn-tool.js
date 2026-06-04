  (function(){
    var MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var MONTHS_MNY = {M:0,N:1,P:2,Q:3,R:4,S:5,T:6,U:7,V:8,W:9,X:10,Y:11};
    var MONTHS_AL  = {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11};
    var YEARS_AL   = {A:1961,B:1962,C:1963,D:1964,E:1965,F:1966,G:1967,H:1968,I:1969,J:1970,K:1971,L:1972,M:1973,N:1974,O:1975,P:1976,Q:1977,R:1978,S:1979,T:1980,U:1981,V:1982,W:1983,X:1984,Y:1985,Z:1986};

    function fmt(d){return d<10?'0'+d:String(d);}

    function decode(raw){
      var sn = raw.toUpperCase().replace(/[^A-Z0-9]/g,'');
      if(!sn) return {err:'Please enter a serial number.'};

      // ── 1999-present: two leading digits ──
      if(/^[0-9]{2}/.test(sn)){
        if(sn.length < 4) return {err:'Serial number too short for the modern YY-WW format. Need at least 4 digits.'};
        var yr2 = parseInt(sn.slice(0,2),10);
        var wk  = parseInt(sn.slice(2,4),10);
        if(isNaN(wk)||wk<1||wk>53) return {err:'Week number out of range (01–53). Check the serial number.'};
        var year = yr2 >= 99 ? 1999 : 2000 + yr2;
        var seq  = sn.length>4 ? sn.slice(4) : '';
        var detail = 'Week '+fmt(wk)+' of '+year+' · Production #: '+(seq||'—')+' · Format: 1999–present (YY+WW)';
        return {date:'Week '+fmt(wk)+', '+year, detail:detail};
      }

      var c0 = sn[0], c1 = sn[1];
      var isLetter0 = /[A-Z]/.test(c0);
      var isLetter1 = c1 && /[A-Z]/.test(c1);
      var isDigit1  = c1 && /[0-9]/.test(c1);

      // ── 1961-1986: two leading letters ──
      if(isLetter0 && isLetter1){
        // Check JK/JL Nov-Dec 1960 transition
        if(c0==='J' && (c1==='K'||c1==='L')){
          var mo60 = c1==='K'?'November':'December';
          return {date:mo60+' 1960', detail:'Transition serial number series (Nov–Dec 1960 only) · Format: JK/JL introduction period'};
        }
        if(!(c0 in YEARS_AL)) return {err:'First letter "'+c0+'" is not a valid year code for the 1961–1986 system (A=1961 to Z=1986).'};
        if(!(c1 in MONTHS_AL)) return {err:'Second letter "'+c1+'" is not a valid month code (A=Jan to L=Dec).'};
        var yr = YEARS_AL[c0];
        var mo = MONTHS[MONTHS_AL[c1]];
        var seq2 = sn.slice(2);
        return {date:mo+' '+yr, detail:'Production #: '+(seq2||'—')+' · Format: 1961–1986 two-letter code ('+c0+'='+yr+', '+c1+'='+mo+')'};
      }

      // ── 1987-1998: letter + digit ──
      if(isLetter0 && isDigit1){
        var digit = parseInt(c1,10);
        // M-Y = 1997-2006 months
        if(c0 in MONTHS_MNY){
          var yr97 = 1997 + digit;
          if(yr97 > 1998) return {err:'The M–Y month codes paired with a single year digit only cover 1997–1998. For 1999+, Rickenbacker switched to the YY+WW system (two leading digits).'};
          var mo97 = MONTHS[MONTHS_MNY[c0]];
          var seq3 = sn.slice(2);
          return {date:mo97+' '+yr97, detail:'Production #: '+(seq3||'—')+' · Format: 1997–1998 (M=Jan, N=Feb, P=Mar… Y=Dec; digit 0=1997, 1=1998)'};
        }
        // A-L = 1987-1996 months
        if(c0 in MONTHS_AL){
          var yr87 = 1987 + digit;
          var mo87 = MONTHS[MONTHS_AL[c0]];
          var seq4 = sn.slice(2);
          return {date:mo87+' '+yr87, detail:'Production #: '+(seq4||'—')+' · Format: 1987–1996 (A=Jan… L=Dec; digit 0=1987 … 9=1996)'};
        }
        return {err:'Could not identify a valid 1987–1998 month code from "'+c0+'". Valid month letters: A–L (1987–1996) or M–Y exc. O (1997–1998).'};
      }

      return {err:'Could not decode "'+sn+'". This may be a pre-1961 model-specific serial, an XX replacement jackplate, or the serial may contain errors. See the era guide below.'};
    }

    window.jvgDecode = function(){
      var el  = document.getElementById('jvg-sn-input');
      var res = document.getElementById('jvg-result');
      var rd  = document.getElementById('jvg-result-date');
      var rx  = document.getElementById('jvg-result-detail');
      var r   = decode(el.value);
      res.className = 'decoder-result visible' + (r.err?' error':'');
      rd.textContent = r.err ? 'Unable to decode' : r.date;
      rx.textContent = r.err ? r.err : r.detail;
    };

    document.getElementById('jvg-sn-input').addEventListener('keydown',function(e){
      if(e.key==='Enter') window.jvgDecode();
    });
  })();

  // Mobile card table init
  (function(){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.jvg-rick table.mobile-cards').forEach(function(tbl){
        var headers = [];
        tbl.querySelectorAll('thead th').forEach(function(th){ headers.push(th.textContent.trim()); });
        tbl.querySelectorAll('tbody tr').forEach(function(tr){
          tr.querySelectorAll('td').forEach(function(td, i){
            if(headers[i]) td.setAttribute('data-label', headers[i]);
          });
        });
      });
    });
  })();


(function(){
  /* ── Build TOC from headings ── */
  function buildToc(){
    var rick   = document.querySelector('.jvg-rick');
    var deskUl = document.getElementById('jvg-toc-list-desk');
    var mobUl  = document.getElementById('jvg-toc-list-mob');
    if(!rick || !deskUl || !mobUl) return;

    var headings = rick.querySelectorAll('h2, h3');
    var idx = 0;
    var anchors = [];

    headings.forEach(function(h){
      // Skip headings with no text (unlikely but safe)
      var text = h.textContent.trim();
      if(!text) return;

      // Assign ID if missing
      if(!h.id){
        var slug = text.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')
          .slice(0, 60);
        h.id = 'jvg-s-' + idx + '-' + slug;
      }
      idx++;

      var isH3 = h.tagName === 'H3';
      anchors.push({ id: h.id, text: text, isH3: isH3 });

      // Build li for desktop
      var liD = document.createElement('li');
      if(isH3) liD.className = 'jvg-toc-h3';
      var aD = document.createElement('a');
      aD.href = '#' + h.id;
      aD.textContent = text;
      aD.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById(h.id).scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      liD.appendChild(aD);
      deskUl.appendChild(liD);

      // Build li for mobile
      var liM = document.createElement('li');
      if(isH3) liM.className = 'jvg-toc-h3';
      var aM = document.createElement('a');
      aM.href = '#' + h.id;
      aM.textContent = text;
      aM.addEventListener('click', function(e){
        e.preventDefault();
        jvgTocClose();
        setTimeout(function(){
          document.getElementById(h.id).scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
      });
      liM.appendChild(aM);
      mobUl.appendChild(liM);
    });

    /* ── Scroll spy via IntersectionObserver ── */
    if(!window.IntersectionObserver) return;

    var allLinks = {
      desk: Array.from(deskUl.querySelectorAll('a')),
      mob:  Array.from(mobUl.querySelectorAll('a'))
    };

    function setActive(id){
      ['desk','mob'].forEach(function(key){
        allLinks[key].forEach(function(a){
          a.classList.toggle('jvg-toc-active', a.getAttribute('href') === '#' + id);
        });
      });
    }

    var headingEls = Array.from(rick.querySelectorAll('h2, h3'));
    var activeId = headingEls[0] ? headingEls[0].id : null;
    if(activeId) setActive(activeId);

    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          setActive(entry.target.id);
          // Auto-scroll active link into view in sidebar
          var deskLink = deskUl.querySelector('a[href="#' + entry.target.id + '"]');
          if(deskLink){
            var sidebar = document.getElementById('jvg-toc-sidebar');
            if(sidebar){
              var linkTop    = deskLink.offsetTop;
              var sideTop    = sidebar.scrollTop;
              var sideHeight = sidebar.clientHeight;
              if(linkTop < sideTop || linkTop > sideTop + sideHeight - 40){
                sidebar.scrollTo({ top: linkTop - sideHeight / 2, behavior: 'smooth' });
              }
            }
          }
        }
      });
    }, { rootMargin: '0px 0px -60% 0px', threshold: 0 });

    headingEls.forEach(function(h){ observer.observe(h); });
  }

  /* ── Mobile panel toggle ── */
  window.jvgTocToggle = function(){
    var btn   = document.getElementById('jvg-toc-btn');
    var panel = document.getElementById('jvg-toc-panel');
    if(!btn || !panel) return;
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', open ? 'false' : 'true');
    if(open){ panel.hidden = true; } else { panel.removeAttribute('hidden'); }
  };
  window.jvgTocClose = function(){
    var btn   = document.getElementById('jvg-toc-btn');
    var panel = document.getElementById('jvg-toc-panel');
    if(btn)   btn.setAttribute('aria-expanded','false');
    if(panel) panel.hidden = true;
  };

  // Close panel on outside click
  document.addEventListener('click', function(e){
    var mobile = document.getElementById('jvg-toc-mobile');
    if(mobile && !mobile.contains(e.target)) jvgTocClose();
  });

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', buildToc);
  } else {
    buildToc();
  }
})();
