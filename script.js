// Initialize portfolio interactivity: theme preference and animations
function initPortfolioApp() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const animateBtn = document.getElementById('animate-btn');
  const profilePic = document.getElementById('profile-pic');

  // Retrieve and apply theme preference
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') document.body.classList.add('dark-theme');

  // Store theme on toggle
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const newTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
  });

  // Trigger bounce animation on profile pic
  animateBtn.addEventListener('click', () => {
    profilePic.classList.add('animate-profile');
    profilePic.addEventListener('animationend', () => {
      profilePic.classList.remove('animate-profile');
    }, { once: true });
  });
  
  // Preferences: font-size
  const fontRadios = document.querySelectorAll('input[name="font-size"]');
  const savePrefsBtn = document.getElementById('save-prefs-btn');
  const savedFont = localStorage.getItem('fontSize') || 'medium';
  document.body.classList.add(`font-${savedFont}`);
  const selectedRadio = document.querySelector(`input[name="font-size"][value="${savedFont}"]`);
  if (selectedRadio) selectedRadio.checked = true;

  savePrefsBtn.addEventListener('click', () => {
    const choice = document.querySelector('input[name="font-size"]:checked').value;
    ['small','medium','large'].forEach(sz => document.body.classList.remove(`font-${sz}`));
    document.body.classList.add(`font-${choice}`);
    localStorage.setItem('fontSize', choice);
  });

  // Projects: toggle details animation
  document.querySelectorAll('.details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const details = btn.nextElementSibling;
      details.classList.toggle('show-details');
    });
  });
}

// Run initialization after DOM is loaded
document.addEventListener('DOMContentLoaded', initPortfolioApp);