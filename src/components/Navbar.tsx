"use client"
import { cn } from "@/lib/utils";
import {
    Briefcase,
    FolderGit2,
    GraduationCap,
    HomeIcon,
    LightbulbIcon,
    Mail,
    User,
    Languages,
} from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/animation/DockAnimation';
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const Navbar = () => {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const data = [
        {
            title: locale === "fr" ? "Accueil" : "Home",
            icon: <HomeIcon className='h-full w-full' />,
            href: `/${locale}`,
        },
        {
            title: locale === "fr" ? "À propos" : "About",
            icon: <User className='h-full w-full' />,
            href: `/${locale}/about`,
        },
        {
            title: locale === "fr" ? "Compétences" : "Skills",
            icon: <LightbulbIcon className='h-full w-full' />,
            href: `/${locale}/skills`,
        },
        {
            title: locale === "fr" ? "Formation" : "Education",
            icon: <GraduationCap className='h-full w-full' />,
            href: `/${locale}/education`,
        },
        {
            title: locale === "fr" ? "Projets" : "Projects",
            icon: <FolderGit2 className='h-full w-full' />,
            href: `/${locale}/projects`,
        },
        {
            title: locale === "fr" ? "Contact" : "Contact me",
            icon: <Mail className='h-full w-full' />,
            href: 'mailto:meven.desbois@icloud.com',
        },
    ];

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const switchLocale = () => {
        const newLocale = locale === "fr" ? "en" : "fr";
        // Remplace le locale dans l'URL actuelle
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPath);
    };

    return (
        <div className={`fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[+9999999] ${scrolling ? "hidden" : "block"}`}>
            <Dock className='items-end pb-3 rounded-full'>
                {data.map((item, idx) => (
                    <Link href={item.href} key={idx}>
                        <DockItem
                            className={cn(
                                "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800",
                                pathname === item.href && "bg-gray-100 !border !border-primary-sky"
                            )}
                        >
                            <DockLabel>{item.title}</DockLabel>
                            <DockIcon className={cn(pathname === item.href && "text-[#2f7df4]")}>
                                {item.icon}
                            </DockIcon>
                        </DockItem>
                    </Link>
                ))}

                {/* Switch de langue */}
                <DockItem
                    className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 cursor-pointer"
                    onClick={switchLocale}
                >
                    <DockLabel>{locale === "fr" ? "English" : "Français"}</DockLabel>
                    <DockIcon>
                        <Languages className='h-full w-full' />
                    </DockIcon>
                </DockItem>
            </Dock>
        </div>
    );
};

export default Navbar;