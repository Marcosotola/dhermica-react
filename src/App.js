
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './App.css';
import Header from './Sections/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Inicio from './Components/Inicio/Inicio';
import Tratamientos from './Components/Tratamientos/Tratamientos';
import Productos from './Components/Productos/Productos';
import Contacto from './Components/Contacto/Contacto';
import Footer from './Components/Footer/Footer';










function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/tratamientos" component={Tratamientos} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/contacto" component={Contacto} />
        </Switch>
        <Footer />
      </Router>




    </div>
  );
}

export default App;