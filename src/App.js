import './App.css';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/Routers/AppRouter';
import {AuthProvider} from './components/Providers/AuthProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        {/* Main Router */}
        {/* Home page */}
        {/* customer pages */}
        {/* Employee pages */}
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
