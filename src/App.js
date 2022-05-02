import { UserProvider } from './context/UserContext';
// import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import MobileNav from './components/MobileNav';
import Navbar from './components/Navbar';
import DarkModeContext, {
  DarkModeProvider,
  useDarkMode,
} from './context/DarkModeContext';
import DarkModeContainer from './components/DarkModeContainer';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import BookDetails from './components/BookDetails';
function App() {
  return (
    <div className={`App`}>
      <DarkModeProvider>
        <DarkModeContainer>
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
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route path="/book/:id" element={<BookDetails />}></Route>
              </Routes>
              <Footer />
            </Router>
          </UserProvider>
        </DarkModeContainer>
      </DarkModeProvider>
    </div>
  );
}

export default App;
