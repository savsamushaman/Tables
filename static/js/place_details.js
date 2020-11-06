console.log('place_details.js loaded')


let add_to_tray_buttons = document.getElementsByClassName('add-to-tray')

for (let i = 0; i < add_to_tray_buttons.length; i++) {

    add_to_tray_buttons[i].addEventListener('click', function () {

        let data = {
            id: this.dataset.productid,
            action: this.dataset.action
        }

        sendHttpRequest('POST', '/tray/add_remove/', data)
            .then( () => {

                let button = document.querySelector(`[data-productid=${CSS.escape(data.id)}]`)

                if (data['action'] === 'add') {
                    button.innerText = "Remove from order"
                    button.dataset.action = 'remove'
                    button.style.background = 'red'
                } else if (data['action'] === 'remove') {
                    button.innerText = 'Add to order'
                    button.dataset.action = 'add'
                    button.style.background = '#6a511e'
                }
            })
    })
}






