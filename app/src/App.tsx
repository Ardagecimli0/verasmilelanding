import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';
import { localeToSlug, defaultLocale } from './i18n';

function App() {
  const defaultSlug = localeToSlug[defaultLocale];

  return (
    <BrowserRouter>
      <Routes>
        {/* Root redirect to default locale */}
        <Route path="/" element={<Navigate to={`/${defaultSlug}`} replace />} />

        {/* Localized landing pages */}
        <Route path="/:slug" element={<LandingPage />} />

        {/* 404 fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
