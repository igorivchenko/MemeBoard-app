import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const TablePage = lazy(() => import('../pages/TablePage/TablePage'));
const MemesPage = lazy(() => import('../pages/MemesPage/MemesPage'));

function App() {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="table" element={<TablePage />} />
          <Route path="memes" element={<MemesPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
