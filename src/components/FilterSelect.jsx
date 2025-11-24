import { useState } from "react"

export default function FilterSelect({value, onChange}) {

  const handleSelectChange = (e) => {
    onChange(e.target.value);
  }

  return (
    <select value={value} onChange={handleSelectChange}  className="px-4 py-2.5 bg-gray-50 text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all sm:w-auto">
      <option value="All Types">All Types</option>
      <option value="Putting">Putting</option>
      <option value="Short Game">Short Game</option>
      <option value="Full Swing">Full Swing</option>
    </select>
  )
}
