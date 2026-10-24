/* ============================================
   CENTRAL DATA
   All personalization content lives here.
   Add more entries as details come in — never
   touch the section-switching logic below to
   add content.
   ============================================ */
const SITE_DATA = {
  arrivalText: "An invitation has arrived from HAWGWORD for the beautiful girl on her birthday…",
  houseResponses: {
    gryffindor: "Of course. The confidence was already suspiciously obvious.",
    ravenclaw: "This explains the overthinking.",
    hufflepuff: "Okay, this one was never in doubt.",
    slytherin: "I knew there was a little mastermind hiding somewhere."
  },
  houseStories: {
      "gryffindor": {
          "name": "Gryffindor",
          "subtitle": "The house that was meant to defeat fear",
          "paragraphs": [
              "Godric Gryffindor believed that the most dangerous weapon in the world wasn't a curse.",
              "It was fear.",
              "Fear could make a good person betray a friend. It could make a powerful wizard obey an evil master. It could convince an entire society that cruelty was necessary for survival.",
              "So Godric wanted to train witches and wizards who could stand against fear, even when the consequences were terrible.",
              "But there's a secret hidden inside this idea.",
              "What if Gryffindor's real purpose was to create people who could resist the temptation to become monsters, even when the entire world demanded that they become one?",
              "Think about Harry.",
              "He had countless opportunities to become cruel. He suffered, lost people he loved, and repeatedly faced enemies who wanted him dead.",
              "Yet he never truly embraced the idea that suffering gave him the right to hurt innocent people.",
              "His courage wasn't simply the ability to face death.",
              "It was his refusal to let hatred decide who he would become.",
              "But Gryffindor had a weakness.",
              "A person who isn't afraid of death might eventually stop valuing their own life. And someone who believes they're always fighting for the right cause can become dangerous without realizing it.",
              "Perhaps Godric understood this. Perhaps Gryffindor was never supposed to teach students to fight every battle.",
              "It was supposed to teach them to face the battles that mattered."
          ]
      },
      "slytherin": {
          "name": "Slytherin",
          "subtitle": "The house that was meant to survive the impossible",
          "paragraphs": [
              "Now we come to Salazar Slytherin.",
              "Everyone remembers his prejudice against Muggle-born wizards. But imagine that beneath his terrible beliefs was a different fear: the fear that the magical world could be destroyed by forces it wasn't prepared to face.",
              "In this theory, Salazar believed that kindness alone couldn't protect anyone.",
              "You needed strategy. You needed discipline. You needed the ability to understand your enemies before they understood you.",
              "He wanted students who could survive when the rules broke down.",
              "But Salazar made one fatal mistake: he began believing that the right to survive belonged only to certain people.",
              "He confused strength with superiority.",
              "He confused protecting magic with controlling who deserved to possess it.",
              "And slowly, the house that could have taught people how to survive darkness became associated with the desire to dominate others.",
              "Now consider Voldemort.",
              "He was the ultimate example of ambition without a limit. He wanted to defeat death itself, but he couldn't understand that his obsession with survival was destroying everything that made life worth living.",
              "He feared death so deeply that he became willing to destroy other people's lives to escape it.",
              "In our theory, Voldemort represents the ultimate failure of Salazar's philosophy.",
              "He possessed the desire to survive, but not the wisdom to understand why survival mattered.",
              "And perhaps the greatest Slytherin isn't the person who wins every battle.",
              "It's the person who can obtain power and still refuse to become a slave to it."
          ]
      },
      "ravenclaw": {
          "name": "Ravenclaw",
          "subtitle": "The house that discovered something it shouldn't have",
          "paragraphs": [
              "Rowena Ravenclaw wanted students to pursue knowledge, but imagine that her search for wisdom led her somewhere terrifying.",
              "What if she discovered that magic had rules far older than the wizarding world?",
              "Rules that even the founders couldn't fully understand.",
              "She began investigating the relationship between magic, consciousness, memory, and death. Every answer revealed another mystery. Every discovery made the universe seem less predictable.",
              "Eventually, she encountered a question that no spell could answer:",
              "If magic can change the world, can it also change the person who believes they understand it?",
              "Imagine a wizard who learns every spell, understands every magical creature, and discovers the secrets of immortality.",
              "That wizard might begin to believe that anything they don't understand is merely something they haven't conquered yet.",
              "And that is where knowledge becomes dangerous.",
              "In this theory, Rowena's greatest fear wasn't ignorance.",
              "It was intelligence without limits.",
              "Her daughter Helena's theft of the diadem could then serve as a symbolic tragedy: the pursuit of recognition and wisdom became entangled with resentment, secrecy, and loss.",
              "Not because knowledge itself is evil, but because people can use even their greatest gifts to escape their own insecurities.",
              "This also changes how we see Hermione.",
              "Hermione is brilliant, but some of her most important moments happen when she recognizes that facts alone aren't enough. She needs trust, friendship, courage, and the willingness to act without knowing every possible outcome.",
              "Perhaps Ravenclaw's ultimate lesson is that the universe doesn't owe us an answer to every question.",
              "And wisdom begins when we understand the difference between what we can learn and what we have the right to control."
          ]
      },
      "hufflepuff": {
          "name": "Hufflepuff",
          "subtitle": "The house that was meant to keep the other three from destroying everything",
          "paragraphs": [
              "Here's the biggest twist in the entire theory.",
              "What if Helga Hufflepuff understood something the other founders didn't?",
              "Gryffindor could fight darkness.",
              "Slytherin could outsmart it.",
              "Ravenclaw could understand it.",
              "But none of those abilities guaranteed that anyone would remember what they were fighting for.",
              "That was Helga's concern.",
              "She believed that magic had no purpose if it destroyed the people it was supposed to serve.",
              "So she valued patience, fairness, loyalty, and hard work.",
              "Not because these qualities were less impressive than bravery or intelligence, but because they were the foundation that made those other qualities useful.",
              "Think about what happens when the other houses lose their balance.",
              "Gryffindor might sacrifice everything in pursuit of victory.",
              "Slytherin might sacrifice others to preserve its own power.",
              "Ravenclaw might sacrifice human connection in pursuit of knowledge.",
              "But Hufflepuff asks a different question:",
              "When the battle is over, who will still be there to rebuild what was lost?",
              "Imagine that Helga's true purpose was to preserve something the other founders couldn't protect through magic alone: the ability to trust one another.",
              "Her house would teach students to keep promises, care for those who couldn't repay them, and continue working when nobody was watching.",
              "But even Hufflepuff had a weakness.",
              "Loyalty can become blind obedience. Patience can become silence in the face of injustice. Kindness can become the fear of disappointing others.",
              "True loyalty sometimes means standing against the very people you love.",
              "And perhaps that is why Hufflepuff's philosophy is so important.",
              "It reminds the wizarding world that being good isn't just about what you are willing to fight for.",
              "It's also about what you refuse to become while fighting."
          ]
      }
  },
  memories: [
    {
      title: "The Day We Met",
      text: "We met in the GC, but I texted you in DM for the very first time on 4th July 2024. I dropped everything into just a single text because I wasn't getting an option to text you directly, so I replied to your story instead. 🥹 Looking back, it feels like such a small moment, but honestly, I had no idea that one little reply would become the beginning of something so special. ❤️"
    },
    {
      title: "Dayan",
      text: "Although I have so many memories I could put here, let's not do that — we'd probably need an entire book. 😂 I still remember the very first time you said in the GC that you were Dayan. It was kind of nerdy, but definitely so cute. 🥹 I genuinely had so much fun talking to you, especially when I used to address you as \"Dayan,\" or even better, \"Sweet Dayan.\" ❤️ Somehow, even the simplest conversations with you became memories that stayed with me."
    },
    {
      title: "The Kite Runner",
      text: "I never really had the courage to talk about my past with anyone. Then I read The Kite Runner, and somehow, this book inspired me to finally open up to you. I may have been a little clingy when I told you everything — or, well, not everything, actually. 😭 At that time, I felt completely helpless. I still do sometimes whenever I think about my past. There are things that are difficult to explain, and even harder to carry alone. But the way you listened to me gave me a little relief. It made me realise that, finally, I had someone with whom I could share things without having to think twice or worry about being judged. And honestly, that feeling meant more to me than I could ever properly explain. ❤️"
    },
    {
      title: "Human",
      text: "I understand that you may have felt a little disappointed about what happened between me and Karan. But trust me, Chayanika, that's just how human nature works. We all expect something from the people we care about, and when they don't live up to those expectations, we sometimes end up hurting ourselves more than they ever could. And when humans are hurt, they often behave in strange ways. Maybe they say things they don't mean, maybe they distance themselves, or maybe they simply become someone you don't recognise anymore. So, honestly, I didn't want to hold on to that. Maybe I lost him as a good friend, but somewhere along the way, I gained you as a best friend. And if I had to choose between holding on to what was lost and being grateful for what I found, I'd choose you every single time. ❤️"
    },
    {
      title: "The Freshers Dress",
      text: "Trust me, Chayanika, you should seriously build your career in fashion designing or modelling. 😂❤️ I should have posted so many pictures of you on this website, but I genuinely never got the chance to screenshot them because I couldn't take my eyes away from the beauty of God's creation. 😭✨ Okay, okay… that sounds extremely dramatic. 😂 But honestly, you looked absolutely beautiful. I could have taken a hundred screenshots, but then again, I can't exactly take something without someone's concern. 😭😂 So I just kept admiring you instead. ❤️ Some people wear an outfit. You somehow make the outfit look lucky. ✨"
    }
  ],
  mapCategories: [
      {
          "title": "The Free Soul 🦋",
          "text": "If there's one thing I really wish for you, Chaya, it's that you never lose your freedom trying to fit into someone else's expectations. Chase the things you dream of, make your own choices, and become whoever you want to be. Don't make yourself smaller just to belong somewhere."
      },
      {
          "title": "The Beautiful Contradiction 🌗",
          "text": "You're such a contradiction, Chaya, and I mean that in the best way. One minute you're talking about life and people with a maturity that makes me forget your age, and the next you're blushing over the smallest compliment. Confident, sensitive, thoughtful, a little dramatic. All of it sits together somehow, and that's exactly what makes you interesting."
      },
      {
          "title": "The Chaos Queen 👑",
          "text": "I don't think you realise how easily you turn ordinary conversations into something memorable. The Gurumata–Shishya nonsense, the detective fantasies, those dramatic reactions… there's never a dull moment. You can turn one simple sentence into a whole episode. Honestly, your chaos deserves its own subject at Hogwarts, and I'd probably fail it."
      },
      {
          "title": "The Quietly Resilient 🌱",
          "text": "From what you've shared with me, I know life hasn't always been easy on you. Still, I admire how you think things through instead of letting them define you. Remember that being strong doesn't mean never breaking down. Sometimes strength is just letting yourself feel it."
      },
      {
          "title": "The Unwritten Chapter 📖",
          "text": "Maybe this is why I could never write a made-up version of you. You're still growing, figuring things out, questioning, becoming. How could I decide who you are when even you haven't finished writing yourself? I'd rather just watch you surprise the world in your own way."
      }
  ],
  finalMessage: "Some people enter your life quietly and somehow become part of your favourite memories.\n\nI'm genuinely glad our paths crossed.\n\nHappy Birthday, Gurumata. 🩶\n\nMay this year bring you the kind of happiness you don't have to pretend to be okay for."
};

