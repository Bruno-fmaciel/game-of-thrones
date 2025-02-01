import Navbar from "../navBar/NavBar";

export default function Header() {
    return (
      <header className="bg-gradient-to-r from-black via-gray-800 to-black text-white py-6 shadow-xl border-b-4 border-gold">
        <div className="container mx-auto flex items-center justify-between px-6">
          <h1 className="text-4xl font-bold tracking-widest text-gold drop-shadow-lg">
            ⚔️ Game of Thrones
          </h1>
          <Navbar />
        </div>
      </header>
    );
  }
