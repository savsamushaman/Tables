let place_slug = document.getElementById('title').dataset.place
let order_list = document.getElementById('order_list')
let orders = document.getElementsByClassName('order-div')
let ids = new Set()

for (let i = 0; i < orders.length; i++) {
    ids.add(parseInt(orders[i].dataset.orderid))
}


function startLiveUpdate() {


    setInterval(function () {
        let data = {
            business: place_slug,
        };
        sendHttpRequest("POST", '/owned/active_orders/', data)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                let response_orders = data['results']
                for (let i = 0; i < response_orders.length; i++) {
                    let response_id = response_orders[i].orderid
                    if (!ids.has(response_id)) {

                        let item = document.createElement('div')
                        item.dataset.orderid = response_id
                        item.classList.add('order-div')
                        item.innerHTML = `    <a href="/owned/klausen-pub/feed/${response_id}">
                                                    <button>Process Order</button>
                                              </a>
                                              <p>Table : ${response_orders[i]['table']}</p>
                                              <p>Customer : ${response_orders[i]['customer']}</p>
                                              <p>Order : (id = ${response_id}) </p>`

                        let order_items = response_orders[i]['items']
                        let order_items_p = document.createElement('p')
                        for (let i = 0; i < order_items.length; i++) {
                            let order_item = document.createElement('p')
                            order_item.innerText = `${order_items[i]['product_name']} x ${order_items[i]['quantity']}`
                            order_items_p.appendChild(order_item)
                        }
                        item.appendChild(order_items_p)

                        order_list.appendChild(item)
                        ids.add(response_id)
                    }
                }

            })
            .catch(function (error) {
                console.log(error)
            })

    }, 20000)

}

document.addEventListener('DOMContentLoaded', function () {
    startLiveUpdate()
})




