import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Witaj w aplikacji Calendar-Notes!</h1>
        <p className="mt-2 text-gray-600">Tutaj pojawią się notatki i kalendarz.</p>
      </main>
    </div>
  );
}