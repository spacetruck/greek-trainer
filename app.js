const LETTERS = [{"u": "\u0391", "l": "\u03b1", "name": "alpha", "pron": "AL-fuh", "usage": "Angle; learning rate; significance level \u03b1.", "alt": ["AL-fa"]}, {"u": "\u0392", "l": "\u03b2", "name": "beta", "pron": "BAY-tuh", "usage": "Beta coefficient; second item.", "alt": ["BEE-tuh"]}, {"u": "\u0393", "l": "\u03b3", "name": "gamma", "pron": "GAM-uh", "usage": "Gamma function \u0393; Euler\u2013Mascheroni \u03b3.", "alt": []}, {"u": "\u0394", "l": "\u03b4", "name": "delta", "pron": "DEL-tuh", "usage": "Change (\u0394x); small change \u03b4.", "alt": []}, {"u": "\u0395", "l": "\u03b5", "name": "epsilon", "pron": "EP-sih-lon", "usage": "A small positive number \u03b5.", "alt": []}, {"u": "\u0396", "l": "\u03b6", "name": "zeta", "pron": "ZAY-tuh", "usage": "Riemann zeta \u03b6(s).", "alt": []}, {"u": "\u0397", "l": "\u03b7", "name": "eta", "pron": "AY-tuh", "usage": "Efficiency \u03b7; viscosity.", "alt": []}, {"u": "\u0398", "l": "\u03b8", "name": "theta", "pron": "THAY-tuh", "usage": "Angle \u03b8; step size.", "alt": []}, {"u": "\u0399", "l": "\u03b9", "name": "iota", "pron": "eye-OH-tuh", "usage": "A tiny amount (not one iota).", "alt": []}, {"u": "\u039a", "l": "\u03ba", "name": "kappa", "pron": "KAP-uh", "usage": "Curvature \u03ba; kappa statistic.", "alt": []}, {"u": "\u039b", "l": "\u03bb", "name": "lambda", "pron": "LAM-duh", "usage": "Eigenvalues \u03bb; wavelength.", "alt": []}, {"u": "\u039c", "l": "\u03bc", "name": "mu", "pron": "MYOO", "usage": "Mean \u03bc; coefficient of friction.", "alt": []}, {"u": "\u039d", "l": "\u03bd", "name": "nu", "pron": "NOO", "usage": "Frequency \u03bd; degrees of freedom.", "alt": []}, {"u": "\u039e", "l": "\u03be", "name": "xi", "pron": "ZAI (or ksee)", "usage": "Random variable \u03be; Greek letter Xi.", "alt": ["ksee"]}, {"u": "\u039f", "l": "\u03bf", "name": "omicron", "pron": "OM-ih-kron", "usage": "Rare in math; the letter \u039f/\u03bf.", "alt": []}, {"u": "\u03a0", "l": "\u03c0", "name": "pi", "pron": "PIE", "usage": "Circle constant \u03c0 \u2248 3.14159.", "alt": []}, {"u": "\u03a1", "l": "\u03c1", "name": "rho", "pron": "ROH", "usage": "Density \u03c1; correlation coefficient.", "alt": []}, {"u": "\u03a3", "l": "\u03c3", "name": "sigma", "pron": "SIG-muh", "usage": "Sum \u03a3; standard deviation \u03c3; final \u03c3 = \u03c2.", "alt": []}, {"u": "\u03a4", "l": "\u03c4", "name": "tau", "pron": "TOW (as in cow)", "usage": "Time constant \u03c4; sometimes 2\u03c0.", "alt": []}, {"u": "\u03a5", "l": "\u03c5", "name": "upsilon", "pron": "OOP-sih-lon", "usage": "Rare in math; particle \u03a5 (upsilon).", "alt": []}, {"u": "\u03a6", "l": "\u03c6", "name": "phi", "pron": "FIE (or fee)", "usage": "Golden ratio \u03c6; polar angle.", "alt": ["fee"]}, {"u": "\u03a7", "l": "\u03c7", "name": "chi", "pron": "KAI (rhymes with pie)", "usage": "Chi\u2011square \u03c7\u00b2; characteristic function.", "alt": []}, {"u": "\u03a8", "l": "\u03c8", "name": "psi", "pron": "SAI (or psai)", "usage": "Wavefunction \u03c8; psychology symbol.", "alt": []}, {"u": "\u03a9", "l": "\u03c9", "name": "omega", "pron": "oh-MAY-guh", "usage": "Angular frequency \u03c9; big\u2011\u03a9 notation.", "alt": []}];
const STATES = [["Alabama", "Montgomery"], ["Alaska", "Juneau"], ["Arizona", "Phoenix"], ["Arkansas", "Little Rock"], ["California", "Sacramento"], ["Colorado", "Denver"], ["Connecticut", "Hartford"], ["Delaware", "Dover"], ["Florida", "Tallahassee"], ["Georgia", "Atlanta"], ["Hawaii", "Honolulu"], ["Idaho", "Boise"], ["Illinois", "Springfield"], ["Indiana", "Indianapolis"], ["Iowa", "Des Moines"], ["Kansas", "Topeka"], ["Kentucky", "Frankfort"], ["Louisiana", "Baton Rouge"], ["Maine", "Augusta"], ["Maryland", "Annapolis"], ["Massachusetts", "Boston"], ["Michigan", "Lansing"], ["Minnesota", "Saint Paul"], ["Mississippi", "Jackson"], ["Missouri", "Jefferson City"], ["Montana", "Helena"], ["Nebraska", "Lincoln"], ["Nevada", "Carson City"], ["New Hampshire", "Concord"], ["New Jersey", "Trenton"], ["New Mexico", "Santa Fe"], ["New York", "Albany"], ["North Carolina", "Raleigh"], ["North Dakota", "Bismarck"], ["Ohio", "Columbus"], ["Oklahoma", "Oklahoma City"], ["Oregon", "Salem"], ["Pennsylvania", "Harrisburg"], ["Rhode Island", "Providence"], ["South Carolina", "Columbia"], ["South Dakota", "Pierre"], ["Tennessee", "Nashville"], ["Texas", "Austin"], ["Utah", "Salt Lake City"], ["Vermont", "Montpelier"], ["Virginia", "Richmond"], ["Washington", "Olympia"], ["West Virginia", "Charleston"], ["Wisconsin", "Madison"], ["Wyoming", "Cheyenne"]];
const CAPITALS_BY_INITIAL = STATES.reduce(function(acc,p){var s=p[0], c=p[1]; var k=c[0].toUpperCase(); (acc[k]||(acc[k]=[])).push([s,c]); return acc;}, {});
const RAW_MAP = {"alpha": "A", "beta": "B", "delta": "D", "epsilon": "E", "theta": "T", "iota": "I", "lambda": "L", "mu": "M", "omicron": "O", "pi": "P", "rho": "R", "sigma": "S", "tau": "T", "phi": "F", "omega": "O"};
const GREEK_TO_LATIN = Object.fromEntries(Object.entries(RAW_MAP).filter(function(e){return CAPITALS_BY_INITIAL[e[1]];}));
const BLOCKS_DATA = [{"latin": "meta", "greek": ["mu", "epsilon", "tau", "alpha"]}, {"latin": "micro", "greek": ["mu", "iota", "kappa", "rho", "omicron"]}, {"latin": "macro", "greek": ["mu", "alpha", "kappa", "rho", "omicron"]}, {"latin": "bio", "greek": ["beta", "iota", "omicron"]}, {"latin": "geo", "greek": ["gamma", "epsilon", "omicron"]}, {"latin": "psycho", "greek": ["psi", "upsilon", "chi", "omicron"]}, {"latin": "photo", "greek": ["phi", "omicron", "tau", "omicron"]}, {"latin": "chrono", "greek": ["chi", "rho", "omicron", "nu", "omicron"]}, {"latin": "biblio", "greek": ["beta", "iota", "beta", "lambda", "iota", "omicron"]}];
const STORAGE_KEY="greek_trainer_progress_v5";

