(function(){
  var $=function(s){return document.querySelector(s)},$$=function(s){return [].slice.call(document.querySelectorAll(s))};
  var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
  function split(el,txt){if(!el.hasAttribute('aria-label'))el.setAttribute('aria-label',txt);el.textContent='';txt.split('').forEach(function(c,i){var s=document.createElement('span');s.setAttribute('aria-hidden','true');s.textContent=c===' '?'\u00a0':c;s.style.setProperty('--i',i);el.appendChild(s)})}
  split($('#inm'),'SHANIF P');split($('#hn'),'SHANIF P');split($('#big'),'CONTACT');

  var src=[['k','from'],[0,' flask '],['k','import'],[0,' Flask\n'],[0,'app = Flask(__name__)\n\n'],['c','# my portfolio route\n'],[0,'@app.route('],['s','"/"'],[0,')\n'],['k','def'],[0,' hello():\n    '],['k','return'],[0,' '],['s','"Hi, I\'m Shanif P."']];
  var flat=[];src.forEach(function(p){p[1].split('').forEach(function(ch){flat.push([p[0],ch])})});
  var pre=$('#code'),started=0;
  function render(n){var h='',cur=null;for(var i=0;i<n;i++){var f=flat[i];if(f[0]!==cur){if(cur)h+='</span>';if(f[0])h+='<span class="'+f[0]+'">';cur=f[0]}h+=f[1]==='<'?'&lt;':f[1]==='&'?'&amp;':f[1]}if(cur)h+='</span>';pre.innerHTML=h+'<span class="caret"></span>'}
  function typeCode(){if(started)return;started=1;if(reduce){render(flat.length);return}var n=0;(function t(){render(++n);if(n<flat.length)setTimeout(t,40+Math.random()*45)})()}

  function ready(){document.body.classList.remove('lock');document.body.classList.add('ready');setTimeout(typeCode,1400);if(!reduce)scr($('.role'))}
  var intro=$('#intro'),cnt=$('#cnt'),arc=$('#arc'),ln=$('#ln'),st=$('#st');
  if(reduce){ready()}else{
    var L=[['>>> import shanif',6],['>>> load_projects()',34],['>>> start_server()',66],['>>> ready()   OK',93]],li=0,lg=$('#lg'),C=2*Math.PI*54,pr=0,t0=performance.now(),loaded=false,msgs=['Loading portfolio','Preparing projects','Almost ready'];
    arc.style.strokeDasharray=C;
    function fin(){loaded=true}
    var ip=$$('.ph img').map(function(i){return i.decode?i.decode().catch(function(){}):Promise.resolve()});
    Promise.all([document.fonts?document.fonts.ready:0,Promise.all(ip)]).then(fin,fin);setTimeout(fin,6000);
    (function c(t){var el=t-t0,target=loaded&&el>1900?100:Math.min(88,el/22);pr+=(target-pr)*.08;if(target===100&&pr>99.4)pr=100;
      cnt.textContent=Math.round(pr)+'%';while(li<L.length&&pr>=L[li][1]){lg.textContent+=(li?'\n':'')+L[li][0];li+=1}arc.style.strokeDashoffset=C*(1-pr/100);ln.style.transform='scaleX('+pr/100+')';st.textContent=msgs[pr>85?2:pr>45?1:0];
      if(pr<100)requestAnimationFrame(c);else{intro.classList.add('out');setTimeout(function(){ready();intro.style.display='none'},750)}})(t0);
  }

  var tick=function(m){var a=m,w=0;return a};
  var m1=$('#m1'),m2=$('#m2'),W=['Python','Flask','FastAPI','JavaScript','HTML','CSS','CLI Tools','Web Apps','Security','Full-Stack'];
  [m1,m2].forEach(function(m,k){var h='',L=k?W.slice().reverse():W;L.concat(L).forEach(function(w){h+='<span>'+w+'</span>'});m.innerHTML=h});

  var hero=$('.hero'),stage=$('#stage');
  hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();hero.style.setProperty('--x',(e.clientX-r.left)+'px');hero.style.setProperty('--y',(e.clientY-r.top)+'px');
    if(fine&&!reduce){stage.style.setProperty('--px',((e.clientX/innerWidth-.5)*-26)+'px');stage.style.setProperty('--py',((e.clientY/innerHeight-.5)*-14)+'px')}});

  var pg=$('#pg'),band=$('#band'),last=scrollY;
  addEventListener('scroll',function(){var h=document.documentElement.scrollHeight-innerHeight;pg.style.transform='scaleX('+(h>0?scrollY/h:0)+')';
    var v=Math.max(-8,Math.min(8,(scrollY-last)*.25));last=scrollY;if(!reduce)band.style.transform='skewY('+(v*-.4)+'deg)'},{passive:true});
  setInterval(function(){band.style.transform=''},400);

  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add(e.target.classList.contains('card')?'in':'on');
    if(e.target.dataset.n)count(e.target);io.unobserve(e.target)}})},{threshold:.2});
  $$('.rv').forEach(function(x){io.observe(x)});
  $$('.card').forEach(function(c,i){c.style.setProperty('--dl',(i%2)*.12+'s');io.observe(c)});
  $$('[data-n]').forEach(function(x){io.observe(x)});
  function count(el){var to=+el.dataset.n,t0=performance.now();(function f(t){var p=Math.min(1,(t-t0)/1400);el.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)}

  if(fine&&!reduce){
    $$('.card').forEach(function(c){
      c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
        c.style.setProperty('--ry',(x-.5)*9+'deg');c.style.setProperty('--rx',-(y-.5)*9+'deg');c.style.setProperty('--gx',x*100+'%');c.style.setProperty('--gy',y*100+'%')});
      c.addEventListener('pointerleave',function(){c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')});
    });
    $$('.mag').forEach(function(b){
      b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+(e.clientX-r.left-r.width/2)*.25+'px,'+(e.clientY-r.top-r.height/2)*.35+'px)'});
      b.addEventListener('pointerleave',function(){b.style.transform=''});
    });
    var cur=$('#cur'),cx=0,cy=0,tx=0,ty=0;
    addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY;cur.classList.add('vis')});
    (function loop(){cx+=(tx-cx)*.18;cy+=(ty-cy)*.18;cur.style.transform='translate('+(cx-17)+'px,'+(cy-17)+'px)';requestAnimationFrame(loop)})();
    $$('a,.card,.chips span').forEach(function(x){x.addEventListener('pointerenter',function(){cur.classList.add('big')});x.addEventListener('pointerleave',function(){cur.classList.remove('big')})});
  }
  var au=$('#au'),vb=$('#vb'),lb=vb.querySelector('em');
  vb.addEventListener('click',function(){if(au.paused){au.currentTime=0;var p=au.play();if(p&&p.catch)p.catch(function(){})}else au.pause()});
  au.addEventListener('play',function(){vb.classList.add('on');lb.textContent='Pause intro'});
  ['pause','ended'].forEach(function(ev){au.addEventListener(ev,function(){vb.classList.remove('on');lb.textContent='Hear my intro'})});
  var navEl=$('nav'),ly=scrollY,links=$$('nav a');
  addEventListener('scroll',function(){var y=scrollY,dy=y-ly;ly=y;
    if(y>240&&dy>6)navEl.classList.add('hide');else if(dy<-6||y<240)navEl.classList.remove('hide');
    if(!reduce&&innerWidth>860)stage.style.setProperty('--sy',Math.min(y,innerHeight)*.1+'px')},{passive:true});
  var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)links.forEach(function(a){a.classList.toggle('act',a.getAttribute('href')==='#'+e.target.id)})})},{rootMargin:'-45% 0px -50% 0px'});
  ['about','work','certs','contact'].forEach(function(id){so.observe(document.getElementById(id))});
  $$('.stats,.sk,.cert .box,.row').forEach(function(x){x.classList.add('fx');io.observe(x)});
  var lb=$('#lb'),th=$('#thumb');
  if(lb&&th&&lb.showModal){th.addEventListener('click',function(){$('#lbimg').src=$('#certimg').src;lb.showModal()});
    lb.addEventListener('click',function(e){if(e.target===lb||e.target.classList.contains('x'))lb.close()})}
  function scr(el){var f=el.textContent,ch='!<>-_/[]{}=+*^?#',n=0,tot=26;el.setAttribute('aria-label',f);
    setTimeout(function t(){var o='';for(var i=0;i<f.length;i++)o+=(f[i]===' '||i<n*f.length/tot)?f[i]:ch[Math.floor(Math.random()*ch.length)];el.textContent=o;if(++n<=tot)setTimeout(t,32);else el.textContent=f},900)}
  $$('.about p').forEach(function(p){var s=p.textContent.trim().split(/\s+/);p.textContent='';s.forEach(function(w,i){var e=document.createElement('span');e.className='wd';e.textContent=w;e.style.setProperty('--w',i);p.appendChild(e);p.appendChild(document.createTextNode(' '))});io.observe(p)});
  io.observe($('#big'));
  function fit(){var b=$('#big');b.style.fontSize='';var s=parseFloat(getComputedStyle(b).fontSize);while(b.scrollWidth>b.clientWidth+1&&s>24){s-=4;b.style.fontSize=s+'px'}}
  fit();addEventListener('resize',fit);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);
  (function(){var cv=$('#pc');if(!cv||reduce)return;var x=cv.getContext('2d'),P=[],N=innerWidth<700?28:62,w,h,mx=-999,my=-999,run=true,raf=0,dpr=Math.min(devicePixelRatio||1,2);
    function size(){w=cv.clientWidth;h=cv.clientHeight;cv.width=w*dpr;cv.height=h*dpr;x.setTransform(dpr,0,0,dpr,0,0)}
    size();addEventListener('resize',size);
    for(var i=0;i<N;i++)P.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35});
    hero.addEventListener('pointermove',function(e){var r=cv.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});
    hero.addEventListener('pointerleave',function(){mx=my=-999});
    function start(){if(!raf)raf=requestAnimationFrame(frame)}
    function frame(){raf=0;if(!run)return;x.clearRect(0,0,w,h);
      for(var i=0;i<N;i++){var p=P[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;
        var dx=p.x-mx,dy=p.y-my,dd=dx*dx+dy*dy;if(dd<14400){var f=1-Math.sqrt(dd)/120;p.x+=dx*f*.04;p.y+=dy*f*.04}
        x.fillStyle='rgba(198,255,61,.75)';x.beginPath();x.arc(p.x,p.y,1.6,0,6.283);x.fill();
        for(var j=i+1;j<N;j++){var q=P[j],ax=p.x-q.x,ay=p.y-q.y,d2=ax*ax+ay*ay;if(d2<13000){x.strokeStyle='rgba(47,245,192,'+(.3*(1-d2/13000))+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}}
      raf=requestAnimationFrame(frame)}
    new IntersectionObserver(function(es){run=es[0].isIntersecting;if(run)start()}).observe(hero);start()})();
  var term=$('.term'),txt=$('.txt'),mq=matchMedia('(max-width:640px)');
  function place(){if(mq.matches)hero.appendChild(term);else txt.appendChild(term)}
  place();if(mq.addEventListener)mq.addEventListener('change',place);else mq.addListener(place);
  function fitName(){var h=$('#hn');h.style.fontSize='';var s=parseFloat(getComputedStyle(h).fontSize);while(h.offsetWidth>stage.clientWidth*.97&&s>24){s-=3;h.style.fontSize=s+'px'}}
  fitName();addEventListener('resize',fitName);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fitName);
  var tm=$('#tm'),ti=$('#ti'),tout=$('#to'),hist=[],hi=0;
  var OUT={help:'Commands:  about  skills  projects  certs  contact  github  cv  hire  clear  exit',
  about:'Shanif P - Python Full-Stack Developer, Malappuram, Kerala.\nBuilds web apps, APIs, data tools and defensive security utilities.\nLooking for junior Python, Backend and Full-Stack roles.',
  skills:'Web & Backend : Django, Flask, FastAPI, REST APIs\nDatabases     : PostgreSQL, MySQL, SQLite, SQLAlchemy\nData          : Pandas, NumPy, Polars\nTools         : Git, GitHub, Linux, Termux, Pytest',
  projects:'1. DataVortex        offline data analytics CLI\n2. CyberShield X     defensive security toolkit, 50+ self-tests\n3. Kuttikada         e-commerce web application\n4. ABSMARK Ventures  real-estate web app, custom Python HTTP server',
  certs:'Python Essentials 2 - Cisco Networking Academy (Aug 31, 2026)',
  contact:'Email  : shaniiiiif@gmail.com\nGitHub : github.com/shaniiiiif\nBase   : Malappuram, Kerala, India',
  github:'Opening github.com/shaniiiiif ...'};
  function say(t,c){var d=document.createElement('div');d.textContent=t;if(c)d.className=c;tout.appendChild(d);tout.scrollTop=tout.scrollHeight}
  function boom(){var c=$('#cf'),x=c.getContext('2d'),w=c.width=innerWidth,h=c.height=innerHeight,P=[],cl=['#c6ff3d','#2ff5c0','#ffffff','#2f5bff'];
    for(var i=0;i<140;i++)P.push({x:w/2,y:h*.6,vx:(Math.random()-.5)*16,vy:-Math.random()*16-4,r:Math.random()*6+3,c:cl[i%4],a:Math.random()*6});
    c.style.display='block';var f=0;(function t(){x.clearRect(0,0,w,h);P.forEach(function(p){p.vy+=.35;p.x+=p.vx;p.y+=p.vy;p.a+=.2;x.fillStyle=p.c;x.save();x.translate(p.x,p.y);x.rotate(p.a);x.fillRect(-p.r,-p.r/2,p.r*2,p.r);x.restore()});if(++f<110)requestAnimationFrame(t);else{x.clearRect(0,0,w,h);c.style.display='none'}})()}
  function runCmd(raw){var c=raw.trim().toLowerCase();say('>>> '+raw,'cm');if(!c)return;hist.push(raw);hi=hist.length;
    if(c==='clear'){tout.textContent='';return}
    if(c==='exit'||c==='quit'){tm.close();return}
    if(c==='github'){say(OUT.github);window.open('https://github.com/shaniiiiif','_blank','noopener');return}
    if(c==='cv'){var b=$('#cvb')||$('a[download]');say('Preparing CV ...');if(b)b.click();return}
    if(c==='hire'||c==='sudo hire'||c==='sudo hire shanif'){say('Permission granted. Great decision.','ok');setTimeout(function(){tm.close();boom();setTimeout(function(){location.href='mailto:shaniiiiif@gmail.com?subject=Hiring%20Shanif%20P'},1300)},600);return}
    if(c==='python'||c==='python3'){say("print('Hello, I am Shanif P')\nHello, I am Shanif P");return}
    if(OUT[c]){say(OUT[c]);return}
    say('command not found: '+c+'. Type help','err')}
  function openT(){if(tm.open)return;tm.showModal();if(!tout.childElementCount){say('shanif@portfolio ~ python3','ok');say('Welcome! Type help to see commands.')}ti.focus()}
  $('#tbtn').addEventListener('click',openT);
  addEventListener('keydown',function(e){var g=e.target.tagName;if((e.key==='/'&&g!=='INPUT'&&g!=='TEXTAREA')||((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k')){e.preventDefault();openT()}});
  ti.addEventListener('keydown',function(e){if(e.key==='Enter'){runCmd(ti.value);ti.value=''}else if(e.key==='ArrowUp'&&hi>0){hi-=1;ti.value=hist[hi]||''}else if(e.key==='ArrowDown'&&hi<hist.length){hi+=1;ti.value=hist[hi]||''}});
  tm.addEventListener('click',function(e){if(e.target===tm||e.target.classList.contains('x2'))tm.close()});
  var ttl=document.title;document.addEventListener('visibilitychange',function(){document.title=document.hidden?'Come back! Shanif P':ttl});
  var PD=[
  {n:'01',t:'DataVortex',s:'An offline, privacy-focused analytics tool for the command line. No external API key needed.',l:['Works with CSV, Excel, Parquet, SQLite, MySQL and PostgreSQL data','Covers data cleaning, transformation and analysis workflows','Uses Pandas and Polars, designed for developer-friendly command-line use'],g:['Python','Pandas','Polars','SQL']},
  {n:'02',t:'CyberShield X',s:'Version 23.0.0 of a defensive security toolkit for authorized auditing and local analysis.',l:['Pure Python with a standard-library-only runtime','Five operating profiles: SAFE, BALANCED, DEEP, CI and NINJA','50+ self-tests and CLI workflows','Structured reports in JSON, HTML, CSV, SARIF and JUnit XML'],g:['Python 3.10+','CLI','Testing']},
  {n:'03',t:'Kuttikada',s:'An e-commerce web application concept.',l:['Product discovery and categories','Order and account flows','Customer-support structure','Focus on practical architecture, user flow and maintainability'],g:['Python','Web app','Git']},
  {n:'04',t:'ABSMARK Ventures',s:'A real-estate web application.',l:['Served by a custom Python HTTP server'],g:['Python','HTTP server','Real estate']}];
  var pm=$('#pm');
  $$('.card').forEach(function(c,i){var d=PD[i];c.tabIndex=0;c.setAttribute('role','button');c.setAttribute('aria-label','Open details: '+d.t);
    var no=document.createElement('b');no.className='no';no.setAttribute('aria-hidden','true');no.textContent=d.n;c.appendChild(no);
    var mo=document.createElement('span');mo.className='more';mo.innerHTML='View details &rarr;';c.appendChild(mo);
    function openP(){$('#pn').textContent=d.n+' / 04';$('#pt').textContent=d.t;$('#ps').textContent=d.s;
      var ul=$('#pl');ul.textContent='';d.l.forEach(function(x){var li=document.createElement('li');li.textContent=x;ul.appendChild(li)});
      var tg=$('#ptg');tg.textContent='';d.g.forEach(function(x){var s=document.createElement('span');s.textContent=x;tg.appendChild(s)});pm.showModal()}
    c.addEventListener('click',openP);c.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();openP()}})});
  pm.addEventListener('click',function(e){if(e.target===pm||e.target.classList.contains('x3'))pm.close()});
  var fab=$('#fab'),ctEl=$('#contact');
  addEventListener('scroll',function(){var y=scrollY;fab.classList.toggle('show',y>innerHeight*.8&&ctEl.getBoundingClientRect().top>innerHeight*.55);
    if(!reduce)hero.style.setProperty('--hs',Math.min(1,y/(innerHeight*.9)).toFixed(3))},{passive:true});
  if(fine){var cu=$('#cur');$$('.card').forEach(function(c){c.addEventListener('pointerenter',function(){cu.dataset.t='View'});c.addEventListener('pointerleave',function(){delete cu.dataset.t})})}
  var ENV=[0,0,0,13,21,39,63,88,100,100,100,100,98,90,81,70,60,57,55,53,53,48,28,0,0,0,0,0,0,0,0,0,38,75,99,97,77,58,45,36,33,32,30,25,22,25,32,40,43,41,53,88,100,100,96,68,44,42,67,91,82,48,19,0,13,12,0,14,21,36,58,77,85,82,76,67,57,50,41,39,62,95,100,81,54,39,32,38,57,67,47,16,0,0,24,53,94,100,100,100,93,68,59,49,31,15,0,0,20,47,76,88,76,56,45,41,33,19,0,0,13,25,57,93,100,100,86,74,62,50,38,26,22,19,0,14,28,53,90,100,100,93,58,22,0,0,0,0,0,13,43,80,95,79,52,28,19,21,27,44,69,86,85,71,48,29,28,39,60,72,65,38,0,0,15,28,44,61,73,72,67,56,37,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,46,71,98,100,95,63,48,45,39,27,12,14,22,27,42,70,90,85,60,40,35,34,25,0,0,12,22,39,64,73,54,33,30,49,82,97,81,54,30,0,0,16,32,64,95,92,64,40,22,0,0,15,16,13,0,12,14,28,58,90,100,96,78,64,55,49,39,30,30,50,67,67,74,88,96,93,85,76,68,62,57,51,44,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],him=$('#heroimg'),mc=$('#mouth'),mx=mc.getContext('2d'),fc,skin=['#b98466','#b98466'],talking=false,TA=0,blT=-1,nextBl=0,raf2=0;
  function prepFace(){if(fc||!him.naturalWidth)return;fc=document.createElement('canvas');fc.width=130;fc.height=100;var g=fc.getContext('2d');g.drawImage(him,435,232,130,100,0,0,130,100);
    try{[[450.8,183],[520.3,167]].forEach(function(p,i){var d=him.naturalWidth/1100,t=document.createElement('canvas');t.width=t.height=5;var q=t.getContext('2d');q.drawImage(him,p[0]*d-2,p[1]*d-2,5,5,0,0,5,5);var v=q.getImageData(0,0,5,5).data,r=0,gg=0,b=0,n=0;for(var k=0;k<v.length;k+=4){if(v[k+3]>200){r+=v[k];gg+=v[k+1];b+=v[k+2];n++}}if(n)skin[i]='rgb('+Math.round(r/n*.99)+','+Math.round(gg/n*.97)+','+Math.round(b/n*.96)+')'})}catch(e){}}
  function drawFace(A,B){var dpr=devicePixelRatio||1,W=him.clientWidth*dpr,H=him.clientHeight*dpr;if(mc.width!==Math.round(W)){mc.width=Math.round(W);mc.height=Math.round(H)}
    prepFace();mx.setTransform(1,0,0,1,0,0);mx.clearRect(0,0,mc.width,mc.height);if(!fc)return;var k=mc.width/1100;
    if(A>.02){var d=A*7,ch=54,Rx=34,a=-.218;
      for(var lx=-Rx;lx<Rx;lx+=1.5){var w=Math.cos(Math.PI/2*Math.min(1,Math.abs(lx+.75)/Rx));w*=w;var di=d*w,ei=di*.55,ks=(ch+ei-di)/ch;
        mx.save();mx.setTransform(k,0,0,k,0,0);mx.translate(501.5,258.5);mx.rotate(a);mx.beginPath();mx.rect(lx,di,1.7,ch+ei-di);mx.clip();
        mx.translate(0,di);mx.scale(1,ks);mx.rotate(-a);mx.translate(-501.5,-258.5);mx.drawImage(fc,435,232);mx.restore()}
      mx.setTransform(k,0,0,k,0,0);mx.translate(501.5,258.5);mx.rotate(a);
      var ry=d*.5+.8,rxm=20*(.55+.45*A),gr=mx.createLinearGradient(0,0,0,d+1);gr.addColorStop(0,'#2b0c0f');gr.addColorStop(1,'#7a2a30');
      mx.save();mx.beginPath();mx.ellipse(0,d*.5,rxm,ry,0,0,6.2832);mx.clip();mx.fillStyle=gr;mx.fillRect(-rxm,-1,rxm*2,d+3);
      if(d>2.2){var tg=mx.createLinearGradient(0,0,0,2.6);tg.addColorStop(0,'rgba(240,235,228,.95)');tg.addColorStop(1,'rgba(214,206,198,.8)');mx.fillStyle=tg;mx.fillRect(-rxm*.78,-.2,rxm*1.56,Math.min(2.6,d*.32))}
      mx.restore()}
    if(B>.02){[[450.8,194.7,0],[520.3,178.9,1]].forEach(function(e){mx.save();mx.setTransform(k,0,0,k,0,0);mx.translate(e[0],e[1]);mx.rotate(-.12);
      mx.beginPath();mx.ellipse(0,.5,16,8.6,0,0,6.2832);mx.clip();mx.fillStyle=skin[e[2]];mx.fillRect(-20,-10,40,19.5*B);
      mx.strokeStyle='rgba(60,30,24,.45)';mx.lineWidth=1.1;mx.beginPath();mx.moveTo(-16,-9.2+18*B);mx.quadraticCurveTo(0,-9.2+18*B+2.4*B,16,-9.2+18*B);mx.stroke();mx.restore()})}
    mx.setTransform(1,0,0,1,0,0)}
  window.__face=drawFace;
  function loopT(now){var tgt=0;if(talking){tgt=(ENV[Math.floor(au.currentTime/.02)]||0)/100}
    TA+=(tgt-TA)*(tgt>TA?.55:.25);var B=0;
    if(false){if(!nextBl)nextBl=now+1500;if(blT<0&&now>nextBl){blT=now}if(blT>=0){var u=(now-blT)/240;if(u>=1){blT=-1;nextBl=now+2200+Math.random()*2600}else B=u<.4?u/.4:1-(u-.4)/.6}}
    if(!talking&&TA<.01&&B===0){drawFace(0,0);['--amp','--br','--sw'].forEach(function(p){stage.style.setProperty(p,0)});raf2=0;return}
    stage.style.setProperty('--amp',TA.toFixed(3));stage.style.setProperty('--br',Math.sin(now/650).toFixed(3));stage.style.setProperty('--sw',(Math.sin(now/1100)*(.4+TA)).toFixed(3));raf2=requestAnimationFrame(loopT)}
  function startTalk(){if(reduce)return;talking=true;nextBl=0;blT=-1;if(!raf2)raf2=requestAnimationFrame(loopT)}
  function stopTalk(){talking=false}
  au.addEventListener('play',startTalk);au.addEventListener('pause',stopTalk);au.addEventListener('ended',stopTalk);
  var vc=$('#vid'),phEl=$('.ph'),gl=null,tex=null,vOn=false;
  try{gl=vc.getContext('webgl',{premultipliedAlpha:true,alpha:true})}catch(e){gl=null}
  if(gl){var sh=function(t,s){var o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);return o},pg2=gl.createProgram();
    gl.attachShader(pg2,sh(gl.VERTEX_SHADER,'attribute vec2 p;varying vec2 u;void main(){u=vec2(p.x*.5+.5,.5-p.y*.5);gl_Position=vec4(p,0.,1.);}'));
    gl.attachShader(pg2,sh(gl.FRAGMENT_SHADER,'precision mediump float;varying vec2 u;uniform sampler2D t;void main(){vec3 c=texture2D(t,vec2(u.x*.5,u.y)).rgb;float a=texture2D(t,vec2(.5+u.x*.5,u.y)).r;gl_FragColor=vec4(c*a,a);}'));
    gl.linkProgram(pg2);gl.useProgram(pg2);var bf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,bf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
    var lc=gl.getAttribLocation(pg2,'p');gl.enableVertexAttribArray(lc);gl.vertexAttribPointer(lc,2,gl.FLOAT,false,0,0);
    tex=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,tex);
    [[gl.TEXTURE_MIN_FILTER,gl.LINEAR],[gl.TEXTURE_MAG_FILTER,gl.LINEAR],[gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE],[gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE]].forEach(function(q){gl.texParameteri(gl.TEXTURE_2D,q[0],q[1])});
    gl.viewport(0,0,vc.width,vc.height);gl.clearColor(0,0,0,0)}
  function vFrame(){if(!vOn||!gl)return;
    try{gl.bindTexture(gl.TEXTURE_2D,tex);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,au);gl.clear(gl.COLOR_BUFFER_BIT);gl.drawArrays(gl.TRIANGLE_STRIP,0,4)}
    catch(e){vOn=false;phEl.classList.remove('talk');return}
    if(au.requestVideoFrameCallback)au.requestVideoFrameCallback(vFrame);else requestAnimationFrame(vFrame)}
  function vStart(){if(!gl||vOn)return;vOn=true;phEl.classList.add('talk');vFrame()}
  function vStop(){vOn=false;phEl.classList.remove('talk')}
  au.addEventListener('playing',vStart);au.addEventListener('pause',vStop);au.addEventListener('ended',vStop);
})();
