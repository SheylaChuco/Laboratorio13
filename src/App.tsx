import { Button } from "@/components/ui/button";

function App() {
  function handleBuy() {
    alert("Bienvenido a CineSpoilerS 🎬");
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center gap-8">

      <h1 className="text-6xl font-black">
        CineSpoilerS 🎬
      </h1>

      <p className="text-zinc-400">
        Compra tickets de cine fácilmente
      </p>

      <Button onClick={handleBuy}>
        Comprar ticket 🎟️
      </Button>

    </main>
  );
}

export default App;