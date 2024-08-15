import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login}></Route>
          <Route path='/dashboard' Component={Dashboard}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;