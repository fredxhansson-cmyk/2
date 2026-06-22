import '../styles/globals.css';
import { useState, useEffect } from 'react';
function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => { if (!localStorage.getItem('cookie-ok')) setShow(true); }, []);
  if (!show) return null;
  return (
    <div className="cookie-banner">
      <span>Vi använder cookies för att förbättra upplevelsen. <a href="/integritetspolicy" style={{ color: '#818cf8', textDecoration: 'underline' }}>Läs mer</a></span>
      <button onClick={() => { localStorage.setItem('cookie-ok','1'); setShow(false); }} style={{ padding: '8px 18px', background: 'var(--accent)', color: 'var(--accent-text)', borderRadius: 'var(--radius)', fontSize: '13px', fontWeight: '600', cursor: 'pointer', border: 'none', whiteSpace: 'nowrap' }}>Godkänn</button>
    </div>
  );
}
export default function App({ Component, pageProps }) {
  return <><Component {...pageProps} /><CookieBanner /></>;
}