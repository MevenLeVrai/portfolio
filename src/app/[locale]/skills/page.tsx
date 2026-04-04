import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";
import { getTranslations } from "next-intl/server";

type Props = {
    params: Promise<{ locale: "fr" | "en" }>;
};

const skillPage = async ({ params }: Props) => {
    const { locale } = await params;
    const t = await getTranslations("skills");
    const content = portfolioConfig.content[locale];

    return (
        <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            <Badge variant="secondary" className="gap-1.5 py-1">
                <LightbulbIcon className="w-4 h-4" />
                {t("badge")}
            </Badge>
            <div className="flex flex-col gap-3">
                <Heading>{t("heading")}</Heading>
                <FramerWrapper y={0} x={200}>
                    <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
                        {content.skills.intro}
                    </p>
                </FramerWrapper>
                <FramerWrapper y={100} delay={0.3} className="block w-full">
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        {t("certifications")}
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter items={portfolioConfig.skills.certification} />
                    </div>
                </FramerWrapper>
                <FramerWrapper y={100} delay={0.3} className="block w-full">
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        {t("programming")}
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter items={portfolioConfig.skills.programmingLanguages} />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block w-full" y={100} delay={0.34}>
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        {t("sysadmin")}
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter items={portfolioConfig.skills.sysadmin} />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block w-full" y={100} delay={0.34}>
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        {t("devops")}
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter items={portfolioConfig.skills.devops} />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block w-full" y={100} delay={0.34}>
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        {t("monitoring")}
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter items={portfolioConfig.skills.monitoring} />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block w-full" y={100} delay={0.34}>
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        {t("cybersecurity")}
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter items={portfolioConfig.skills.cybersecurity} />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block w-full" y={100} delay={0.34}>
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        CTF
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter items={portfolioConfig.skills.ctf} />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block w-full" y={100} delay={0.34}>
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        {t("productivity")}
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter items={portfolioConfig.skills.productivity} />
                    </div>
                </FramerWrapper>
            </div>
        </div>
    );
};

export default skillPage;