function $(s){return document.querySelector(s)}
function $$(s){return Array.prototype.slice.call(document.querySelectorAll(s))}
function rand(a){return a[Math.floor(Math.random()*a.length)]}
function loadProgress(){try{var r=localStorage.getItem(STORAGE_KEY);return r?JSON.parse(r):{learned:{},score:{right:0,total:0}}}catch(e){return {learned:{},score:{right:0,total:0}}}}
function saveProgress(p){localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); renderProgress(); renderLettersList(); }
var PROG = loadProgress();

$$(".tab-btn").forEach(function(btn){
  btn.addEventListener("click", function(){
    $$(".tab-btn").forEach(function(b){b.classList.remove("active")});
    btn.classList.add("active");
    var tab = btn.getAttribute("data-tab");
    ["learn","trace","quiz","progress","blocks"].forEach(function(id){
      document.getElementById(id).hidden = id !== tab;
    });
  });
});

// Learn
var idx=0;
function renderLearn(){
  var L = LETTERS[idx];
  $("#glyphUpper").textContent = L.u;
  $("#glyphLower").textContent = L.l;
  $("#name").textContent = L.name;
  $("#pron").textContent = L.pron + (L.alt && L.alt.length ? " • aka " + L.alt.join(", ") : "");
  $("#usage").textContent = L.usage;
  var learned = !!PROG.learned[L.name];
  $("#markLearned").classList.toggle("learned-state", learned);
  $("#markLearned").disabled = learned;
  $("#resetLearned").disabled = !learned;
  $("#traceSelect").value = L.name;
  updateGhost();
}
$("#prevLetter").addEventListener("click", function(){ idx=(idx-1+LETTERS.length)%LETTERS.length; renderLearn(); });
$("#nextLetter").addEventListener("click", function(){ idx=(idx+1)%LETTERS.length; renderLearn(); });

