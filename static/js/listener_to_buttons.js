console.log('listener_to_buttons.js loaded')


const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {'content-type': 'application/json', 'X-CSRFToken': csrftoken}
    })
}

function add_remove_functionality() {

    let addButtons = document.getElementsByClassName('update_button')

    for (let i = 0; i < addButtons.length; i++) {
        addButtons[i].addEventListener('click', function () {

            let data = {
                id: this.dataset.productid,
                action: this.dataset.action
            };

            sendHttpRequest('POST', '/tray/update_tray/', data)
                .then(response => {
                    return response.json()
                })

                .then(responseData => {

                    let all_buttons = document.querySelectorAll(`[data-productid=${CSS.escape(data.id)}]`);

                    for (let element = 0; element < all_buttons.length; element++) {
                        if (responseData['new_value'] === 0) {

                            document.getElementById(data.id).remove()
                            location.reload()

                        } else if (responseData['new_value'] > 0)

                            all_buttons[element].innerText = responseData['new_value']
                    }


                })


        })
    }
}

add_remove_functionality()

