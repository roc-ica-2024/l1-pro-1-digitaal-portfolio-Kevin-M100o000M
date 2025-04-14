
//        const a1 = document.getElementById("active1");
//        const a2 = document.getElementById("active2");
// active2.onmouseout = function() {
//         a2.style.setProperty('--after-left','0%');
//         a2.style.setProperty('--after-width','50%');
// }

//         a2.style.setProperty('--after-left','0%');
//         a2.style.setProperty('--after-width','50%');
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

    removeVideo0.onmouseover = function() {
    removeVideo0.style.backgroundImage = "url(./images/js.png)";
    document.getElementById("hidden6").style.display = "none";
    document.getElementById("hidden7").style.display = "none";
    document.getElementById("hidden8").style.display = "none";

      if (!document.getElementById("gameVideo")) {
        const video = document.createElement("video");
        video.setAttribute("id", "gameVideo");
        video.setAttribute("width", "200");
        video.setAttribute("height", "200");
        video.setAttribute("controls", "");

        const source = document.createElement("source");
        source.setAttribute("src", "videos/js_game.mp4");
        source.setAttribute("type", "video/mp4");

        video.appendChild(source);

        // Assuming this goes back into removeVideo0
        removeVideo0.appendChild(video);
    }
    }

    removeVideo0.onmouseout = function() {
    removeVideo0.style.backgroundImage = "none";
    document.getElementById("hidden6").style.display = "";
    document.getElementById("hidden7").style.display = "";
    document.getElementById("hidden8").style.display = "";

        const video = document.getElementById("gameVideo");
        if (video) {
            video.remove();
        }

    }