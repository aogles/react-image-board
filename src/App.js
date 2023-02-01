import logo from "./logo.svg";
import "./App.css";
import ImageForm from "./components/form";
import ImageList from "./components/list";
import { useState } from "react";

const INITIAL_IMAGES = [
  {
    id: 1,
    image: "https://unsplash.com/photos/t69fIZXxrwQ",
    caption: "Terracotta Stairwell",
  },
  {
    id: 2,
    image: "https://unsplash.com/photos/W5dsm9n6e3g",
    caption: "Earth tone interioir design",
  },
  { id: 3, image: "https://unsplash.com/photos/BlIhVfXbi9s", caption: "desk" },
];

function ImageBoard() {
  const [images, setImages] = useState(INITIAL_IMAGES);
  const imagesHTML = images.map((image) => (
    <Image key={image.id} image={image} />
  ));

  return (
    <div className="image-board-list">
      <div class="card" style="width: 18rem;">
        <img src={images} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class={caption}></p>
        </div>
      </div>
    </div>
  );
}

export default ImageBoard;
