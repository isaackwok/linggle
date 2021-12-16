import axios, { AxiosResponse } from "axios"
import useSWR from "swr"
import { NGRAM_API_URL } from "../constants/url"
import LinggleQueryResult from "../types/LinggleQueryResult"

const fetcher = (url: string): Promise<LinggleQueryResult> =>
  axios.get(url).then((res: AxiosResponse): LinggleQueryResult => res.data)

export function useLinggleSearch(query: string | null) {
  const { data, error } = useSWR(query ? `${NGRAM_API_URL}/${query}` : null, fetcher)
  return {
    results: data,
    error,
    isLoading: !error && !data,
  }
}