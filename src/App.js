import { UserProvider } from './context/UserContext';
// import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import MobileNav from './components/MobileNav';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <MobileNav />

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
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
