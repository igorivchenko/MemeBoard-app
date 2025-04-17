import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize';
import './index.css';
import App from './components/App';
import { HeroUIProvider } from '@heroui/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HeroUIProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <App />
        </HeroUIProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
