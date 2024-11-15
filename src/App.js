// import './App.css';
// import PrimarySearchAppBar from './components/appbar';
// import PersistentDrawerLeft from './components/sidebar';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MovieGridRedux from './components/MovieGridRedux';


// function App() {
//   return (
//     <Router>
//     <div>
//       <PrimarySearchAppBar />
//       <PersistentDrawerLeft />
   
//       <main
//         style={{ marginLeft: "240px", marginTop: "64px", padding: "20px" }}
//       >
//         <Routes>
//           <Route path="/" element={<MovieGridRedux category="popular" />} />
//           <Route
//             path="/action"
//             element={<MovieGridRedux category="action" />}
//           />
//           <Route
//             path="/adventure"
//             element={<MovieGridRedux category="adventure" />}
//           />
//           <Route
//             path="/comedy"
//             element={<MovieGridRedux category="comedy" />}
//           />
//         </Routes>
//       </main>
//     </div>
//   </Router>
    
//   );



  
// }

// export default App; 

import './App.css';
import PrimarySearchAppBar from './components/appbar';
import PersistentDrawerLeft from './components/sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieGridRedux from './components/MovieGridRedux';

function App() {
  return (
    <Router>
      <div>
        <PrimarySearchAppBar />
        <PersistentDrawerLeft />
        <main style={{ marginLeft: "240px", marginTop: "64px", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<MovieGridRedux category="popular" />} />
            <Route path="/action" element={<MovieGridRedux category="action" />} />
            <Route path="/adventure" element={<MovieGridRedux category="adventure" />} />
            <Route path="/comedy" element={<MovieGridRedux category="comedy" />} />
            <Route path="/horror" element={<MovieGridRedux category="horror" />} />
            <Route path="/history" element={<MovieGridRedux category="history" />} />
            <Route path="/war" element={<MovieGridRedux category="war" />} />
            <Route path="/anime" element={<MovieGridRedux category="anime" />} />
            <Route path="/sci-fi" element={<MovieGridRedux category="sci-fi" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
