import { NavLink } from "react-router-dom";
import "/src/css/footer.css";

export const Footer = () => {
  return (
    <>
      <div className="container-fluid mt-4" id="footer">
        <div className="row">
          <div className="col">
            <div className="card mt-4" id="footer">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3 col-xs-12">
                    <div className="card" id="footer">
                      <div className="card-body" >
                      <p className='fw-semibold'>Compra y aprende</p>
                      <p><NavLink to='/' id='links'>Google One</NavLink></p>
                      <p><NavLink to='/' id='links'>YouTube Premium</NavLink></p>
                      <p><NavLink to='/' id='links'>Redmi 12C</NavLink></p>
                      <p><NavLink to='/' id='links'>Redmi Note 11 Pro 5G</NavLink></p>
                      <p><NavLink to='/' id='links'>Xiaomi Smart Band 7 Pro</NavLink></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-12">
                    <div className="card" id="footer">
                        <div className="card-body">
                        <p className='fw-semibold'>Soporte</p>
                        <p><NavLink to='/' id='links'>Dónde comprar</NavLink></p>
                        <p><NavLink to='/' id='links'>Centro de reparación local</NavLink></p>
                        <p><NavLink to='/' id='links'>Garantía</NavLink></p>
                        <p><NavLink to='/' id='links'>Preguntas sobre envío</NavLink></p>
                        <p><NavLink to='/' id='links'>Guía de usuario</NavLink></p>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-3 col-xs-12">
                    <div className="card" id="footer">
                      <div className="card-body">
                      <p className='fw-semibold'>Acerca de nosotros</p>
                      <p><NavLink to='/' id='links'>Xiaomi</NavLink></p>
                      <p><NavLink to='/' id='links'>Equipo directivo</NavLink></p>
                      <p><NavLink to='/' id='links'>Política de privacidad</NavLink></p>
                      <p><NavLink to='/' id='links'>Terminos y condiciones</NavLink></p>
                      <p><NavLink to='/' id='links'>Política de cookies</NavLink></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-12">
                  <div className="card" id="footer">
                      <div className="card-body">
                      <p className='fw-semibold'>Sigue Mi</p>
                      <NavLink>
                        <img src="./src/assets/img/facebook.svg"  />
                      </NavLink>
                      <NavLink>
                        <img src="./src/assets/img/instagram.svg" className="ms-2" />
                      </NavLink>
                      <NavLink>
                        <img src="./src/assets/img/twitterx.svg" className="ms-2" />
                      </NavLink>
                      <NavLink>
                        <img src="./src/assets/img/youtube.svg" className="ms-2" />
                      </NavLink>
                      <NavLink>
                        <img src="./src/assets/img/xiaomi_comunity.svg" className="ms-2" />
                      </NavLink>
                      <p className='fw-semibold'>Contáctanos</p>
                      <div className="input-group mb-3">
                        <input type="text" className="form-control bg-dark" data-bs-theme="dark" placeholder="Introduce tu dirección de correo electronico" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                          <button className="btn btn-outline-secondary" type="button"><img src="/src/assets/img/next.png" /></button>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-5 col-xs-12">
                  <div className="card" id="footer">
                    <div className="card-body">
                      <p>Copyright © 2010 - 2023 Xiaomi. Todos los derechos reservados</p>
                    </div>
                  </div>
                  </div>
                  <div className="col-md-4 col-xs-12">
                  <div className="card" id="footer">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                        <NavLink to='/' id='links'>Política de cookies</NavLink>
                        </div>
                        <div className="col">
                        <NavLink to='/' id='links'>Mapa del sitio</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="col-md-3 col-xs-12">
                  <div className="card" id="footer">
                    <div className="card-body text-end">
                    <NavLink to='/' id='links'>Mexico / México <img src="./src/assets/img/globo.png" /> </NavLink>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};
