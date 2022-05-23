// Página con formulario para hacer login
function Login () {
    return (
        <>
            <div className="container col-8 p-5 my-3 justify-content-center containerFormat">
                <div className="my-3">
                    <div className="col-md-12 text-center">
                        <h1 className="mainColor">Iniciar sesión</h1>
                    </div>
                </div>
                <div className="col-6 mx-auto text-left">
                    <form action="" method="" name="login">
                        <div className="form-group form-inline my-3">
                            <label htmlFor="email" className="mainColor">Correo electrónico: <span className="text-danger">*</span></label>
                            <input type="email" name="email" id="email" className="form-control" required />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="password" className="mainColor">Contraseña: <span className="text-danger">*</span></label>
                            <input type="password" name="password" id="password" className="form-control" required />
                        </div>

                        <div className="col-md-12 text-center ">
                            <button type="submit" className="btn btn-outline-light tx-tfm my-3">Iniciar sesión</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;