/* ============================================
   SECTION STATE MACHINE
   Every section is a <section class="screen" data-section="name">.
   goToSection() shows one and hides the rest, then
   runs that section's one-time init (if any).
   ============================================ */
const sectionInitRegistry = {};   // name -> function, run once per section
const sectionInitialized = new Set();

function registerSectionInit(name, fn) {
  sectionInitRegistry[name] = fn;
}

function goToSection(name) {
  const current = document.querySelector('.screen.active');
  const next = document.querySelector(`.screen[data-section="${name}"]`);
  if (!next || current === next) return;

  const overlay = document.getElementById('transition-overlay');
  overlay.classList.add('active');

  // Wait for the fog to fully cover the screen before swapping —
  // this is what sells the "walking to the next room" feeling.
  setTimeout(() => {
    window.scrollTo(0, 0);
    if (current) current.classList.remove('active');
    next.classList.add('active');
    if (!sectionInitialized.has(name) && sectionInitRegistry[name]) {
      sectionInitRegistry[name]();
      sectionInitialized.add(name);
    }
    // Let the new section render a beat before clearing the fog.
    setTimeout(() => overlay.classList.remove('active'), 80);
  }, 520);
}

/* ============================================
   AMBIENT BACKGROUND: stars + candles
   Generated once on load.
   ============================================ */
