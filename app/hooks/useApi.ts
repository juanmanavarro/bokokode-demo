import axios from 'axios'

const baseUrl = 'https://technical-frontend-api.bokokode.com/api'

export const useFetchProducts = async ({ page = 1, categories = [] }: { page?: number, categories?: string[] }) => {
  const body = categories.length > 0 ? { categories } : {};

  try {
    const { data } = await axios.post(`${baseUrl}/products?page=${page}`, body)
    return data;
  } catch (error) {
    console.error(error);
  }
}
