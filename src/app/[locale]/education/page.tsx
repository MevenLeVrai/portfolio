import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
import { getTranslations } from "next-intl/server";

type Props = {
    params: Promise<{ locale: "fr" | "en" }>;
};

const educationPage = async ({ params }: Props) => {
    const { locale } = await params;
    const t = await getTranslations("education");
    const content = portfolioConfig.content[locale];

    return (
        <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            <Badge variant="secondary" className="gap-1.5 py-1">
                <Briefcase className="h-4 w-4" />
                {t("badge")}
            </Badge>
            <div className="flex flex-col gap-3">
                <Heading>{t("heading")}</Heading>
            </div>
            <div className="w-full h-fit flex flex-col">
                {content.education.map((edu, index) => (
                    <div className="w-full h-fit flex" key={index}>
                        <FramerWrapper
                            y={0}
                            x={-100}
                            delay={0.35 + index * 0.1}
                            className="w-1/3 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
                        >
                            {edu.period}
                        </FramerWrapper>
                        <FramerWrapper
                            y={0}
                            x={100}
                            delay={0.35 + index * 0.1}
                            className="relative w-2/3 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
                        >
                            <div className="text-2xl font-rubik max-sm:text-xl">
                                {edu.degree}, <br /> {edu.institution}
                            </div>
                            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
                                {edu.description}
                            </p>
                        </FramerWrapper>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default educationPage;