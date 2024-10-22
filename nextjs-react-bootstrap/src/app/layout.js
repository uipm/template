import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'; 
import 'react-calendar/dist/Calendar.css';
import "swiper/css";
import "swiper/css/bundle";
import 'react-tabs/style/react-tabs.css';
 
// Styles
import "../../styles/style.css";
// Rtl Styles
// import "../../styles/rtl.css";
// Dark Mode Styles
// import "../../styles/dark.css";

import LayoutProvider from '@/providers/LayoutProvider';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trezo - React Nextjs Admin Dashboard Template",
  description: "Trezo - React Nextjs Admin Dashboard Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}
