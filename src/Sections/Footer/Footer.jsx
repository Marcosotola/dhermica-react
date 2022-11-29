
import { NavLink } from 'react-router-dom'
import './Footer.css'
import Iface from '../../Components/Image/Iconos/Iface.png';
import Iinsta from '../../Components/Image/Iconos/Iinsta.png';
import Iubi from '../../Components/Image/Iconos/Iubi.png';
import Idhermica from '../../Components/Image/Iconos/Idhermica.png';



export const Footer = () => {
  return (
    <>
      <div className='footer'>

        <div className='menuFooter'>
          <ul className='menuHorizontal'>
            <li>
              <NavLink exact to="/" className='Finicio' activeClassName='activate'>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Tratamientos" className='Ftrata' activeClassName='activate'>
                Tratamientos
              </NavLink>
              <ul className='menuVertical'>

                <li>
                  <NavLink exact to="/Cosme" className='Fcosme' activeClassName='activate'>
                    Faciales
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/Corpo" className='Fcorpo' activeClassName='activate'>
                    Corporales
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/ManosPies" className='FmanosPies' activeClassName='activate'>
                    Manos y Pies
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/CejasPestañas" className='FcejasPestañas' activeClassName='activate'>
                    Cejas y Pestañas
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/Depi" className='Fdepi' activeClassName='activate'>
                    Depilación
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink exact to="/Productos" className='Fproductos' activeClassName='activate'>
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Contacto" className='Fcontacto' activeClassName='activate'>
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='direccion'>
          <p>
            Av. Pablo Buitrago 6127, La Salle, Córdoba, Argentina Tel: 351 390-8626. Luciana Gonzalez.
          </p>
        </div>
        <div className='social'>
          <div className='Fface'>
            <a href="https://es-la.facebook.com/espaciodhermica/">
              <img src={Iface} alt="logo Facebook" />
            </a>
            <a href="https://es-la.facebook.com/espaciodhermica/">
              <p> @dermica salud / bienestar</p>
            </a>
          </div>
          <div className='Finsta'>
            <a href="https://es-la.facebook.com/espaciodhermica/">
              <img src={Iinsta} alt="Logo Instagram" />
            </a>
            <a href="https://www.instagram.com/dhermica.cor/">
              <p> @dermica.cor</p>
            </a>
          </div>
          <div className='Fubi'>
            <a href="https://es-la.facebook.com/espaciodhermica/">
              <img src={Iubi} alt="logo map" />
            </a>
            <a href="https://www.google.com.ar/maps/place/Dhermica+Salud%2FBienestar/@-31.3468433,-64.2822914,15z/data=!3m1!4b1!4m5!3m4!1s0x94329e9df2d1ee09:0xd6f21b47ba524ac5!8m2!3d-31.3468626!4d-64.2735449">
              <p> Ubicanos </p>
            </a>
          </div>
        </div>
        <div className='Flogo'>
          <img src={Idhermica} alt="Logo Dhermica" />
          <h2>Dhermica</h2>
        </div>
      </div>
    </>
  )
}
export default Footer;