import LinggleQueryResult from "../../types/LinggleQueryResult"

function LinggleResultTable({ data }: { data?: LinggleQueryResult['ngrams'] }) {
  return (
    <ul>
      {
        data && data.map(row =>
          <li key={row[0]}>{row.join(' => ')}</li>
        )
      }
    </ul>
  )
}

export default LinggleResultTable