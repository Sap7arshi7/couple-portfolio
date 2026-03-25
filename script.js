// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
    for (let el of reveals) {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 120;
        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Typing effect
const phrases = ["'We are so obsessed it's illegal' 🫠", "'Babai supremacy activated' 💙", "'Ruddra: i'm the best. Puja: yeah okay handsome narcissist' 😏", "'We made it official and never looked back' ✨", "'childish? yes. in love? disgustingly.'"];
let idx = 0, charIdx = 0, isDeleting = false;
const typedElement = document.getElementById('typingElement');
function typeEffect() {
    let currentPhrase = phrases[idx];
    if (isDeleting) {
        typedElement.textContent = currentPhrase.substring(0, charIdx-1);
        charIdx--;
        if (charIdx === 0) {
            isDeleting = false;
            idx = (idx+1) % phrases.length;
            setTimeout(typeEffect, 800);
            return;
        }
    } else {
        typedElement.textContent = currentPhrase.substring(0, charIdx+1);
        charIdx++;
        if (charIdx === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
    }
    setTimeout(typeEffect, isDeleting ? 60 : 100);
}
typeEffect();

// Obsession meter
const meterFill = document.getElementById('obsessionFill');
function fillMeterOnView() {
    const meterSection = document.querySelector('.meter-bar');
    if (!meterSection) return;
    const rect = meterSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 80;
    if (isVisible && meterFill.style.width !== '100%') {
        meterFill.style.width = '100%';
        meterFill.innerHTML = '200% ✨ mutual obsession ✨';
    }
}
window.addEventListener('scroll', fillMeterOnView);
window.addEventListener('load', fillMeterOnView);

// Jokes carousel
const jokesList = [
    "💬 Ruddra: 'I'm not arrogant, I'm just convinced I'm just better.' — Puja: 'unfortunately true.'",
    "💬 'I love you more.' 'No I love you more.' 'Let's settle, I'm more lovable anyway.' – classic narcissist logic",
    "💬 Puja: 'Why are you looking at the mirror?' Ruddra: 'just checking if my partner still has the best husband.'",
    "💬 Babai law: if Ruddra cracks a narcissist joke, Puja must laugh.",
    "💬 'Ruddra: Pooja bhi karta hu, Path bhi karta hu, Kahin bhagwan na ban jau, Isliye paap bhi karta hu.'",
    "💬 'Ruddra: I don't think i am narcissist, I just have a very high opinion of myself. Puja: That's exactly what a narcissist thinks'",
];
let jokeIndex = 0;
const jokeDisplay = document.getElementById('jokeDisplay');
const nextBtn = document.getElementById('nextJokeBtn');
function updateJoke() {
    jokeDisplay.style.opacity = '0';
    setTimeout(() => {
        jokeDisplay.textContent = jokesList[jokeIndex % jokesList.length];
        jokeDisplay.style.opacity = '1';
        jokeIndex++;
    }, 180);
}
nextBtn.addEventListener('click', updateJoke);
updateJoke();

// Lightbox gallery
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
galleryItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const fullUrl = item.getAttribute('data-full');
        if (fullUrl) {
            lightboxImg.src = fullUrl;
            lightbox.style.display = 'flex';
        } else {
            const imgSrc = item.querySelector('img')?.src;
            if(imgSrc) lightboxImg.src = imgSrc;
            lightbox.style.display = 'flex';
        }
    });
});
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') lightbox.style.display = 'none';
});

// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if(href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if(target) target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
const storyBtn = document.querySelector('a[href="#story"]');
if(storyBtn) {
    storyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#story').scrollIntoView({ behavior: 'smooth' });
    });
}