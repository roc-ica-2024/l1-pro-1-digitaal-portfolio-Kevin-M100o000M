       const a1 = document.getElementById("active1");
       const a2 = document.getElementById("active2");
    active1.onmouseover = function() {
// document.getElementById("active1").style.color = "blue" ;
        a1.style.setProperty('--after-left','0%');
        a1.style.setProperty('--after-width','50%');
        a2.style.setProperty('--after-left','100%');
        // a2.style.color = "blue";
    }
active1.onmouseout = function() {
// document.getElementById("active1").style.color = "" ;
        a1.style.setProperty('--after-left','50%');
        a2.style.setProperty('--after-left','100%');
        // a2.style.color = "";
    }
active2.onmouseover = function() {
// document.getElementById("active1").style.color = "red" ;
        a2.style.setProperty('--after-left','0%');
        a2.style.setProperty('--after-width','50%');
        a1.style.setProperty('--after-left','0%');
        a1.style.setProperty('--after-width','0%');
        // a2.style.color = "red";
        // a1.style.color = "red";
    }
active2.onmouseout = function() {
// document.getElementById("active1").style.color = "" ;
        a2.style.setProperty('--after-left','100%');
        a2.style.setProperty('--after-width','0%');
        a1.style.setProperty('--after-left','50%');
        a1.style.setProperty('--after-width','50%');
        // a2.style.color = "";
        // a1.style.color = "";
    }

          if (window.location.pathname == '/projecten.html') {
        a1.style.setProperty('--transtion','0s');
        a2.style.setProperty('--transtion','0s');
        a1.style.setProperty('--after-left','0%');
        a1.style.setProperty('--after-width','0%');
        a2.style.setProperty('--after-left','0%');
        a2.style.setProperty('--after-width','50%');
        active2.onmouseover = function() {
            if(a2){
        a2.style.setProperty('--transtion','700ms');
        a2.style.setProperty('--after-left','50%');
        a2.style.setProperty('--after-width','50%');
        a1.style.setProperty('--after-left','0%');
        a1.style.setProperty('--after-width','0%');
            }
        }
        active2.onmouseout = function() {
            if(a2){
        a2.style.setProperty('--after-left','0%');
        a2.style.setProperty('--after-width','50%');
        a1.style.setProperty('--after-left','0%');
        a1.style.setProperty('--after-width','0%');
            }
        active1.onmouseover = function() {
            if(a1){
        a1.style.setProperty('--transtion','700ms');
        a1.style.setProperty('--after-left','50%');
        a1.style.setProperty('--after-width','50%');
        a2.style.setProperty('--after-left','100%');
        a2.style.setProperty('--after-width','0%');
            }
        }
        active1.onmouseout = function() {
            if(a1){
        a1.style.setProperty('--after-left','0%');
        a1.style.setProperty('--after-width','0%');
        a2.style.setProperty('--after-left','0%');
        a2.style.setProperty('--after-width','50%');
            }
        }
    }
}
