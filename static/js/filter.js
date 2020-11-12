let bar = document.getElementById('search')

let entries = document.querySelectorAll(`[data-type=${CSS.escape('entry')}]`)


bar.addEventListener('keyup', function () {

    let search_value = document.getElementById('search').value

    sendHttpRequest('POST', '/places/filter/', {'search_value': search_value})
        .then(responseData => {
            return responseData.json()
        })
        .then(data => {

            let results = new Set(Object.values(data['results']))

            for (let i = 0; i < entries.length; i++) {
                let elem = entries[i]
                if (!results.has(elem.dataset.name)) {
                    entries[i].style.display = 'none'
                } else if (results.has(elem.dataset.name) && entries[i].style.display === 'none') {
                    entries[i].style.display = 'list-item'

                }
            }
        })


})