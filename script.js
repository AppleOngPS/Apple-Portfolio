// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const f = e.target;
  const name = encodeURIComponent(f.name.value.trim());
  const email = encodeURIComponent(f.email.value.trim());
  const message = encodeURIComponent(f.message.value.trim());
  
  if (!name || !email || !message) {
    alert('Please fill all fields');
    return;
  }

  const subject = encodeURIComponent('Portfolio message from ' + f.name.value.trim());
  const body = 'Name: ' + f.name.value + '%0D%0AEmail: ' + f.email.value + '%0D%0A%0D%0A' + f.message.value;

  window.location.href = 'mailto:you@example.com?subject=' + subject + '&body=' + body;
});
