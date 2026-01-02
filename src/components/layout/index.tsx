import { AccessibilityToolbar } from "@/components/accessibility-toolbar";
import ScrollProgress from "@/components/scroll-progress";
import { SkipLinks } from "@/components/skip-links";
import WhatsAppFloat from "@/components/whatsapp-float";

import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLinks />
      <ScrollProgress />
      <Header />
      {children}
      <Footer />
      <WhatsAppFloat />
      <AccessibilityToolbar />
    </>
  );
}
