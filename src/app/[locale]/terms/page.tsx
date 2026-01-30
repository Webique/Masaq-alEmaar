import type { PageProps } from "@/types";
import type { Locale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";

import { siteConfig } from "@/config/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TermsPage" });

  return {
    title: t("title"),
    description: t("description")
  };
}

export default function TermsPage({ params }: PageProps) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  return (
    <section className="bg-background relative overflow-hidden py-20 lg:py-32">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(5, 31, 53, 0.2) 2px, transparent 2px)`,
          backgroundSize: "30px 30px"
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-primary mb-4 text-4xl font-bold md:text-5xl">
              الشروط والأحكام
            </h1>
            <p className="text-muted-foreground text-lg">
              شروط استخدام الموقع والخدمات
            </p>
          </div>

          {/* Content */}
          <div className="bg-card rounded-2xl p-8 shadow-lg md:p-12">
            <p className="text-foreground mb-8 text-lg leading-relaxed">
              باستخدامك للموقع أو تواصلك معنا عبره، فإنك توافق على الشروط التالية:
            </p>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-primary mb-4 text-2xl font-bold">1) استخدام الموقع</h2>
              <p className="text-foreground leading-relaxed">
                يجب استخدام الموقع بشكل نظامي. ويحق لنا تحديث أو تعديل محتوى الموقع في أي وقت دون إشعار مسبق.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-primary mb-4 text-2xl font-bold">2) الملكية الفكرية</h2>
              <p className="text-foreground leading-relaxed">
                جميع محتوى الموقع (النصوص، التصاميم، الصور، الشعار) مملوك لمؤسسة مساق الأعمار، ولا يجوز نسخه أو استخدامه دون إذن.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-primary mb-4 text-2xl font-bold">3) طلب الخدمات</h2>
              <ul className="text-foreground list-inside list-disc space-y-2 leading-relaxed">
                <li>إرسال طلب عبر الموقع لا يعني قبول التنفيذ.</li>
                <li>يتم تحديد الأسعار ومدة التنفيذ والمواد بعد مراجعة المشروع وإصدار عرض سعر/عقد رسمي.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-primary mb-4 text-2xl font-bold">4) الأسعار والمعلومات</h2>
              <p className="text-foreground leading-relaxed">
                المعلومات المعروضة في الموقع لأغراض تعريفية فقط وقد تختلف حسب طبيعة المشروع، ولا تعتبر ملزمة إلا بعقد أو عرض سعر معتمد.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-primary mb-4 text-2xl font-bold">5) التعديلات</h2>
              <p className="text-foreground leading-relaxed">
                أي تعديل يطلبه العميل بعد الاتفاق (تصميم/مواد/نطاق عمل) قد ينتج عنه تعديل في السعر أو مدة التنفيذ ولا يتم تنفيذه إلا بعد الاعتماد.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-primary mb-4 text-2xl font-bold">6) القانون المعمول به</h2>
              <p className="text-foreground leading-relaxed">
                تخضع هذه الشروط لأنظمة المملكة العربية السعودية.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-primary mb-4 text-2xl font-bold">7) التواصل</h2>
              <div className="text-foreground space-y-2 leading-relaxed">
                <p>
                  <strong>واتساب/جوال:</strong>{" "}
                  <a
                    href={`tel:${siteConfig.support.phone}`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.support.phone}
                  </a>
                </p>
                <p>
                  <strong>البريد الإلكتروني:</strong>{" "}
                  <a
                    href={`mailto:${siteConfig.support.email}`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.support.email}
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
