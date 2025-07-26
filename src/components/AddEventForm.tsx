import { useState } from "react";

interface Event {
  time: string;
  title: string;
  description?: string;
}

interface Props {
  onAdd: (event: Event) => void;
}

export default function AddEventForm({ onAdd }: Props) {
  // Lokalne stany formularza
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Obsługa dodawania wydarzenia
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!time || !title) return;

    // Wywołanie funkcji przekazanej przez propsy
    onAdd({ time, title, description });

    // Wyczyszczenie formularza
    setTime("");
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-md font-semibold mb-2">➕ Dodaj wydarzenie</h3>

      <div className="flex flex-col gap-2">
        <input
          type="time"
          className="border p-2 rounded"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Tytuł"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="border p-2 rounded"
          placeholder="Opis (opcjonalnie)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          Dodaj
        </button>
      </div>
    </form>
  );
}
