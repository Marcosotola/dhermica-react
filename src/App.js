
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './App.css';
import Header from './Sections/Header/Header'
import Navbar from './Sections/Navbar/Navbar'
import Inicio from './Pages/Inicio/Inicio';
import Tratamientos from './Pages/Tratamientos/Tratamientos';
import Cosme from './Pages/Cosme/Cosme';
import Corpo from './Pages/Corpo/Corpo';
import Depi from './Pages/Depi/Depi';
import CejasPestañas from './Pages/CejasPestañas/CejasPestañas';
import ManosPies from './Pages/ManosPies/ManosPies';
import Productos from './Pages/Productos/Productos';
import Contacto from './Pages/Contacto/Contacto';
import Nosotros from './Pages/Nosotros/Nosotros'
import Footer from './Sections/Footer/Footer';
import Badge from './Components/Badge/Badge';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/tratamientos" component={Tratamientos} />
          <Route exact path="/cosme" component={Cosme} />
          <Route exact path="/corpo" component={Corpo} />
          <Route exact path="/depi" component={Depi} />
          <Route exact path="/cejasPestañas" component={CejasPestañas} />
          <Route exact path="/manosPies" component={ManosPies} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route exact path="/contacto" component={Contacto} />
        </Switch>
        <Footer />
        <Badge />
      </Router>
      <Badge />



    </div>
  );
}

export default App;