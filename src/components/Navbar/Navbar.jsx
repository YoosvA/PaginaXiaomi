import { NavLink } from "react-router-dom";
import { useNavbar } from "../hooks/Navbar";
import '/src/css/Fonts.css';
import '/src/css/navbar.css';

export const Navbar = () => {

  const {
    isHovered,
    showCard,
    menuRef,
    handleMouseEnter,
    handleMouseLeave,
    handleCardClick,
    handleNavLinkClick,
  } = useNavbar();

  return (
    <>
      <nav className="navbar navbar-expand-lg"  ref={menuRef} id="colorNav">
        <div className="container-fluid">
          {/* Logo de Xiaomi */}
          <NavLink className="navbar-brand ms-4" to='/' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleNavLinkClick}>
            <img src={isHovered ? './src/assets/img/house.svg' : './src/assets/img/xiaomi.svg'} alt="Logo" />
          </NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ms-4">
                <NavLink className="nav-link active" aria-current="page" to='/Tienda' onClick={handleNavLinkClick} >Tienda</NavLink>
              </li>

              {/* Agregar un enlace para mostrar/ocultar la tarjeta */}
              <li className="nav-item ms-4">
                <a className="nav-link active" onClick={handleCardClick} style={{ cursor: "pointer" }} >
                  Smartphone
                </a>
              </li>
              <li className="nav-item ms-4">
                <NavLink className="nav-link active" aria-current="page" to='/HogarInteligente' onClick={handleNavLinkClick}>Hogar Inteligente</NavLink>
              </li>
              <li className="nav-item ms-4">
                <NavLink className="nav-link active" aria-current="page" to='#' onClick={handleNavLinkClick}>Estilo de vida</NavLink>
              </li>
            </ul>
            
            <ul className="navbar-nav ms-auto"> {/* Utiliza ms-auto en el contenedor ul para mover todo el menú a la derecha */}     
              {/* La opción de Soporte está al final del nav */}
              <li className="nav-item ms-4">
                <NavLink className="nav-link active" to='#' onClick={handleNavLinkClick}>Soporte</NavLink>
              </li>
              <li className="nav-item ms-4">
                <NavLink  to='#' onClick={handleNavLinkClick}>
                  <img src="./src/assets/img/navIcons/search.svg" className="mt-1" />
                </NavLink>
              </li>
              <li className="nav-item ms-4">
                <NavLink  to='#' onClick={handleNavLinkClick}>
                  <img src="./src/assets/img/navIcons/carrito.png" className="mt-1" />
                </NavLink>
              </li>
              <li className="nav-item ms-4">
                <NavLink  to='#' onClick={handleNavLinkClick}>
                  <img src="./src/assets/img/navIcons/user.png" className="mt-1" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Card */}
      {showCard && (
        <div className="container-fluid" style={{backgroundColor:"white"}}>
          <div className="row">
            <div className="col">
            <div className="card border-0" style={{ width: "100%", margin: "20px auto", backgroundColor:"white" }} >
                  <div className="card-body" style={{backgroundColor: "white"}}>
                    <div className="row">
                      <div className="col">
                      <NavLink className="nav-link active" aria-current="page" to='/Redmi'><h4 id="Redmi" className="text-end">Redmi</h4></NavLink>
                      </div>
                      <div className="col">
                      <NavLink className="nav-link active" aria-current="page" to='/Poco'><h4 id="Poco" className="text-start">POCO</h4></NavLink>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
