import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Upload from './pages/Upload';
import AddPeg from './pages/AddPeg';
import GoLive from './pages/GoLive';
import Explore from './pages/Explore';
import Login from './pages/Login';


const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            {/* <Route 
              path="/" 
              element={<Home />}
            /> */}
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/upload"
              element={<Upload />}
            />
            <Route
              path="/addPeg"
              element={<AddPeg />}
            />
            <Route
              path="/golive"
              element={<GoLive />}
            />
            <Route
              path="/explore"
              element={<Explore />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
