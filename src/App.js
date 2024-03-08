import logo from './logo.svg';
import './App.css';
import data from './components/data.json';
import Card from './components/Card.js';

function App() {
  return (

    <div className="App">
      {
        data.map((ele, index)=>{
          return ( <Card
            backgroundImg = {ele.backgroundImg}
            imgUrl={ele.imgUrl} 
            movieName={ele.movieName} 
            realeaseYear = {ele.releaseYear}
            duration = {ele.duration}
            genres = {ele.genres}
            description = {ele.description}
            key={index}
          />
          )
        }) 
      }
    </div>
  );
}

export default App;
