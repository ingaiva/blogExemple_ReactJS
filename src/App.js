import "./App.css";
import Menu from "./menu/Menu";
import BlogContainer from "./page/BlogContainer";
import Footer from "./footer/Footer";

function App() { 

  return (
    <div className="App">
      <header className="_App-header">
        <Menu />
      </header>
      <BlogContainer/>     
      <Footer/>
    </div>
  );
}

export default App;
