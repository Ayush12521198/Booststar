//  Logic for like btn start
const likeIcons = document.querySelectorAll(".like");
var likeNum = 0;

function likeOrNot(event) {
  const clickedItem = event.target;
  if (likeNum == 0) {
    clickedItem.style.color = "red";
    likeNum = 1;
  } else if (likeNum == 1) {
    clickedItem.style.color = "white";
    likeNum = 0;
  }
}

likeIcons.forEach((likeicon) => {
  likeicon.addEventListener("click", likeOrNot);
});
// Logic for like btn ends

// Logic for search btn display and hidden start 
const srchBtn = document.querySelector("#leftSrchBtn");
const srchInp = document.querySelector(".search");

var srchBtnNum = 0;

function disSrch(){
  if (srchBtnNum == 0){
srchInp.style.visibility = "visible";
srchBtnNum = 1;
  }else if (srchBtnNum == 1){
    srchInp.style.visibility = "hidden";
    srchBtnNum = 0;
  }
}

srchBtn.addEventListener("click", disSrch);
// Logic for search brn display and hidden end