function ImageForm({ addImage }) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const todo = {
      id: nanoid(),
      name,
    };

    addImage(image);
    setName("");
  };

  const handleInput = (event) => {
    setName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Add new Image
        </label>
      </div>
      <button type="submit">save</button>
    </form>
  );
}
export default ImageForm;
