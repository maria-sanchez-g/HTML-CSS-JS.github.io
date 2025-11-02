"use client";
import { UserProvider } from "../context/userContext";
import { ThemeProvider } from "../context/themeContext";

export default function Providers({ children }) {
  return (
    <UserProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </UserProvider>
  );
}

//2) Best practice in Next.js: a dedicated client “Providers” wrapper
//Keep your root layout as a Server Component (better performance and SEO), and put all client providers into a single client component.