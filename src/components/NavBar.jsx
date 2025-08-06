export default function NavBar() {
  return (
    <nav className="w-full py-4 px-6 bg-zinc-950 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Jason.dev</h1>
        <ul className="flex gap-6 text-zinc-300">
          <li><a href="/">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
