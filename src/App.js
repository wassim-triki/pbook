import { UserProvider } from './context/UserContext';
// import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import MobileNav from './components/MobileNav';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <MobileNav />
          <Navbar />
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={<ProtectedRoute></ProtectedRoute>}
            />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
