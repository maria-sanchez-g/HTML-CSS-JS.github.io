import "./globals.css";
import Providers from "./providers";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "My App",
  description: "Next.js migration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}


// What changed from your React App:
// You removed <AppRoutes />. Next.js handles routing by folders.
// You kept <NavBar /> at the top so it appears on every page.
// {children} is where each route’s page.jsx renders.

//3) Use the providers in the root layout. Your layout remains a Server Component (no hooks inside), and simply wraps children with the client Providers.