import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { I18nProvider } from './lib/i18n';
import { ProgressProvider } from './lib/progress';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <ProgressProvider>
        <App />
      </ProgressProvider>
    </I18nProvider>
  </StrictMode>,
);
