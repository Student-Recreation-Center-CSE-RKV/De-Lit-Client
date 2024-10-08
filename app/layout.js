import "@/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
<<<<<<< HEAD
<<<<<<< HEAD
import Footer from "@/components/Footer";
=======
import Footer from "@/components/footer/Footer";
>>>>>>> 927fde7 (style(publications): complete layout for publications page)
=======
import Footer from "@/components/footer/Footer";
>>>>>>> 927fde7 (style(publications): complete layout for publications page)

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
