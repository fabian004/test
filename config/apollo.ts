import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri:'https://backbead.fly.dev/graphql/'
    })

});

export default client


//http://localhost:8080/graphql/
//https://backbead.fly.dev/graphql/