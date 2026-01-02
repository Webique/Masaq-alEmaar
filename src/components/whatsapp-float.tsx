import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import WhatsAppIcon from "@/assets/icons/whatsapp-2.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";

export default function WhatsAppFloat() {
  const t = useTranslations("IndexPage.WhatsAppFloat");

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <m.a
          href={siteConfig.links.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="z-999999 bg-whatsapp fixed bottom-4 end-4 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl sm:bottom-6 sm:end-6 sm:h-14 sm:w-14 lg:bottom-6"
          aria-label="Contact us on WhatsApp"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <WhatsAppIcon className="h-6 w-6 fill-white sm:h-8 sm:w-8" />
        </m.a>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{t("tooltip")}</p>
      </TooltipContent>
    </Tooltip>
  );
}
