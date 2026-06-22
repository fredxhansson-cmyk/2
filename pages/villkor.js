import Head from 'next/head';
const domain = 'lokalmatsverige.se';
export default function Villkor() {
  return (
    <>
      <Head><title>Användarvillkor — Lokal Matbeställningsplattform</title></Head>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', padding: '60px 0' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 20px' }}>
          <a href="/" style={{ color: 'var(--muted)', fontSize: '14px', display: 'block', marginBottom: '32px' }}>← Tillbaka</a>
          <h1 style={{ fontSize: '32px', marginBottom: '32px' }}>Användarvillkor</h1>
          <div style={{ color: 'var(--muted)', lineHeight: '1.8', fontSize: '15px', display: 'grid', gap: '24px' }}>
            <p>Dessa villkor gäller för användning av lokalmatsverige.se och köp av digitala produkter.</p>
            <section><h2 style={{ color: 'var(--text)', fontSize: '20px', marginBottom: '10px', fontFamily: 'var(--display)' }}>Digitala produkter</h2><p>Digitala produkter levereras direkt efter betalning. På grund av produkternas digitala natur tillämpas inte ångerrätt efter att nedladdning har skett, i enlighet med konsumentköplagen 2:6a.</p></section>
            <section><h2 style={{ color: 'var(--text)', fontSize: '20px', marginBottom: '10px', fontFamily: 'var(--display)' }}>Garanti</h2><p>Vi erbjuder nöjd-kund-garanti. Kontakta oss på hej@lokalmatsverige.se inom 14 dagar om du inte är nöjd.</p></section>
            <section><h2 style={{ color: 'var(--text)', fontSize: '20px', marginBottom: '10px', fontFamily: 'var(--display)' }}>Betalning</h2><p>Betalning sker via Stripe. Vi accepterar Visa, Mastercard och övriga vanliga betalkort.</p></section>
            <p style={{ fontSize: '13px' }}>Senast uppdaterad: 2026-06-22</p>
          </div>
        </div>
      </div>
    </>
  );
}