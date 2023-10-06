import '/src/css/cards.css';

export const CardsRedmi = () => {

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
    <div className="container mt-4">
        <div className="row">
            <div className="col text-center">
                <h3 className="mt-3">Redmi Series</h3>
                <p>Los smartphones más económicos para los Mi Fans</p>
                <button className="btn btn-dark">Descúbrelos</button>
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
                                                    <button type="button" className="btn btn" id='bootonOrange'>-11%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4>Redmi Note 12S</h4>
                                                <p>Cámara principal de calidad profesional de 108MP</p>
                                                <h6>$7,999.00 <del style={{color:"gray"}}>$8,999.00</del></h6> 
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ahora</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/Redmi/Redmi1.webp" style={{width: "15rem"}} />
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
                                                    <button type="button" className="btn btn" id='bootonOrange'>-47%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4>Redmi 12</h4>
                                                <p>Gran pantalla FHD+ a 90 Hz Diseño premium con cristal trasero</p>
                                                <h6>De $2,999.00 <del style={{color:"gray"}}>$5,699.00</del></h6> 
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ahora</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/Redmi/Redmi2.webp" style={{width: "15rem"}} />
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
                                            <div className='mt-4'>
                                                <div className='mt-2'></div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4>Redmi Note 12C Pro+ 5G</h4>
                                                <p>Cámara de 200 MP líder en el mundo con OIS</p>
                                                <h6>$13,999.00</h6> 
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ahora</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/Redmi/5.png" style={{width: "15rem"}} />
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
                                                    <button type="button" className="btn btn" id='bootonOrange'>-23%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4>Redmi Note 12</h4>
                                                <p>Pantalla AMOLED de 120Hz | Carga rápida de 33 W</p>
                                                <h6>De $4,999.00 <del style={{color:"gray"}}>$6,499.00</del></h6> 
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ahora</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/Redmi/6.png" style={{width: "15rem"}} />
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
                                                    <button type="button" className="btn btn" id='bootonOrange'>-22%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4>Redmi 12C</h4>
                                                <p>MediaTek Helio G85 | Immersive 6.71" display</p>
                                                <h6>$3,499.00 <del style={{color:"gray"}}>$4,999.00</del></h6> 
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ahora</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/Redmi/3.png" style={{width: "15rem"}} />
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
                                                    <button type="button" className="btn btn" id='bootonOrange'>-28%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4>Redmi A2</h4>
                                                <p>MediaTek Helio G36 | Larga duración</p>
                                                <h6>De $1,799.00 <del style={{color:"gray"}}>$2,499.00</del></h6> 
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ahora</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/Redmi/4.webp" style={{width: "15rem"}} />
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
                                                    <button type="button" className="btn btn" id='bootonOrange'>-30%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4>Redmi Note 11 Pro 5G</h4>
                                                <p>108 MP de ptencia</p>
                                                <p>Carga turbo de 67 W</p>
                                                <h6>$6,999.00 <del style={{color:"gray"}}>$9,999.00</del></h6> 
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ...</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más info ...</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/Redmi/7.webp" style={{width: "15rem"}} />
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
                                                <h4>Redmi Note 11S</h4>
                                                <p>Capturas claras  vistas excepcionales por</p>
                                                <p>Cámara cuádruple de 108 MP</p>
                                                <h6>De $5,999.00 <del style={{color:"gray"}}>$8,499.00</del></h6> 
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ...</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más info ...</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/Redmi/8.png" style={{width: "15rem"}} />
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
                                                <h4>Redmi 10A</h4>
                                                <p>Cámara dual de 13MP</p>
                                                <p>Batería de 5000mAh</p>
                                                <h6>$2,999.00 <del style={{color:"gray"}}>$3,999.00</del></h6> 
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ...</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más info ....</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/Redmi/9.png" style={{width: "15rem"}} />
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
                                                    <button type="button" className="btn btn" id='bootonOrange'>-28%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4>Redmi 10C</h4>
                                                <p>Batería de 5000mAh</p>
                                                <p>Gran pantalla de 6.71"</p>
                                                <h6>$3,499.00 <del style={{color:"gray"}}>$4,889.00</del></h6> 
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ...</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más info ...</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/Redmi/10.png" style={{width: "15rem"}} />
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
