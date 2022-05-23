import {useContext} from "react";
import ShopsContext from "../context/ShopsContext";
import SelectedShopContext from "../context/SelectedShopContext";
import CartContext from "../context/CartContext";
import PricesContext from "../context/PricesContext";

// Barra lateral de tiendas
function ShopsAside () {
    // Importamos los contextos necesarios
    const {shops} = useContext(ShopsContext);
    const {selectedShop, setSelectedShop} = useContext(SelectedShopContext);
    const {cart} = useContext(CartContext);
    const {prices} = useContext(PricesContext);

    /**
     * Función para calcular el precio del carrito según una tienda
     * @param shop la tienda de la que se quiere calcular el precio
     * @returns {string} precio_total_carrito_por_tienda
     */
    const calcPriceForShop = (shop) => {
        let shop_id = shop.id;
        return parseFloat(cart.reduce((total, product) => {
            let price = parseFloat(prices.filter((price) => {
                return price.shop_id === shop_id && price.product_id === product.id;
            })[0].price);

            return total + (price * parseInt(product.quantity))
        }, 0)).toFixed(2);
    }

    return (
        <aside className="p-0 h-50 d-flex justify-content-start align-content-start mt-2">
            <div id="shops" className="offset-2 col-8 offset-md-0 col-md-9 col-xl-8 pt-3">
                <div className="row justify-content-center mx-2">
                    {
                        shops && prices && cart && shops.map((shop) => {
                            if (shop.id !== selectedShop.id) {
                                return (
                                    <div key={shop.id} className="shop col-11 p-1 p-xl-2 p-xxl-3 text-center mb-3">
                                        <div>
                                            <h4>{shop.name}</h4>
                                            <p className="mainColor">{calcPriceForShop(shop)} €</p>
                                            <button value="${s.id}" type="button" className="btn btn-warning" onClick={() => {
                                                setSelectedShop(shop)
                                            }}>Cambiar
                                            </button>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <></>
                                )
                            }
                        })
                    }
                </div>
            </div>

        </aside>
    )
}

export default ShopsAside;