function initAmbient() {
  const starsContainer = document.getElementById('stars');
  const starCount = window.innerWidth < 600 ? 45 : 90;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('span');
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 70 + '%';
    star.style.animationDelay = (Math.random() * 4) + 's';
    star.style.animationDuration = (3 + Math.random() * 3) + 's';
    starsContainer.appendChild(star);
  }

  const candlesContainer = document.getElementById('candles');
  const candleCount = window.innerWidth < 600 ? 4 : 7;
  for (let i = 0; i < candleCount; i++) {
    const flame = document.createElement('div');
    flame.className = 'candle-flame';
    flame.style.left = (8 + Math.random() * 84) + '%';
    flame.style.top = (10 + Math.random() * 35) + '%';
    flame.style.animationDelay = (Math.random() * 2.6) + 's';
    candlesContainer.appendChild(flame);
  }
}

/* ============================================
   ENVELOPE SCREEN
   ============================================ */
function initEnvelopeScreen() {
  document.getElementById('arrival-text').textContent = SITE_DATA.arrivalText;

  const envelope = document.getElementById('envelope');
  const intro = document.getElementById('intro-sequence');

  envelope.addEventListener('click', () => {
    if (envelope.classList.contains('opening')) return;
    envelope.classList.add('opening');

    // Play the one-time cloud + owl delivery, then move on.
    intro.classList.add('playing');

    const INTRO_DURATION = 3400; // clouds + owl flight + letter drop
    setTimeout(() => {
      intro.classList.remove('playing');
      goToSection('letter');
    }, INTRO_DURATION);
  });
}
registerSectionInit('envelope', initEnvelopeScreen);

