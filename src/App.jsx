import './App.css'
import drills from "./data/drills.json";
import { Play } from "lucide-react";

export default function App() {
  const getTypeColor = (type) => {
    switch (type) {
      case "Putting":
        return "bg-sky-700";
      case "Short Game":
        return "bg-teal-800";
      case "Full Swing":
        return "bg-green-800";
      default:
        return "bg-muted text-white";
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[hsl(220,30%,12%)] to-[hsl(215,28%,17%)] p-4">
      <div className="w-full max-w-[480px] bg-white rounded-xl shadow-2xl p-6 space-y-6">
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">
            Golf Practice Drill Finder
          </h1>
          <p className="text-sm text-gray-600">
            Search drills by name or focus, and filter by type to build your next practice session.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by name or focus..."
            className="flex-1 px-4 py-2.5 bg-gray-50 text-gray-900 placeholder:text-gray-500 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />

          {/* Type Select */}
          <select className="px-4 py-2.5 bg-gray-50 text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all sm:w-auto">
            <option>All Types</option>
            <option>Putting</option>
            <option>Short Game</option>
            <option>Full Swing</option>
          </select>
        </div>

        {/* Drill List */}
        <div className="space-y-5">
          {drills.map((drill) => (
            <div
              key={drill.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3 hover:border-primary/50 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-gray-900">{drill.name}</h3>
                <span className={`px-2 py-0.5 text-xs font-medium uppercase rounded whitespace-nowrap text-white ${getTypeColor(drill.type)}`}>
                  {drill.type}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{drill.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-300">
                <div className="space-y-1">
                  <p className="text-sm text-gray-700">
                    Focus: <span className="text-accent font-medium">{drill.focus}</span>
                  </p>
                  <p className="text-xs text-gray-500">Level: {drill.level}</p>
                </div>
                <a
                  href={drill.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
                  title="Watch Video"
                >
                  <Play size={15} fill="white" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (optional) */}
        <p className="text-center text-sm text-gray-500 pt-2">
          No drills found. Try adjusting your search or filters.
        </p>
      </div>
    </div>
  );
}