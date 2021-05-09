// Importer les composants
import "./components/Section";

// import Film2 from "./components/Film2";

// Importer des fichiers css
import "./App.css";
import "./index.css";

// // importer un fichier json
import movies from "./data.json";

// importer une image
import Netflix from "./assets/img/netflix.jpg";
import Section from "./components/Section";

console.log(movies);

const App = () => {
  return (
    <div className="container">
      <div>
        <img className="logo" src={Netflix} alt="netflix logo" />
      </div>
      {movies.map((elem, index) => {
        return (
          <Section key={index} category={elem.category} images={elem.images} />
        );
      })}
    </div>
  );
};
export default App;
