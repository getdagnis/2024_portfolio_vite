export const shareContent = async (request, env) => {
  try {
    const { content, absurdity } = await request.json();
    const ip = request.headers.get('cf-connecting-ip') || 'unknown';
    const timestamp = new Date().toISOString();
    const type = 'about'; // Or dynamically set if needed

    if (!content) {
      console.log('Missing content');
      return new Response('Missing content.', { status: 400 });
    }

    const result = await env.DB.prepare(
      `INSERT INTO shared_responses (content, absurdity_level, ip, created_at, type) VALUES (?, ?, ?, ?, ?)`
    )
      .bind(content, absurdity, ip, timestamp, type)
      .run();

    console.log('Inserted row:', result);

    return new Response(JSON.stringify({ success: true }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    console.error('Error during shareContent:', err);
    return new Response('Error storing content.', {
      status: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  }
};
