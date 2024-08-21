import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import IndexDashboard from './pages/dashboard';
import DefaultLayout from './components/DefaultLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login}></Route>
          <Route path='/painel-controle' element={<DefaultLayout><IndexDashboard /></DefaultLayout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;