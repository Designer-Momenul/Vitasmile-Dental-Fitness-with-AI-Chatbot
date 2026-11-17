//====================  Navbar Responsive JS===============
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-item');

    // 1. Sticky Navbar Scroll Effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // 2. Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // 3. Active Link Switcher on Click
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navItems.forEach(link => link.classList.remove('active'));
        item.classList.add('active');
        
        // মোবাইল মেনু খোলা থাকলে লিংকে ক্লিক করার পর তা বন্ধ হয়ে যাবে
        menuToggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
//====================  Navbar Responsive JS===============
document.addEventListener('DOMContentLoaded', () => {
  // 1. Category Filter Functionality
  const tabButtons = document.querySelectorAll('.d-tab-btn');
  const serviceCards = document.querySelectorAll('.d-card');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedCategory = btn.getAttribute('data-category');

      serviceCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (selectedCategory === 'all' || selectedCategory === cardCategory) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 2. Booking Modal Functionality
  const dentalModal = document.getElementById('dentalModal');
  const closeDentalModal = document.getElementById('closeDentalModal');
  const modalServiceTitle = document.getElementById('modalServiceTitle');
  const bookButtons = document.querySelectorAll('.d-book-btn');
  const dentalBookingForm = document.getElementById('dentalBookingForm');

  bookButtons.forEach(button => {
    button.addEventListener('click', () => {
      const serviceName = button.getAttribute('data-service');
      modalServiceTitle.textContent = `Selected Service: ${serviceName}`;
      dentalModal.classList.add('show');
    });
  });

  closeDentalModal.addEventListener('click', () => {
    dentalModal.classList.remove('show');
  });

  window.addEventListener('click', (event) => {
    if (event.target === dentalModal) {
      dentalModal.classList.remove('show');
    }
  });

  dentalBookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('আপনার ডেন্টাল অ্যাপয়েন্টমেন্ট সফলভাবে বুক করা হয়েছে!');
    dentalBookingForm.reset();
    dentalModal.classList.remove('show');
  });
});



//====================  Navbar Responsive JS===============
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactBookingForm');
  const dateInput = document.getElementById('cDate');
  const successBox = document.getElementById('contactSuccessMsg');
  const successText = document.getElementById('successText');

  // Set minimum selectable date to today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // Handle Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('cName').value.trim();
      const date = document.getElementById('cDate').value;
      const selectedDept = document.querySelector('input[name="department"]:checked').value;

      // Show personalized confirmation message
      successText.textContent = `ধন্যবাদ ${name}! ${selectedDept} বিভাগে আপনার (${date}) তারিখের রিকোয়েস্টটি সফলভাবে জমা হয়েছে।`;
      successBox.classList.add('active');

      // Reset form fields
      contactForm.reset();

      // Hide confirmation message automatically after 6 seconds
      setTimeout(() => {
        successBox.classList.remove('active');
      }, 6000);
    });
  }
});



//====================  Chatbot sectionJS===============

document.addEventListener('DOMContentLoaded', () => {
  const chatToggle = document.getElementById('aiChatToggle');
  const chatWindow = document.getElementById('aiChatWindow');
  const closeBtn = document.getElementById('aiCloseBtn');
  const toggleIcon = document.getElementById('toggleIcon');
  const chatForm = document.getElementById('aiChatForm');
  const userInput = document.getElementById('aiUserInput');
  const chatBody = document.getElementById('aiChatBody');
  const typingIndicator = document.getElementById('aiTyping');
  const chipButtons = document.querySelectorAll('.chip-btn');

  // আপনার Python Backend API URL এখানে বসান (FastAPI / Flask)
  const PYTHON_API_URL = 'http://127.0.0';

  // 1. Open / Close Chat Window
  function toggleChat() {
    chatWindow.classList.toggle('open');
    if (chatWindow.classList.contains('open')) {
      toggleIcon.classList.replace('fa-robot', 'fa-chevron-down');
      userInput.focus();
    } else {
      toggleIcon.classList.replace('fa-chevron-down', 'fa-robot');
    }
  }

  chatToggle.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', toggleChat);

  // 2. Append Message to UI
  function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('ai-msg', sender === 'user' ? 'user-msg' : 'bot-msg');

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    msgDiv.innerHTML = `
      <div class="msg-bubble">${text}</div>
      <span class="msg-time">${now}</span>
    `;

    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // 3. Send Message to Python Backend
  async function sendMessageToPythonAI(messageText) {
    appendMessage(messageText, 'user');
    userInput.value = '';
    typingIndicator.classList.add('active');
    chatBody.scrollTop = chatBody.scrollHeight;

    try {
      const response = await fetch(PYTHON_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: messageText })
      });

      if (!response.ok) {
        throw new Error('Python server response error');
      }

      const data = await response.json();
      typingIndicator.classList.remove('active');
      
      // Python API থেকে আসা 'reply' ফিল্ডটি দেখাবে
      appendMessage(data.reply || 'দুঃখিত, কোনো উত্তর পাওয়া যায়নি।', 'bot');

    } catch (error) {
      // Python সার্ভার চালু না থাকলে এই ফলব্যাক মেসেজটি কাজ করবে
      setTimeout(() => {
        typingIndicator.classList.remove('active');
        appendMessage(
          `আপনার প্রশ্নটি পেয়েছি: <em>"${messageText}"</em>।<br><small style="color:#0284c7;">(নোট: লাইভ AI উত্তরের জন্য আপনার Python FastAPI/Flask সার্ভারটি <strong>${PYTHON_API_URL}</strong>-এ চালু করুন)</small>`,
          'bot'
        );
      }, 800);
    }
  }

  // 4. Form Submit Event
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = userInput.value.trim();
    if (text) {
      sendMessageToPythonAI(text);
    }
  });

  // 5. Quick Suggestion Chips Click Event
  chipButtons.forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.getAttribute('data-query');
      sendMessageToPythonAI(query);
    });
  });
});



//====================  Navbar Responsive JS===============

//====================  Navbar Responsive JS===============
