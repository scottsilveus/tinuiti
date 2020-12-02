import React from 'react'
import { gql, useQuery } from '@apollo/client'

const PRODUCTS = gql`
    query GetAllProductNames {
        allProducts {
            productId
            productName
        }
    }
`

function Table() {
    const { loading, error, data } = useQuery(PRODUCTS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    console.log(data)
    return (
        <React.Fragment>
            <div>Hello</div>
        </React.Fragment>
    )
}

export default Table