/* ============================================
   LETTER SCREEN
   ============================================ */
function initLetterScreen() {
  const photo = document.getElementById('letter-photo');
  const fallback = document.getElementById('letter-photo-fallback');

  // The photo is embedded in letter-photo.js, so it doesn't depend on any folder
  if (window.LETTER_PHOTO) photo.src = window.LETTER_PHOTO;
  const showFallback = () => {
    photo.style.display = 'none';
    fallback.classList.add('show');
  };
  photo.addEventListener('error', showFallback);
  // the image may already have failed before this ran, so check for that too
  if (!window.LETTER_PHOTO && photo.complete && photo.naturalWidth === 0) showFallback();

  const continueBtn = document.getElementById('letter-continue');
  continueBtn.addEventListener('click', () => {
    // Next stop is the Sorting screen — not built yet, so this
    // safely no-ops until Step 3 adds data-section="sorting".
    goToSection('sorting');
  });
}
registerSectionInit('letter', initLetterScreen);

/* ============================================
   SORTING SCREEN
   ============================================ */
function initSortingScreen() {
  const cards = document.querySelectorAll('.house-card');
  const stage = document.getElementById('door-stage');
  const title = document.getElementById('story-title');
  const subtitle = document.getElementById('story-subtitle');
  const epigraph = document.getElementById('story-epigraph');
  const body = document.getElementById('story-body');
  const panel = document.getElementById('story-panel');
  const backBtn = document.getElementById('story-back');
  const continueBtn = document.getElementById('story-continue');

  // Lighter tints so titles stay readable on the dark story panel
  const houseColors = {
    gryffindor: { main: '#b8433a', light: '#e8776c' },
    ravenclaw:  { main: '#4a6fa5', light: '#86addf' },
    hufflepuff: { main: '#d9a441', light: '#f2cb6e' },
    slytherin:  { main: '#3f7a5c', light: '#74c79e' }
  };

  let busy = false;

  function openDoor(house) {
    if (busy) return;
    busy = true;

    const story = SITE_DATA.houseStories[house];
    const colors = houseColors[house];

    stage.style.setProperty('--door-color', colors.main);
    stage.style.setProperty('--door-light', colors.light);
    title.textContent = story.name;
    subtitle.textContent = story.subtitle;
    epigraph.textContent = SITE_DATA.houseResponses[house];
    body.innerHTML = '';
    story.paragraphs.forEach(text => {
      const p = document.createElement('p');
      p.textContent = text;
      body.appendChild(p);
    });
    panel.scrollTop = 0;

    document.body.classList.add('stage-open');
    stage.classList.add('visible');
    // let the closed doors paint first, then swing them open
    setTimeout(() => stage.classList.add('open'), 500);
    setTimeout(() => { busy = false; }, 2200);
  }

  function closeDoor() {
    if (busy) return;
    busy = true;
    stage.classList.remove('open');
    setTimeout(() => {
      stage.classList.remove('visible');
      document.body.classList.remove('stage-open');
      busy = false;
    }, 1500);
  }

  cards.forEach(card => {
    card.addEventListener('click', () => openDoor(card.dataset.house));
  });

  backBtn.addEventListener('click', closeDoor);

  continueBtn.addEventListener('click', () => {
    goToSection('memory');
    // hide the door scene once the fog fully covers the screen
    setTimeout(() => {
      stage.classList.remove('open', 'visible');
      document.body.classList.remove('stage-open');
      busy = false;
    }, 560);
  });
}
registerSectionInit('sorting', initSortingScreen);

