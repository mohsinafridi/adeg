import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";

function App() {
  let items = ["Mohsin", "Azam", "Amal"];
  let title = "Item List";
  return (
    <>
      <div> <Header /> </div>
      <div id="Body"> <Body items={items} title={title} /> </div>
      <div> <Footer /> </div>
    </>
  );

}

export default App;

// https://www.youtube.com/watch?v=SqcY0GlETPk