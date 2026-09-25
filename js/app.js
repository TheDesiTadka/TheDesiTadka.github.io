/**
 * TheDesiTadka Official Web App Logic
 * 72+ Providers Directory, Real-Time Search, Filter Tabs, 
 * Non-Functional Site Reporting & Feedback Form, and Direct APK Downloads.
 */

// Full List of 72 Active Streaming Providers
const SITES_CATALOG = [
  { name: 'KamaBaba', url: 'https://www.mykamababa.com', category: 'desi' },
  { name: 'Masa49', url: 'https://www.masa49.nl', category: 'desi' },
  { name: 'FSIBlog', url: 'https://www.fsiblogxx.com', category: 'desi' },
  { name: 'MasaHub2', url: 'https://masahub2.com', category: 'desi' },
  { name: 'AagMaal', url: 'https://aagmaal.date', category: 'desi' },
  { name: 'Fry99', url: 'https://fry99.cc', category: 'desi' },
  { name: 'HitMaal', url: 'https://hitmaal.io', category: 'desi' },
  { name: 'WebXSeries', url: 'https://webxseries.hot', category: 'movies' },
  { name: 'DesiBF', url: 'https://desibf.com', category: 'desi' },
  { name: 'AntarvasnaBF', url: 'https://antarvasnabf.com', category: 'desi' },
  { name: 'DesiSex', url: 'https://desisex.site', category: 'desi' },
  { name: 'IxiPorn', url: 'https://ixiporn.live', category: 'desi' },
  { name: 'MasaFun', url: 'https://masafun.art', category: 'desi' },
  { name: 'UncutMaza', url: 'https://uncutmaza.cc', category: 'desi' },
  { name: 'WowUncut', url: 'https://wowuncut.com', category: 'desi' },
  { name: 'DesiKahani2', url: 'https://desikahani2.net', category: 'desi' },
  { name: 'DesiTales2', url: 'https://desitales2.com', category: 'desi' },
  { name: 'IndianSexStories3', url: 'https://www.indiansexstories3.com', category: 'desi' },
  { name: 'XXXIndianStories', url: 'https://xxxindianstories.com', category: 'desi' },
  { name: 'XMaza', url: 'https://xmaza.xxx', category: 'desi' },
  { name: 'XNXX', url: 'https://www.xnxx.com', category: 'tube' },
  { name: 'XVideos', url: 'https://www.xvideos.com', category: 'tube' },
  { name: 'AagMaal.com', url: 'https://aagmaal.com', category: 'desi' },
  { name: 'BMaal', url: 'https://bmaal.io', category: 'movies' },
  { name: 'ChiggyWiggy', url: 'https://chiggywiggy.com', category: 'desi' },
  { name: 'DesiBabe', url: 'https://desibabe.to', category: 'desi' },
  { name: 'DesiGirlXX', url: 'https://desigirlxx.beer', category: 'desi' },
  { name: 'DesiMaals', url: 'https://www.desimaals.fun', category: 'desi' },
  { name: 'DesiVideo', url: 'https://desivideo.net', category: 'desi' },
  { name: 'BrazzPW', url: 'https://brazzpw.xyz', category: 'hd' },
  { name: 'FPO.xxx', url: 'https://www.fpo.xxx', category: 'hd' },
  { name: 'Hello.porn', url: 'https://hello.porn', category: 'hd' },
  { name: 'HQPorner', url: 'https://hqporner.com', category: 'hd' },
  { name: 'MAX.porn', url: 'https://max.porn', category: 'hd' },
  { name: 'Netfapx', url: 'https://netfapx.com', category: 'hd' },
  { name: 'OK.porn', url: 'https://ok.porn', category: 'hd' },
  { name: 'OK.xxx', url: 'https://ok.xxx', category: 'hd' },
  { name: 'PerfectGirls', url: 'https://www.perfectgirls.xxx', category: 'hd' },
  { name: 'Porn4Days', url: 'https://porn4days.pw', category: 'hd' },
  { name: 'PornHat', url: 'https://www.pornhat.com', category: 'hd' },
  { name: 'PornHD4K', url: 'https://pornhd4k.net', category: 'hd' },
  { name: 'PornHouse', url: 'https://pornhouse.me', category: 'hd' },
  { name: 'PornMZ', url: 'https://pornmz.com', category: 'hd' },
  { name: 'Pornstars.tube', url: 'https://pornstars.tube', category: 'hd' },
  { name: 'SxyPrn', url: 'https://sxyprn.com', category: 'hd' },
  { name: 'WatchXXXFree', url: 'https://watchxxxfree.xyz', category: 'hd' },
  { name: 'LalaMasa', url: 'https://lalamasa.mobi', category: 'desi' },
  { name: 'WatchOErotic', url: 'https://watchoerotic.com', category: 'desi' },
  { name: 'PRMovies', url: 'https://prmovies.com', category: 'movies' },
  { name: 'PRMovies Church', "url": 'https://prmovies.church', category: 'movies' },
  { name: 'PornHub', url: 'https://www.pornhub.org', category: 'tube' },
  { name: 'xHamster', url: 'https://xhamster.com', category: 'tube' },
  { name: 'RedTube', url: 'https://www.redtube.com', category: 'tube' },
  { name: 'YouPorn', url: 'https://www.you-porn.com', category: 'tube' },
  { name: 'Tube8', url: 'https://www.tube8.es', category: 'tube' },
  { name: 'FreeOnes Tube', url: 'https://freeonestube.com', category: 'tube' },
  { name: 'SpankBang', url: 'https://spankbang.com', category: 'tube' },
  { name: 'TNAFlix', url: 'https://www.tnaflix.com', category: 'tube' },
  { name: 'EmpFlix', url: 'https://www.empflix.com', category: 'tube' },
  { name: 'Beeg', url: 'https://store.externulls.com', category: 'tube' },
  { name: 'YouJizz', url: 'https://www.youjizz.com', category: 'tube' },
  { name: 'Eporner', url: 'https://www.eporner.com', category: 'tube' },
  { name: 'DrTuber', url: 'https://www.drtuber.desi', category: 'tube' },
  { name: 'NuVid', url: 'https://m.nuvid.org', category: 'tube' },
  { name: 'PornOne', url: 'https://pornone.com', category: 'tube' },
  { name: 'DefineBabe', url: 'https://www.definebabe.com', category: 'tube' },
  { name: '3Movs', url: 'https://www.3movs.xxx', category: 'tube' },
  { name: 'TXXX', url: 'https://txxx.com', category: 'tube' },
  { name: 'Upornia', url: 'https://upornia.com', category: 'tube' },
  { name: 'HDZog', url: 'https://hdzog.com', category: 'tube' },
  { name: 'MovieNerds', url: 'https://movienerds.site', category: 'movies' },
  { name: 'Cineapse', url: 'https://cineapse.net', category: 'movies' }
];

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFaqAccordion();
  initHashCopy();
  initProvidersCatalog();
  initFeedbackForm();
});

