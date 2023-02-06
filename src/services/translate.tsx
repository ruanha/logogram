export default async function translate(value: string): Promise<string> {
  const url =
    "https://translation.googleapis.com/language/translate/v2?" +
    new URLSearchParams({
      key: process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY as string,
      q: value,
      source: "en",
      target: "zh-CH",
    });
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch(url, options);

  if (response.ok) {
    const result = await response.json();
    return result.data.translations[0].translatedText;
  }
  throw new Error("Network response was not ok.");
}
