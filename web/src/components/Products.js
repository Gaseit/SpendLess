import ShopAside from "./ShopAside";
import {useContext} from "react";
import PricesContext from "../context/PricesContext";
import SelectedShopContext from "../context/SelectedShopContext";
import {NavLink} from "react-router-dom";
import ProductsContext from "../context/ProductsContext";
import CartContext from "../context/CartContext";

// Página con el listado de productos
function Products () {
    // Importamos los contextos necesarios
    const {products} = useContext(ProductsContext);
    const {prices} = useContext(PricesContext);
    const {selectedShop} = useContext(SelectedShopContext);
    const {cart, setCart} = useContext(CartContext);

    return (
        <>
            <div id="products" className="m-auto">
                <h1 className="text-center mt-4">{selectedShop && selectedShop.name}</h1>
                <div className="row py-3">
                    <div className="ms-5 col-10 col-sm-9 ms-sm-0">
                        <div className="row mx-auto justify-content-center">
                        {
                            // Por cada producto se imprime la plantilla
                            products && prices && cart && selectedShop && products.map((product) => {
                                let price = prices.filter((price) => {
                                    return price.shop_id === selectedShop.id && price.product_id === product.id;
                                })[0].price;
                                return (
                                    <div key={product.id} className="col-12 col-sm-5 col-md-3 col-xl-2 m-2 product text-center">
                                        <div className="my-2">
                                            <img src={product.image} alt={product.name} className="img-fluid imgFormat"/>
                                        </div>
                                        <NavLink to={"/product/" + product.id} className="row product-link">
                                            <p>{product.name}</p>
                                        </NavLink>
                                        <div className="col align-self-center text-center">
                                            <p className="mainColor m-0">{parseFloat(price).toFixed(2)} €</p>
                                            <button type="button" className="btn btn-warning my-3" onClick={
                                                () => {
                                                    // Cuando se pulse el boton de 'Añadir' comprobamos si existe el producto en el carrito
                                                    if (cart.every((producte) => producte.id !== product.id)) {
                                                        // Si no existe se añade el producto
                                                        product.quantity = 1;
                                                        setCart([...cart, product]);
                                                    } else {
                                                        // Si existe se suma en 1 la cantidad
                                                        let aux = cart.map((producte) => {
                                                            if (producte.id === product.id) {
                                                                producte.quantity += 1;
                                                            }
                                                            return producte;
                                                        });
                                                        setCart([...aux])
                                                    }
                                                }
                                            }>Añadir
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                        <ShopAside />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;