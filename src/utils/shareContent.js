export const shareContent = async (content, absurdity) => {
  try {
    const res = await fetch('https://getdagnis-worker-prod.getdagnis.workers.dev/share', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
        absurdity,
      }),
    });

    const json = await res.json();
    return json.success;
  } catch (err) {
    console.error('Share failed:', err);
    return false;
  }
};
