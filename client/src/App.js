import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bootstrap from "bootstrap";
import ReactBootstrap from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Upload from './pages/Upload';
import AddPeg from './pages/AddPeg';
import GoLive from './pages/GoLive';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';

// export default function PortfolioContainer() {
//   const [currentPage, setCurrentPage] = useState('Home');
//   const renderPage = () => {
//     if (currentPage === 'Home') {
//       return <Home />;
//     }
//     if (currentPage === 'Upload') {
//       return <Upload />;
//     }
//     if (currentPage === 'goLive') {
//       return <AddPeg />;
//     }
//     if (currentPage === 'addPeg') {
//       return <GoLive />;
//     }
//     return <Explore />;
//   };

function App() {
  return (
    // <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<Home />}
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
    // </ApolloProvider>
  );
}

export default App;