/* ============================================
   MEMORY ROOM
   ============================================ */
function initMemoryScreen() {
  const grid = document.getElementById('frame-grid');
  const reveal = document.getElementById('memory-reveal');
  const revealTitle = document.getElementById('memory-reveal-title');
  const revealText = document.getElementById('memory-reveal-text');
  const continueBtn = document.getElementById('memory-continue');

  SITE_DATA.memories.forEach((memory, index) => {
    const card = document.createElement('button');
    card.className = 'frame-card';
    card.textContent = memory.title;
    card.dataset.index = index;

    card.addEventListener('click', () => {
      document.querySelectorAll('.frame-card').forEach(c => c.classList.remove('opened'));
      card.classList.add('opened');

      revealTitle.textContent = memory.title;
      revealText.textContent = memory.text;
      reveal.classList.add('revealed');
      reveal.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    grid.appendChild(card);
  });

  // Carousel feel: the centred card is biggest; the others tilt away and fade
  const frames = [...grid.children];
  const tiltFrames = () => {
    const g = grid.getBoundingClientRect(), mid = g.left + g.width / 2;
    frames.forEach(el => {
      const b = el.getBoundingClientRect(), cx = b.left + b.width / 2;
      const d = Math.min(1, Math.abs(cx - mid) / (g.width / 2));
      el.style.setProperty('--s', (1 - 0.2 * d).toFixed(3));
      el.style.setProperty('--r', ((cx < mid ? 1 : -1) * 28 * d).toFixed(1) + 'deg');
      el.style.opacity = (1 - 0.55 * d).toFixed(2);
    });
  };
  grid.addEventListener('scroll', () => requestAnimationFrame(tiltFrames), { passive: true });
  addEventListener('resize', tiltFrames);
  frames.forEach(el => el.addEventListener('click', () => el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })));
  setTimeout(tiltFrames, 60);

  continueBtn.addEventListener('click', () => {
    // Next stop is the Map — not built yet, so this safely
    // no-ops until Step 5 adds data-section="map".
    goToSection('map');
  });
}
registerSectionInit('memory', initMemoryScreen);

/* ============================================
   MAP SCREEN
   A vertical scrolling path — every category is
   laid out along it and fades in as it's scrolled
   into view, with a footprint marking each stop.
   ============================================ */
function initMapScreen() {
  const scrollContainer = document.getElementById('map-scroll');
  const continueBtn = document.getElementById('map-continue');

  SITE_DATA.mapCategories.forEach(item => {
    const stop = document.createElement('div');
    stop.className = 'map-stop';

    const footprint = document.createElement('span');
    footprint.className = 'footprint';

    const content = document.createElement('div');
    content.className = 'map-stop-content';
    const title = document.createElement('p');
    title.className = 'map-stop-title';
    title.textContent = item.title;
    const text = document.createElement('p');
    text.className = 'map-stop-text';
    text.textContent = item.text;
    content.append(title, text);

    stop.appendChild(footprint);
    stop.appendChild(content);
    scrollContainer.appendChild(stop);
  });

  // Reveal each stop (footprint + text) as it scrolls into view —
  // no tapping required, matching the "just walk down and see it" feel.
  const stops = scrollContainer.querySelectorAll('.map-stop');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.4 });

  stops.forEach(stop => observer.observe(stop));

  continueBtn.addEventListener('click', () => {
    // Next stop is the Final Birthday Room — not built yet, so this
    // safely no-ops until Step 6 adds data-section="final".
    goToSection('final');
  });
}
registerSectionInit('map', initMapScreen);

/* ============================================
   FINAL BIRTHDAY ROOM
   ============================================ */
