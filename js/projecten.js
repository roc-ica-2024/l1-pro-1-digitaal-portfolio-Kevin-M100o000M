console.log("re");

    // const changeBackground = document.getElementById("changeBackground");
    changeBackground0.onmouseover = function() {
    changeBackground0.style.backgroundImage = "url(./images/Eerste_website.png)";
    document.getElementById("hidden0").style.display = "none";
    document.getElementById("hidden1").style.display = "none";
    document.getElementById("hidden2").style.display = "none";
    // changeBackground0.style.height = auto;
    }

    changeBackground0.onmouseout = function() {
        changeBackground0.style.backgroundImage = "none";
    document.getElementById("hidden0").style.display = "";
    document.getElementById("hidden1").style.display = "";
    document.getElementById("hidden2").style.display = "";
    }

    changeBackground1.onmouseover = function() {
    changeBackground1.style.backgroundImage = "url(./images/goede_doel.png)";
    document.getElementById("hidden3").style.display = "none";
    document.getElementById("hidden4").style.display = "none";
    document.getElementById("hidden5").style.display = "none";
    }

    changeBackground1.onmouseout = function() {
        changeBackground1.style.backgroundImage = "none";
    document.getElementById("hidden3").style.display = "";
    document.getElementById("hidden4").style.display = "";
    document.getElementById("hidden5").style.display = "";
    }

console.log("re");

var background = document.getElementsByClassName("project:hover")