import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

function ApolloWrapper({ children }) {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: 'http://localhost:5000/graphql',
    })

    return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloWrapper
