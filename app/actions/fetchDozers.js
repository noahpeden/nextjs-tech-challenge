export default async function fetchDozers() {
  try {
    const response = await fetch('/api/proxy');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return { error: error.message };
  }
}