// Sticky Navbar Scroll Effect
function initNavbar() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

// Copy SHA256 Checksum
function initHashCopy() {
  const copyBtn = document.getElementById('copyHashBtn');
  const hashElement = document.getElementById('apkHashValue');

  if (copyBtn && hashElement) {
    copyBtn.addEventListener('click', async () => {
      const hashText = hashElement.innerText.trim();
      try {
        await navigator.clipboard.writeText(hashText);
        const originalText = copyBtn.innerText;
        copyBtn.innerText = 'Copied!';
        copyBtn.style.borderColor = 'var(--primary)';
        copyBtn.style.color = '#fff';

        setTimeout(() => {
          copyBtn.innerText = originalText;
          copyBtn.style.borderColor = '';
          copyBtn.style.color = '';
        }, 2000);
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = hashText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        copyBtn.innerText = 'Copied!';
        setTimeout(() => {
          copyBtn.innerText = 'Copy Hash';
        }, 2000);
      }
    });
  }
}

// FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
          }
        });

        item.classList.toggle('active', !isActive);
      });
    }
  });
}

// 72 Providers Catalog: Search & Filter Tabs
function initProvidersCatalog() {
  const gridContainer = document.getElementById('providersCatalogGrid');
  const searchInput = document.getElementById('siteSearchInput');
  const tabButtons = document.querySelectorAll('.catalog-tab-btn');

  if (!gridContainer) return;

  let activeCategory = 'all';
  let searchTerm = '';

  function getCategoryLabel(cat) {
    switch (cat) {
      case 'desi': return 'Desi Content';
      case 'tube': return 'Tube Network';
      case 'hd': return 'HD/4K Porner';
      case 'movies': return 'Movies & OTT';
      default: return 'Streaming';
    }
  }

  function renderSites() {
    gridContainer.innerHTML = '';

    const filtered = SITES_CATALOG.filter(site => {
      const matchCat = activeCategory === 'all' || site.category === activeCategory;
      const matchSearch = site.name.toLowerCase().includes(searchTerm) || 
                          site.url.toLowerCase().includes(searchTerm);
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
          <p style="font-size: 1.1rem; margin-bottom: 6px;">No matching providers found.</p>
          <p style="font-size: 0.88rem;">Have a site you'd like added? Submit a request in the feedback section below!</p>
        </div>
      `;
      return;
    }

    filtered.forEach(site => {
      const cleanUrl = site.url.replace(/^https?:\/\/(www\.)?/, '');
      const card = document.createElement('div');
      card.className = 'site-item-card';
      card.innerHTML = `
        <div class="site-item-info">
          <span class="site-item-name">
            <span style="width: 7px; height: 7px; border-radius: 50%; background: #10b981; display: inline-block;"></span>
            ${site.name}
          </span>
          <span class="site-item-url">${cleanUrl}</span>
        </div>
        <span class="site-category-tag">${getCategoryLabel(site.category)}</span>
      `;
      gridContainer.appendChild(card);
    });
  }

  // Initial render
  renderSites();

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      renderSites();
    });
  }

  // Category tab handler
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      renderSites();
    });
  });
}

// Non-Functional Site Reporting & Feedback Form
function initFeedbackForm() {
  const form = document.getElementById('siteFeedbackForm');
  const siteSelect = document.getElementById('feedbackSite');
  const textarea = document.getElementById('feedbackDetails');
  const charCount = document.getElementById('charCount');
  const fileInput = document.getElementById('feedbackScreenshot');
  const dropzone = document.getElementById('uploadDropzone');
  const previewContainer = document.getElementById('screenshotPreview');
  const previewImg = document.getElementById('previewThumbImg');
  const previewName = document.getElementById('previewFileName');
  const previewSize = document.getElementById('previewFileSize');
  const removePreviewBtn = document.getElementById('btnRemoveScreenshot');
  const successCard = document.getElementById('feedbackSuccessCard');
  const radioLabels = document.querySelectorAll('.issue-chip-label');

  // 1. Populate Site Dropdown with all 72 sites
  if (siteSelect) {
    const sortedSites = [...SITES_CATALOG].sort((a, b) => a.name.localeCompare(b.name));
    sortedSites.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.name;
      opt.textContent = `${s.name} (${s.url.replace(/^https?:\/\/(www\.)?/, '')})`;
      siteSelect.appendChild(opt);
    });
  }

  // 2. Character Counter Limit (Max 500 characters)
  if (textarea && charCount) {
    textarea.addEventListener('input', () => {
      const len = textarea.value.length;
      charCount.textContent = len;
      if (len >= 480) {
        charCount.style.color = 'var(--accent-red)';
      } else if (len >= 400) {
        charCount.style.color = 'var(--accent-amber)';
      } else {
        charCount.style.color = 'var(--text-muted)';
      }
    });
  }

  // 3. Issue Radio Chips Toggle
  radioLabels.forEach(label => {
    const radio = label.querySelector('input[type="radio"]');
    if (radio) {
      radio.addEventListener('change', () => {
        radioLabels.forEach(l => l.classList.remove('active'));
        if (radio.checked) {
          label.classList.add('active');
        }
      });
    }
  });

  // 4. Screenshot Drag & Drop and Preview Handler
  function handleFile(file) {
    if (!file) return;

    // Check size limit: max 5MB
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      alert('Screenshot size exceeds 5 MB limit. Please select a smaller image.');
      if (fileInput) fileInput.value = '';
      return;
    }

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, or WebP).');
      if (fileInput) fileInput.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (previewImg) previewImg.src = e.target.result;
      if (previewName) previewName.textContent = file.name;
      if (previewSize) previewSize.textContent = `${(file.size / 1024).toFixed(1)} KB`;
      if (previewContainer) previewContainer.style.display = 'flex';
      if (dropzone) dropzone.style.display = 'none';
    };
    reader.readAsDataURL(file);
  }

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      handleFile(file);
    });
  }

  if (dropzone) {
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });

    dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('dragover');
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleFile(e.dataTransfer.files[0]);
      }
    });
  }

  if (removePreviewBtn) {
    removePreviewBtn.addEventListener('click', () => {
      if (fileInput) fileInput.value = '';
      if (previewContainer) previewContainer.style.display = 'none';
      if (dropzone) dropzone.style.display = 'block';
    });
  }

  // 5. Submit Handler
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const siteVal = siteSelect ? siteSelect.value : '';
      const selectedIssue = form.querySelector('input[name="issue_section"]:checked');
      const detailsVal = textarea ? textarea.value.trim() : '';

      if (!siteVal) {
        alert('Please select which site has an issue.');
        if (siteSelect) siteSelect.focus();
        return;
      }

      if (!selectedIssue) {
        alert('Please specify which section of the site is not working.');
        return;
      }

      if (!detailsVal) {
        alert('Please provide a brief description of the issue.');
        if (textarea) textarea.focus();
        return;
      }

      const submitBtn = document.getElementById('feedbackSubmitBtn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Submitting Report...';
      }

      // Simulate instantaneous secure logging
      setTimeout(() => {
        form.style.display = 'none';
        if (successCard) {
          const reportSummary = document.getElementById('successSiteSummary');
          if (reportSummary) {
            reportSummary.textContent = `${siteVal} — ${selectedIssue.value}`;
          }
          successCard.style.display = 'block';
        }
      }, 600);
    });
  }
}
