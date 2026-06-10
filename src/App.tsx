import { useState } from "react";
import { Button } from "@/components/ui/button";

function App() {
  const [tickets, setTickets] = useState(1);

  function aumentarTicket() {
    setTickets(tickets + 1);
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center gap-8">

      <h1 className="text-6xl font-black">
        CineSpoilerS 🎬
      </h1>

      <p className="text-zinc-400">
        Compra tickets de cine fácilmente
      </p>

      <h2 className="text-4xl">
        🎟️ {tickets}
      </h2>

      <Button onClick={aumentarTicket}>
        Comprar ticket
      </Button>

    </main>
  );
}

export default App;