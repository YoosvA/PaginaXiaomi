
import { NavLink } from 'react-router-dom';
import '/src/css/cards.css';

export const CardsTienda = () => {
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
    <div className="container-fluid mt-4">
        <div className="row">
            <div className="col ms-3">
            <h3>Destacados de Redmi</h3>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row">
            <div className="col">
            <div className="card bg-body-tertiary" id='bordeCards'>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <h4 className="card-title">Redmi Note 11S</h4>
                                                <p className="card-text" style={{color: "#ff8000"}}>Ahorra más con tu cupón de <br /> $2,100 MXN</p>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-29%</button>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <h4 className='card-title mt-4'>$5,999.00</h4>
                                                    </div>
                                                    <div className="col mt-4 text-start">
                                                        <del style={{color: "grey"}}>$8,499.00</del>                                            
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card"  id='bordeCards'>
                                            <div className="text-center">
                                                <img src="./src/assets/img/Tienda/1.png" className="card-img-top" style={{width:"70%"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <h4 className="card-title">Redmi 10A</h4>
                                                <p className="card-text" style={{color: "#ff8000"}}>Ahorra más con tu cupón de <br /> $1,400 MXN</p>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-25%</button>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <h4 className='card-title mt-4'>$9,999.00</h4>
                                                    </div>
                                                    <div className="col mt-4 text-start">
                                                        <del style={{color: "grey"}}>$3,999.00</del>                                            
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card"  id='bordeCards'>
                                            <div className="text-center">
                                                <img src="./src/assets/img/Tienda/2.png" className="card-img-top" style={{width:"70%"}}/>
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
    <div className="container-fluid">
        <div className="row">
            <div className="col">
            <div className="card bg-body-tertiary" id='bordeCards'>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <h4 className="card-title">Redmi Note 11 Pro 5G</h4>
                                                <p className="card-text" style={{color: "#ff8000"}}>Ahorra más con tu cupón de <br /> $1,700 MXN</p>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-30%</button>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <h4 className='card-title mt-4'>$6,999.00</h4>
                                                    </div>
                                                    <div className="col mt-4 text-start">
                                                        <del style={{color: "grey"}}>$9,499.00</del>                                            
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card"  id='bordeCards'>
                                            <div className="text-center">
                                                <img src="./src/assets/img/Tienda/3.png" className="card-img-top" style={{width:"70%"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <h4 className="card-title">Redmi 10C</h4>
                                                <p className="card-text" style={{color: "#ff8000"}}>Ahorra más con tu cupón de <br /> $1,500 MXN</p>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-28%</button>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <h4 className='card-title mt-4'>$3,499.00</h4>
                                                    </div>
                                                    <div className="col mt-4 text-start">
                                                        <del style={{color: "grey"}}>$4,889.00</del>                                            
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card"  id='bordeCards'>
                                            <div className="text-center">
                                                <img src="./src/assets/img/Tienda/4.png" className="card-img-top" style={{width:"70%"}}/>
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

    <div className="container-fluid mt-4">
        <div className="row">
            <div className="col ms-3">
            <h3>POCO | Ofertas especiales</h3>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row">
            <div className="col">
            <div className="card bg-body-tertiary" id='bordeCards'>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <h4 className="card-title">POCO F5</h4>
                                                <p className="card-text" style={{color: "grey"}}>Snapdragon® 7+ Gen 2 <br /> AMOLED DotDisplay de 120Hz</p>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-14%</button>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <h4 className='card-title mt-4'>$6,999.00</h4>
                                                    </div>
                                                    <div className="col mt-4 text-start">
                                                        <del style={{color: "grey"}}>$9,499.00</del>                                            
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card"  id='bordeCards'>
                                            <div className="text-center">
                                                <img src="./src/assets/img/Tienda/5.jpg" className="card-img-top" style={{width:"70%"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <h4 className="card-title">POCO M5s</h4>
                                                <p className="card-text" style={{color: "grey"}}>[6GB+128GB]<br /> Procesador Snapdragon® 778G</p>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-28%</button>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <h4 className='card-title mt-4'>$2,999.00</h4>
                                                    </div>
                                                    <div className="col mt-4 text-start">
                                                        <del style={{color: "grey"}}>$4,699.00</del>                                            
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card"  id='bordeCards'>
                                            <div className="text-center">
                                                <img src="./src/assets/img/Tienda/6.png" className="card-img-top" style={{width:"70%"}}/>
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

    <div className="container-fluid">
        <div className="row">
            <div className="col">
            <div className="card bg-body-tertiary" id='bordeCards'>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <h4 className="card-title">POCO X5 Pro 5G</h4>
                                                <p className="card-text" style={{color: "grey"}}>Procesador Snapdragon® 778G</p>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-26%</button>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <h4 className='card-title mt-4'>De $4,799.00</h4>
                                                    </div>
                                                    <div className="col mt-4 text-start">
                                                        <del style={{color: "grey"}}>$6,499.00</del>                                            
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card"  id='bordeCards'>
                                            <div className="text-center">
                                                <img src="./src/assets/img/Tienda/7.png" className="card-img-top" style={{width:"70%"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <h4 className="card-title">POCO X5 5G</h4>
                                                <p className="card-text" style={{color: "grey"}}>Pantalla AMOLED DotDisplay FHD+ <br />de 120Hz</p>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-30%</button>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <h4 className='card-title mt-4'>$3,799.00</h4>
                                                    </div>
                                                    <div className="col mt-4 text-start">
                                                        <del style={{color: "grey"}}>$5,499.00</del>                                            
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card"  id='bordeCards'>
                                            <div className="text-center">
                                                <img src="./src/assets/img/Tienda/8.png" className="card-img-top" style={{width:"70%"}}/>
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

    <div className="container-fluid mt-4">
        <div className="row">
            <div className="col ms-3">
            <h3>Serie Redmi | 0% de interés hasta 12 pagos</h3>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className='card bg-body-tertiary' id='bordeCards'>
            <div className='card-body'>
            <div className="row">
                <div className="col">
                    <div style={{backgroundImage: 'url("./src/assets/img/Tienda/portadaTienda.webp")', height: "35vh", backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition:"center"}}>
                    <div className="container-fluid d-flex flex-column justify-content-center h-100">
                        <div className="row">
                            <div className="col-md-1">
                            </div>
                            <div className="col">
                                <p className='display-6'> 
                                    <b>Mi Zona de Fans</b>
                                </p>
                                <p className='lead fs-5'>
                                    <b>Obtén un cupón de 30% de descuento al canjear SOLAMENTE 1 Mi Point.</b>
                                </p>
                                <button className='btn btn-dark'>Mas Informacion</button>
                                <br />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>

    {/* pequeñas */}
    <div className="container-fluid">
        <div className="row">
            <div className="col">
            <div className="card bg-body-tertiary" id='bordeCards'>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <h4 className="card-title">Redmi Note 12 Pro+ 5G</h4>
                                                <p className="card-text" style={{color: "grey"}}>Cámara de 200 MP líder en el mundo con OIS</p>
                                                <div className="row">
                                                    <div className="col">
                                                        <h4 className='card-title mt-4'>$13,999.00</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card"  id='bordeCards'>
                                            <div className="text-center">
                                                <img src="./src/assets/img/Tienda/9.png" className="card-img-top" style={{width:"70%"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="row">
                                                            <div className="col">
                                                                <h6 className="card-title">Redmi Note 12S</h6>
                                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                                    <button type="button" className="btn btn" id='bootonOrange'>-11%</button>
                                                                 </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="col">
                                                                    <h4 className='card-title mt-4'>$7,999.00</h4>
                                                                </div>
                                                                <div className="col text-start">
                                                                    <del style={{color: "grey"}}>$8,999.00</del>                                            
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="card"  id='bordeCards'>
                                                                    <div className="text-center">
                                                                        <img src="./src/assets/img/Tienda/10.jpg" className="card-img-top" style={{width:"115%"}}/>
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
                        <div className="col-md-3 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="row">
                                                            <div className="col">
                                                                <h6 className="card-title">Redmi 12</h6>
                                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                                    <button type="button" className="btn btn" id='bootonOrange'>-47%</button>
                                                                 </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="col">
                                                                    <h4 className='card-title mt-4'>De <br />$2,999.00</h4>
                                                                </div>
                                                                <div className="col text-start">
                                                                    <del style={{color: "grey"}}>$5,699.00</del>                                            
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="card"  id='bordeCards'>
                                                                    <div className="text-center">
                                                                        <img src="./src/assets/img/Tienda/11.jpg" className="card-img-top" style={{width:"115%"}}/>
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
        </div>
    </div>

    <div className="container-fluid">
        <div className="row">
            <div className="col">
            <div className="card bg-body-tertiary" id='bordeCards'>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <h4 className="card-title">Redmi 12C</h4>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-22%</button>
                                                </div>
                                                <div className="row mt-4">
                                                    <div className="col">
                                                        <h4 className='card-title mt-4'>$3,499.00</h4>
                                                    </div>
                                                    <div className="col mt-4 text-start">
                                                        <del style={{color: "grey"}}>$4,499.00</del>                                            
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card"  id='bordeCards'>
                                            <div className="text-center">
                                                <img src="./src/assets/img/Tienda/12.png" className="card-img-top" style={{width:"70%"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <h4 className="card-title">Redmi A2</h4>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-28%</button>
                                                </div>
                                                <div className="row mt-4">
                                                    <div className="col">
                                                        <h4 className='card-title mt-4'>$1,799.00</h4>
                                                    </div>
                                                    <div className="col mt-4 text-start">
                                                        <del style={{color: "grey"}}>$2,499.00</del>                                            
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card"  id='bordeCards'>
                                            <div className="text-center">
                                                <img src="./src/assets/img/Tienda/13.png" className="card-img-top" style={{width:"70%"}}/>
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

    <div className="container-fluid mt-4">
        <div className="row">
            <div className="col ms-3">
            <h3>Hecho en México | Envío rápido y sin costo</h3>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row">
            <div className="col">
            <div className="card bg-body-tertiary" id='bordeCards'>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <h4 className="card-title">Xiaomi TV A Pro 55"</h4>
                                                <p className="card-text" style={{color: "grey"}}>Pantalla 4K con amplia gama de colores y Dolby Vision®</p>
                                                <div className="row">
                                                    <div className="col">
                                                        <h4 className='card-title mt-4'>$11,999.00</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card"  id='bordeCards'>
                                            <div className="text-center">
                                                <img src="./src/assets/img/Tienda/1tv.jpg" className="card-img-top" style={{width:"70%"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="row mt-1">
                                                            <div className="col">
                                                                <h6 className="card-title">Xiaomi TV A Pro 50"</h6>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-4">
                                                            <div className="col">
                                                                <div className="col">
                                                                    <h4 className='card-title mt-4'>$10,799.00</h4>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="card"  id='bordeCards'>
                                                                    <div className="text-center">
                                                                        <img src="./src/assets/img/Tienda/1tv.jpg" className="card-img-top" style={{width:"115%"}}/>
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
                        <div className="col-md-3 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <div className="row mt-1">
                                                    <div className="col">
                                                        <div className="row">
                                                            <div className="col">
                                                                <h6 className="card-title">Xiaomi TV A Pro 43"</h6>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-4">
                                                            <div className="col">
                                                                <div className="col">
                                                                    <h4 className='card-title mt-4'>$9,499.00</h4>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="card"  id='bordeCards'>
                                                                    <div className="text-center">
                                                                        <img src="./src/assets/img/Tienda/1tv.jpg" className="card-img-top" style={{width:"115%"}}/>
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
        </div>
    </div>

    
    <div className="container-fluid mt-4">
        <div className="row">
            <div className="col ms-3">
            <h3>Pad</h3>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row">
            <div className="col">
            <div className="card bg-body-tertiary" id='bordeCards'>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <h4 className="card-title">Redmi Pad SE</h4>
                                                <p className="card-text" style={{color: "#ff8000"}}>Ahorra más con tu cupón de <br /> $1,000 MXN</p>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonGreen'>Novedad</button>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <h4 className='card-title mt-4'>$6,499.00</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card"  id='bordeCards'>
                                            <div className="text-center">
                                                <img src="./src/assets/img/Tienda/padse.png" className="card-img-top" style={{width:"70%"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="row">
                                                            <div className="col">
                                                                <h6 className="card-title">Xiaomi Pad 6</h6>
                                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                                    <button type="button" className="btn btn" id='bootonOrange'>-9%</button>
                                                                 </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="col">
                                                                    <h4 className='card-title mt-4'>$9,999.00</h4>
                                                                </div>
                                                                <div className="col text-start">
                                                                    <del style={{color: "grey"}}>$10,999.00</del>                                            
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="card"  id='bordeCards'>
                                                                    <div className="text-center">
                                                                        <img src="./src/assets/img/Tienda/1pad.png" className="card-img-top" style={{width:"115%"}}/>
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
                        <div className="col-md-3 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="row">
                                                            <div className="col">
                                                                <h6 className="card-title">Xiaomi Pad 6 Keyboard</h6>
                                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                                    <button type="button" className="btn btn" id='bootonOrange'>-9%</button>
                                                                 </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="col">
                                                                    <h4 className='card-title mt-4'>De <br />$2,999.00</h4>
                                                                </div>
                                                                <div className="col text-start">
                                                                    <del style={{color: "grey"}}>$5,699.00</del>                                            
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="card"  id='bordeCards'>
                                                                    <div className="text-center">
                                                                        <img src="./src/assets/img/Tienda/2pad.png" className="card-img-top" style={{width:"115%"}}/>
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
        </div>
    </div>

    <div className="container-fluid mt-4">
        <div className="row">
            <div className="col ms-3">
            <h3>Dispositivos inteligentes</h3>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row">
            <div className="col">
            <div className="card bg-body-tertiary" id='bordeCards'>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <h4 className="card-title">Xiaomi Smart Band 7</h4>
                                                <p className="card-text" style={{color: "grey"}}>Pantalla de alta resolución de 1,62" con tecnología AMOLED</p>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                    <button type="button" className="btn btn" id='bootonOrange'>-49%</button>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                    <div className="row">
                                                    <div className="col">
                                                        <h4 className='card-title mt-4'>$759.00</h4>
                                                    </div>
                                                    <div className="col mt-4 text-start">
                                                        <del style={{color: "grey"}}>$1,499.00</del>                                            
                                                    </div>
                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card"  id='bordeCards'>
                                            <div className="text-center">
                                                <img src="./src/assets/img/HogarInteligente/band.png" className="card-img-top" style={{width:"70%"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="row">
                                                            <div className="col">
                                                                <h6 className="card-title">Xiaomi Smart Band 7 Pro</h6>
                                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                                    <button type="button" className="btn btn" id='bootonOrange'>-20%</button>
                                                                 </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="col">
                                                                    <h4 className='card-title mt-4'>$1,699.00</h4>
                                                                </div>
                                                                <div className="col text-start">
                                                                    <del style={{color: "grey"}}>$2,149.00</del>                                            
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="card"  id='bordeCards'>
                                                                    <div className="text-center">
                                                                        <img src="./src/assets/img/HogarInteligente/band2.png" className="card-img-top" style={{width:"115%"}}/>
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
                        <div className="col-md-3 col-xs-12 mt-4">
                            <div className="card rounded-0"  id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                <div className="card-body">
                                    <div className="card-group">
                                        <div className="card"  id='bordeCards'>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="row">
                                                            <div className="col">
                                                                <h6 className="card-title">Redmi Watch 2 Lite</h6>
                                                                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                                                    <button type="button" className="btn btn" id='bootonOrange'>-44%</button>
                                                                 </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="col">
                                                                    <h4 className='card-title mt-4'>$999.00</h4>
                                                                </div>
                                                                <div className="col text-start">
                                                                    <del style={{color: "grey"}}>$1,799.00</del>                                            
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="card"  id='bordeCards'>
                                                                    <div className="text-center">
                                                                        <img src="./src/assets/img/HogarInteligente/band3.png" className="card-img-top" style={{width:"115%"}}/>
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
        </div>
    </div>

    <div className="container-fluid">
        <div className='card bg-body-tertiary' id='bordeCards'>
            <div className='card-body'>
            <div className="row">
                <div className="col">
                    <div style={{backgroundImage: 'url("./src/assets/img/Tienda/portadaTienda2.webp")', height: "35vh", backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition:"center"}}>
                    <div className="container-fluid d-flex flex-column justify-content-center h-100">
                        <div className="row">
                            <div className="col-md-1">
                            </div>
                            <div className="col">
                                <p className='display-6'> 
                                    <b>¡Estás un paso de tu regalo de cumpleaños!</b>
                                </p>
                                <p className='lead fs-5'>
                                    <b>Obtén un cupón de descuento del 15%.</b>
                                </p>
                                <button className='btn btn-dark'>Editar Información</button>
                                <br />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row">
            <div className="col">
               <NavLink>
                <img src="./src/assets/img/Tienda/baner.webp" style={{width:"100%"}} />
               </NavLink>
            </div>
        </div>
    </div>
   
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <div className="card bg-body-tertiary" id='bordeCards'>
                    <div className="card-body">
                        <div className="row">
                            <div className="col mt-2">
                                <div className="card text-center" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <img src="./src/assets/img/icons/oneIcon.png" style={{width:"20%"}} />
                                        <p className='mt-3'>Tienda oficial</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col mt-2">
                                <div className="card text-center" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <img src="./src/assets/img/icons/twoIcon.png" style={{width:"20%"}} />
                                        <p className='mt-3'>Envío rápido</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col mt-2">
                                <div className="card text-center" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <img src="./src/assets/img/icons/treeIcon.png" style={{width:"20%"}} />
                                        <p className='mt-3'>Desvolución gratis dentro de los 15 días</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col mt-2">
                                <div className="card text-center" id='bordeCards' onMouseOver={addShadow} onMouseOut={removeShadow}>
                                    <div className="card-body">
                                        <img src="./src/assets/img/icons/fourIcon.png" style={{width:"20%"}} />
                                        <p className='mt-3'>Un año de garantía</p>
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
