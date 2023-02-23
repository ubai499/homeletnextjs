document.getElementById("property").onclick = function() {
    document.getElementById("propertyform").style.display = "block";
    document.getElementById("investmentform").style.display = "none";
    document.getElementById("navbutton1").style.background = "#0984E3";
    document.getElementById("property").style.color = "#fff";
    document.getElementById("navbutton1").style.border = "1px solid #0984E3";
    document.getElementById("navbutton2").style.background = "#fff";
    document.getElementById("investment").style.background = "transparent";
    document.getElementById("investment").style.color = "#0984E3";
    // document.getElementById("investment").style.border = "1px solid #fff";
    // document.getElementById("property").style.color = "#000";
    // document.getElementById("investment").style.background = "transparent";
    // document.getElementById("investment").style.color = "#fff";
}

document.getElementById("investment").onclick = function() {
    document.getElementById("propertyform").style.display = "none";
    document.getElementById("investmentform").style.display = "block";
    document.getElementById("navbutton1").style.background = "#ffff";
    document.getElementById("property").style.color = "#333";
    document.getElementById("navbutton1").style.border = "1px solid #fff";
    document.getElementById("navbutton2").style.background = "#0984E3";
    document.getElementById("investment").style.color = "#fff";
    document.getElementById("navbutton2").style.border = "#0984E3";
}

document.getElementById("residential").onclick = function() {
    document.getElementById("residentialicons").style.display = "flex";
    document.getElementById("commercialicons").style.display = "none";
    document.getElementById("ploticons").style.display = "none";
    document.getElementById("residential").style.color = "#fff";
    document.getElementById("residential").style.background = "#0984E3";
    document.getElementById("commercial").style.color = "#000";
    document.getElementById("commercial").style.background = "transparent";
    document.getElementById("plots").style.color = "#000";
    document.getElementById("plots").style.background = "transparent";
    }
    
    document.getElementById("commercial").onclick = function() {
    document.getElementById("commercialicons").style.display = "flex";
    document.getElementById("residentialicons").style.display = "none";
    document.getElementById("ploticons").style.display = "none";
    document.getElementById("residential").style.color = "#000";
    document.getElementById("residential").style.background = "transparent";
    document.getElementById("commercial").style.color = "#fff";
    document.getElementById("commercial").style.background = "#0984E3";
    document.getElementById("plots").style.color = "#000";
    document.getElementById("plots").style.background = "transparent";
    }

    document.getElementById("plots").onclick = function() {
    document.getElementById("ploticons").style.display = "flex";
    document.getElementById("residentialicons").style.display = "none";
    document.getElementById("commercialicons").style.display = "none";
    document.getElementById("plots").style.color = "#fff";
    document.getElementById("plots").style.background = "#0984E3";
    document.getElementById("residential").style.color = "#000";
    document.getElementById("residential").style.background = "transparent";
    document.getElementById("commercial").style.color = "#000";
    document.getElementById("commercial").style.background = "transparent";
    
    }

    var typed = new Typed('.typed-words', {
        strings: ["Home.", "Flat.", " Apartment."],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 4000,
        startDelay: 1000,
        loop: true,
        showCursor: true
    });