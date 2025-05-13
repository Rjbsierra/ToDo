import "./globals.css";
import Navbar from './_layout/navbar/navbar'
import localFont from "next/font/local";

const font = localFont({
  src: '../public/font/Roboto-Regular.ttf'
})

export const metadata = {
  title: "To-Do",
  description: "A To-Do list web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  >
      <body suppressHydrationWarning className={`${font.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