function renderLettersList(){
  var wrap = $("#lettersList"); wrap.innerHTML = "";
  LETTERS.forEach(function(L,i){
    var div = document.createElement("button");
    div.className = "pill" + (PROG.learned[L.name] ? " learned" : "");
    div.dataset.name = L.name;
    div.innerHTML = '<span class="upper">'+L.u+'</span><span class="lower">'+L.l+'</span><div style="font-size:12px">'+L.name+'</div>';
    div.addEventListener("click", function(){ idx = i; renderLearn(); });
    wrap.appendChild(div);
  });
}
$("#markLearned").addEventListener("click", function(){ PROG.learned[LETTERS[idx].name] = true; saveProgress(PROG); renderLearn(); });
$("#resetLearned").addEventListener("click", function(){ delete PROG.learned[LETTERS[idx].name]; saveProgress(PROG); renderLearn(); });

// Speech
var voiceSel=$("#voiceSelect"); var voices=[];
function loadVoices(){ voices = speechSynthesis.getVoices().filter(function(v){ return v.lang && v.lang.indexOf("en")===0; });
  voiceSel.innerHTML = voices.map(function(v,i){ return '<option value="'+i+'">'+v.name+' — '+v.lang+(v.default?' (default)':'')+'</option>'; }).join('');
}
loadVoices(); window.speechSynthesis.onvoiceschanged = loadVoices;
function speak(text){ var u=new SpeechSynthesisUtterance(text); var i=+voiceSel.value; if(voices[i]) u.voice=voices[i]; u.rate=0.95; u.pitch=1.0; speechSynthesis.cancel(); speechSynthesis.speak(u); }
$("#speakBtn").addEventListener("click", function(){ var L=LETTERS[idx]; speak(L.name+' — '+L.pron); });

// Trace
var traceSel=$("#traceSelect");
traceSel.innerHTML = LETTERS.map(function(L){ return '<option value="'+L.name+'">'+L.name+'</option>'; }).join('');
$("#traceCase").addEventListener("change", function(){ updateGhost(); });
traceSel.addEventListener("change", function(){ clearCanvas(); updateGhost(); });
function updateGhost(){ var L = LETTERS.find(function(x){ return x.name===traceSel.value; }) || LETTERS[idx]; var isU = $("#traceCase").value === "upper"; $("#ghost").textContent = isU ? L.u : L.l; }
var canvas=document.getElementById("pad"); var ctx=canvas.getContext("2d"); ctx.lineWidth=14; ctx.lineCap="round"; ctx.lineJoin="round"; ctx.strokeStyle="#e5e7eb";
var drawing=false, last=null;
function pos(e){ var r=canvas.getBoundingClientRect(); var x=(e.touches?e.touches[0].clientX:e.clientX)-r.left; var y=(e.touches?e.touches[0].clientY:e.clientY)-r.top; var sx=canvas.width/r.width, sy=canvas.height/r.height; return {x:x*sx, y:y*sy}; }
function start(e){ drawing=true; last=pos(e); }
function move(e){ if(!drawing) return; var p=pos(e); ctx.beginPath(); ctx.moveTo(last.x,last.y); ctx.lineTo(p.x,p.y); ctx.stroke(); last=p; if(e.preventDefault) e.preventDefault(); }
function end(){ drawing=false; last=null; }
["mousedown","touchstart"].forEach(function(ev){ canvas.addEventListener(ev, start, {passive:false}); });
["mousemove","touchmove"].forEach(function(ev){ canvas.addEventListener(ev, move, {passive:false}); });
["mouseup","mouseleave","touchend","touchcancel"].forEach(function(ev){ canvas.addEventListener(ev, end, {passive:true}); });
function clearCanvas(){ ctx.clearRect(0,0,canvas.width,canvas.height); }
$("#erase").addEventListener("click", clearCanvas);
$("#savePNG").addEventListener("click", function(){ var a=document.createElement("a"); var L=LETTERS.find(function(x){return x.name===traceSel.value}); var which=$("#traceCase").value==="upper"?L.u:L.l; a.download='trace-'+L.name+'-'+which+'.png'; a.href=canvas.toDataURL('image/png'); a.click(); });

