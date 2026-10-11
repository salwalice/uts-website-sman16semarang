import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Profil SMA Negeri 16 Semarang",
  description: "Website Resmi SMA Negeri 16 Semarang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}