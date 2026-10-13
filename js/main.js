/**
 * Om Sikarwar — Personal Portfolio Engine
 * Author: Om Sikarwar
 * Roles: Java Programmer • Personal Story Writer • National Footballer • Taekwondo Black Belt
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. Theme Management (Dark / Light Theme)
  // =========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  const savedTheme = localStorage.getItem('om-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');

  setTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  function setTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('om-theme', theme);
  }

  // =========================================================================
  // 2. Sticky Header & Active Nav Link Highlighting
  // =========================================================================
  const siteHeader = document.getElementById('header');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Header shadow transition
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    // ScrollSpy for Nav Links
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // =========================================================================
  // 3. Mobile Navigation Drawer
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta-item a');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileMenuBtn.classList.toggle('active', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', isOpen.toString());
      mobileDrawer.setAttribute('aria-hidden', (!isOpen).toString());
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        if (mobileDrawer.classList.contains('open')) {
          mobileDrawer.classList.remove('open');
          mobileMenuBtn.classList.remove('active');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
          mobileDrawer.setAttribute('aria-hidden', 'true');
        }
      }
    });
  }

  // =========================================================================
  // 4. Hero Section: Interactive Pillar Tabs
  // =========================================================================
  const pillarTabBtns = document.querySelectorAll('.pillar-tab-btn');
  const pillarPanels = document.querySelectorAll('.pillar-panel');

  pillarTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pillarTabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const targetPillar = btn.getAttribute('data-pillar');
      pillarPanels.forEach(panel => {
        if (panel.id === `pillar-${targetPillar}`) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  // =========================================================================
  // 5. Interactive Java Code Studio (Snippet Tabs & Copy)
  // =========================================================================
  const codeTabBtns = document.querySelectorAll('.code-tab-btn');
  const codeBlocks = document.querySelectorAll('.code-block');
  const activeFilenameEl = document.getElementById('active-filename');
  const copyCodeBtn = document.getElementById('copyCodeBtn');
  const copyBtnText = document.getElementById('copyBtnText');

  const fileMap = {
    'martial-code': 'DisciplineEngine.java',
    'football-code': 'PitchTactics.java',
    'story-code': 'StoryNarrative.java'
  };

  codeTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      codeTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tabId = btn.getAttribute('data-tab');
      codeBlocks.forEach(block => {
        if (block.id === `code-${tabId}`) {
          block.classList.add('active');
        } else {
          block.classList.remove('active');
        }
      });

      if (activeFilenameEl && fileMap[tabId]) {
        activeFilenameEl.textContent = fileMap[tabId];
      }
    });
  });

  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', () => {
      const activeCodeBlock = document.querySelector('.code-block.active');
      if (activeCodeBlock) {
        const codeText = activeCodeBlock.textContent;
        navigator.clipboard.writeText(codeText).then(() => {
          copyBtnText.textContent = 'Copied!';
          copyCodeBtn.style.borderColor = 'var(--accent-football)';
          showToast('Code snippet copied to clipboard!');
          setTimeout(() => {
            copyBtnText.textContent = 'Copy';
            copyCodeBtn.style.borderColor = '';
          }, 2000);
        }).catch(() => {
          showToast('Unable to copy code to clipboard.');
        });
      }
    });
  }

  // =========================================================================
  // 6. Project Category Filter
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hide');
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // =========================================================================
  // 7. Editorial Story Excerpt Reader Modal
  // =========================================================================
  const storyModal = document.getElementById('storyModal');
  const closeStoryModalBtn = document.getElementById('closeStoryModalBtn');
  const modalDoneBtn = document.getElementById('modalDoneBtn');
  const readStoryBtns = document.querySelectorAll('.read-story-btn');

  const modalStoryTitle = document.getElementById('modalStoryTitle');
  const modalStoryCategory = document.getElementById('modalStoryCategory');
  const modalStoryDate = document.getElementById('modalStoryDate');
  const modalStoryContent = document.getElementById('modalStoryContent');

  const storyDatabase = {
    '1': {
      title: "The 10,000 Kicks: What the Dojang Taught Me About Writing Code",
      category: "Discipline & Growth",
      date: "[Placeholder Date - Add Your Real Story Date]",
      content: `
        <p>In martial arts, there is an ancient aphorism: <em>"I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times."</em></p>
        <p>When I stood for my Taekwondo Black Belt test, sweat burning my eyes and muscles shaking from hours of relentless forms and sparring, I realized that mastery is not an epiphany. It is the accumulation of humble, unglamorous repetitions.</p>
        <p>Years later, while refactoring a complex Java backend architecture, the exact same sensation returned. Writing clean software is not about hasty genius; it is about disciplined refactoring, defensive boundary checks, and having the patience to inspect every branch of execution without ego.</p>
        <p>The indomitable spirit forged on the mats is what keeps me at the terminal when a stubborn concurrency bug defies obvious logic. You do not panic; you reset your stance, observe the flow, and strike with precision.</p>
      `
    },
    '2': {
      title: "Ninety Minutes Under Thunder: Composure Under Pressure",
      category: "Athletic Psychology",
      date: "[Placeholder Date - Add Your Real Story Date]",
      content: `
        <p>The whistle sounds at a national-level tournament, and the ambient roar of the stadium contracts into laser focus. In competitive football, you have less than half a second to process space, angle, defender momentum, and your teammate's run.</p>
        <p>Panic is the fastest way to surrender possession. True performance under high stakes comes from internal calmness and collective trust in the team.</p>
        <p>In software teams, critical production incidents and aggressive sprint releases simulate that exact pitch environment. Instead of finger-pointing, you step into the play, communicate with absolute clarity, and execute the pass.</p>
        <p>Football taught me that the finest individual talent will always fail without team cohesion. When we win, the team wins; when we regroup, we analyze the match footage together.</p>
      `
    },
    '3': {
      title: "Why Every Developer Should Write Stories",
      category: "Craft & Philosophy",
      date: "[Placeholder Date - Add Your Real Story Date]",
      content: `
        <p>We often treat code as purely mathematical formulas. But code is language. It is human intent carved into syntax so that other engineers—and future iterations of ourselves—can comprehend and build upon it.</p>
        <p>Writing personal stories and essays demands ruthless editing: cutting unnecessary flourishes, finding the exact word that resonates, and structuring ideas into a coherent emotional narrative.</p>
        <p>When an engineer learns to write evocative prose, their documentation becomes legible, their pull request descriptions become a pleasure to review, and their system design proposals bridge the gap between engineering and leadership effortlessly.</p>
        <p>To tell stories is to build empathy. And empathetic engineers build software that genuinely serves humanity.</p>
      `
    }
  };

  readStoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const storyId = btn.getAttribute('data-story-id');
      const story = storyDatabase[storyId];
      if (story) {
        modalStoryTitle.textContent = story.title;
        modalStoryCategory.textContent = story.category;
        modalStoryDate.textContent = story.date;
        modalStoryContent.innerHTML = story.content;

        storyModal.classList.add('open');
        storyModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeStoryModal() {
    storyModal.classList.remove('open');
    storyModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (closeStoryModalBtn) closeStoryModalBtn.addEventListener('click', closeStoryModal);
  if (modalDoneBtn) modalDoneBtn.addEventListener('click', closeStoryModal);

  // Close on modal backdrop click
  if (storyModal) {
    storyModal.addEventListener('click', (e) => {
      if (e.target === storyModal) closeStoryModal();
    });
  }

  // =========================================================================
  // 8. Customization Guide Modal
  // =========================================================================
  const guideModal = document.getElementById('guideModal');
  const guideModalBtn = document.getElementById('guide-modal-btn');
  const closeGuideModalBtn = document.getElementById('closeGuideModalBtn');
  const guideDoneBtn = document.getElementById('guideDoneBtn');

  function openGuideModal() {
    guideModal.classList.add('open');
    guideModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeGuideModal() {
    guideModal.classList.remove('open');
    guideModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (guideModalBtn) guideModalBtn.addEventListener('click', openGuideModal);
  if (closeGuideModalBtn) closeGuideModalBtn.addEventListener('click', closeGuideModal);
  if (guideDoneBtn) guideDoneBtn.addEventListener('click', closeGuideModal);

  if (guideModal) {
    guideModal.addEventListener('click', (e) => {
      if (e.target === guideModal) closeGuideModal();
    });
  }

  // Global Escape Key Listener for Modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (storyModal && storyModal.classList.contains('open')) closeStoryModal();
      if (guideModal && guideModal.classList.contains('open')) closeGuideModal();
    }
  });

  // =========================================================================
  // 9. Copy Email Address to Clipboard
  // =========================================================================
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailToCopy = document.getElementById('emailToCopy');

  if (copyEmailBtn && emailToCopy) {
    copyEmailBtn.addEventListener('click', () => {
      const emailText = emailToCopy.textContent.replace(' - Placeholder', '').replace('[', '').replace(']', '').trim();
      navigator.clipboard.writeText(emailText).then(() => {
        showToast(`Email copied: ${emailText}`);
      }).catch(() => {
        showToast('Unable to copy email automatically.');
      });
    });
  }

  // =========================================================================
  // 10. Contact Form Validation & Simulated Submission
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  const senderNameInput = document.getElementById('senderName');
  const senderEmailInput = document.getElementById('senderEmail');
  const senderMessageInput = document.getElementById('senderMessage');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formSuccessToast = document.getElementById('formSuccessToast');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (!senderNameInput.value.trim()) {
        nameError.textContent = 'Please enter your name.';
        nameError.style.display = 'block';
        isValid = false;
      } else {
        nameError.style.display = 'none';
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!senderEmailInput.value.trim()) {
        emailError.textContent = 'Please provide an email address.';
        emailError.style.display = 'block';
        isValid = false;
      } else if (!emailRegex.test(senderEmailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        isValid = false;
      } else {
        emailError.style.display = 'none';
      }

      // Validate Message
      if (!senderMessageInput.value.trim()) {
        messageError.textContent = 'Please write a brief message.';
        messageError.style.display = 'block';
        isValid = false;
      } else {
        messageError.style.display = 'none';
      }

      if (isValid) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending Dispatch...</span>';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span>Dispatch Message</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          `;

          formSuccessToast.style.display = 'flex';
          showToast('Message dispatched successfully!');
          contactForm.reset();

          setTimeout(() => {
            formSuccessToast.style.display = 'none';
          }, 6000);
        }, 800);
      }
    });
  }

  // =========================================================================
  // 11. Toast Notification Utility
  // =========================================================================
  const toastNotification = document.getElementById('toastNotification');
  let toastTimer = null;

  function showToast(message) {
    if (!toastNotification) return;
    toastNotification.textContent = message;
    toastNotification.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 3200);
  }

  // =========================================================================
  // 12. Dynamic Footer Year
  // =========================================================================
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }
});
