function showDiv(id) {
    // Hide all divs except for default
    var divs = document.querySelectorAll('#contentDiv > div');
    divs.forEach(function(div) {
        div.classList.add('hidden');
    });
  
    // Show the selected div when link is clicked
    var selectedDiv = document.getElementById(id);
    selectedDiv.classList.remove('hidden');
  
    // Animate the image and paragraph text appearing
    var animatedImage = selectedDiv.querySelector('.animated-image');
    var paragraph = selectedDiv.querySelector('.left-border');
    if (animatedImage) {
        animatedImage.classList.add('fade-in-img');
    }
    if (paragraph) {
        paragraph.classList.add('slide-in');
    }
  
    // Smooth scroll to the main-logo element
    document.getElementById('main-logo').scrollIntoView({
      behavior: 'smooth'
    });
  }
  
