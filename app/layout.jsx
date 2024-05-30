import TopBar from "./components/TopBar";
import "./globals.scss";

export const metadata = {
  title: "Test App with Marlon and Nick",
  description: "Test App with Marlon and Nick",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
