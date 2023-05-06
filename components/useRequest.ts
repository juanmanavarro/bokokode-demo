import useSWR from 'swr'

const fetcher = (url: string) => fetch(url, { method: 'POST' }).then((res) => res.json())

const baseUrl = 'https://technical-frontend-api.bokokode.com/api'

export const useGetProducts = (page: number | null = null) => {
  const url = page ? `${baseUrl}/products?page=${page}` : `${baseUrl}/products`;
  const { data, error, isLoading } = useSWR(url, fetcher)

  return { data, error, isLoading }
}
