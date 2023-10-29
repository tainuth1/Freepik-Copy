// var btnClick1 = document.getElementById("btn1");
// var cardShow1 = document.getElementById("card-show1");

// btnClick1.addEventListener("click", function(){
//     event.stopPropagation();
//     cardShow1.style.display = cardShow1.style.display === "block" ? "none" : "block";
// });
// document.addEventListener("click", function() {
//     cardShow1.style.display = "none";
// });


// var btnClick2 = document.getElementById("btn2");
// var cardShow2 = document.getElementById("card-show2");

// btnClick2.addEventListener("click", function(event) {
//     event.stopPropagation();
//     cardShow2.style.display = cardShow2.style.display === "block" ? "none" : "block";
// });
// document.addEventListener("click", function() {
//     cardShow2.style.display = "none";
// });
var btnClick1 = document.getElementById("btn1");
var cardShow1 = document.getElementById("card-show1");
var btnClick2 = document.getElementById("btn2");
var cardShow2 = document.getElementById("card-show2");

btnClick1.addEventListener("click", function(event) {
    event.stopPropagation();
    cardShow1.style.display = "block";
    cardShow2.style.display = "none";
});

btnClick2.addEventListener("click", function(event) {
    event.stopPropagation();
    cardShow2.style.display = "block";
    cardShow1.style.display = "none";
});

document.addEventListener("click", function() {
    cardShow1.style.display = "none";
    cardShow2.style.display = "none";
});

// var proBtn = document.getElementById("profile");
// var proCard = document.getElementById("profile-card");

// proBtn.addEventListener("click", function(event){//add event to funtion
//     proCard.style.display = proCard.style.display === "block" ? "none" : "block";
//     event.stopPropagation();
// });
// document.addEventListener("click", function(){
//     proCard.style.display = "none";
// });
var proBtn = document.getElementById("profile");
var proCard = document.getElementById("profile-card");

proBtn.addEventListener("click", function(event) {
    proCard.style.display = proCard.style.display === "block" ? "none" : "block";
    event.stopPropagation();
});

proCard.addEventListener("click", function(event) {
    event.stopPropagation();
});

document.addEventListener("click", function() {
    proCard.style.display = "none";
});

var image = document.getElementById("img-pro");
var image2 = document.getElementById("img-pro2");
var input = document.getElementById("file");
var imageURL = URL.createObjectURL

input.addEventListener("change", (e) => {
    var imageURL = URL.createObjectURL(e.target.files[0]);
    image.src = imageURL;
    image2.src = imageURL;
});

var choose = document.getElementById("choose");
var chooseShow = document.getElementById("choose-show");

choose.addEventListener("click", function(event){
    chooseShow.style.display = chooseShow.style.display === "block" ? "none" : "block";
    event.stopPropagation();
});

chooseShow.addEventListener("click", function(event){
    event.stopPropagation();
});

document.addEventListener("click", function(){
    chooseShow.style.display = "none";
});


const imageOne = document.getElementById("hover-bg1");
const imageTwo = document.getElementById("hover-bg2");
const imageThree = document.getElementById("hover-bg3");
const imageFour = document.getElementById("hover-bg4");
const imageFive = document.getElementById("hover-bg5");
var backContain = document.querySelector(".top-container");

imageOne.addEventListener("mouseover", function(){
    backContain.style.backgroundImage = `url(${imageOne.src})`;
});
imageTwo.addEventListener("mouseover", function(){
    backContain.style.backgroundImage = `url(${imageTwo.src})`;
});
imageThree.addEventListener("mouseover", function(){
    backContain.style.backgroundImage = `url(${imageThree.src})`;
});
imageFour.addEventListener("mouseover", function(){
    backContain.style.backgroundImage = `url(${imageFour.src})`;
});
imageFive.addEventListener("mouseover", function(){
    backContain.style.backgroundImage = `url(${imageFive.src})`;
});

backContain.addEventListener("mouseout", function(){
    backContain.style.backgroundImage = "none";
});