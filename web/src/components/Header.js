import {NavLink} from 'react-router-dom';

// Cabecera
function Header () {
    return (
        <header className="d-flex flex-wrap align-items-center justify-content-around justify-content-md-between p-5">

            <NavLink to="/" className="d-flex align-items-center mb-2 mb-md-0 text-decoration-none">
                <h1 className="fs-4 mainColor">SpendLess</h1>
            </NavLink>

            <form className="form-inline">
                <input id="search" type="search" className="form-control" placeholder="Producto..." aria-label="Buscar" />
                    <button className="btn btn-outline-light" type="submit"><i className="fa fa-search"></i></button>
            </form>


            <div className="text-end">
                <NavLink to="/login" className="btn btn-outline-light me-1">Login</NavLink>
                <NavLink to="/register" className="btn btn-outline-light">Registrar</NavLink>
                <NavLink to="/cart" className="btn btn-outline-light ms-1"><i className="fa fa-shopping-cart"></i></NavLink>
            </div>
        </header>
    )
}

export default Header