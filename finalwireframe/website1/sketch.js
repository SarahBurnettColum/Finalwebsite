$("button").click(function(){
  $("div").animate({left: '250px'});
});

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

btn.onclick = function() {
  modal.style.display = "none";
}