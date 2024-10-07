import { inter } from "./ui/fonts";
import '@/app/ui/global.css'; 

// This is Root layout and it required
// Any UI you add to the root layout will be shared across all pages in your application.
// You can use the root layout to modify your <html> and <body> tags, and add metadata
// One benefit of using layouts in Next.js is that on navigation, only the page components update while the layout won't re-render.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
