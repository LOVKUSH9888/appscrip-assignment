import "./globals.css";

export const metadata = {
  title: "metta muse",
  description: "messa muse an ecommerce solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
