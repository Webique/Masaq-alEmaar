import ScrollProgress from "@/components/scroll-progress";
import WhatsAppFloat from "@/components/whatsapp-float";

import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <Header />
      {children}
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
