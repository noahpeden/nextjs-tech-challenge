export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://www.cat.com/content/catdotcom/en_US/products/new/equipment/dozers/jcr:content/root/responsivegrid/productcards.feed.json'
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res
      .status(500)
      .json({ message: 'Error fetching data', error: error.message });
  }
}
