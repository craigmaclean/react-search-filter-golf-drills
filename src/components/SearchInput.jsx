import { useState } from "react"

export default function SearchInput({value, onChange}) {
  
  const handleInputChange = (e) => {
    onChange(e.target.value);
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder="Search by name or focus..."
      className="flex-1 px-4 py-2.5 bg-gray-50 text-gray-900 placeholder:text-gray-500 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
    />
  )
}