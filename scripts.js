function NavToggle() {
  var nav = document.getElementById('navlist');
  if(nav.style.display == "none") {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
}

function NavFix() {
  //Dunno why but in order for the buttons to show up when sizing to desktop we must do this
  //I love webdev.
  if (window.innerWidth >= 600) {
    document.getElementById('navlist').style.display = "flex";
    //This opens the mobile selector if present.
  } else {
    document.getElementById('navlist').style.display = "none";
    //Hide the jank. Gotta love hardcoding things to run that should Just Work!!
  }
}

window.onresize = NavFix;
document.addEventListener('DOMContentLoaded', NavFix); //Makes the nav button functional way quicker, for some reason.
