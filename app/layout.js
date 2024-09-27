import "@/styles/globals.css";


export const metadata = {
  title: "De-LiT",
  description: "Building a like-minded community!",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="body">
        {children}
      </body>
    </html>
  );
}