function launchConfetti() {
  const layer = document.getElementById('confetti-layer');
  const colors = ['#c9a869', '#e6c988', '#f0e6d2', '#b8433a', '#4a6fa5'];
  const pieceCount = window.innerWidth < 600 ? 60 : 110;

  for (let i = 0; i < pieceCount; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (2.2 + Math.random() * 1.8) + 's';
    piece.style.animationDelay = (Math.random() * 0.6) + 's';
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    layer.appendChild(piece);

    // Clean up each piece once it finishes falling, so a repeat
    // click doesn't pile up stale nodes.
    piece.addEventListener('animationend', () => piece.remove());
  }
}

function initFinalScreen() {
  document.getElementById('final-message').textContent = SITE_DATA.finalMessage;

  const spellBtn = document.getElementById('spell-btn');
  const finalContent = document.getElementById('final-content');
  const finalReveal = document.getElementById('final-reveal');

  spellBtn.addEventListener('click', () => {
    if (spellBtn.classList.contains('cast')) return;
    spellBtn.classList.add('cast');

    launchConfetti();

    finalContent.classList.add('hidden');
    setTimeout(() => {
      finalContent.style.display = 'none';
      finalReveal.classList.add('shown');
      launchConfetti(); // a second burst right as the headline appears
    }, 550);
  });
}
registerSectionInit('final', initFinalScreen);

/* ============================================
   3D PARALLAX TILT (desktop only)
   Subtly tilts the background layer toward the
   cursor, adding depth without affecting content.
   ============================================ */
function initParallaxTilt() {
  const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!hasHover) return;

  const ambient = document.querySelector('.ambient');
  let ticking = false;

  window.addEventListener('mousemove', (e) => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const xRatio = (e.clientX / window.innerWidth) - 0.5;
      const yRatio = (e.clientY / window.innerHeight) - 0.5;
      ambient.style.transform =
        `perspective(1400px) rotateY(${xRatio * 3}deg) rotateX(${-yRatio * 3}deg) scale(1.03)`;
      ticking = false;
    });
  });
}

/* ============================================
   OPENING SPELL SCENE
   Plays automatically once, then fades out to
   reveal the envelope screen underneath.
   ============================================ */
function launchFireworks(container, burstCount = 4) {
  const colors = ['#e6c988', '#c9a869', '#f0e6d2', '#ffffff'];

  for (let b = 0; b < burstCount; b++) {
    setTimeout(() => {
      const cx = 30 + Math.random() * 40; // vw
      const cy = 25 + Math.random() * 30; // vh
      const particleCount = 26;

      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.3;
        const distance = 60 + Math.random() * 80;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        particle.style.left = cx + 'vw';
        particle.style.top = cy + 'vh';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.setProperty('--dx', dx + 'px');
        particle.style.setProperty('--dy', dy + 'px');
        particle.style.animationDuration = (0.9 + Math.random() * 0.5) + 's';
        container.appendChild(particle);
        particle.addEventListener('animationend', () => particle.remove());
      }
    }, b * 350);
  }
}


/* ============================================
   LANDING PAGE: title reveal + winged ball that flies as you scroll
   ============================================ */
