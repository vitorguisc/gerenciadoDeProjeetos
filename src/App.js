import { BrowserRouter as Router, Routes, Route, Container, Link } from "react-router-dom";
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

function App() {
  return (
    <Container>
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newprojeect">Novo Projeto</Link>
      </div>
      
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/company">
          <Company />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/newproject">
          <NewProject />
        </Route>
      </Routes>
     
      <p>Footer</p>
    </Router>
    </Container>
  );
}

export default App;
