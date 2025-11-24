import { useEffect, useState } from "react"
import './App.css'
import DrillCard from './components/DrillCard';
import FilterSelect from './components/FilterSelect';
import SearchInput from './components/SearchInput';
import drills from "./data/drills.json";

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('All Types');

  const filteredDrills = drills.filter((drill) => {
    let matchesType; // using let as const but have value assigned at declaration
    if (selectedOption === "All Types") {
      matchesType = true;
    }
    else {
      matchesType = drill.type === selectedOption;
    }
    //console.log(drill.name + ' ' + matchesType);
    
    let matchesSearch;
    if (searchTerm === "") {
      matchesSearch = true;
    }
    else {
      matchesSearch = drill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      drill.focus.toLowerCase().includes(searchTerm.toLowerCase());
    }    
    
    return matchesType && matchesSearch;
  });

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

        <div className="flex flex-col sm:flex-row gap-3">
          <SearchInput value={searchTerm} onChange={setSearchTerm} />

          <FilterSelect value={selectedOption} onChange={setSelectedOption} />
        </div>

        {/* Drill List */}
        <div className="space-y-8">
          {filteredDrills.length === 0 ? (
            <p className="text-center text-sm text-gray-500 pt-2">
              No drills found. Try adjusting your search or filters.
            </p>
          ) : (          
            filteredDrills.map((drill) => (
              <DrillCard
                key={drill.id}
                name={drill.name}
                type={drill.type}
                description={drill.description}
                focus={drill.focus}
                level={drill.level}
                videoUrl={drill.videoUrl}
              />
            ))
          )}
        </div>

        {/* Empty State (optional) */}
        
      </div>
    </div>
  );
}