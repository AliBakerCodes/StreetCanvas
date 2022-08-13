import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/pages/style.css";
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import Upload from './pages/Upload';
import AddPeg from './pages/AddPeg';
import GoLive from './pages/GoLive';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup'

const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      
      <Router>
        <Header />
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
              path="/signup"
              element={<Signup />}
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
      
    </ApolloProvider>
  );
}

export default App;

