var count = 0;

var blue = false;
var red = false;

var post_numbers = 0;

function counter() {

    var box = document.getElementById("mcount");

    count = count + 1;

    box.innerText = count;

    console.log("This worked");

}

function post() {

    var t;
    var p;
  
    var posts = document.getElementById("posts");
    var text = document.getElementById("text").value;

    var number_of_posts = document.getElementById("posts_amount").value;

    console.log(text.value);

    for (var i = 0; i < number_of_posts; i ++) {
      
      var date_variable = new Date();

      t = document.createElement('P');
      t.classList.add('post-time');
      t.innerText = date_variable;
      posts.appendChild(t);
  

      p = document.createElement('P');
      p.classList.add("post-content");
      p.innerText = text;

      if (document.getElementById("red_color").checked) {
        p.classList.add("red");
      } else if (document.getElementById("blue_color").checked) {
        p.classList.add("blue");
      }

      if (document.getElementById("bold_text").checked) {
        p.classList.add("bold");
      } 
      
      if (document.getElementById("italic_text").checked) {
        p.classList.add("italic");
      }

      posts.appendChild(p);

      post_numbers = post_numbers + number_of_posts;

      // increase post numbers and slider reduces number of posts avaliable to be seen
      // if number of posts seen is smaller than the current number of posts made hide posts

    }

}

function hide1() {

    var main_items = document.getElementById("main");
    var menu_items = document.getElementById("menu");

    if (main_items.style.display === "none") {
      main_items.style.display = "block";
      menu_items.style.display = "none";
    } else {
      main_items.style.display = "none";
      menu_items.style.display = "block";
    }

}

function hide2() {

    var main_items = document.getElementById("main");
    var menu_items = document.getElementById("menu");

    if (menu_items.style.display === "none") {
      menu_items.style.display = "block";
      main_items.style.display = "none";
    } else {
      menu_items.style.display = "none";
      main_items.style.display = "block";
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