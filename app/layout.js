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
<<<<<<< HEAD
>>>>>>> 927fde7 (style(publications): complete layout for publications page)
=======
>>>>>>> ed0cd0e777cb9c5e537b149046f766d87e5c67fd
>>>>>>> 0ec2928dbab15ac9ca3e9b2da072c99d5259595b

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
