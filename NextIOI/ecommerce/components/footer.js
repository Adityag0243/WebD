// app/footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-200 text-blue-950 mt-12 p-6 text-center rounded-t-xl">
      <div className="text-xl font-semibold">Ecommerce Platform</div>
      <p className="text-sm text-gray-700 mt-2">
        Your one-stop shop for quality products
      </p>
      <p className="text-xs text-gray-500 mt-4">
        © {new Date().getFullYear()} Ecommerce Platform. All rights reserved.
      </p>
    </footer>
  );
}