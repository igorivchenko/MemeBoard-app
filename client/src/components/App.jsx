import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const TablePage = lazy(() => import('../pages/TablePage/TablePage'));
const MemesPage = lazy(() => import('../pages/MemesPage/MemesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="table" element={<TablePage />} />
          <Route path="memes" element={<MemesPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
