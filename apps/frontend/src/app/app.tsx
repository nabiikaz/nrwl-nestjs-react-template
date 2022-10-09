// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <>
      <div />
      <Routes>
        <Route path="/" element={<div></div>} />
      </Routes>
    </>
  );
}

export default App;
