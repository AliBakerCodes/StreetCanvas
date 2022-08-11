import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Upload from './pages/Upload';
import AddPeg from './pages/AddPeg';
import GoLive from './pages/GoLive';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
     <ApolloProvider client={client}>
     <Header/>
      <Router>
        {/* <div className="flex-column justify-center align-center min-100-vh bg-primary"> */}
        
        <Routes>
            <Route 
              path="/" 
              element={<Home />}
            />
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
        {/* </div> */}
      </Router>
      <Footer/>
     </ApolloProvider>
  );
}

export default App;

