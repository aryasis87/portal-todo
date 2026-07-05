import './globals.css';
import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend', weight: ['300', '400', '600', '800'] });

export const metadata = {
  title: 'PortalTodo — Tiga Cara Menaklukkan Harimu',
  description: 'PortalTodo: koleksi 3 aplikasi to-do dengan paradigma berbeda — checklist klasik, papan kanban, dan task manager lengkap.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${lexend.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
