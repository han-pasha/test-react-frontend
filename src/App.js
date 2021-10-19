import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Homepage from "./components/Homepage";
import CreateStatus from "./components/CreateStatus";

function App() {
  return (
    <div>
      <Router>
        <Container>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/add-status/:id" component={CreateStatus} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
