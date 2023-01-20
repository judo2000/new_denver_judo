import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

// Construct main GraphQL API endpoint
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />}>
              Home
            </Route>
          </Routes>
        </main>
      </Router>
    </ApolloProvider>
  );
}

export default App;
