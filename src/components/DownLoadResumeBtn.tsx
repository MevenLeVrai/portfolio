"use client"
import HackerBtn from './animation/HackerBtn'
import { useTranslations } from 'next-intl'

function DownLoadResumeBtn() {
    const t = useTranslations("home");

    return (
        <div className="h-fit w-full mt-2 py-2 px-4">
            <a
                href="/resume-meven-desbois.pdf"
                download="Meven_Desbois_Resume.pdf"
            >
                <HackerBtn label={t("downloadResume")} />
            </a>
        </div>
    )
}

export default DownLoadResumeBtn