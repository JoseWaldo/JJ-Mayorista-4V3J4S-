const containerArticleProducts = document.querySelector('.container__infoSale')
const products = JSON.parse(localStorage.getItem("Product")) 
const totalProds = document.querySelector('.totalSales') 

const articleProduct = function(amount, unitaryPrice, client, dateTime, observation, product) {
    let subtotal = unitaryPrice * amount
    const article = `
    <article class="infoSale__product">
        <h3>${product}</h3>
        <section class="infoSale__details">
            <p class="details__type">Cantidad</p>
            <p class="details__value">${amount}</p>
        </section>
        <section class="infoSale__details">
            <p class="details__type">Valor unitario</p>
            <p class="details__value">${unitaryPrice}</p>
        </section>
        <section class="infoSale__details">
            <p class="details__type">Impuesto unitario</p>
            <p class="details__value">0</p>
        </section>
        <section class="infoSale__details">
            <p class="details__type">Subtotal</p>
            <p class="details__value">$ ${subtotal}</p>
        </section>
        <section class="infoSale__details">
            <p class="details__type">Cliente</p>
            <p class="details__value">${client}</p>
        </section>
        <section class="infoSale__details">
            <p class="details__type">Fecha de registro</p>
            <p class="details__value">${dateTime}</p>
        </section>
        <section class="infoSale__details">
            <p class="details__type">Tipo de pago</p>
            <p class="details__value">Contado</p>
        </section>
        <section class="infoSale__details">
            <p class="details__type">Observaciones</p>
            <p class="details__value">${observation}</p>
        </section>
    </article>
`
    return article
}

let total = 0

products.invoices.forEach(prod => {
    
    let cantProd = parseInt(prod.amount)
    let buyDate = prod.buyDate
    let client = prod.client
    let observ = prod.observations
    let product = prod.product
    let uPrice = parseInt(prod.unitaryPrice)

    total += cantProd * uPrice

    let article = articleProduct(cantProd, uPrice, client, buyDate, observ, product)

    containerArticleProducts.innerHTML += article
});

totalProds.textContent = `T: $ ${total}`