// Quiz
var scoreEl=$("#score"), scoreOutOfEl=$("#scoreOutOf"), roundEl=$("#roundN"), roundTotalEl=$("#roundTotal");
var roundSize=10, qCount=0;
function resetRound(){ qCount=0; roundSize=+$("#roundSize").value; PROG.score={right:0,total:0}; scoreOutOfEl.textContent=roundSize; roundTotalEl.textContent=roundSize; renderScore(); }
$("#roundSize").addEventListener("change", resetRound);
function renderScore(){ scoreEl.textContent = (PROG.score && PROG.score.right) || 0; }
function incScore(ok){ PROG.score.total++; if(ok) PROG.score.right++; renderScore(); }
function pickScope(){ var s=$("#quizScope").value; if(s==="learned") return LETTERS.filter(function(L){return PROG.learned[L.name]}); if(s==="unlearned") return LETTERS.filter(function(L){return !PROG.learned[L.name]}); return LETTERS.slice(); }
function newRound(){ resetRound(); $("#qText").textContent="Round started — answer the question below."; askQuestion(); }
$("#newQ").addEventListener("click", newRound);

function askQuestion(){
  if(qCount>=roundSize){
    alert('Round complete! Score: '+PROG.score.right+'/'+roundSize);
    $("#qText").textContent = "Pick a mode and start a new round.";
    $("#quizOptions").innerHTML = ""; $("#quizFree").innerHTML = ""; return;
  }
  qCount++; roundEl.textContent = qCount;
  var mode=$("#quizMode").value; var pool=pickScope(); var answer=rand(pool); $("#quizOptions").innerHTML=""; $("#quizFree").innerHTML="";
  if(mode==="see-name"){
    var shown = Math.random()<.5 ? answer.u : answer.l;
    $("#qText").innerHTML = 'What is the <b>name</b> of this letter? <span class="glyph" style="font-size:72px; display:inline-block; vertical-align:middle">'+shown+'</span>';
    var opts=new Set([answer.name]); while(opts.size<4) opts.add(rand(LETTERS).name);
    Array.from(opts).sort(function(){return Math.random()-.5}).forEach(function(name){
      var b=document.createElement("button"); b.textContent=name;
      b.addEventListener("click", function(){ var ok = name===answer.name; b.classList.add(ok?'correct':'incorrect'); incScore(ok); askQuestion(); });
      $("#quizOptions").appendChild(b);
    });
  } else if (mode==="hear-letter"){
    $("#qText").textContent = "Listen and pick the letter:";
    var shown = Math.random()<.5 ? answer.u : answer.l; speak(answer.name+' — '+answer.pron);
    var choices = new Set([shown]); while(choices.size<4){ var r=rand(pool); choices.add(Math.random()<.5?r.u:r.l); }
    Array.from(choices).sort(function(){return Math.random()-.5}).forEach(function(g){
      var b=document.createElement("button"); b.innerHTML = '<span style="font-size:32px">'+g+'</span>';
      b.addEventListener("click", function(){ var ok = g===shown; b.classList.add(ok?'correct':'incorrect'); incScore(ok); askQuestion(); });
      $("#quizOptions").appendChild(b);
    });
  } else if (mode==="type-name"){
    var shown = Math.random()<.5 ? answer.u : answer.l;
    $("#qText").innerHTML = 'Type the <b>name</b> of this letter: <span class="glyph" style="font-size:72px; display:inline-block; vertical-align:middle">'+shown+'</span>';
    var input=document.createElement("input"); input.type="text"; input.placeholder="e.g., alpha";
    var btn=document.createElement("button"); btn.textContent="Check"; btn.className="primary";
    var fb=document.createElement("div"); fb.className="pron";
    $("#quizFree").appendChild(input); $("#quizFree").appendChild(btn); $("#quizFree").appendChild(fb);
    btn.addEventListener("click", function(){ var val=(input.value||'').trim().toLowerCase(); var names=[answer.name].concat(answer.alt||[]).map(function(s){return s.toLowerCase()}); var ok = names.indexOf(val)>=0; fb.textContent = ok? 'Correct!' : ('Incorrect. Answer: '+answer.name); fb.style.color = ok? 'var(--good)' : 'var(--bad)'; incScore(ok); askQuestion(); });
  } else if (mode==="state-capital"){
    var validGreek = Object.keys(GREEK_TO_LATIN);
    var pool2 = LETTERS.filter(function(L){ return validGreek.indexOf(L.name)>=0; });
    var g = rand(pool2);
    var mapped = GREEK_TO_LATIN[g.name];
    var pairs = CAPITALS_BY_INITIAL[mapped];
    var correct = rand(pairs);
    var shown = Math.random()<.5 ? g.u : g.l;
    $("#qText").innerHTML = 'Pick the <b>U.S. state</b> whose <i>capital</i> starts with: <b>'+mapped+'</b> (closest English initial to Greek) ' +
      '<span class="glyph" style="font-size:72px; display:inline-block; vertical-align:middle">'+shown+'</span>';
    var choices = new Set([correct[0]]);
    while(choices.size<4){ var other = rand(STATES.filter(function(p){return p[0]!==correct[0]})); choices.add(other[0]); }
    Array.from(choices).sort(function(){return Math.random()-.5}).forEach(function(stateName){
      var b=document.createElement("button"); b.textContent = stateName;
      b.addEventListener("click", function(){ var ok = stateName===correct[0]; b.classList.add(ok?'correct':'incorrect'); $("#qText").innerHTML = 'Correct answer: '+correct[0]+' (capital '+correct[1]+').'; incScore(ok); askQuestion(); });
      $("#quizOptions").appendChild(b);
    });
  }
}

