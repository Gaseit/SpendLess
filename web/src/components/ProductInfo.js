import {useParams} from "react-router-dom";
import {useContext} from "react";
import PricesContext from "../context/PricesContext";
import ProductsContext from "../context/ProductsContext";
import SelectedShopContext from "../context/SelectedShopContext";
import ShopsContext from "../context/ShopsContext";
import CartContext from "../context/CartContext";

// Página de información individual del producto
function ProductInfo() {
    // Importamos los contextos necesarios
    const {id} = useParams();
    const {products} = useContext(ProductsContext);
    const {prices} = useContext(PricesContext);
    const {selectedShop} = useContext(SelectedShopContext)
    const {shops} = useContext(ShopsContext);
    const {cart, setCart} = useContext(CartContext);

    return (
        <>
            {
                // Se imprime solo la información de un producto
                products && shops && prices && cart && products.map((product) => {
                    if (product.id.toString() === id) {
                        return (
                            <div key={product.id} id="productInfo" className="col-8 p-3 my-3 mx-auto">
                                <div className="productInfo mx-auto">
                                    <div className="p-3 align-self-center text-center">
                                        {
                                            product ?
                                                <img src={product.image} alt={product.name} className="img-fluid imgFormat"/>
                                                : <i className="far fa-image fa-5x m-2"></i>
                                        }
                                    </div>
                                    <div className="col text-left p-3">
                                        <h4 className="mainColor">{product ? product.name : ""}</h4>
                                        <p className="mainColor m-0">{prices.filter((price) => {
                                            return price.shop_id === selectedShop.id && price.product_id.toString() === id;
                                        })[0].price + " €"}</p>
                                        <button type="button" className="btn btn-warning my-3 justify-content-center" onClick={
                                            () => {
                                                // Cuando se pulse el boton de Añadir comprovamos si existe el producto en el carrito
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
                                    <div className="col text-left p-3">
                                        <h5 className="mainColor">En otras tiendas</h5>
                                        <ul className="list-group list-group-flush">
                                            {
                                                // Se añaden las tiendas en las que esta disponible el producto y su precio
                                                shops.map((shop) => {
                                                    if (shop.id !== selectedShop.id) {
                                                        return (
                                                            <li key={shop.id} className="list-group-item bg-transparent">
                                                                {shop.name} ({
                                                                parseFloat(prices.filter((price) => {
                                                                    return price.shop_id === shop.id && price.product_id.toString() === id;
                                                                })[0].price).toFixed(2)
                                                            }€)
                                                            </li>
                                                        )
                                                    }
                                                })
                                            }
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        )
                    }
                })
            }

        </>
    )
}

export default ProductInfo;