import Card from "react-bootstrap/Card";

//props?
function ImageList({ images }) {
  const imagesHTML = images.map((image, index) => (
    <Card key={index} style={{ width: "18rem" }}>
      <Card.Img src={image.URL} alt={image.caption} />
      <Card.Body>
        <Card.Title>{image.caption}</Card.Title>
      </Card.Body>
    </Card>
  ));

  return <ul>{imagesHTML}</ul>;
}

export default ImageList;
