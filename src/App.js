import logo from './logo.svg';
import './App.css';
import ImageForm from './components/form';
import ImageList from './components/list';



function ImageBoard{
  return(
    <div>
      <ImageForm />
      <ImageList />
    </div>
  )
}

export default ImageBoard;