"use client"
import { Languages } from 'lucide-react';
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = () => {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const switchLocale = () => {
        const newLocale = locale === "fr" ? "en" : "fr";
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPath);
    };

    return (
        <button
            onClick={switchLocale}
            aria-label={locale === "fr" ? "Switch to English" : "Passer en Français"}
            className="fixed bottom-16 right-2 z-[9999] flex items-center gap-2
                bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700
                shadow-lg hover:shadow-xl rounded-full px-4 py-2.5
                text-sm font-medium text-gray-700 dark:text-gray-200
                hover:bg-gray-50 dark:hover:bg-neutral-700
                transition-all duration-200 min-h-[44px]"
        >
            <Languages className="h-4 w-4 flex-shrink-0" />
            <span className="text-xs font-semibold tracking-wide uppercase">
                {locale === "fr" ? "EN" : "FR"}
            </span>
        </button>
    );
};

export default LanguageSwitcher;