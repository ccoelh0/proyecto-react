import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//COMPONENTES
import NavBar from "./componentes/Nav/NavBar";
import { PresentacionDelIndex } from "./componentes/IndexPresentacion/PresentacionDelIndex";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemListDetails/ItemDetailContainer";
import CarritoContainer from "./componentes/CarritoDeProductos/CarritoContainer";
import Footer from "./componentes/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <PresentacionDelIndex />
          <ItemListContainer />
        </Route>
        <Route exact path="/category">
          <ItemListContainer />
        </Route>
        <Route exact path="/category/:categoryId">
          <ItemListContainer />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
        <Route exact path="/cart">
          <CarritoContainer />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
