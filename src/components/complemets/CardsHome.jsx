import { NavLink } from 'react-router-dom';
import '/src/css/Fonts.css';
import '/src/css/cards.css';

export const CardsHome = () => {
  const addShadow = (event) => {
    // Agrega la clase 'shadow' al elemento
    event.currentTarget.classList.add('shadow');
  };
  
  const removeShadow = (event) => {
    // Quita la clase 'shadow' del elemento
    event.currentTarget.classList.remove('shadow');
  };
  return (
    <>
    <div style={{backgroundImage: 'url("./src/assets/img/1.webp")', height: "75vh", backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition:"center"}} data-aos="fade-down">
      <div className="container-fluid d-flex flex-column justify-content-center h-100">
          <div className="row">
              <div className="col-md-1">
              </div>
              <div className="col-12 col-md-4 mt-5">
                  <p className='display-4'> 
                    <b>Redmi Pad SE</b>
                  </p>
                  <p className='lead fs-3'>
                    <b>Pantalla FHD + de 11" con protección ocular</b>
                  </p>
                  <button className='btn btn-dark'>Mas Informacion</button>
              </div>
          </div>
      </div>
    </div>

    <br />

    <div style={{backgroundImage: 'url("./src/assets/img/2.webp")', height: "75vh", backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition:"center"}} data-aos="fade-down">
      <div className="container-fluid d-flex flex-column justify-content-center h-100" >
          <div className="row">
              <div className="col-md-1">
              </div>
              <div className="col-12 col-md-4 mt-5">
                  <p className='display-4'> 
                    <b>Poco F5</b>
                  </p>
                  <p className='lead fs-3'>
                    <b>Snapdragon&reg; 7+ Gen 2</b>
                  </p>
                  <p className='lead fs-3'>
                    <b>AMOLED Dot Display de 120Hz</b>
                  </p>
                  <p className='lead fs-3'>
                    <b>De $7,299.00  <del style={{color: "grey"}}>$8,499.00</del> </b>
                  </p>
                  <div className="row">
                    <div className="col-4 text-end">
                      <button className='btn btn-dark'>Comprar ahora</button> 
                    </div>
                    <div className="col text-start">
                      <NavLink to="/" id="linksblack">
                        <h6 id="Redmi" className="mt-2">
                          Más información<img src="./src/assets/img/nextLink.png" />
                        </h6>
                      </NavLink>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    
    <br />
    
    <div className="container-fluid" >
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <div style={{backgroundImage: 'url("./src/assets/img/3.webp")', height: "75vh", backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition:"center"}} onMouseOver={addShadow} onMouseOut={removeShadow} >
            <div className="container">
              <div className="row">
                <div className="col text-center mt-5">
                  <p className='display-6'> 
                    <b style={{color: "white"}}>Redmi Pad SE</b>
                  </p>
                  <p className='lead fs-5'>
                    <b style={{color: "white"}}>Pantalla FHD + de 11" con protección ocular</b>
                  </p>
                  <div className="row">
                    <div className="col text-end">
                      <NavLink to="/" id="linksblack">
                        <h6 id="Redmi" className="mt-3" style={{color: "white"}}>
                          Comprar ahora<img src="./src/assets/img/nextCarrousel.png" />
                        </h6>
                      </NavLink>
                    </div>
                    <div className="col text-start">
                      <NavLink to="/" id="linksblack">
                        <h6 id="Redmi" className="mt-3" style={{color: "white"}}>
                          Más información<img src="./src/assets/img/nextCarrousel.png" />
                        </h6>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12">
          <div style={{backgroundImage: 'url("./src/assets/img/5.webp")', height: "75vh", backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition:"center"}} onMouseOver={addShadow} onMouseOut={removeShadow}>
            <div className="container">
              <div className="row">
                <div className="col text-center mt-5">
                  <p className='display-6'> 
                    <b>Redmi 12</b>
                  </p>
                  <p className='lead fs-5'>
                    <b>Gran Pantalla FHD+ a 90 Hz</b>
                  </p>
                  <div className="row">
                    <div className="col text-end">
                      <NavLink to="/" id="linksblack">
                        <h6 id="Redmi" className="mt-3" style={{color: "#ff8000"}}>
                          Comprar ahora<img src="./src/assets/img/nextOrange.png" />
                        </h6>
                      </NavLink>
                    </div>
                    <div className="col text-start">
                      <NavLink to="/" id="linksblack">
                        <h6 id="Redmi" className="mt-3">
                          Más información<img src="./src/assets/img/nextLink.png" />
                        </h6>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <div style={{backgroundImage: 'url("./src/assets/img/6.webp")', height: "75vh", backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition:"center"}} onMouseOver={addShadow} onMouseOut={removeShadow}>
            <div className="container">
              <div className="row">
                <div className="col text-center mt-5">
                  <p className='display-6'> 
                    <b>Descuentos de Otoño</b>
                  </p>
                  <p className='lead fs-5'>
                    <b>Del 28/09 al 08/10 del 2023</b>
                  </p>
                  <div className="row">
                    <div className="col text-center">
                      <NavLink to="/" id="linksblack">
                        <h6 id="Redmi" className="mt-3" style={{color: "#ff8000"}}>
                          Más información<img src="./src/assets/img/nextOrange.png" />
                        </h6>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-xs-12">
          <div style={{backgroundImage: 'url("./src/assets/img/7.webp")', height: "75vh", backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition:"center"}} onMouseOver={addShadow} onMouseOut={removeShadow}>
            <div className="container">
              <div className="row">
                <div className="col text-center mt-5">
                  <p className='display-6'> 
                    <b>Novedades del Mes</b>
                  </p>
                  <p className='lead fs-5'>
                    <b>Consigue los últimos productos de xiaomi</b>
                  </p>
                  <div className="row">
                    <div className="col text-center">
                      <NavLink to="/" id="linksblack">
                        <h6 id="Redmi" className="mt-3" style={{color: "#ff8000"}}>
                          Más información<img src="./src/assets/img/nextOrange.png" />
                        </h6>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-xs-12">
          <div style={{backgroundImage: 'url("./src/assets/img/9.png")', height: "75vh", backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition:"center"}} onMouseOver={addShadow} onMouseOut={removeShadow}>
            <div className="container">
              <div className="row">
                <div className="col text-center mt-5">
                  <p className='display-6'> 
                    <b>Mi Door and Window Sensor 2</b>
                  </p>
                  <p className='lead fs-5'>
                    <b>SOLO $199 pesos</b>
                  </p>
                  <div className="row">
                    <div className="col text-center">
                      <NavLink to="/" id="linksblack">
                        <h6 id="Redmi" className="mt-3" style={{color: "#ff8000"}}>
                          Más información<img src="./src/assets/img/nextOrange.png" />
                        </h6>
                      </NavLink>
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
  )
}
