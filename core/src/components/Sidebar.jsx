function Sidebar({ activeGroup, setActiveGroup }) {
  const grupy = [1, 2, 3, 4]

  return (
    <aside className="sidebar">
      <h3>Grupy</h3>
      {grupy.map(n => (
        <button
          key={n}
          onClick={() => setActiveGroup(n)}
          style={{
            fontWeight: activeGroup === n ? "bold" : "normal",
            outline: activeGroup === n ? "2px solid currentColor" : "none"
          }}
        >
          Grupa {n}
        </button>
      ))}
    </aside>
  )
}

export default Sidebar