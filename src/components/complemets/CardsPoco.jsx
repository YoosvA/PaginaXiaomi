import '/src/css/cards.css';

export const CardsPoco = () => {
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
                <h3 className="mt-3">POCO</h3>
                <p>El lugar de los POCO Lovers</p>
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
                                                    <button type="button" className="btn btn" id='bootonOrange'>-26%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4>POCO X5 Pro 5G</h4>
                                                <p>Procesador Snapdragon® 778G</p>
                                                <p>Pantalla AMOLED DotDisplay FHD+ de 120Hz</p>
                                                <h6>De $4,799.00 <del style={{color:"gray"}}>$4,499.00</del></h6> 
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ahora</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/Poco/Poco1.webp" style={{width: "15rem"}} />
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
                                                    <button type="button" className="btn btn" id='bootonOrange'>-30%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4>POCO X5 5G</h4>
                                                <p>Procesador Snapdragon® 695</p>
                                                <p>Carga rápida de 33 W</p>
                                                <h6>De $3,799.00 <del style={{color:"gray"}}>$5,499.00</del></h6> 
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ...</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más info ...</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/Poco/Poco2.png" style={{width: "15rem"}} />
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
                                                    <button type="button" className="btn btn" id='bootonOrange'>-14%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4>POCO F5</h4>
                                                <p>Snapdragon® 7+ Gen 2</p>
                                                <p>AMOLED DotDisplay de 120Hz</p>
                                                <h6>$7,999.00 <del style={{color:"gray"}}>$8,499.00</del></h6> 
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ...</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más info ...</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/Poco/Poco3.webp" style={{width: "15rem"}} />
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
                                                    <button type="button" className="btn btn" id='bootonOrange'>-36%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4>POCO M5s</h4>
                                                <p>DotDisplay AMOLED FHD+ de 6,43"</p>
                                                <p>IA de 64 MPCámara cuádruple</p>
                                                <h6>$2,999.00 <del style={{color:"gray"}}>$4,699.00</del></h6> 
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ahora</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/Poco/Poco4.webp" style={{width: "15rem"}} />
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
                                                    <button type="button" className="btn btn" id='bootonOrange'>-43%</button>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4>POCO C40</h4>
                                                <p>Sumérgete en su pantalla de 6,71"</p>
                                                <p>Batería de 6000 mAh (typ)</p>
                                                <h6>De $1,799.00 <del style={{color:"gray"}}>$3,199.00</del></h6> 
                                            </div>
                                            <div className="col text-end mt-4">
                                                <button className="btn btn-dark">Comprar ahora</button>
                                            </div>
                                            <div className="col text-start mt-4">
                                                <button type="button" className="btn btn-outline-dark">Más información</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="./src/assets/img/Poco/Poco5.png" style={{width: "15rem"}} />
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
