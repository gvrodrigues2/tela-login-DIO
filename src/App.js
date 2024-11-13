import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import { Home } from './pages/home';
import { Login } from './pages/login';
import { Feed } from './pages/feed';
import { Cadastro } from './pages/cadastro';
import UsersList from './pages/UsersList';

function App() {
  return (
    <Router basename="/tela-login-DIO">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/users" element={<UsersList />} />
        </Routes>
      </Router>
  );
}

export default App;
