//props?
function ImageList({ images }) {
  const imagesHTML = images.map((image, index) => (
    <li key={index}>
      <img src={image.URL} alt={image.caption} />
      <p>{image.caption}</p>
    </li>
  ));

  return <ul>{imagesHTML}</ul>;
}

export default ImageList;
