import "../CSS/index.css";
import { Button, ButtonGroup } from "react-bootstrap";

var marvel = [
  "https://images.hindustantimes.com/img/2021/11/09/1600x900/spider-man_no_way_home_1636451315678_1636451323010.png",
  "https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/12/spider-man-no-way-home-movie-review-001.jpg",
  "https://wallpapercave.com/uwp/uwp1826983.jpeg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spider-man-no-way-home-green-goblin-1637228334.jpg",
  "https://www.macleans.ca/wp-content/uploads/2021/06/BLACK-WIDOW-MARVEL-STUDIOS-WEINMAN-JUNE08-766x431.jpg",
  "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  "https://upload.wikimedia.org/wikipedia/he/c/cc/Captain_Marvel_Vol_10_1_Artgerm_Virgin_Variant.jpg",
  "https://www.nme.com/wp-content/uploads/2021/12/Marvels-Spider-Man-Remastered-696x442.jpg",
];

var buildings = [
  "https://assets.investsuite.com/about-us/jobs/jobs-frontend-dev-2.jpg",
  "https://assets.weforum.org/article/image/v2gQQH6Qq5EAJSemo1Yqie27aYBOHE4pSwA6jSkFHKg.jpg",
];

const clearAll = () => {
  let images_wrapper = document.querySelector(".images_wrapper");
  images_wrapper.style.opacity = 0;
  images_wrapper.innerHTML = ""
};

const addBuildings = () => {
  let images_wrapper = document.querySelector(".images_wrapper");
  if (images_wrapper.style.opacity == 1) images_wrapper.style.opacity = 0;

  if (images_wrapper) images_wrapper.innerHTML = "";
  if (images_wrapper.style.opacity == 0) images_wrapper.style.opacity = 1;

  buildings.forEach((img) => {
    let i = new Image();
    i.src = img;
    i.style =
      "width: 18vw; height: 30vw; object-fit: cover; object-position: 25% 0";
    images_wrapper.appendChild(i);
  });
};

const addImages = () => {
  let images_wrapper = document.querySelector(".images_wrapper");

  if (images_wrapper) images_wrapper.innerHTML = "";
  if (images_wrapper.style.opacity == 0) images_wrapper.style.opacity = 1;

  marvel.forEach((img) => {
    let i = new Image();
    i.src = img;
    i.style =
      "width: 18vw; height: 30vw; object-fit: cover; object-position: 25% 0";
    images_wrapper.appendChild(i);
  });
};

function Home() {
  return (
    <div>
      <ButtonGroup size="lg" className="mb-2">
        <Button onClick={addImages}>Top Searched</Button>
        <Button onClick={addBuildings}>More Luck Than Brain</Button>
        <Button onClick={clearAll}>Do It Yourself</Button>
      </ButtonGroup>
      <div className="images_wrapper"></div>
    </div>
  );
}

export default Home;
