import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Construct main GraphQL API endpoint
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Denver Judo</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
