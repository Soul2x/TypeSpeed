(() => {
  const WORDS = [
    "the","be","to","of","and","a","in","that","have","it","for","not","on","with",
    "he","as","you","do","at","this","but","his","by","from","they","we","say","her",
    "she","or","an","will","my","one","all","would","there","their","what","so","up",
    "out","if","about","who","get","which","go","me","when","make","can","like","time",
    "no","just","him","know","take","people","into","year","your","good","some","could",
    "them","see","other","than","then","now","look","only","come","its","over","think",
    "also","back","after","use","two","how","our","work","first","well","way","even",
    "new","want","because","any","these","give","day","most","us","great","between",
    "need","large","often","hand","high","place","hold","turn","were","before","right",
    "too","means","old","same","tell","follow","came","show","form","three","small","set",
    "put","end","does","another","must","big","such","here","why","ask","went","read",
    "land","different","home","move","try","kind","picture","again","change","off","play",
    "air","away","animal","house","point","page","letter","mother","answer","found","study",
    "still","learn","plant","cover","food","sun","four","state","keep","eye","never","last",
    "let","thought","city","tree","farm","hard","start","might","story","saw","far","sea",
    "draw","left","late","run","while","press","close","night","real","life","few","north",
    "open","seem","together","next","white","children","begin","walk","paper","group",
    "always","music","those","both","mark","book","carry","took","science","eat","room",
    "friend","idea","fish","mountain","stop","once","base","hear","horse","cut","sure",
    "watch","color","face","wood","main","enough","plain","girl","young","ready","above",
    "ever","red","list","though","feel","talk","bird","soon","body","dog","family","direct",
    "leave","song","measure","door","product","black","short","class","wind","question",
    "happen","complete","ship","area","half","rock","order","fire","south","problem","piece",
    "told","knew","pass","since","top","whole","king","space","heard","best","hour","better",
    "true","during","hundred","five","remember","step","early","west","ground","interest",
    "reach","fast","verb","sing","listen","six","table","travel","less","morning","ten",
    "simple","several","toward","war","lay","against","pattern","slow","center","love",
    "person","money","serve","appear","road","map","rain","rule","govern","pull","cold",
    "notice","voice","power","town","fine","drive","lead","cry","dark","machine","note",
    "wait","plan","figure","star","box","noun","field","rest","correct","able","done",
    "beauty","stood","contain","front","teach","week","final","gave","green","quick",
    "develop","ocean","warm","free","minute","strong","special","mind","behind","clear",
    "tail","produce","fact","street","inch","nothing","course","stay","wheel","full",
    "force","blue","object","decide","surface","deep","moon","island","foot","system",
    "busy","test","record","boat","common","gold","possible","plane","dry","wonder",
    "laugh","thousand","ago","ran","check","game","shape","miss","brought","heat","snow",
    "bring","yes","distant","fill","east","paint","language","among","grand","ball","yet",
    "wave","drop","heart","present","heavy","dance","engine","position","arm","wide","sail",
    "material","size","vary","settle","speak","weight","general","ice","matter","circle",
    "pair","include","divide","felt","perhaps","pick","sudden","count","square","reason",
    "length","represent","art","subject","region","energy","probable","bed","brother","egg",
    "ride","cell","believe","separate","win","catch","mount","wish","sky","board","joy",
    "winter","sit","written","wild","instrument","kept","glass","grass","cow","job","edge",
    "sign","visit","past","soft","fun","bright","gas","weather","month","million","bear",
    "finish","happy","hope","flower","strange","gone","jump","baby","eight","village","meet",
    "root","buy","raise","solve","metal","whether","push","seven","third","shall","held",
    "hair","describe","cook","floor","either","result","burn","hill","safe","cat","century",
    "consider","type","law","bit","coast","copy","phrase","silent","tall","sand","soil",
    "roll","temperature","finger","industry","value","fight","lie","beat","excite","natural",
    "view","sense","ear","else","quite","broke","case","middle","kill","son","lake","moment",
    "scale","loud","spring","observe","child","straight","nation","dictionary","milk","speed",
    "method","organ","pay","age","section","dress","cloud","surprise","quiet","stone","tiny",
    "climb","cool","design","poor","lot","experiment","bottom","key","iron","single","stick",
    "flat","twenty","skin","smile","hole","trade","melody","trip","office","receive","row",
    "mouth","exact","symbol","die","least","trouble","shout","except","wrote","seed","tone",
    "join","suggest","clean","break","lady","yard","rise","bad","blow","oil","blood","touch",
    "grew","cent","mix","team","wire","cost","lost","brown","wear","garden","equal","sent",
    "choose","fell","fit","flow","fair","bank","collect","save","control","gentle","woman",
    "captain","practice","difficult","doctor","please","protect","noon","whose","locate",
    "ring","character","insect","caught","period","indicate","radio","spoke","atom","human",
    "history","effect","electric","expect","crop","modern","element","hit","student","corner",
    "supply","bone","rail","imagine","provide","agree","thus","capital","chair","danger",
    "fruit","rich","thick","soldier","process","operate","guess","necessary","sharp","wing",
    "create","neighbor","wash","bat","rather","crowd","corn","compare","poem","string","bell",
    "depend","meat","rub","tube","famous","dollar","stream","fear","sight","thin","triangle",
    "planet","hurry","chief","colony","clock","mine","tie","enter","major","fresh","search",
    "send","yellow","gun","allow","print","dead","spot","desert","suit","current","lift",
    "rose","continue","block","chart","hat","sell","success","company","subtract","deal",
    "swim","term","opposite","wife","shoe","shoulder","spread","arrange","camp","invent",
    "cotton","born","determine","nine","truck","noise","level","chance","gather","shop",
    "stretch","throw","shine","property","column","molecule","select","wrong","gray","repeat",
    "require","broad","prepare","salt","nose","plural","anger","claim","continent","oxygen",
    "sugar","death","pretty","skill","women","season","solution","magnet","silver","thank",
    "branch","match","especially","afraid","huge","sister","steel","discuss","forward",
    "similar","guide","experience","score","apple","bought","led","pitch","coat","mass",
    "card","band","rope","slip","dream","evening","condition","feed","tool","total","basic",
    "smell","valley","double","seat","arrive","master","track","parent","shore","division",
    "sheet","substance","favor","connect","post","spend","fat","glad","original","share",
    "station","dad","bread","charge","proper","bar","offer","segment","duck","instant",
    "market","degree","chick","dear","enemy","reply","drink","occur","support","speech",
    "nature","range","steam","motion","path","liquid","log","meant","teeth","shell","neck"
  ];

  // ── State ──
  let words = [];
  let displayText = "";
  let charSpans = [];
  let typed = "";
  let started = false;
  let finished = false;
  let timerInterval = null;
  let timeLeft = 30;
  let totalTime = 30;
  let lineHeight = 0;
  let currentScrollLine = 0;

  // ── DOM refs ──
  const textDisplay     = document.getElementById("text-display");
  const hiddenInput     = document.getElementById("hidden-input");
  const idleOverlay     = document.getElementById("idle-overlay");
  const idleHint        = document.getElementById("idle-hint");
  const statWpm         = document.getElementById("stat-wpm");
  const statAcc         = document.getElementById("stat-acc");
  const statTime        = document.getElementById("stat-time");
  const ringFill        = document.getElementById("ring-fill");
  const progressFill    = document.getElementById("progress-fill");
  const resultPanel     = document.getElementById("result-panel");
  const typingContainer = document.getElementById("typing-container");
  const idleControls    = document.getElementById("idle-controls");
  const resWpm          = document.getElementById("res-wpm");
  const resAcc          = document.getElementById("res-acc");
  const resChars        = document.getElementById("res-chars");
  const resErrors       = document.getElementById("res-errors");
  const modeSelector    = document.getElementById("mode-selector");

  const RING_C = 2 * Math.PI * 22;

  // ── Word generation ──
  function pick(n = 200) {
    const out = [];
    for (let i = 0; i < n; i++)
      out.push(WORDS[Math.floor(Math.random() * WORDS.length)]);
    return out;
  }

  // ── Display ──
  function measureLineHeight() {
    if (!charSpans.length) return 39;
    const firstTop = charSpans[0].offsetTop;
    for (let i = 1; i < charSpans.length; i++) {
      if (charSpans[i].offsetTop > firstTop)
        return charSpans[i].offsetTop - firstTop;
    }
    const fs = parseFloat(getComputedStyle(textDisplay).fontSize);
    const lh = parseFloat(getComputedStyle(textDisplay).lineHeight);
    return lh || fs * 1.95;
  }

  function buildDisplay() {
    displayText = words.join(" ");
    textDisplay.innerHTML = "";
    charSpans = [];
    for (let i = 0; i < displayText.length; i++) {
      const s = document.createElement("span");
      s.className = "char" + (i === 0 ? " cursor" : "");
      s.textContent = displayText[i];
      textDisplay.appendChild(s);
      charSpans.push(s);
    }
    requestAnimationFrame(() => {
      lineHeight = measureLineHeight();
    });
  }

  function extendWords() {
    const extra = pick(80);
    const extraText = " " + extra.join(" ");
    words = words.concat(extra);
    displayText += extraText;
    for (let i = 0; i < extraText.length; i++) {
      const s = document.createElement("span");
      s.className = "char";
      s.textContent = extraText[i];
      textDisplay.appendChild(s);
      charSpans.push(s);
    }
  }

  function scrollToCursor() {
    const idx = typed.length;
    if (!charSpans[idx]) return;
    if (!lineHeight) lineHeight = measureLineHeight();

    const cursorTop = charSpans[idx].offsetTop;
    const cursorLine = Math.round(cursorTop / lineHeight);
    const targetLine = Math.max(0, cursorLine - 1);

    if (targetLine === currentScrollLine) return;
    currentScrollLine = targetLine;
    textDisplay.style.transform = `translateY(-${targetLine * lineHeight}px)`;
  }

  function render() {
    const len = typed.length;
    charSpans.forEach((s, i) => {
      s.className = "char";
      if (i < len)
        s.classList.add(typed[i] === displayText[i] ? "correct" : "incorrect");
      else if (i === len)
        s.classList.add("cursor");
    });

    progressFill.style.width = Math.min(100, (len / displayText.length) * 100) + "%";

    if (len > displayText.length - 200) extendWords();

    scrollToCursor();
  }

  // ── Timer / scoring ──
  function updateTimer() {
    statTime.textContent = timeLeft;
    const frac = timeLeft / totalTime;
    ringFill.style.strokeDashoffset = RING_C * (1 - frac);
    ringFill.style.stroke = timeLeft <= 5 ? "var(--error)" : "var(--accent)";
  }

  function computeWpm() {
    const elapsed = Math.max(1, totalTime - timeLeft);
    const correct = [...typed].filter((c, i) => c === displayText[i]).length;
    return Math.round((correct / 5) / (elapsed / 60));
  }

  function computeAcc() {
    if (!typed.length) return 100;
    const correct = [...typed].filter((c, i) => c === displayText[i]).length;
    return Math.round((correct / typed.length) * 100);
  }

  // ── Test lifecycle ──
  function startTest() {
    idleOverlay.classList.add("hidden");
    hiddenInput.focus();
    started = true;
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimer();
      statWpm.textContent = computeWpm();
      statAcc.textContent = computeAcc() + "%";
      if (timeLeft <= 0) endTest();
    }, 1000);
  }

  function endTest() {
    clearInterval(timerInterval);
    finished = true;
    hiddenInput.blur();

    const wpm = computeWpm();
    const acc = computeAcc();
    const correct = [...typed].filter((c, i) => c === displayText[i]).length;
    const errors = typed.length - correct;

    resWpm.textContent = wpm;
    resAcc.textContent = acc + "%";
    resChars.textContent = correct;
    resErrors.textContent = errors;

    typingContainer.style.opacity = "0.35";
    resultPanel.classList.add("visible");
    idleControls.style.display = "none";
  }

  function reset(reuseWords = false) {
    clearInterval(timerInterval);
    started = false;
    finished = false;
    typed = "";
    timeLeft = totalTime;
    currentScrollLine = 0;

    statWpm.textContent = "0";
    statAcc.textContent = "—";
    updateTimer();
    progressFill.style.width = "0%";
    textDisplay.style.transform = "translateY(0)";

    if (!reuseWords) words = pick(200);
    buildDisplay();

    idleOverlay.classList.remove("hidden");
    typingContainer.style.opacity = "1";
    resultPanel.classList.remove("visible");
    idleControls.style.display = "flex";
    hiddenInput.value = "";
  }

  // ── Event listeners ──
  hiddenInput.addEventListener("input", () => {
    if (!started || finished) return;
    typed = hiddenInput.value;
    render();
  });

  document.getElementById("typing-card").addEventListener("click", () => {
    if (finished) return;
    if (!started) startTest();
    else hiddenInput.focus();
  });

  document.addEventListener("keydown", e => {
    if (finished || started) return;
    if (!e.ctrlKey && !e.metaKey && !e.altKey && (e.key.length === 1 || e.key === "Backspace"))
      startTest();
  });

  modeSelector.querySelectorAll(".mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      modeSelector.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      totalTime = parseInt(btn.dataset.time);
      idleHint.textContent = `${totalTime} seconds — English words`;
      reset(false);
    });
  });

  document.getElementById("reset-btn").addEventListener("click", () => reset(false));
  document.getElementById("restart-btn").addEventListener("click", () => reset(true));
  document.getElementById("new-text-btn").addEventListener("click", () => reset(false));

  // ── Init ──
  words = pick(200);
  updateTimer();
  buildDisplay();
})();
