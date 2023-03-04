import { useState } from "react";
import ImageForm from "./form";
import ImageList from "./list";
const INITIAL_IMAGES = [
  {
    URL: "https://media.architecturaldigest.com/photos/5de7f38d34c35b000880a9a2/master/w_1600%2Cc_limit/1.%2520La%2520Gare%2520ParisHDlagare-163-Modifier%2520cre%25CC%2581dits%2520JEROME%2520GALLAND.jpg",
    caption: "Terracotta Stairwell",
  },
  {
    URL: "http://cdn.home-designing.com/wp-content/uploads/2019/04/terracotta-interior.jpg",
    caption: "Earth tone interior design ideas",
  },
  {
    URL: "https://cdn.shopify.com/s/files/1/0049/0301/0402/files/spanishtile_large.jpg?v=1570211907",
    caption: "Terracotta sitting room",
  },
];

function ImageBoard() {
  const [images, setImages] = useState(INITIAL_IMAGES);
  return (
    <div>
      <ImageForm setImages={setImages} images={images} />
      <ImageList images={images} />
    </div>
  );
}

export default ImageBoard;
