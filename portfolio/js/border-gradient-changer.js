document.addEventListener("DOMContentLoaded", function() {
    // Get references to the top and bottom borders
    const topBorder = document.querySelector(".top-border");
    const bottomBorder = document.querySelector(".bottom-border");
  
    // Function to generate a random number
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    // Define different variations of the gradient
    const variations = [
      ["#037156", "#15CFFF"], // Variation 1
      ["#086A9F", "#00D09C"], // Variation 2
      ["#15CFFF", "#00D09C"],  // Variation 3
      ["#00D09C", "#15CFFF"] // Variation 4
    ];
  
    let lastVariationIndex = -1; // Initialize with a value that will not match any index
  
    
    function changeBorderGradient() {
      let randomIndex;
      
      do {
        randomIndex = getRandomNumber(0, variations.length - 1); // Generate a random index
      } while (randomIndex === lastVariationIndex); // Repeat if the same index is generated consecutively
  
      const [gradient1, gradient2] = variations[randomIndex];
  
   
      topBorder.style.borderImageSource = `linear-gradient(135deg, ${gradient1}, ${gradient2})`; 
      bottomBorder.style.borderImageSource = `linear-gradient(135deg, ${gradient1}, ${gradient2})`; 
  
      
      topBorder.offsetHeight; 
      bottomBorder.offsetHeight; 
  
      // Set transition property for the border-image
      topBorder.style.transition = "border-image-source 2s ease"; 
      bottomBorder.style.transition = "border-image-source 2s ease"; 
  
      lastVariationIndex = randomIndex; 
    }
  
    // Event listener for menu links
    const menuLinks = document.querySelectorAll(".menu-link a");
    menuLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
      changeBorderGradient(); 
      });
    });
  });
  
  
  
  