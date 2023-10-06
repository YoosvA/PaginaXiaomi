import { NavLink } from "react-router-dom"

export const CarrouselTienda = () => {
  return (
    <>
    <div id="carouselExampleCaptions" className="carousel slide" data-aos="fade-down"> 
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div style={{backgroundImage: 'url("/src/assets/img/10.webp")', height: "75vh", backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition:"center"}}>
            <div className="container-fluid d-flex flex-column justify-content-center h-100">
              <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-12 col-md-4 mt-5">
                  <p className='display-4'> 
                    <b>POCO X5 Pro 5G</b>
                  </p>
                  <p className='lead fs-3'>
                    <b>No te perrdas la oferta por tiempo limitado , hasta el 08/10</b>
                  </p>
                  <p className='lead fs-3'>
                    <b>De $4,799.00  <del style={{color: "grey"}}>$6,499.00</del> </b>
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
        </div>
        <div className="carousel-item">
          <div style={{backgroundImage: 'url("./src/assets/img/9.webp")', height: "75vh", backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition:"center"}}>
              <div className="container-fluid d-flex flex-column justify-content-center h-100">
                <div className="row">
                  <div className="col-md-1">
                  </div>
                  <div className="col-12 col-md-4 mt-5">
                  <p className='lead fs-3'>
                      <b>6GB+128GB</b>
                    </p>
                    <p className='display-4'> 
                      <b>POCO M5s</b>
                    </p>
                    <p className='lead fs-3'>
                      <b>Cámara Cuádruple de 64 MP con IA</b>
                    </p>
                    <p className='lead fs-3'>
                      <b>$2,999.00  <del style={{color: "grey"}}>$4,699.00</del> </b>
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
        </div>
        <div className="carousel-item">
        <div style={{backgroundImage: 'url("./src/assets/img/1.webp")', height: "75vh", backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition:"center"}}>
              <div className="container-fluid d-flex flex-column justify-content-center h-100">
                <div className="row">
                  <div className="col-md-1">
                  </div>
                  <div className="col-12 col-md-4 mt-5">
                  <p className='lead fs-3'>
                      <b>6GB+128GB</b>
                    </p>
                    <p className='display-4'> 
                      <b>Redmi Pad SE</b>
                    </p>
                    <p className='lead fs-3'>
                      <b>Ahorra más con tu cupón de $1,000 MXN</b>
                    </p>
                    <p className='lead fs-3'>
                      <b>$6,999.00</b>
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
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  )
}
