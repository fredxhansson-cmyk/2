import Head from 'next/head';
const domain = 'lokalmatsverige.se';
export default function Integritetspolicy() {
  return (
    <>
      <Head><title>Integritetspolicy — Lokal Matbeställningsplattform</title></Head>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', padding: '60px 0' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 20px' }}>
          <a href="/" style={{ color: 'var(--muted)', fontSize: '14px', display: 'block', marginBottom: '32px' }}>← Tillbaka</a>
          <h1 style={{ fontSize: '32px', marginBottom: '32px' }}>Integritetspolicy</h1>
          <div style={{ color: 'var(--muted)', lineHeight: '1.8', fontSize: '15px', display: 'grid', gap: '24px' }}>
            <p><strong style={{ color: 'var(--text)' }}>Personuppgiftsansvarig:</strong> Lokal Matbeställningsplattform, lokalmatsverige.se</p>
            <section><h2 style={{ color: 'var(--text)', fontSize: '20px', marginBottom: '10px', fontFamily: 'var(--display)' }}>Vilka uppgifter samlar vi in?</h2><p>Vi samlar in e-postadress och betalningsinformation vid köp. Betalningsuppgifter hanteras av Stripe och lagras aldrig hos oss.</p></section>
            <section><h2 style={{ color: 'var(--text)', fontSize: '20px', marginBottom: '10px', fontFamily: 'var(--display)' }}>Dina rättigheter (GDPR)</h2><p>Du har rätt att begära ut, rätta eller radera dina uppgifter. Kontakta oss på hej@lokalmatsverige.se.</p></section>
            <section><h2 style={{ color: 'var(--text)', fontSize: '20px', marginBottom: '10px', fontFamily: 'var(--display)' }}>Cookies</h2><p>Vi använder nödvändiga cookies för att sajten ska fungera och analytiska cookies för trafikmätning.</p></section>
            <p style={{ fontSize: '13px' }}>Senast uppdaterad: 2026-06-22</p>
          </div>
        </div>
      </div>
    </>
  );
}