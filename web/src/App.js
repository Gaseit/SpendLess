import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

// Importar componentes externos
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

// Importar los componentes creados
import {
    Contact, Cookies, Error404, Footer, Header, Legal, Login, Privacity, ProductInfo, Products, Register 
} from "./index.js";

// Importar los contextos
import CartContext from "./context/CartContext";
import PricesContext from "./context/PricesContext";
import SelectedShopContext from "./context/SelectedShopContext";
import ProductsContext from "./context/ProductsContext";
import ShopsContext from "./context/ShopsContext";
import Cart from "./components/Cart";


function App() {
    // Recuperar el carrito que hay guardado en LocalStorage
    let aux = JSON.parse(localStorage.getItem("cart"));
    if (aux == null) {
        aux = [];
    }

    // Crear los contextos necesarios
    const [cart, setCart] = useState(aux);
    const [prices, setPrices] = useState([]);
    const [products, setProducts] = useState([]);
    const [shops, setShops] = useState([]);
    const [selectedShop, setSelectedShop] = useState(null);

    // useEffect para recoger los datos de la base de datos
    useEffect(() => {
        fetch("http://0.0.0.0:6868/shop")
            .then((response) => response.json())
            .then((data) => setSelectedShop(...data));
        fetch("http://0.0.0.0:6868/all")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
                setShops(data.shops);
                setPrices(data.prices);
            });
    }, []);

    // useEffect para que cada vez que se modifique el carrito se guarde en LocalStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    return (
        <HashRouter basename="/">
            {/* Crear los context provider necesarios */}
            <CartContext.Provider value={{cart, setCart}}>
                <PricesContext.Provider value={{prices, setPrices}}>
                    <SelectedShopContext.Provider value={{selectedShop, setSelectedShop}}>
                        <div className="App">
                            <div id="Header-Container">
                                <Header/>
                            </div>
                            <ProductsContext.Provider value={{products, setProducts}}>
                            <ShopsContext.Provider value={{shops, setShops}}>
                                <div id="Content-Container">
                                    <Routes>
                                        <Route path={"/"} element={<Products/>}/>
                                        <Route path={"/product/:id"} element={<ProductInfo/>}/>
                                        <Route path={"/legal"} element={<Legal/>}/>
                                        <Route path={"/privacity"} element={<Privacity/>}/>
                                        <Route path={"/cookies"} element={<Cookies/>}/>
                                        <Route path={"/login"} element={<Login/>}/>
                                        <Route path={"/register"} element={<Register/>}/>
                                        <Route path={"/contact"} element={<Contact/>}/>
                                        <Route path={"/cart"} element={<Cart/>}/>
                                        <Route path="*" element={<Error404/>}></Route>
                                    </Routes>
                                </div>
                            </ShopsContext.Provider>
                            </ProductsContext.Provider>
                            <div id="Footer-Container">
                                <Footer/>
                            </div>
                            <CookieConsent location="bottom" buttonText="De acuerdo" buttonId="cookiesBtn">
                                Este sitio utiliza cookies. Mira nuestra <NavLink to="/privacity" className="link-light mainColor2">política de privacidad</NavLink> para más información
                            </CookieConsent>
                        </div>
                    </SelectedShopContext.Provider>
                </PricesContext.Provider>
            </CartContext.Provider>
        </HashRouter>
    );
}

export default App;
