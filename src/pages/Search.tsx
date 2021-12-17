import { ChangeEvent, FormEvent, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import LinggleResultTable from "../components/LinggleResultTable"
import { useLinggleSearch } from "../hooks/linggle"

function SearchPage() {
  const [queryValue, setQueryValue] = useState<string>('')
  const [searchParams, setSearchParams] = useSearchParams()
  const query = useMemo(() => searchParams.get('q'), [searchParams])
  const { results, isLoading, error } = useLinggleSearch(query)


  function handleTextChange(e: ChangeEvent<HTMLInputElement>) {
    setQueryValue(e.target.value)
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSearchParams({ q: queryValue.trim() })
  }

  return (
    <div>
      <h1>Search Page</h1>
      <h2>Query: {query}</h2>
      <form onSubmit={handleSubmit}>
        <input value={queryValue} onInput={handleTextChange} />
        <button type="submit">Submit</button>
      </form>
      {
        isLoading ?
          <h2>Loading ...</h2> :
          error ? 
          <h2>Error Occured</h2> :
          <LinggleResultTable data={results?.ngrams} />
      }

    </div>
  )
}

export default SearchPage