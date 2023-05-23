import { Roboto } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quiz App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
