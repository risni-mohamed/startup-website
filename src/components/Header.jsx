export default function Header() {
  return (
    <header className="p-4 bg-gray-900 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Startup</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
