// Página con formulario para registrarse
function Register() {
    return (
        <>
            <div className="container col-8 p-5 my-3 justify-content-center containerFormat">
                <div className="my-3">
                    <div className="col-md-12 text-center">
                        <h1 className="mainColor">Registrarse</h1>
                    </div>
                </div>
                <div className="col-6 mx-auto text-left">
                    <form action="" method="" name="register">
                        <div className="form-group form-inline my-3">
                            <label htmlFor="name" className="mainColor">Nombre: <span className="text-danger">*</span></label>
                            <input type="text" name="name" id="name" className="form-control" required />
                        </div>
                        <div className="form-group form-inline my-3">
                            <label htmlFor="surname" className="mainColor">Apellidos: <span className="text-danger">*</span></label>
                            <input type="text" name="surname" id="surname" className="form-control" required />
                        </div>
                        <div className="form-group form-inline my-3">
                            <label htmlFor="email" className="mainColor">Correo electrónico: <span className="text-danger">*</span></label>
                            <input type="email" name="email" id="email" className="form-control" required />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="password" className="mainColor">Contraseña: <span className="text-danger">*</span></label>
                            <input type="password" name="password" id="password" className="form-control" required />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="password2" className="mainColor">Repite la contraseña: <span className="text-danger">*</span></label>
                            <input type="password" name="password2" id="password2" className="form-control" required />
                        </div>

                        <div className="col-md-12 text-center ">
                            <button type="submit" className="btn btn-outline-light tx-tfm my-3">Registrar</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;