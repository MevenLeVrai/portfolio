import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { portfolioConfig } from "@/config/portfolio.config";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const poppins = Poppins({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-poppins",
});
const rubik = Rubik({
    subsets: ["latin"],
    weight: "600",
    variable: "--font-rubik",
});

export function generateStaticParams() {
    return [
        { locale: "fr" },
        { locale: "en" }
    ];
}

export const metadata: Metadata = {
    metadataBase: new URL(portfolioConfig.seo.url),
    title: {
        default: portfolioConfig.name,
        template: `%s - ${portfolioConfig.content.fr.title}`,
    },
    description: portfolioConfig.content.fr.description,
    keywords: portfolioConfig.seo.keywords,
    authors: portfolioConfig.seo.authors,
    creator: portfolioConfig.name,
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: portfolioConfig.seo.url,
        title: portfolioConfig.name,
        description: portfolioConfig.content.fr.description,
        images: [`${portfolioConfig.seo.url}/og-image.png`],
        siteName: portfolioConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: portfolioConfig.name,
        description: portfolioConfig.content.fr.description,
        images: [`${portfolioConfig.seo.url}/og-image.png`],
        creator: portfolioConfig.seo.twitterHandle,
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default async function RootLayout({
                                             children,
                                             params,
                                         }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body className={`${poppins.variable} ${rubik.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <main
                className={cn(
                    "flex relative break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-slate-50 bg-[url('/noise.png')] bg-repeat",
                    { "bg-white": "#E6E7EB" }
                )}
            >
                <Navbar />
                {children}
            </main>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
        </body>
        </html>
    );
}