const form = document.querySelector('.cash-register__form')
const json = {
    "invoices": [

    ]
}

const validar = function(e) {
    
    const idSale = form.idSale.value
    const client = form.client.value
    const product = form.product.value
    const imei = form.imei.value
    const cant = form.cant.value
    const unitaryPrice = form.unitaryPrice.value
    const observation = form.observ.value
    const msgError = document.querySelector('#messageError')

    if(idSale === '') {
        e.preventDefault()
        msgError.textContent = 'Por favor ingrese el ID de la venta.'
        form.idSale.focus()
    }

    else if(client === '') {
        e.preventDefault()
        msgError.textContent = 'Por favor ingrese el Cliente'
        form.client.focus()
    }

    else if(product === '') {
        e.preventDefault()
        msgError.textContent = 'Por favor ingrese el producto'
        form.product.focus()
    }

    else if(imei === '') {
        e.preventDefault()
        msgError.textContent = 'Por favor ingrese el IMEI'
        form.imei.focus()
    }

    else if(cant === '') {
        e.preventDefault()
        msgError.textContent = 'Por favor ingrese la Cantidad'
        form.cant.focus()
    }

    else if(unitaryPrice === '') {
        e.preventDefault()
        msgError.textContent = 'Por favor ingrese el Precio de la unidad'
        form.unitaryPrice.focus()
    }

    else {
        e.preventDefault()
        let date = new Date()
        let dateBuy = date.toLocaleString()
        msgError.textContent = "El producto fue guardado exitosamente"
        msgError.style.color = '#008000'

        setTimeout(() => {
            msgError.textContent = ''
        }, 2000);

        json.invoices.push({
            "client": client,
            "product": product,
            "unitaryPrice": unitaryPrice,
            "amount": cant,
            "observations": observation,
            "buyDate": dateBuy,
        })

        let jsonObj = JSON.stringify(json)

        localStorage.setItem("Product", jsonObj)
    }

}

form.addEventListener('submit', validar)


// console.log(form)