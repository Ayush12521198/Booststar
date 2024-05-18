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
