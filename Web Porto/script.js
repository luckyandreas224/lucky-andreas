const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectType = item.getAttribute('data-project');
        if (projectType === 'kalkulator') {
            // Ganti URL ini dengan path yang benar ke proyek kalkulator Anda
            window.location.href = 'https://f453-103-119-60-63.ngrok-free.app';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
    

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda telah terkirim.');
        form.reset();
    });

    // Portfolio Item Hover Effect
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.overlay').style.transform = 'translateY(0)';
        });
        item.addEventListener('mouseleave', () => {
            item.querySelector('.overlay').style.transform = 'translateY(100%)';
        });
    });

    // Scroll Reveal Animation
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    sr.reveal('.hero', {});
    sr.reveal('.about', {delay: 300});
    sr.reveal('.portfolio', {delay: 300});
    sr.reveal('.contact', {delay: 300});
});
    // Custom Cursor
    // const cursor = document.querySelector('.cursor');

    // document.addEventListener('mousemove', e => {
    //     cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    // });

    // document.addEventListener('click', () => {
    //     cursor.classList.add("expand");
    //     setTimeout(() => {
    //         cursor.classList.remove("expand");
    //     }, 500)
    // });

    // Interaksi elemen mengambang
    const floatingElements = document.querySelectorAll('.floating');
    
    document.addEventListener('mousemove', (e) => {
        floatingElements.forEach(elem => {
            const speed = elem.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    });
    // Remove or comment out these JavaScript functions

// Custom Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
});

document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
});
document.addEventListener('DOMContentLoaded', function() {
    const options = {
        strings: ['Junior Front-End Dev'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    };

    const typed = new Typed('#typed-text', options);
});
document.addEventListener('DOMContentLoaded', function() {
    const skillSection = document.querySelector('.skills');
    const progressBars = document.querySelectorAll('.progress');

    function showProgress() {
        progressBars.forEach(progress => {
            const value = progress.dataset.percent;
            progress.style.opacity = 1;
            progress.style.width = `${value}`;
        });
    }

    function hideProgress() {
        progressBars.forEach(progress => {
            progress.style.opacity = 0;
            progress.style.width = 0;
        });
    }

    window.addEventListener('scroll', () => {
        const sectionPos = skillSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 2;

        if(sectionPos < screenPos) {
            showProgress();
        } else {
            hideProgress();
        }
    });
});
document.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const background = document.querySelector('.hero');
    background.style.backgroundPositionY = `${scrolled * 0.5}px`;
});
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    let lastScrollY = window.scrollY;

    function updateParallax() {
        const scrollY = window.scrollY;
        const delta = scrollY - lastScrollY;
        const speed = 0.5; // Adjust this value to change parallax intensity

        if (heroSection) {
            const backgroundPositionY = parseFloat(getComputedStyle(heroSection).backgroundPositionY);
            heroSection.style.backgroundPositionY = `${backgroundPositionY + (delta * speed)}px`;
        }

        lastScrollY = scrollY;
        requestAnimationFrame(updateParallax);
    }

    updateParallax();
});
// Tambahkan kode ini di file script.js
document.addEventListener('DOMContentLoaded', function() {
    const chatWidget = document.getElementById('chat-widget');
    const openChatBtn = document.getElementById('open-chat');
    const closeChatBtn = document.getElementById('close-chat');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
  
    openChatBtn.addEventListener('click', function() {
      chatWidget.style.display = 'flex';
      openChatBtn.style.display = 'none';
    });
  
    closeChatBtn.addEventListener('click', function() {
      chatWidget.style.display = 'none';
      openChatBtn.style.display = 'block';
    });
  
    chatForm.addEventListener('submit', function(e) {
      e.preventDefault();
      if (chatInput.value.trim() !== '') {
        addMessage('user', chatInput.value);
        // Simulate a response (replace with actual backend integration later)
        setTimeout(() => {
          addMessage('admin', 'Thank you for your message. We will get back to you soon.');
        }, 1000);
        chatInput.value = '';
      }
    });
  
    function addMessage(sender, message) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('chat-message', `${sender}-message`);
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });