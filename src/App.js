import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import About from "./About";
import "./App.css";
import Done from "./Done";
import Nav from "./Nav";
import Shop from "./Shop";



function App() {
  // Switch allows only one page/component to render at one time
  // Router goes through the route list and match the 1st one that matches
  // Adding exact allows only exact path to be rendered
  return (
    <BrowserRouter basename="/hello">
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/done/:id/:uid" exact component={Done}/>
          <Route path="/" render={() => <div>404 not found</div>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const Home = (props) => {
  const history = useHistory()
  return (
      <div>
        <h1>Home</h1>
        <button onClick={() => {
          history.push('/about')
        }}>
          Go to about
        </button>
      </div>
    );
  
}

export default App;
