export default function Footer() {
  return (
    <footer className="p-4 bg-gray-900 text-white text-center">
      <p>© {new Date().getFullYear()} Startup. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#">🌐</a>
        <a href="#">🐦</a>
        <a href="#">📘</a>
      </div>
    </footer>
  );
}
