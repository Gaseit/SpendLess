// Página con el formulario para contactar con nosotros
function Contact () {
    return (
        <>
            <div className="container col-8 p-5 my-3 justify-content-center containerFormat">
                <div className="my-3">
                    <div className="col-md-12 text-center">
                        <h1 className="mainColor">Que nos quieres comentar?</h1>
                    </div>
                </div>
                <div className="col-6 mx-auto text-left">
                    <form action="" method="" name="contact">
                        <div className="form-group form-inline my-3">
                            <label htmlFor="email" className="mainColor">Email: <span className="text-danger">*</span></label>
                            <input type="email" name="email" id="email" className="form-control" required />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="notes" className="mainColor">Comentario: <span className="text-danger">*</span></label>
                            <textarea className="form-control" id="notes" rows="3" required></textarea>
                        </div>

                        <div className="col-md-12 text-center ">
                            <button type="submit" className="btn btn-outline-light tx-tfm my-3">Envia</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;