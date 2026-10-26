import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import { useI18n } from './lib/i18n';
import { useProgress } from './lib/progress';
import Home from './pages/Home';
import Hangul from './pages/Hangul';
import Lesson from './pages/Lesson';
import Review from './pages/Review';
import Account from './pages/Account';
import Exam from './pages/Exam';

export default function App() {
  const { t, lang, setLang } = useI18n();
  const { dueCount } = useProgress();
  return (
    <HashRouter>
      <header className="top">
        <NavLink to="/" className="brand">🌸 AstEr <span className="ko">한국어</span></NavLink>
        <div className="lang" role="group" aria-label="Language">
          {(['ru', 'en'] as const).map((l) => (
            <button type="button" key={l} className={lang === l ? 'active' : ''} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
          ))}
        </div>
      </header>
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hangul" element={<Hangul />} />
          <Route path="/lesson/:id" element={<Lesson />} />
          <Route path="/exam/:id" element={<Exam />} />
          <Route path="/review" element={<Review />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <nav className="tabbar" aria-label="Main">
        <NavLink to="/" end><span>🏠</span>{t('home')}</NavLink>
        <NavLink to="/hangul"><span className="ko">한</span>{t('hangul')}</NavLink>
        <NavLink to="/review"><span>🃏{dueCount > 0 && <i className="badge">{dueCount}</i>}</span>{t('review')}</NavLink>
        <NavLink to="/account"><span>👤</span>{t('account')}</NavLink>
      </nav>
    </HashRouter>
  );
}
