// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalContext } from './global.context';
import { useAuth } from '../core';
import { Header } from '../components/header';
import { AuthenticatedRoutes } from './routes/authenticated.routes';
import { NonAuthenticatedRoutes } from './routes/non-authenticated.routes';

export function App() {
  const { currentUser } = useAuth();

  return (
    <GlobalContext.Provider value={{ currentUser }}>
      {currentUser && <Header />}
      <Routes>
        {currentUser ? AuthenticatedRoutes() : NonAuthenticatedRoutes()}
      </Routes>
    </GlobalContext.Provider>
  );
}

export default App;
