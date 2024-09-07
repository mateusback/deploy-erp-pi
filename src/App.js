import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import LoginLayout from './components/layout/LoginLayout';
import Change from './pages/change-password/Change';
import Recover from './pages/recover-password/Recover';
import Index from './pages/dashboard';
import DashboardLayout from './components/layout/DashboardLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginLayout><Login /></LoginLayout>} />
          <Route path='/change-password' element={<LoginLayout><Change /></LoginLayout>} />
          <Route path='/recover-password' element={<LoginLayout><Recover /></LoginLayout>} />
          <Route path='/dashboard' element={<DashboardLayout><Index /></DashboardLayout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;