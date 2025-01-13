import "@/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "De-LiT",
  description: "Building a like-minded community!",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="user-scalable=no, width=device-width, initial-scale=1.0"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <script src="https://cdn.jsdelivr.net/npm/story-show-gallery@3/dist/ssg.min.js"></script>
      </head>
      <body id="body">
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
