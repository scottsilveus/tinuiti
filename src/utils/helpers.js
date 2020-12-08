export function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) return false
    }
    return true
}

export function sortProducts(items, filter, sortBy) {
    switch (filter) {
        case 'name':
            filter = 'productName'
            break
        case 'in-buy-box':
            filter = 'inBuybox'
            break
    }

    if (sortBy === 'asc') {
        // reviews and rating come in another oject named reviews
        if (filter === 'reviews' || filter === 'rating') {
            // number of reviews comes in as count
            if (filter === 'reviews') {
                filter = 'count'
            }
            return items.sort((a, b) =>
                a['reviews'][0][filter] > b['reviews'][0][filter] ? 1 : -1
            )
        }

        return items.sort((a, b) => (a[filter] > b[filter] ? 1 : -1))
    }

    if (sortBy === 'dsc') {
        // reviews and rating come in another oject named reviews
        if (filter === 'reviews' || filter === 'rating') {
            // number of reviews comes in as count
            if (filter === 'reviews') {
                filter = 'count'
            }
            return items.sort((a, b) =>
                a['reviews'][0][filter] < b['reviews'][0][filter] ? 1 : -1
            )
        }
        return items.slice().sort((a, b) => (a[filter] < b[filter] ? 1 : -1))
    }
}
