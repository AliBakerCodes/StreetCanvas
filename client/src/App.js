// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import Upload from './pages/Upload';
// import GetLocation from './pages/GetLocation';
// import GoLive from './pages/GoLive';
// import Explore from './pages/Explore';

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div className="flex-column justify-center align-center min-100-vh bg-primary">
//           <Routes>
//             <Route 
//               path="/upload" 
//               element={<Upload />}
//             />
//             <Route 
//               path="/getlocation" 
//               element={<GetLocation />}
//             />
//             <Route 
//               path="/golive" 
//               element={<GoLive />}
//             />
//             <Route 
//               path="/explore"
//               element={<Explore />}
//             />
//           </Routes>
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
// }

// export default App;
