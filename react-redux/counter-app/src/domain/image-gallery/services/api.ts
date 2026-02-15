import type { Image } from '../interfaces';

// API service for fetching images
export const fetchImages = async (page: number = 1, limit: number = 10): Promise<Image[]> => {
  try {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data: Image[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};