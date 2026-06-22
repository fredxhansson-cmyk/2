import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
export default function Tack() {
  const router = useRouter();
  const { session_id } = router.query;
  const [status, setStatus] = useState('loading');
  const [email, setEmail] = useState('');
  useEffect(() => {
    if (!session_id) return;
    fetch(`/api/verify?session_id=${session_id}`).then(r=>r.json()).then(d=>{
      if (d.paid) { setStatus('paid'); setEmail(d.email||''); } else setStatus('error');
    }).catch(()=>setStatus('error'));
  }, [session_id]);
  return (
    <>
      <Head><title>Tack för ditt köp!</title><meta name="robots" content="noindex" /></Head>
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', padding: '20px' }}>
        {status === 'loading' && <div style={{ textAlign: 'center' }}><div style={{ fontSize: '40px' }}>⏳</div><p style={{ marginTop: '16px', color: 'var(--muted)' }}>Bekräftar betalning...</p></div>}
        {status === 'paid' && (
          <div style={{ maxWidth: '480px', textAlign: 'center', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '48px 32px' }}>
            <div style={{ fontSize: '52px', marginBottom: '16px' }}>✅</div>
            <h1 style={{ fontSize: '28px', marginBottom: '12px' }}>Tack för ditt köp!</h1>
            <p style={{ color: 'var(--muted)', marginBottom: '24px', lineHeight: '1.7' }}>{email ? `Kvitto skickat till ${email}.` : 'Kvitto skickas till din e-post.'} Din produkt levereras direkt.</p>
            <a href="/" style={{ display: 'inline-block', padding: '12px 24px', background: 'var(--accent)', color: 'var(--accent-text)', borderRadius: 'var(--radius)', fontSize: '14px', fontWeight: '600' }}>← Tillbaka till startsidan</a>
          </div>
        )}
        {status === 'error' && <div style={{ textAlign: 'center' }}><div style={{ fontSize: '40px' }}>⚠️</div><h2 style={{ margin: '16px 0 8px' }}>Något gick fel</h2><p style={{ color: 'var(--muted)' }}>Kontakta oss om du blivit debiterad.</p></div>}
      </div>
    </>
  );
}