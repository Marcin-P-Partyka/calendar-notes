import { useState } from "react";
import AddEventForm from "./AddEventForm";

interface Event {
  time: string;
  title: string;
  description?: string;
}

export default function DayCalendar() {
  // Lista wydarzeń
  const [events, setEvents] = useState<Event[]>([
    { time: "09:00", title: "Poranna kawa ☕" },
    { time: "12:00", title: "Spotkanie z zespołem" },
    { time: "15:00", title: "Kodowanie 🧑‍💻" },
  ]);

  // Funkcja dodająca wydarzenie
  const handleAddEvent = (newEvent: Event) => {
    setEvents((prev) =>
      [...prev, newEvent].sort((a, b) => a.time.localeCompare(b.time))
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/2">
      <h2 className="text-lg font-semibold mb-2">📅 Kalendarz dnia</h2>

      {/* Formularz */}
      <AddEventForm onAdd={handleAddEvent} />

      {/* Lista wydarzeń */}
      <ul className="divide-y divide-gray-200">
        {events.map((event, index) => (
          <li key={index} className="py-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{event.time}</span>
              <span>{event.title}</span>
            </div>
            {event.description && (
              <p className="text-sm text-gray-500 mt-1">{event.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
