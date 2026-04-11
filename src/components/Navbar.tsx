"use client"
import {cn} from "@/lib/utils";
import {
    FolderGit2,
    GraduationCap,
    HomeIcon,
    LightbulbIcon,
    Mail,
    User,
} from 'lucide-react';
import {Dock, DockIcon, DockItem, DockLabel} from '@/components/animation/DockAnimation';
import Link from "next/link";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {useLocale} from "next-intl";

const Navbar = () => {
    const locale = useLocale();
    const pathname = usePathname();
    const [scrolling, setScrolling] = useState(false);

    const data = [
        {
            title: locale === "fr" ? "Accueil" : "Home",
            icon: <HomeIcon className='h-full w-full'/>,
            href: `/${locale}`,
        },
        {
            title: locale === "fr" ? "À propos" : "About",
            icon: <User className='h-full w-full'/>,
            href: `/${locale}/about`,
        },
        {
            title: locale === "fr" ? "Compétences" : "Skills",
            icon: <LightbulbIcon className='h-full w-full'/>,
            href: `/${locale}/skills`,
        },
        {
            title: locale === "fr" ? "Formation" : "Education",
            icon: <GraduationCap className='h-full w-full'/>,
            href: `/${locale}/education`,
        },
        {
            title: locale === "fr" ? "Projets" : "Projects",
            icon: <FolderGit2 className='h-full w-full'/>,
            href: `/${locale}/projects`,
        },
        {
            title: locale === "fr" ? "Contact" : "Contact me",
            icon: <Mail className='h-full w-full'/>,
            href: 'mailto:meven.desbois@icloud.com',
        },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolling(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* ── Desktop Dock (sm+) ── */}
            <div className={cn(
                "fixed top-5 right-0 left-0 px-5 m-auto w-fit bg-transparent z-[9999]",
                "hidden sm:block",
                scrolling && "opacity-0 pointer-events-none transition-opacity duration-300"
            )}>
                <Dock className='items-end pb-3 rounded-full'>
                    {data.map((item, idx) => (
                        <Link href={item.href} key={idx}>
                            <DockItem className={cn(
                                "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800",
                                pathname === item.href && "bg-gray-100 !border !border-primary-sky"
                            )}>
                                <DockLabel>{item.title}</DockLabel>
                                <DockIcon className={cn(pathname === item.href && "text-[#2f7df4]")}>
                                    {item.icon}
                                </DockIcon>
                            </DockItem>
                        </Link>
                    ))}
                </Dock>
            </div>

            {/* ── Mobile Bottom Bar (< sm) ── */}
            <nav className="
                fixed bottom-0 inset-x-0 z-[9999] sm:hidden
                bg-gray-100 dark:bg-neutral-900
                border-t border-gray-200 dark:border-neutral-800
                h-16 px-2 flex items-center justify-around
            ">
                {data.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.href}
                        aria-label={item.title}
                        className={cn(
                            "flex flex-col items-center justify-center gap-1",
                            "w-12 h-12 rounded-full",
                            "bg-gray-200 dark:bg-neutral-800",
                            "text-gray-500 dark:text-gray-400",
                            "active:scale-90 transition-transform duration-150",
                            pathname === item.href && "bg-gray-100 dark:bg-neutral-700 border border-[#2f7df4] text-[#2f7df4]"
                        )}
                    >
                        <span className="w-5 h-5">{item.icon}</span>
                    </Link>
                ))}
            </nav>
        </>
    );
};

export default Navbar;