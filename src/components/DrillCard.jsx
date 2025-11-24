import { Play } from "lucide-react";

export default function DrillCard(
  {
    name,
    type,
    description,
    focus,
    level,
    videoUrl,
  }) {

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
    <div
      className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3 hover:border-primary/50 hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <span className={`px-2 py-0.5 text-xs font-medium uppercase rounded whitespace-nowrap text-white ${getTypeColor(type)}`}>
          {type}
        </span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-300">
        <div className="space-y-1">
          <p className="text-sm text-gray-700">
            Focus: <span className="text-accent font-medium">{focus}</span>
          </p>
          <p className="text-xs text-gray-500">Level: {level}</p>
        </div>
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
          title="Watch Video"
        >
          <Play size={15} fill="white" />
        </a>
      </div>
    </div>
  )
}
