


  // document.addEventListener('DOMContentLoaded', function() {
  //   const leftElements = document.querySelectorAll('.scroll-animation-left');
  //   const rightElements = document.querySelectorAll('.scroll-animation-right');

  //   function handleScroll() {
  //     leftElements.forEach((element) => {
  //       const rect = element.getBoundingClientRect();
  //       if (rect.top < window.innerHeight && rect.bottom > 0) {
  //         setTimeout(() => {
  //           element.classList.add('visible');
  //         }, 2000); // Wait 2 seconds before showing the element
  //       }
  //     });

  //     rightElements.forEach((element) => {
  //       const rect = element.getBoundingClientRect();
  //       if (rect.top < window.innerHeight && rect.bottom > 0) {
  //         setTimeout(() => {
  //           element.classList.add('visible');
  //         }, 2000); // Wait 2 seconds before showing the element
  //       }
  //     });
  //   }

  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll(); // Check on page load
  // });

  // Function to filter projects based on type
function filterProjects(type) {
  const projects = document.querySelectorAll('.project');
  const buttons = document.querySelectorAll('.buttons button');

  // Remove active class from all buttons
  buttons.forEach(button => {
      button.classList.remove('active');
  });

  // Add active class to the clicked button
  event.target.classList.add('active');

  // Show or hide projects based on the selected type
  projects.forEach(project => {
      if (type === 'all' || project.getAttribute('data-type') === type) {
          project.style.display = 'block'; // Show project
      } else {
          project.style.display = 'none'; // Hide project
      }
  });
}

// Optional: Add smooth scrolling to sections
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


  function filterProjects(type) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.style.display = (type === 'all' || project.getAttribute('data-type') === type) ? 'block' : 'none';
    });
    document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function validateAndSubmit() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
      alert('All fields are required!');
      return;
  }

  if (!validateEmail(email)) {
      alert('Please enter a valid email address!');
      return;
  }

  alert('Message sent successfully!');
  // Here you can add code to actually send the message, e.g., using AJAX
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}