import { useState } from "react";
import Card from "./Card";

function App() {
  const [card, setCard] = useState('');
  const [seed, setSeed] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateAvatar = async () => {
    let url = "/api/generate";
    const requestOptions = {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
      },
    };
    setIsLoading(true);
    if (seed !== '') {
      url += `?seed=${seed}`
    }
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    setCard(data);
    setIsLoading(false);
  }

  return (
    <div className="h-screen bg-gray-100 font-inter">
      <div className="pt-4 mx-auto max-w-5xl h-10">
        <div className="text-3xl font-bold text-center">🌀GENERATOR.</div>
      </div>
      <div className="flex flex-row justify-center space-x-4">
        <input className="mt-8 rounded-lg border-2 border-black text-center" value={seed} onChange={(e) => setSeed(e.target.value)} type="number" placeholder="Seed"></input>
        <button onClick={generateAvatar} className="bg-black text-white hover:bg-red-600 inline px-8 text-lg rounded-lg mt-8 text-center">
          Generate Avatar
        </button>
      </div>
      <div className="pt-4 container max-w-4xl mx-auto">
        {card
          ? <Card seed={seed} item={card} />
          : <div className="font-bold text-xl text-center">Create Your first Avatar 🌀</div>}
        {isLoading && <div className="text-black font-bold text-xl text-center">Loading</div>}
      </div>

    </div>
  );
}

export default App;
