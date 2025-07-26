// Import nie jest potrzebny poniewaz Vite automatycznie tlumaczy kod Reacta
//import React from "react";

// Typ pojedynczego wydarzenia
type CalendarEvent = {
  time: string; // np. "09:00"
  title: string; // np. "Spotkanie z zespołem"
};

// Główna funkcja komponentu
const DayCalendar = () => {
  // Tymczasowa lista wydarzeń (na razie statyczna)
  const events: CalendarEvent[] = [
    { time: "08:30", title: "Poranna kawa ☕" },
    { time: "10:00", title: "Spotkanie z zespołem 💼" },
    { time: "14:00", title: "Trening na siłowni 🏋️" },
  ];

  return (
    <section className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-black">📅 Kalendarz dnia</h2>
        <button
          className="text-sm text-blue-600 hover:underline"
          onClick={() => alert("Dodaj nowe wydarzenie")}
        >
          ➕ Dodaj wydarzenie
        </button>
      </div>

      <ul className="space-y-2">
        {events.map((event, index) => (
          <li
            key={index}
            className="border-l-4 border-blue-500 pl-2 text-sm text-gray-700"
          >
            <strong>{event.time}</strong> – {event.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DayCalendar;
