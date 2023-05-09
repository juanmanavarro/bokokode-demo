import axios from 'axios'

const baseUrl = 'https://technical-frontend-api.bokokode.com/api'

export const useFetchProducts = async ({ page = 1, categories = [], sort = null }: { page?: number, categories?: string[], sort?: any }) => {
  const body: any = categories.length ? Object.assign({}, { categories }) : {}
  if (sort) {
    body['sort'] = sort
  }

  try {
    const { data } = await axios.post(`${baseUrl}/products?page=${page}`, body)
    return data
  } catch (error) {
    console.error(error)
  }
}
