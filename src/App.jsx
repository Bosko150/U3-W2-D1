import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
// import SingleBook from "./components/SingleBook";
import horror from "./books/horror.json";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App bg-secondary">
      <MyNav brandName="EpiBook" />
      <Welcome />
      {/* <AllTheBooks /> */}
      {/* <SingleBook book={horror[0]} /> */}
      <BookList bookArray={horror} />
      <MyFooter />
    </div>
  );
}

export default App;
