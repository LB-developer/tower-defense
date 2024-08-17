function Towers() {
  return (
    <>
      <div className="select-standard-tower">
        <div className="standard-tower-picture">
          <button type="button">Place Tower</button>
        </div>
        <div className="standard-tower-info">
          <p>Title</p>
          <p>Damage Type</p>
          <p>Damage #</p>
          <p>Range #</p>
          <div className="navigate-through-towers">
            <button type="button">Prev Tower</button>
            <button type="button">Next Tower</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Towers
