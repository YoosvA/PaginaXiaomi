import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/Pages/Home"
import { Navbar } from "./components/Navbar/Navbar"
import { Tienda } from "./components/Pages/Tienda"
import { HogarInteligente } from "./components/Pages/HogarInteligente"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Footer } from "./components/Footer/Footer"
import { Redmi } from "./components/Pages/smartphone/Redmi"
import { Poco } from "./components/Pages/smartphone/Poco"

export const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  
  return (
    <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Tienda" element={<Tienda />}/>
        <Route path="/HogarInteligente" element={<HogarInteligente />}/>
        <Route path="/Redmi" element={<Redmi />}/> 
        <Route path="/Poco" element={<Poco />}/> 
      </Routes>

      <Footer/>
    </BrowserRouter>
    </>
  )
}
