import { useState } from "react";
//import ImageBoard from "./imageboard";

function ImageForm(addImage) {
  const [url, setUrl] = useState("");
  const [caption, setCaption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newImage = {
      url: url, //retrieves value of url
      caption: caption, //will give you the value of caption
    };
    addImage(newImage);
  };

  return (
    <form>
      <label htmlFor="url">URL</label>
      <input
        type="url"
        name="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <label htmlFor="caption">Caption</label>
      <input
        type="text"
        name="caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button type="submit">Save Image</button>
    </form>
  );
}

export default ImageForm;
