const image = document.querySelector(".image");
const box = document.querySelector(".box");
const author = document.querySelector(".author");
const likeButton = document.querySelector(".button-like");
const countLike = document.querySelector(".count-like");

if (localStorage.getItem("likes") === null) {
  localStorage.setItem("likes", 0);
}
countLike.textContent = localStorage.getItem("likes");

likeButton.addEventListener("click", () => {
  let count = localStorage.getItem("likes");
  count++;
  countLike.textContent = count;
  localStorage.setItem("likes", count);
});

let random;
let yesterday;
let page = 1;
const today = new Date().getDate();

if (localStorage.getItem("today") === null) {
  localStorage.setItem("today", today);
}
if (Number.parseInt(localStorage.getItem("today")) === today) {
  loadMorePhotos();
} else if (
  Number.parseInt(localStorage.getItem("today")) < today ||
  Number.parseInt(localStorage.getItem("today")) > today
) {
  localStorage.setItem("yesterday", localStorage.getItem("today", today));
  loadMorePhotos();
}

async function fetchPhotos() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=1u0TZYzmUOam_296bcnyVwdgUDFKtGQUwPP3Veddo9g`
    );
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error("Ошибка при загрузке фотографий:", error);
    return [];
  }
}

async function loadMorePhotos() {
  const photos = await fetchPhotos();

  if (localStorage.getItem("randomCurrent") === null) {
    numberRandom(9);
  } else if (
    Number.parseInt(localStorage.getItem("today")) < today ||
    Number.parseInt(localStorage.getItem("today")) > today
  ) {
    numberRandom(9);
    localStorage.setItem("today", today);
    localStorage.setItem("likes", 0);
    countLike.textContent = localStorage.getItem("likes");
  }

  const i = localStorage.getItem("randomCurrent");
  if (photos.length > 0) {
    image.src = photos[i].urls.small;
    image.alt = photos[i].alt_description;
    author.textContent = photos[i].user.name;
  }
  page++;
}

function numberRandom(max) {
  random = Math.floor(Math.random() * max);
  localStorage.setItem("randomCurrent", random);
}
// localStorage.clear();
