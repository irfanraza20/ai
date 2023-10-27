function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
      x.className += " active";
    } else {
      x.className = "menu";
    }

    var x = document.getElementById("main");
    if (x.className === "main") {
      x.className += " main2";
    } else {
      x.className = "main";
    }
  }

 