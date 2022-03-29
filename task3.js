var count = 0;

var blue = false;
var red = false;

var post_numbers = 0;

function counter() {

    count = count + 1;

    var box = document.getElementById("mcount");

    box.innerText = count;

    console.log("This worked");

}

function post() {

    var posts = document.getElementById("posts");
    var text = document.getElementById("te").value;

    var number_of_posts = document.getElementById("posts-amount").value;

    console.log(text.value);

    for (var i = 0; i < number_of_posts; i ++) {
      var date = new Date();

      var t = document.createElement('P');
      t.classList.add('post-time');
      t.innerText = date;
      posts.appendChild(t);
  
      var p;

      if (document.getElementById("red_color").checked) {
        p = document.createElement('P');
        p.classList.add("post-content");
        p.classList.add("red");
        p.innerText = text;
        posts.appendChild(p);
      } else if (document.getElementById("blue_color").checked) {
        p = document.createElement('P');
        p.classList.add("post-content");
        p.classList.add("blue");
        p.innerText = text;
        posts.appendChild(p);
      } else {
        p = document.createElement('P');
        p.classList.add("post-content");
        p.innerText = text;
        posts.appendChild(p);
      }
    }

}

function hide1() {

    var x = document.getElementById("main");
    var y = document.getElementById("menu");

    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }

}

function hide2() {

    var x = document.getElementById("menu");
    var y = document.getElementById("main");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }

}

function red_color() {

  red = true;
  blue = false;

}

function blue_color() {
  
  red = false;
  blue = true;

}

function bgcolor() {

  var background = document.getElementById("change_background");
  var bg_color = document.getElementById("background_color");

  bg_color.style.backgroundColor = background.value;

}