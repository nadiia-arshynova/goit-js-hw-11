import axios from 'axios';


const API_KEY = '19917626-ad117b4262bded0ead70af2db';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  if (!query || typeof query !== 'string') {
    throw new Error('Query must be a non-empty string');
  }

  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
 
  return response.data;
}

