import {useContext} from "react";
import CartContext from "../context/CartContext";
import SelectedShopContext from "../context/SelectedShopContext";
import PricesContext from "../context/PricesContext";
import ShopAside from "./ShopAside";

// Página del carrito
function Cart() {
    // Importamos los contextos necesarios
    const {cart, setCart} = useContext(CartContext)
    const {prices} = useContext(PricesContext)
    const {selectedShop} = useContext(SelectedShopContext);

    /**
     * Función para calcular el precio total según la tienda seleccionada
     * @returns {string} precio_total_por_tienda
     */
    const calcTotal = () => {
        let shop_id = selectedShop.id;
        return parseFloat(cart.reduce((total, product) => {
            let product_price = prices.filter((price) => {
                return price.shop_id === shop_id && price.product_id === product.id;
            });
            let price = product_price.length > 0 ? parseFloat(product_price[0].price) : 0;

            return total + (price * parseInt(product.quantity))
        }, 0)).toFixed(2);
    }

    return (
        <>  { prices !== null ?
            <div className="m-auto">
                <h1 className="text-center mt-4">{selectedShop && selectedShop.name}</h1>
                <div className="row py-3">
                    <div className="col-12 col-md-9">
                        <div className="row mx-auto justify-content-center pe-5">
                            <div className="ms-5 mb-3 col-lg-12 col-md-12 col-12 containerFormat">
                            <table id="shoppingCart" className="table table-condensed table-responsive">
                                <thead>
                                <tr>
                                    <th className="w60">Producto</th>
                                    <th className="w12">Precio</th>
                                    <th className="w10">Cantidad</th>
                                    <th className="w16"></th>
                                </tr>
                                </thead>
                                <tbody>

                                {
                                cart.length === 0 ? (
                                    <tr>
                                        <td className="p-3">Añade productos para verlos en el carrito</td>
                                    </tr> 
                                ) : (
                                    // Por cada producto se imprime la plantilla del producto
                                    cart && cart.length > 0 && cart.map((product) => {
                                        let price = prices.filter((price) => {
                                            return price.shop_id === selectedShop.id && price.product_id === product.id;
                                        });
                                        return (<tr>
                                                <td data-th="Product">
                                                    <div className="row">
                                                        <div className="col-md-3 text-left">
                                                        <img src={product.image} alt={product.name} className="img-fluid d-none d-md-block mb-2 imgFormat"/>
                                                        </div>
                                                        <div className="col-md-9 text-left mt-sm-2">
                                                            <h4 className="mainColor">{product.name}</h4>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-th="Price mainColor">{(price.length > 0 ? parseFloat(price[0].price).toFixed(2) : "0.0") + " €"}</td>
                                                <td data-th="Quantity">
                                                    <input type="number"
                                                        className="form-control form-control-lg text-center" value={product.quantity} onChange={(e) => {
                                                            let aux = cart.map((producte) => {
                                                                    if (producte.id === product.id) {
                                                                        producte.quantity = e.target.value;
                                                                    }
                                                                    return producte;
                                                                });
                                                                aux = aux.filter((producte) => {
                                                                    return producte.quantity > 0;
                                                                })
                                                                setCart([...aux])
                                                    }}/>
                                                </td>
                                                <td className="actions" data-th="">
                                                    <div className="text-right">
                                                        <button
                                                        className="btn btn-outline-danger btn-md mb-2" onClick={() => {
                                                            let aux = cart.filter((producte) => {
                                                                return producte.id !== product.id;
                                                            })
                                                            setCart([...aux])
                                                        }}>
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                )}
                                </tbody>
                            </table>
                                <div className="text-end pe-3">
                                <h4>Subtotal:</h4>
                                <h1>{selectedShop && calcTotal()} €</h1>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 offset-2 col-md-3 offset-md-0">
                        <div className="row">
                            <ShopAside/>
                        </div>
                    </div>
                </div>
            </div>
            :  ""
        }

        </>
    )
}

export default Cart;