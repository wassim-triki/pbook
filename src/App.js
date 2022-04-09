import { UserProvider } from './context/UserContext';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Home />
      </UserProvider>
    </div>
  );
}

export default App;
