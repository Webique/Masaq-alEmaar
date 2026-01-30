import type { PageProps } from "@/types";
import type { Locale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";

import { siteConfig } from "@/config/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PrivacyPage" });

  return {
    title: t("title"),
    description: t("description")
  };
}

export default function PrivacyPage({ params }: PageProps) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  return (
    <main id="main-content" role="main" className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-primary mb-4 text-4xl font-bold md:text-5xl">
              سياسة الخصوصية
            </h1>
            <p className="text-muted-foreground text-lg">
              نلتزم بحماية خصوصية زوار موقعنا والعملاء
            </p>
          </div>

          {/* Content */}
          <div className="bg-card rounded-2xl p-8 shadow-lg md:p-12">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-foreground mb-8 text-lg leading-relaxed">
                توضح هذه السياسة كيفية جمع واستخدام البيانات الشخصية عند استخدامك للموقع أو تواصلك معنا.
              </p>

              {/* Section 1 */}
              <section className="mb-10">
                <h2 className="text-primary mb-4 text-2xl font-bold">1) البيانات التي نقوم بجمعها</h2>
                <p className="text-foreground mb-4 leading-relaxed">
                  قد نقوم بجمع البيانات التالية عند تعبئة نموذج التواصل أو التواصل معنا عبر الموقع/الواتساب:
                </p>
                <ul className="text-foreground mb-4 list-inside list-disc space-y-2 leading-relaxed">
                  <li>الاسم</li>
                  <li>رقم الجوال</li>
                  <li>البريد الإلكتروني (إن وُجد)</li>
                  <li>مدينة/موقع المشروع</li>
                  <li>تفاصيل الطلب أو الاستفسار</li>
                </ul>
                <p className="text-foreground leading-relaxed">
                  كما قد يتم جمع بيانات تقنية تلقائياً مثل: عنوان IP ونوع المتصفح لتحسين أداء الموقع.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-10">
                <h2 className="text-primary mb-4 text-2xl font-bold">2) استخدام البيانات</h2>
                <p className="text-foreground mb-4 leading-relaxed">نستخدم بياناتك من أجل:</p>
                <ul className="text-foreground mb-4 list-inside list-disc space-y-2 leading-relaxed">
                  <li>الرد على الاستفسارات وتقديم العروض</li>
                  <li>التواصل معك بخصوص الخدمات</li>
                  <li>تحسين تجربة الموقع والخدمات</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="mb-10">
                <h2 className="text-primary mb-4 text-2xl font-bold">3) مشاركة البيانات</h2>
                <p className="text-foreground mb-4 leading-relaxed">
                  نحن لا نبيع بياناتك.
                </p>
                <p className="text-foreground leading-relaxed">
                  قد تتم مشاركة البيانات فقط مع مزودي الخدمات التقنية (مثل الاستضافة أو أدوات التحليل) عند الحاجة لتشغيل الموقع.
                </p>
              </section>

              {/* Section 4 */}
              <section className="mb-10">
                <h2 className="text-primary mb-4 text-2xl font-bold">4) حماية البيانات</h2>
                <p className="text-foreground leading-relaxed">
                  نطبق إجراءات مناسبة لحماية البيانات من الوصول غير المصرح به.
                </p>
              </section>

              {/* Section 5 */}
              <section className="mb-10">
                <h2 className="text-primary mb-4 text-2xl font-bold">5) حقوقك</h2>
                <p className="text-foreground leading-relaxed">
                  يمكنك طلب تعديل أو حذف بياناتك عبر التواصل معنا.
                </p>
              </section>

              {/* Section 6 */}
              <section className="mb-10">
                <h2 className="text-primary mb-4 text-2xl font-bold">6) التواصل</h2>
                <p className="text-foreground mb-4 leading-relaxed">
                  لأي استفسار حول سياسة الخصوصية:
                </p>
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
      </div>
    </main>
  );
}

