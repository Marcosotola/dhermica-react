
import { NavLink } from 'react-router-dom'
import './Footer.css'
import Iface from '../Image/Iconos/Iface.png'
import Iinsta from '../Image/Iconos/Iinsta.png'
import Idhermica from '../Image/Iconos/Idhermica.png'

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
                    Cosmeatría y Cosmetología
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
        <div>

          <p>
            Av. Pablo Buitrago 6127, La Salle, Córdoba, Argentina Tel: 351 390-8626. Luciana Gonzalez.
          </p>
        </div>
        <div className='Fface'>
          <a href="https://es-la.facebook.com/espaciodhermica/">
            <img src={Iface} alt="" />
          </a>
          <a href="https://es-la.facebook.com/espaciodhermica/">
            <p> @dermica salud / bienestar</p>
          </a>
        </div>
        <div className='Finsta'>
          <a href="https://es-la.facebook.com/espaciodhermica/">
            <img src={Iinsta} alt="" />
          </a>
          <a href="https://www.instagram.com/dhermica.cor/">
            <p> @dermica.cor</p>
          </a>
        </div>
        <div className='Flogo'>
        <img src={Idhermica} alt="" />
        <h2>Dhermica</h2>
        </div>
      </div>
    </>
  )
}
export default Footer;