import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import background from "./images/background.png";
import background2 from "./images/background2.jpeg";


function App() {
  return (
      // <div style={{
      //     height: 5000,
      //     backgroundImage: `url(${background2})`,
      //     backgroundSize: 100,
      //     backgroundRepeat:"repeat",
      // }}>
    <div style={{
        height: 5000,
        backgroundImage: `url(${background})`,
    }}>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
