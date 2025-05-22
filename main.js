const menuNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector(".hamburger");


hamburger.addEventListener("click", () => {
  menuNav.classList.toggle("active");
});


const navLinks = document.querySelectorAll(".menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuNav.classList.remove("active");
  });
});


// Initialize Leaflet map when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Create map if the map element exists
  const mapElement = document.getElementById('map');
  if (mapElement) {
    // Koordinat SMKN 1 Surabaya
    const smkn1Surabaya = [-7.3052, 112.7339];
    
    // Initialize map
    const map = L.map('map', {
      center: smkn1Surabaya,
      zoom: 15,
      scrollWheelZoom: false,
      zoomControl: true
    });
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(map);
    
    // Add marker for SMKN 1 Surabaya
    const marker = L.marker(smkn1Surabaya).addTo(map);
    marker.bindPopup("<b>SMKN 1 Surabaya</b><br>Jl. SMEA No.4, Wonokromo, Surabaya").openPopup();
    
    // Add zoom control with custom position
    map.zoomControl.setPosition('bottomright');
    
    // Enable zoom on double click
    map.doubleClickZoom.enable();
    
    // Enable map when user clicks on it (improves mobile experience)
    mapElement.addEventListener('click', function() {
      map.scrollWheelZoom.enable();
    });
    
    // Disable scroll zoom when mouse leaves the map
    mapElement.addEventListener('mouseleave', function() {
      map.scrollWheelZoom.disable();
    });
    
    // Reinitialize map on window resize for better responsiveness
    window.addEventListener('resize', function() {
      map.invalidateSize();
    });
  }
  


  
  // // Contact form submission handling (KAPANKAPAN)
  // const contactForm = document.querySelector('.contact-form form');
  // if (contactForm) {
  //   contactForm.addEventListener('submit', function(e) {
  //     e.preventDefault();
  //     // Get form values
  //     const name = document.getElementById('name').value;
  //     const email = document.getElementById('email').value;
  //     const message = document.getElementById('message').value;
      
  //     // Here you would normally send the data to a server
  //     // For now, let's just show an alert
  //     alert(`Terima kasih ${name}! Pesan anda telah dikirim.`);
      
  //     // Reset form
  //     contactForm.reset();
  //   });
  // }
});