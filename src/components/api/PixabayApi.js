import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '35851703-1327ea85a263036dc5c6068c0';

export const getImages = async (searchQuery, page) => {
  const OPTIONS = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    page: page,
    per_page: 12,
  });

  try {
    const response = await axios.get(`?${OPTIONS.toString()}`);
    return response.data;
  } catch (error) {
    console.error(error.toJSON());
  }
};

export const normalizedImages = imagesArray =>
  imagesArray.map(({ id, tags, webformatURL, largeImageURL }) => {
    return { id, tags, webformatURL, largeImageURL };
  });
