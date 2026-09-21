import './globals.css';
import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend', weight: ['300', '400', '600', '800'] });

const __jsonld = {"@context":"https://schema.org","@type":"CollectionPage","name":"PortalTodo","description":"Koleksi 3 aplikasi to-do","url":"https://portal-todo.vercel.app","isPartOf":{"@type":"WebSite","name":"PintuWeb","url":"https://pintuweb.com"}};

export const metadata = {
  metadataBase: new URL("https://portal-todo.vercel.app"),
  title: "PortalTodo — Tiga Cara Menaklukkan Harimu",
  description: "PortalTodo: koleksi 3 aplikasi to-do dengan paradigma berbeda — checklist klasik, papan kanban, dan task manager lengkap.",
  applicationName: "PortalTodo",
  keywords: ["aplikasi to-do", "template produktivitas", "kanban", "task manager"],
  authors: [{ name: "PortalTodo" }],
  creator: "PortalTodo",
  publisher: "PortalTodo",
  alternates: { canonical: "https://portal-todo.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://portal-todo.vercel.app",
    siteName: "PortalTodo",
    title: "PortalTodo — Tiga Cara Menaklukkan Harimu",
    description: "PortalTodo: koleksi 3 aplikasi to-do dengan paradigma berbeda — checklist klasik, papan kanban, dan task manager lengkap.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "PortalTodo — Tiga Cara Menaklukkan Harimu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PortalTodo — Tiga Cara Menaklukkan Harimu",
    description: "PortalTodo: koleksi 3 aplikasi to-do dengan paradigma berbeda — checklist klasik, papan kanban, dan task manager lengkap.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${lexend.variable} antialiased`}>
        <main>{children}</main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
