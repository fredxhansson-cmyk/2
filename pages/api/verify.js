import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export default async function handler(req, res) {
  const { session_id } = req.query;
  if (!session_id) return res.status(400).json({ error: 'saknas' });
  try {
    const s = await stripe.checkout.sessions.retrieve(session_id);
    res.json({ paid: s.payment_status === 'paid', email: s.customer_details?.email });
  } catch (err) { res.status(500).json({ error: err.message }); }
}