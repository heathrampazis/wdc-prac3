var count = 0;

function myFunction() {
    count = count + 1;
    
    var box = document.getElementById("mcount");

    box.innerText = count;

    console.log("This worked");
}