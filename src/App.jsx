import Home from './pages/home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from './pages/dashboad'
import AdminLogin from './pages/adminLogin'
import { ThemeProvider } from '@mui/material';
import theme from './themes/theme';
import dashboardTheme from './themes/dashboardTheme';

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard") || location.pathname === "/admin-login";

  return (
    <ThemeProvider theme={isDashboard ? dashboardTheme : theme}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/admin-login' element={<AdminLogin/>} />
    </Routes>
    </ThemeProvider>
  )
}

export default App
