const slug = JSON.parse(document.getElementById('slug').textContent)

const feedsocket = new WebSocket(
    'ws://'
    + window.location.host
    + '/ws/owned/'
    + slug
    + '/feed/'
);

feedsocket.onclose = function (e) {
    console.error('FeedSocket closed unexpectedly')
}


feedsocket.onmessage = function (e) {
    const data = JSON.parse(e.data);
    console.log(data.message)
    console.log(data.event)


    const order_data = data.message
    const items = data.message.items

    for (const elem in items) {
        if (items.hasOwnProperty(elem)) {
            console.log(elem, items[elem])
        }

    }
    if (data.event === 'new_order') {
        let order = document.createElement('div')
        order.id = order_data['pk']
        order.classList.add('order-div')
        order.innerHTML = `<a href="/owned/klausen-pub/feed/${order_data['pk']}">
                                                    <button>Process Order</button>
                                              </a>
                                              <p>Table : ${order_data['table']}</p>
                                              <p>Customer : ${order_data['customer']}</p>
                                              <p>Order : (id = ${order_data['pk']}) </p>`


        let order_items_list = document.createElement('ul')

        for (let item in items) {
            if (items.hasOwnProperty(item)) {

                let order_item = document.createElement('li')
                order_item.innerText = `${item} x ${items[item]}`
                order_items_list.appendChild(order_item)

            }
        }
        console.log(order_items_list)
        order.appendChild(order_items_list)
        order_list.appendChild(order)
    }

    if (data.event === 'cancel_order') {
        const obj = document.getElementById(`${data.message['pk']}`)
        obj.remove()
    }
}


// const x = document.createElement('P')
//         const node = document.createTextNode(`${data.message}`)
//         x.appendChild(node)
//         document.body.appendChild(x)