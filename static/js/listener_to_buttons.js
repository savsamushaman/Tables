

let addButtons = document.getElementsByClassName('update_quantity')

for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', function () {

        let data = {
            id: this.dataset.productid,
            action: this.dataset.action,
            price: this.dataset.price,
        };

        sendHttpRequest('POST', '/tray/update_tray/', data)
            .then(response => {
                return response.json()
            })

            .then(responseData => {
                if (responseData['new_value'] === 0) {
                    document.getElementById(data.id).remove()
                    location.reload()
                } else {
                    let subtotal_elem = document.getElementById('subtotal-' + data.id)
                    let grand_total = document.getElementById('grand_total')

                    let subtotal_val = parseFloat(subtotal_elem.innerText)
                    let grand_val = parseFloat(grand_total.innerText)

                    let unit_price = parseFloat(data.price)


                    if (data.action === 'add') {
                        subtotal_elem.innerText = (subtotal_val + unit_price).toFixed(2) + '$'
                        grand_total.innerText = (grand_val + unit_price).toFixed(2) + '$'
                    } else if (data.action === 'remove') {
                        subtotal_elem.innerText = (subtotal_val - unit_price).toFixed(2) + "$"
                        grand_total.innerText = (grand_val - unit_price).toFixed(2) + 'S'
                    }

                }

            })
    })
}




