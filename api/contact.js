// /api/contact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;
  if (!email || !name || !message) {
    console.error('Missing required fields:', req.body);
    return res.status(400).json({ error: 'Missing required fields', details: req.body });
  }

  const apiKey = process.env.FUB_API_KEY;
  if (!apiKey) {
    console.error('API key not configured');
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const response = await fetch('https://api.followupboss.com/v1/lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(apiKey + ':x').toString('base64'),
      },
      body: JSON.stringify({
        email,
        name,
        phone,
        message,
        // Add more fields as needed
      }),
    });
    if (!response.ok) {
      const error = await response.text();
      console.error('Follow Up Boss API error:', error);
      return res.status(500).json({ error: error || 'Failed to send to Follow Up Boss', details: error });
    }
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: err.message || 'Unknown error', details: err });
  }
} 