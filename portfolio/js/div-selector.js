function showDiv(id) {
    // Hide all divs except for default
    var divs = document.querySelectorAll('#contentDiv > div');
    divs.forEach(function(div) {
      div.classList.add('hidden');
    });
    
    // Show the selected div when link is clicked
    var selectedDiv = document.getElementById(id);
    selectedDiv.classList.remove('hidden');
  }