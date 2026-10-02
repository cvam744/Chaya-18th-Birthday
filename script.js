/* ============================================
   CENTRAL DATA
   All personalization content lives here.
   Add more entries as details come in — never
   touch the section-switching logic below to
   add content.
   ============================================ */
const SITE_DATA = {
  arrivalText: "A letter has arrived for Chaya…",
  houseResponses: {
    gryffindor: "Of course. The confidence was already suspiciously obvious.",
    ravenclaw: "This explains the overthinking.",
    hufflepuff: "Okay, this one was never in doubt.",
    slytherin: "I knew there was a little mastermind hiding somewhere."
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
  mapCategories: {
    personality: "Chaya, you're beyond all the imaginary words and worlds. There are some people for whom every description still feels incomplete. I think you're somewhere in the latter.",
    admire: "You've told me that you want to become independent, and I've always genuinely admired that about you. So whoever eventually becomes a part of your life, I hope he never becomes the reason you stop being the free soul you wanted to become.",
    funny: "Our ridiculous conversations. Our random arguments (although we don't really have any). Our thoughts on books. Our memories. The things you've told me about your life, and the things I've told you about mine — the people we've been, the people we're becoming, and all the little moments that probably felt insignificant when they happened.",
    sayings: "I still remember when you said, \"you're writing a book for me.\" You probably didn't mean it literally — but somehow, if I ever write one for you, I already know why it would be about you.",
    birthday: "Please don't ever settle for someone who makes you feel like you have to become less of yourself just to be loved. Whoever comes into your life, I hope they simply walk beside you while you continue becoming everything you've always wanted to be. Happy birthday, Chaya."
  },
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

  photo.addEventListener('error', () => {
    photo.style.display = 'none';
    fallback.classList.add('show');
  });

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
  const verdict = document.getElementById('house-verdict');
  const verdictName = document.getElementById('house-verdict-name');
  const verdictText = document.getElementById('house-verdict-text');
  const continueBtn = document.getElementById('sorting-continue');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const house = card.dataset.house;

      cards.forEach(c => {
        c.classList.toggle('chosen', c === card);
        c.classList.toggle('dimmed', c !== card);
      });

      const houseColor = getComputedStyle(card).getPropertyValue('--house-color').trim();
      verdict.style.setProperty('--verdict-color', houseColor);
      verdictName.textContent = house.charAt(0).toUpperCase() + house.slice(1);
      verdictText.textContent = SITE_DATA.houseResponses[house];
      verdict.classList.add('revealed');

      verdict.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  continueBtn.addEventListener('click', () => {
    // Next stop is the Memory Room — not built yet, so this
    // safely no-ops until Step 4 adds data-section="memory".
    goToSection('memory');
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

  const labels = {
    personality: "Her Personality",
    admire: "Things I Admire",
    funny: "Funny Memories",
    sayings: "Little Things She Says",
    birthday: "Birthday Message"
  };

  Object.keys(SITE_DATA.mapCategories).forEach(category => {
    const stop = document.createElement('div');
    stop.className = 'map-stop';

    const footprint = document.createElement('span');
    footprint.className = 'footprint';

    const content = document.createElement('div');
    content.className = 'map-stop-content';
    content.innerHTML = `
      <p class="map-stop-title">${labels[category]}</p>
      <p class="map-stop-text">${SITE_DATA.mapCategories[category]}</p>
    `;

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

function playSpellIntro() {
  const intro = document.getElementById('spell-intro');
  const figure = document.getElementById('spell-figure');
  const glow = document.getElementById('spell-glow');
  const flash = document.getElementById('spell-flash');
  const fireworksLayer = document.getElementById('spell-fireworks');
  const message = document.getElementById('spell-message');

  // Wand raises, spell charges
  setTimeout(() => {
    figure.classList.add('casting');
    glow.classList.add('charging');
  }, 700);

  // Light bursts
  setTimeout(() => {
    flash.classList.add('burst');
  }, 1900);

  // Fireworks fire off just as the flash peaks
  setTimeout(() => {
    launchFireworks(fireworksLayer, 5);
  }, 2000);

  // Message resolves out of the smoke/light
  setTimeout(() => {
    message.classList.add('reveal');
  }, 2700);

  // Whole scene fades to reveal the site underneath
  setTimeout(() => {
    intro.classList.add('fading');
  }, 5400);

  setTimeout(() => {
    intro.classList.add('done');
  }, 6400);
}

/* ============================================
   BOOT
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  initAmbient();
  initParallaxTilt();
  initEnvelopeScreen(); // envelope is the initial active section, init it directly
  sectionInitialized.add('envelope');
  playSpellIntro();
});
