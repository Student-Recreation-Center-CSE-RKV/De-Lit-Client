import "@/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "De-LiT",
  description: "Building a like-minded community!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="body">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
