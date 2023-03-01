var currentSection = 0;
showSection (currentSection);

function showSection(n){
    var x = document.getElementsByClassName("property_detail");
    x[n].style.display = "flex";
    if (n == 0) {
        // document.getElementById("prevBtn").style.display = "none";
      } else {
        // document.getElementById("prevBtn").style.display = "flex";
      }
      if (n == (x.length - 1)) {
        // document.getElementById("nextBtn").innerHTML = "Submit";
      } else {
        // document.getElementById("nextBtn").innerHTML = "Next";
      }
      // ... and run a function that displays the correct step indicator:
    //   fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("property_detail");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 ) return false;
    // Hide the current tab:
    x[currentSection].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentSection = currentSection + n;
    // if you have reached the end of the form... :
    if (currentSection >= x.length) {
      //...the form gets submitted:
    //   document.getElementById("regForm").submit();
      return false;
    }
    // Otherwise, display the correct tab:
    showSection(currentSection);
  }