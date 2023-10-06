import { NavLink } from 'react-router-dom';
import '/src/css/cards.css';

export const CardsHogarInteligente = () => {
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
    <div style={{backgroundImage: 'url("./src/assets/img/HogarInteligente/PortadaHI.webp")', height: "75vh", backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition:"center"}} data-aos="fade-down">
      <div className="container-fluid d-flex flex-column justify-content-center h-100">
          <div className="row">
              <div className="col-md-1">
              </div>
              <div className="col-12 col-md-4 mt-5">
                  <p className='lead fs-3'>
                    <b style={{color: "white"}} className='shadowLetras'>Hecho en México</b>
                  </p>
                  <p className='display-4'> 
                    <b style={{color: "white"}} className='shadowLetras'>XIAOMI TV A Pro</b>
                  </p>
                  <p className='lead fs-3'>
                    <b style={{color: "white"}} className='shadowLetras'>Vida Conectada, Pantalla Sin Límites</b>
                  </p>
                  <p className='lead fs-3'>
                    <b style={{color: "white"}} className='shadowLetras'>De $9,499.00</b>
                  </p>
                  <div className="row">
                    <div className="col-4 text-end">
                        <button type="button" className="btn btn-light" >Comprar ahora</button>
                    </div>
                    <div className="col text-start">
                        <NavLink to="/" id="linksblack">
                        <h6 id="Redmi" className="shadowLetras mt-2" style={{color: "white"}} >
                          Más información<img src="./src/assets/img/nextCarrousel.png" />
                        </h6>
                      </NavLink>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>

    <div className="container-fluid mt-4">
        <div className="row">
            <div className="col">
                <div className="card bg-body-tertiary" id='bordeCards'>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6 col-xs-12 mt-3">
                                <div className="card rounded-0" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-43%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4>Xiaomi Smart Pet Food Feeder</h4>
                                                <p>Xiaomi Smart Pet Food Feeder</p>
                                                <h6>$1,699.00 <del style={{color:"gray"}}>$2,999.00</del></h6> 
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ahora</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/HogarInteligente/1HI.png" style={{width: "15rem"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12 mt-3">
                                <div className="card rounded-0" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-36%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4>Xiaomi Smart Pet Fountain</h4>
                                                <p>Agua fresca para tu mascota, las 24 horas del día</p>
                                                <h6>De $1,199.00 <del style={{color:"gray"}}>$1,899.00</del></h6> 
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-secondary" disabled>Agotado</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark" >Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/HogarInteligente/2HI.png" style={{width: "15rem"}} />
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

    <div className="container-fluid mt-4">
        <div className="row">
            <div className="col">
                <div className="card bg-body-tertiary" id='bordeCards'>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3 col-xs-12 mt-3">
                                <div className="card rounded-0" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-11%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <br />
                                                <h4>Xiaomi Hair Clipper <h4 style={{color:"white"}}>xxxxxxxxxxx</h4></h4>
                                                <br /><br />
                                            </div>
                                            <div className="col text-center mt-4">
                                                <button className="btn btn-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/HogarInteligente/3IH.webp" style={{width: "15rem"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-12 mt-3">
                                <div className="card rounded-0" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-25%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <br />
                                                <h4>XMi 16-in-1 Ratchet Screwdriver</h4>
                                                <br /><br />
                                            </div>
                                            <div className="col text-center mt-4">
                                                <button className="btn btn-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/HogarInteligente/4HI.webp" style={{width: "15rem"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-12 mt-3">
                                <div className="card rounded-0" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-25%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <br />
                                                <h4>Xiaomi Portable Electric Air Compressor 1S</h4>
                                                <br /><br />
                                            </div>
                                            <div className="col text-center mt-4">
                                                <button className="btn btn-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/HogarInteligente/5HI.webp" style={{width: "15rem"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-12 mt-3">
                                <div className="card rounded-0" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-21%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <br />
                                                <h4>Mi Precision Screwdriver Kit <h4 style={{color:"white"}}>xxxxxxxxxxx</h4></h4>
                                                <br /><br />
                                            </div>
                                            <div className="col text-center mt-4">
                                                <button className="btn btn-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/HogarInteligente/6HI.webp" style={{width: "15rem"}} />
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

    <div className="container-fluid mt-4">
        <div className="row">
            <div className="col">
                <div className="card bg-body-tertiary" id='bordeCards'>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6 col-xs-12 mt-3">
                                <div className="card rounded-0" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-27%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4>Mi Smart LED Bulb Essential (White and Color)</h4>
                                                <p>Llene su hogar de color</p>
                                                <h6>$289.00 <del style={{color:"gray"}}>$399.00</del></h6> 
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ahora</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/HogarInteligente/7.webp" style={{width: "15rem"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-12 mt-3">
                                <div className="card rounded-0" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-42%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4>Mi LED Desk Lamp 1S</h4>  
                                                <p>Luz de calidad premium y colores más vivos</p>
                                                <h6>$799.00 <del style={{color:"gray"}}>$1,399.00</del></h6>    
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ...</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más info ...</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/HogarInteligente/8.webp" style={{width: "15rem"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-12 mt-3">
                                <div className="card rounded-0" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-29%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4>Mi Body Composition Scale</h4>  
                                                <p>Datos más completos</p>
                                                <h6>$599.00 <del style={{color:"gray"}}>$849.00</del></h6>    
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ...</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más info ...</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/HogarInteligente/9.png" style={{width: "15rem"}} />
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

    <div className="container-fluid mt-4">
        <div className="row">
            <div className="col">
                <div className="card bg-body-tertiary" id='bordeCards'>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3 col-xs-12 mt-3">
                                <div className="card rounded-0" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-33%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <br />
                                                <h4>Xiaomi Electric Scooter Pneumatic Tire </h4>
                                                <br /><br />
                                            </div>
                                            <div className="col text-center mt-4">
                                                <button className="btn btn-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/HogarInteligente/10IH.webp" style={{width: "15rem"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-12 mt-3">
                                <div className="card rounded-0" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <div className="row">   
                                            <div className="text-center mt-4">
                                                <br /><br />
                                                <h4>Mi Casual Daypack <h4 style={{color:"white"}} className='mt-2'>xxxxxxxxxxx</h4></h4>
                                                <br /><br />
                                            </div>
                                            <div className="col text-center mt-4">
                                                <button className="btn btn-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/HogarInteligente/11IH.webp" style={{width: "15rem"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-12 mt-3">
                                <div className="card rounded-0" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-33%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <br />
                                                <h4>Xiaomi Electric Scooter Storage Bag</h4>
                                                <br /><br />
                                            </div>
                                            <div className="col text-center mt-4">
                                                <button className="btn btn-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/HogarInteligente/12IH.webp" style={{width: "15rem"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-12 mt-3">
                                <div className="card rounded-0" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-33%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <br />
                                                <h4>Xiaomi Electric Scooter Cable Lock</h4>
                                                <br /><br />
                                            </div>
                                            <div className="col text-center mt-4">
                                                <button className="btn btn-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/HogarInteligente/13IH.webp" style={{width: "15rem"}} />
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

    <div className="container-fluid mt-4">
        <div className="row">
            <div className="col">
                <div className="card bg-body-tertiary" id='bordeCards'>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3 col-xs-12 mt-3">
                                <div className="card rounded-0" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-47%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <br />
                                                <h4>Xiaomi 12V Max Brushless Cordless Drill</h4>
                                                <br /><br />
                                            </div>
                                            <div className="col text-center mt-4">
                                                <button className="btn btn-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/HogarInteligente/14.webp" style={{width: "15rem"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-12 mt-3">
                                <div className="card rounded-0" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-22%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <br />
                                                <h4>Mi Motion Sensor <h4 style={{color:"white"}}>xxxxxxxxxxx</h4></h4>
                                                <br /><br />
                                            </div>
                                            <div className="col text-center mt-4">
                                                <button className="btn btn-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/HogarInteligente/15IH.webp" style={{width: "15rem"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-12 mt-3">
                                <div className="card rounded-0" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-31%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <br />
                                                <h4>Mi Door and Window Sensor 2</h4>
                                                <br /><br />
                                            </div>
                                            <div className="col text-center mt-4">
                                                <button className="btn btn-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/HogarInteligente/16IH.webp" style={{width: "15rem"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-12 mt-3">
                                <div className="card rounded-0" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-35%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <br />
                                                <h4>Mi Temperature and Humidity Monitor 2</h4>
                                                <br /><br />
                                            </div>
                                            <div className="col text-center mt-4">
                                                <button className="btn btn-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/HogarInteligente/17IH.webp" style={{width: "15rem"}} />
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
    </>
  )
}
