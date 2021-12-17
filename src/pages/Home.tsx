import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

function HomePage() {
  const [queryValue, setQueryValue] = useState<string>('')
  const navigate = useNavigate()
  function handleTextChange(e: ChangeEvent<HTMLInputElement>) {
    setQueryValue(e.target.value)
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate(`/search?q=${queryValue.trim()}`)
  }
  return (
    <div>
      <h1>Home Page</h1>
      <h2>State: {queryValue}</h2>
      <form onSubmit={handleSubmit}>
        <input value={queryValue} onInput={handleTextChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default HomePage