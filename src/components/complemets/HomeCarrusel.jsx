import { NavLink } from "react-router-dom";
import "/src/css/Fonts.css";
import "/src/css/footer.css";
import "/src/css/cards.css";
import { useState } from "react";

export const HomeCarrusel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCarouselChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="card mt-4" id="bordeCards">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <div className="card" id="bordeCards">
                    <div className="card-body">
                      <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        data-bs-interval="false"
                      >
                        <div className="carousel-inner">
                          <div
                            className={`carousel-item ${
                              activeIndex === 0 ? "active" : ""
                            }`}
                          >
                            <img
                              src="./src/assets/img/1-carrrouselHome.png"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div
                            className={`carousel-item ${
                              activeIndex === 1 ? "active" : ""
                            }`}
                          >
                            <img
                              src="./src/assets/img/2-carrouselHome.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div
                            className={`carousel-item ${
                              activeIndex === 2 ? "active" : ""
                            }`}
                          >
                            <img
                              src="./src/assets/img/3-carrouselHome.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card" id="bordeCards">
                    <div className="card-body">
                      {/* Aquí coloca tu contenido para el segundo carrusel */}
                      <div
                        id="carouselExampleIndicators2"
                        className="carousel slide"
                      >
                        <div className="row">
                          <div className="col">
                            <div className="card" id="bordeCards">
                              <div className="card-body">
                                <div className="carousel-inner">
                                  <div
                                    className={`carousel-item ${
                                      activeIndex === 0 ? "active" : ""
                                    }`}
                                  >
                                    <div className="card" id="bordeCards">
                                      <div className="card-body text-center">
                                        <br /><br /><br /><br />
                                        <h2 id="Redmi" className="fw-bolder">
                                          Hola, Xiaomi Fans!
                                        </h2>
                                        <h6 id="Redmi" className="mt-4">
                                          ¡Participa y gana la bandera
                                          personalizada para tu XFC!
                                        </h6>
                                        <NavLink to="/" id="linksblack">
                                          <h6 id="Redmi" className="mt-3">
                                            Sáber más<img src="./src/assets/img/nextLink.png" />
                                          </h6>
                                        </NavLink>
                                        <br /><br /><br />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className={`carousel-item ${
                                      activeIndex === 1 ? "active" : ""
                                    }`}
                                  >
                                    <div className="card mt-2" id="bordeCards">
                                      <div className="card-body text-center">
                                        <br /><br /><br />
                                        <h2 id="Redmi" className="fw-bolder">
                                          Xiaomi Fan Story
                                        </h2>
                                        <h6 id="Redmi" className="mt-4">
                                          Nuestra Xiaomi Fan, Raquel Reyes,
                                          nunca tiene miedo de perseguir sus
                                          ambiciones y continúa superando el
                                          desafio a pesar de todos los
                                          obstáculos. #SerieRedmiNote11
                                        </h6>
                                        <NavLink to="/" id="linksblack">
                                          <h6 id="Redmi" className="mt-3">
                                            Sáber más<img src="./src/assets/img/nextLink.png" />
                                          </h6>
                                        </NavLink>
                                        <br /><br />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className={`carousel-item ${
                                      activeIndex === 2 ? "active" : ""
                                    }`}
                                  >
                                    <div className="card mt-1" id="bordeCards">
                                      <div className="card-body text-center">
                                        <br /><br /><br /><br />
                                        <h2 id="Redmi" className="fw-bolder">
                                          Xiaomi Film Festival
                                        </h2>
                                        <h6 id="Redmi" className="mt-4">
                                          Un encuentro romántico en una
                                          cafeteria es el inicio de la historia
                                          del #XiaomiFilmFestival de Elaine &
                                          Mike.
                                        </h6>
                                        <NavLink to="/" id="linksblack">
                                          <h6 id="Redmi" className="mt-3">
                                            Sáber más<img src="./src/assets/img/nextLink.png" />
                                          </h6>
                                        </NavLink>
                                        <br /><br />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="card mt-1" id="bordeCards">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col text-end">
                                    <button
                                      className="btn btn-dark"
                                      data-bs-target="#carouselExampleIndicators2"
                                      data-bs-slide="prev"
                                      onClick={
                                        () =>
                                          handleCarouselChange(
                                            (activeIndex - 1 + 3) % 3
                                          ) /* Cambia el número 3 al número total de tarjetas */
                                      }
                                    >
                                      <img
                                        src="./src/assets/img/beforeCarrousel.png"
                                        alt=""
                                      />
                                    </button>
                                  </div>
                                  <div className="col text-start">
                                    <button
                                      className="btn btn-dark"
                                      data-bs-target="#carouselExampleIndicators2"
                                      data-bs-slide="next"
                                      onClick={() =>
                                        handleCarouselChange(
                                          (activeIndex + 1) % 3
                                        )
                                      }
                                    >
                                      <img
                                        src="./src/assets/img/nextCarrousel.png"
                                        alt=""
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