// Progress
function renderProgress(){ var wrap=$("#progressList"); wrap.innerHTML=""; LETTERS.forEach(function(L){ var learned=!!PROG.learned[L.name]; var d=document.createElement("div"); d.className="pill"+(learned?' learned':''); d.innerHTML='<span class="upper">'+L.u+'</span><span class="lower">'+L.l+'</span><div style="font-size:12px">'+L.name+'</div>'; wrap.appendChild(d); }); }
$("#resetAll").addEventListener("click", function(){ if(!confirm("Reset all learned flags and current round score?")) return; PROG={learned:{},score:{right:0,total:0}}; saveProgress(PROG); renderLearn(); renderScore(); });

// Blocks
var BLOCKS = document.getElementById("blocks");
var TARGET_LATIN = document.getElementById("targetLatin");
var BLOCKS_FEED = document.getElementById("blocksFeedback");
function newBlocks(){
  var item = rand(BLOCKS_DATA);
  TARGET_LATIN.textContent = item.latin;
  BLOCKS_FEED.textContent = "Drag letters to match the Greek spelling order.";
  BLOCKS.innerHTML = "";
  var seq = item.greek.map(function(n){ return LETTERS.find(function(L){return L.name===n}); });
  var shuffled = seq.slice().sort(function(){return Math.random()-.5});
  shuffled.forEach(function(L){
    var el=document.createElement("div"); el.className="block"; el.draggable=true; el.textContent = (Math.random()<.5?L.u:L.l); el.dataset.name=L.name;
    el.addEventListener("dragstart", function(e){ e.dataTransfer.setData("text/plain", L.name); e.dataTransfer.effectAllowed="move"; el.classList.add("dragging"); });
    el.addEventListener("dragend", function(){ el.classList.remove("dragging"); });
    BLOCKS.appendChild(el);
  });
}
document.getElementById("newBlocks").addEventListener("click", newBlocks);
BLOCKS.addEventListener("dragover", function(e){
  e.preventDefault();
  var dragging = document.querySelector(".block.dragging");
  var others = Array.prototype.slice.call(BLOCKS.querySelectorAll(".block:not(.dragging)"));
  var placed=false;
  for(var i=0;i<others.length;i++){ var el=others[i]; var r=el.getBoundingClientRect(); if(e.clientX < r.left + r.width/2){ BLOCKS.insertBefore(dragging, el); placed=true; break; } }
  if(!placed && dragging) BLOCKS.appendChild(dragging);
});
BLOCKS.addEventListener("drop", function(e){
  e.preventDefault();
  var names = Array.prototype.slice.call(BLOCKS.querySelectorAll(".block")).map(function(b){return b.dataset.name});
  var item = BLOCKS_DATA.find(function(x){ return x.latin===TARGET_LATIN.textContent; });
  var ok = JSON.stringify(names) === JSON.stringify(item.greek);
  BLOCKS_FEED.textContent = ok ? "✅ Nice! That's the correct Greek sequence." : "❌ Not quite — keep rearranging.";
  BLOCKS_FEED.style.color = ok ? "var(--good)" : "var(--bad)";
});

// Init
function init(){
  document.getElementById("traceSelect").innerHTML = LETTERS.map(function(L){return '<option value="'+L.name+'">'+L.name+'</option>'; }).join('');
  renderLettersList(); renderLearn(); renderProgress(); resetRound(); newBlocks();
}
init();
