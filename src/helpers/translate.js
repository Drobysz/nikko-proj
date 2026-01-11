export async function translate(targetLang, texts) {
  try {
    const url = "https://trasnlatedeepl.vercel.app/api/translate";
    const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ texts, targetLang }),
      });

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }

    const data = await res.json();
    return data.translations;
  } catch (error) {
    console.error('Translation error:', error);
  }
}