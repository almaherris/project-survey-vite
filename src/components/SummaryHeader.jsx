import "../Header.css"

// Component for the Summary Header

export const SummaryHeader = () => {
  return (
    <header className="header">
      <h1 onClick={() => location.reload()}>Result Surprise Holiday</h1>
    </header>
  )
}
