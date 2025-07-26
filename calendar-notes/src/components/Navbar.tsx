// Import nie jest potrzebny poniewaz Vite automatycznie tlumaczy kod Reacta
//import React from "react";

// Komponent Navbar, widoczny na górze każdej strony
const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 p-4 flex justify-between items-center">
      {/* Lewa strona - logo */}
      <div className="text-xl font-bold text-gray-800">🧠 MyProductivity</div>

      {/* Środek - aktualna data */}
      <div className="text-gray-600">
        {new Date().toLocaleDateString("pl-PL", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>

      {/* Prawa strona - przyciski */}
      <div className="flex gap-4">
        <button title="Mapa myśli">🗺️</button>
        <button title="Notatki">📝</button>
        <button title="Dodaj">➕</button>
      </div>
    </nav>
  );
};

export default Navbar;
