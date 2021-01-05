const slug = JSON.parse(document.getElementById('slug').textContent)
const FeedDiv = document.getElementById('order-feed-div')
const EmptyFeedH2 = document.getElementById('empty-feed')

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

    switch (data.event) {
        case 'new_order':


            const ItemsDiv = document.createElement('div')
            ItemsDiv.classList.add('order-items-div')
            const NewOrderItems = document.createElement('ul')

            const items = data.message.items

            for (let elem in items) {
                if (items.hasOwnProperty(elem)) {
                    let OrderItem = document.createElement('li')
                    OrderItem.classList.add('font-italic')
                    OrderItem.innerText = `${items[elem]} x ${elem}`
                    NewOrderItems.appendChild(OrderItem)
                }
            }

            ItemsDiv.appendChild(NewOrderItems)

            let NewOrderDiv = document.createElement('div')
            NewOrderDiv.id = `order-${data.message['pk']}`
            NewOrderDiv.classList.add('container', 'd-flex', 'align-items-center', 'flex-column', 'bigbox', 'order-div')
            NewOrderDiv.innerHTML = `

                <i class="fas fa-user-cog"></i>
                <p id="handler-${data.message['pk']}" class="masthead-subheading mb-0 unhandled">Handled by :
                                    None</p>
                <i class="fas fa-user"></i>
                <p class="masthead-subheading mb-0"> Customer username : ${data.message['customer']}</p>
                <p class="masthead-subheading mb-0"> Customer name : ${data.message['customer_first_name']} ${data.message['customer_last_name']}</p>
                <i class="fas fa-chair"></i>
                <p class="masthead-subheading mb-0">Table : ${data.message['table']}</p>
                <i class="fas fa-star-half-alt"></i>
                <p class="masthead-subheading mb-0"> Status : 
                    <span id="status-${data.message['pk']}" class="placed"> Placed </span>
                </p>
                <i class="fas fa-dollar-sign"></i>
                <p class="masthead-subheading mb-0">Total : ${data.message['total'].toFixed(2)}</p>
                <p style="font-weight: 600">Order contains :</p>
            `
            NewOrderDiv.addEventListener('animationend', () => {
                NewOrderDiv.remove()
            })

            NewOrderDiv.appendChild(ItemsDiv)

            const newButtonsDiv = document.createElement('div')
            newButtonsDiv.id = `buttons-div-${data.message['pk']}`
            newButtonsDiv.classList.add('display-contents')

            const newHandleButton = document.createElement('button')
            newHandleButton.id = `handle-button-${data.message['pk']}`
            newHandleButton.value = `${data.message['pk']}`
            newHandleButton.classList.add('btn', 'btn--radius-2', 'btn--green', 'update-button', 'interaction-button')
            newHandleButton.innerText = 'Handle'

            newHandleButton.addEventListener('click', function () {
                    feedsocket.send(JSON.stringify({
                        'message': newHandleButton.value,
                        'event': 'handle_order'
                    }));
                }
            );

            newButtonsDiv.appendChild(newHandleButton)
            NewOrderDiv.appendChild(newButtonsDiv)

            if (EmptyFeedH2) {
                EmptyFeedH2.remove()
            }

            FeedDiv.appendChild(NewOrderDiv)

            break;
        case 'handle_order_success':
            const buttonsDiv = document.getElementById(`buttons-div-${data.message}`)

            const doneButton = document.createElement('button')
            doneButton.id = `done-button-${data.message}`
            doneButton.value = `${data.message}`
            doneButton.classList.add('btn', 'btn--radius-2', 'btn--green', 'done-button', 'interaction-button')
            doneButton.innerText = 'Mark as done'
            doneButton.addEventListener('click', function () {

                    feedsocket.send(JSON.stringify({
                        'message': doneButton.value,
                        'event': 'mark_as_done'
                    }));
                }
            );

            const rejectButton = document.createElement('button')
            rejectButton.id = `reject-button-${data.message}`
            rejectButton.value = `${data.message}`
            rejectButton.classList.add('btn', 'btn--radius-2', 'btn--green', 'reject-button', 'interaction-button')
            rejectButton.innerText = 'Reject order'
            rejectButton.addEventListener('click', function () {

                    feedsocket.send(JSON.stringify({
                        'message': rejectButton.value,
                        'event': 'cancel_order'
                    }));
                }
            );

            buttonsDiv.appendChild(doneButton)
            buttonsDiv.appendChild(rejectButton)

            break;
        case 'handle_order_by_someone':
            const status = document.getElementById(`status-${data.message}`)
            const handler = document.getElementById(`handler-${data.message}`)
            const handleButton = document.getElementById(`handle-button-${data.message}`)

            handleButton.remove()

            handler.classList.remove('unhandled');
            handler.classList.add('handled')
            handler.innerText = `Handled by : ${data.user}`

            status.classList.remove('placed')
            status.classList.add('serving')
            status.innerText = 'Serving'
            break;
        case 'handle_order_fail_not_allowed':
        case 'cancel_order_fail_not_allowed':
        case 'mark_as_done_fail_not_allowed':
            alert(`Order ${data.message} is handled by someone else or is unhandled`)
            break;
        case 'handle_order_fail_non_existent':
        case 'cancel_order_fail_non_existent':
        case 'mark_as_done_fail_non_existent':
            alert(`Order ${data.message} does not exist (anymore)`)
            break;
        case 'cancel_order_by_someone':
        case 'mark_as_done_success':
            const orderDiv = document.getElementById(`order-${data.message}`)
            orderDiv.classList.add('fade-out-on-removal')
            break;


    }

}


const allHandleButtons = document.getElementsByClassName('interaction-button')

for (let i = 0; i < allHandleButtons.length; i++) {
    let buttonId = allHandleButtons[i].id
    let buttonValue = allHandleButtons[i].value
    if (buttonId.includes('handle')) {
        allHandleButtons[i].addEventListener('click', function () {

                feedsocket.send(JSON.stringify({
                    'message': buttonValue,
                    'event': 'handle_order'
                }));
            }
        );

    } else if (buttonId.includes('done')) {

        allHandleButtons[i].addEventListener('click', function () {

                feedsocket.send(JSON.stringify({
                    'message': buttonValue,
                    'event': 'mark_as_done'
                }));


            }
        );

    } else if (buttonId.includes('reject')) {
        allHandleButtons[i].addEventListener('click', function () {

                feedsocket.send(JSON.stringify({
                    'message': buttonValue,
                    'event': 'cancel_order'
                }));
            }
        );
    }

}


function addListener(value, index, array) {
    value.addEventListener('animationend', () => {
        value.remove()
    })
}

const orderDivs = document.querySelectorAll('.order-div');
orderDivs.forEach(addListener);

