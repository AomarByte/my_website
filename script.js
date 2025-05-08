window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 50) {
    header.style.padding = '15px 20px';
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  } else {
    header.style.padding = '30px 20px';
    header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
  }
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'all 0.6s ease-out';
  observer.observe(section);
});


const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInOut {
    0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
    20% { opacity: 1; transform: translateX(-50%) translateY(0); }
    80% { opacity: 1; transform: translateX(-50%) translateY(0); }
    100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
  }
`;
document.head.appendChild(style);


function showCVPage() {
  document.getElementById('cv-page').style.display = 'block';
  document.querySelector('main').style.display = 'none';
  window.scrollTo(0, 0);
}

function hideCVPage() {
  document.getElementById('cv-page').style.display = 'none';
  document.querySelector('main').style.display = 'block';
  window.scrollTo(0, 0);
}