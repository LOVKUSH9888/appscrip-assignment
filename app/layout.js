import "./globals.css";

export const metadata = {
  title: "metta muse",
  description:
    "Explore metta muse, a cutting-edge ecommerce web app designed to elevate your online shopping experience. Discover a wide range of products, seamless navigation, and secure transactions. Transform your online retail journey with Metta Muse.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
