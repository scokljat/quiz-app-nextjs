"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { Roboto } from "next/font/google";
import NavBar from "@/components/NavBar";
import store from "./store/store";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quiz App",
};

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <html lang="en">
          <body className={roboto.className}>
            <NavBar />
            {children}
          </body>
        </html>
      </QueryClientProvider>
    </Provider>
  );
}
