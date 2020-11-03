console.log('LOG')

const addButtons = document.getElementsByClassName('update_button')


const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {'content-type': 'application/json', 'X-CSRFToken': csrftoken}

    })
}

for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', function () {
        let productId = this.dataset.productid
        let action = this.dataset.action

        sendHttpRequest('POST', '/tray/update_tray/', {'id': productId, 'action': action})
            .then(response => {
                return response.json()
            })
            .then(responseData => {

                let all_buttons = document.querySelectorAll(`[data-productid=${CSS.escape(productId)}]`);

                for (let element = 0; element < all_buttons.length; element++) {
                    if (responseData['new_value'] === 0) {

                        document.getElementById(productId).remove()
                        location.reload()

                    } else if (responseData['new_value'] > 0)

                        all_buttons[element].innerText = responseData['new_value']
                }



            })



    })
}

document.querySelector('[data-product]')