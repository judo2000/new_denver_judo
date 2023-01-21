import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import SideNav from './components/SideNav';
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
        <div className="site-container d-flex flex-column">
          <header>
            <SideNav />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomeScreen />}>
                Home
              </Route>
            </Routes>
          </main>
          <footer>
            <div className="text-center">All rights reserved</div>
          </footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
