import { gql } from '@apollo/client'

const GET_PRODUCTS = gql`
    query GetAllProductNames {
        allProducts {
            productId
            productName
            inBuybox
            price
            image
            keyword
            dailyRankings
            category
            productDescription
            reviews
        }
    }
`

export default GET_PRODUCTS
