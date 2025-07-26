import Navbar from "./components/Navbar";
import DayCalendar from "./components/DayCalendar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="p-4 flex flex-col md:flex-row gap-4">
        {/* Lewa kolumna: Kalendarz dnia */}
        <DayCalendar />

        {/* Prawa kolumna: Notatka dnia (wkrótce) */}
        <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/2">
          <h2 className="text-lg font-semibold text-black">📝 Notatka dnia</h2>
          <p className="text-gray-600">Tutaj będzie notatka dnia.</p>
        </div>
      </main>
    </div>
  );
}

export default App;