function initLandingScreen() {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  const $ = id => document.getElementById(id);
  const stage = $('landing-stage'), screen = $('landing-screen'), ball = $('snitch'),
        trail = $('snitch-trail'), tip = $('wand-tip'), target = $('castle-target'),
        cta = $('l-cta'), hint = $('l-hint');

  let offset = 0;
  [['l-top', 'Happy Birthday'], ['l-name', 'Chayanika']].forEach(([id, text]) => {
    const el = $(id);
    [...text].forEach((ch, i) => {
      const s = document.createElement('span');
      s.textContent = ch === ' ' ? '\u00a0' : ch;
      s.style.setProperty('--i', offset + i);
      el.appendChild(s);
    });
    offset += text.length;
  });

  let S, E, last = { x: 0, y: 0 };
  const center = el => { const b = el.getBoundingClientRect(); return { x: b.left + b.width / 2, y: b.top + b.height / 2 }; };
  function measure() {   // ball flies from the wand tip (scroll 0) to the castle window (scroll 100%)
    const keep = stage.style.getPropertyValue('--p') || '0';
    stage.style.setProperty('--p', 0); S = center(tip);
    stage.style.setProperty('--p', 1); E = center(target);
    stage.style.setProperty('--p', keep);
  }
  function spark(x, y) {
    if (trail.childElementCount > 50) return;
    const d = document.createElement('i');
    d.style.left = (x + Math.random() * 14 - 7) + 'px';
    d.style.top = (y + Math.random() * 14 - 7) + 'px';
    trail.appendChild(d);
    d.addEventListener('animationend', () => d.remove());
  }
  function update() {
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = Math.min(1, Math.max(0, max > 0 ? scrollY / max : 0));
    stage.style.setProperty('--p', p.toFixed(4));
    const q = p * p * (3 - 2 * p);
    const dx = E.x - S.x, dy = E.y - S.y, len = Math.hypot(dx, dy) || 1;
    const amp = Math.min(innerWidth, innerHeight) * 0.22 * Math.sin(Math.PI * q) * Math.sin(q * Math.PI * 5);
    const x = S.x + dx * q + (-dy / len) * amp, y = S.y + dy * q + (dx / len) * amp;
    ball.style.transform = `translate3d(${x - 48}px, ${y - 32}px, 0) rotate(${Math.cos(q * Math.PI * 5) * 14}deg) scale(${1 - 0.65 * q})`;
    if (ball.classList.contains('summoned') && Math.hypot(x - last.x, y - last.y) > 16) { spark(x, y); last = { x, y }; }
    cta.classList.toggle('show', p > 0.9);
    hint.classList.toggle('gone', p > 0.03);
  }

  measure();
  update();
  let ticking = false;
  addEventListener('scroll', () => {
    if (!screen.classList.contains('active') || ticking) return;
    ticking = true;
    requestAnimationFrame(() => { update(); ticking = false; });
  }, { passive: true });
  addEventListener('resize', () => { measure(); update(); });
  setInterval(() => {   // idle sparkles while the ball hovers
    if (screen.classList.contains('active') && ball.classList.contains('summoned')) {
      const c = center(ball); spark(c.x, c.y);
    }
  }, 180);

  setTimeout(() => stage.classList.add('casting'), 1800);
  setTimeout(() => { stage.classList.add('flash', 'titled'); launchFireworks($('l-fireworks'), 5); }, 2600);
  setTimeout(() => ball.classList.add('summoned'), 3200);
  setTimeout(() => hint.classList.add('show'), 5200);
  hint.addEventListener('click', () => scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' }));
  cta.addEventListener('click', () => goToSection('envelope'));
}
registerSectionInit('landing', initLandingScreen);

/* ============================================
   COMPANION BALL: lives on every page after the landing.
   Follows your finger/cursor, otherwise drifts as you scroll.
   ============================================ */
function initGlobalBall() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ball = document.getElementById('g-ball'), trail = document.getElementById('g-trail');
  let x = innerWidth * 0.8, y = innerHeight * 0.3, lx = x, ly = y, px = null, py = null, lastMove = 0;
  const point = e => { px = e.clientX; py = e.clientY; lastMove = performance.now(); };
  addEventListener('pointermove', point, { passive: true });
  addEventListener('pointerdown', point, { passive: true });
  function spark(sx, sy) {
    if (trail.childElementCount > 40) return;
    const d = document.createElement('i');
    d.style.left = (sx + Math.random() * 12 - 6) + 'px';
    d.style.top = (sy + Math.random() * 12 - 6) + 'px';
    trail.appendChild(d);
    d.addEventListener('animationend', () => d.remove());
  }
  (function loop(t) {
    const active = document.querySelector('.screen.active');
    const onLanding = !active || active.dataset.section === 'landing';
    ball.classList.toggle('on', !onLanding);
    if (!onLanding && !document.hidden) {
      const max = document.documentElement.scrollHeight - innerHeight;
      const sp = max > 0 ? scrollY / max : 0;
      let tx, ty;
      if (px !== null && t - lastMove < 2500) { tx = px + 30; ty = py - 30; }
      else { tx = innerWidth * (0.5 + 0.38 * Math.sin(t / 1800 + sp * 7)); ty = innerHeight * (0.18 + 0.55 * sp + 0.08 * Math.sin(t / 900)); }
      x += (tx - x) * 0.06; y += (ty - y) * 0.06;
      ball.style.transform = `translate3d(${x - 36}px, ${y - 24}px, 0) rotate(${Math.max(-20, Math.min(20, (tx - x) * 0.08))}deg)`;
      if (Math.hypot(x - lx, y - ly) > 14) { spark(x, y); lx = x; ly = y; }
    }
    requestAnimationFrame(loop);
  })(0);
}

/* ============================================
   BOOT
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  initAmbient();
  initParallaxTilt();
  initLandingScreen();
  initGlobalBall();
  sectionInitialized.add('landing');
});
