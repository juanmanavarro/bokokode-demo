import useSWR from 'swr'

const fetcher = (url: string) => fetch(url, { method: 'POST' }).then((res) => res.json())

const url = 'https://technical-frontend-api.bokokode.com/api/products'

export const useGetProducts = () => {
  const { data, error, isLoading } = useSWR(url, fetcher)

  return { data, error, isLoading }
}
