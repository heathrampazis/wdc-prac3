var count = 0;

function counter() {
    count = count + 1;

    var box = document.getElementById("mcount");

    box.innerText = count;

    console.log("This worked");
}

function post() {

    var posts = document.getElementById("posts");
    var text = document.getElementById("te").value;
    
    //var post = document.getElementsByClassName("post_content");
    //var time = document.getElementsByClassName("post_time");
    
    //var text = document.getElementsByTagName("textarea");

    var date = new Date();

    var t = document.createElement('P');
    t.classList.add('post-time');
    t.innerText = date;
    posts.appendChild(t);

    console.log(text.value);

    var p = document.createElement('P');
    p.classList.add("post-content");
    p.innerText = text;
    posts.appendChild(p);


    //var test = document.createElement(time);

    //time = date;

    //posts.innerText = test + "\n" + post.value;
    //posts.innerText = text.innerText;

}