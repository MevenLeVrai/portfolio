import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { ApprenticeshipBadge } from "@/components/ui/ApprenticeshipBadge";
import { getLocale } from "next-intl/server";
import { portfolioConfig } from "@/config/portfolio.config";

export default async function Home() {
    const locale = await getLocale();
    const content = portfolioConfig.content[locale as "fr" | "en"];

    return (
        <>
            {/* LEFT SIDE  */}
            <FramerWrapper
                className="h-full w-auto flex flex-col justify-start gap-4"
                y={0}
                x={-100}
            >
                <HeroTexts content={content} />
                <div className="h-fit w-full p-4 flex gap-4">
                    <SocialLinks />
                </div>
                <DownLoadResumeBtn />
            </FramerWrapper>

            {/* RIGHT SIDE image  */}
            <FramerWrapper
                className="h-full w-[47%] relative block max-lg:hidden"
                y={0}
                x={100}
            >
                <HeroImage />
                <ApprenticeshipBadge content={content} />
            </FramerWrapper>
        </>
    );
}