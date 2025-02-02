export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-black via-gray-800 to-black text-gray-300 py-6 border-t-4 border-gold shadow-xl mt-24">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold tracking-widest text-gold drop-shadow-lg">
            ❄️ Winter is Coming ❄️
          </p>
          <p className="mt-2 text-sm text-gray-400">
            © {new Date().getFullYear()} Game of Thrones Fan Site. Todos os direitos reservados - Bruno Freire.
          </p>
        </div>
      </footer>
    );
  }