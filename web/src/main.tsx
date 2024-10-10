import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AudioProvider } from './utils/context/AudioProvider.tsx';

// ** Redux Imports
import { store } from './redux/store';
import { Provider } from 'react-redux';

// ** Toaster
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AudioProvider>
        <App />
        <Toaster position="top-right" />
      </AudioProvider>
    </Provider>
  </StrictMode>
);
