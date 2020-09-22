export default async function getPhotos(url) {
  const response = await fetch(url, {
    method: 'GET'
  });
  return response.json();
};