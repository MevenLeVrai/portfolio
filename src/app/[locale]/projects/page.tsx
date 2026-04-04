import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
import { getTranslations } from "next-intl/server";

type Props = {
    params: Promise<{ locale: "fr" | "en" }>;
};

const projectsPage = async ({ params }: Props) => {
    const { locale } = await params;
    const t = await getTranslations("projects");
    const content = portfolioConfig.content[locale];

    // Fusion projets (texte traduit) + projectLinks (liens/status)
    const projects = content.projects.map((project, index) => ({
        ...project,
        ...portfolioConfig.projectLinks[index],
    }));

    return (
        <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            <Badge variant="secondary" className="gap-1.5 py-1">
                <Layers className="h-4 w-4" />
                {t("badge")}
            </Badge>
            <div className="flex flex-col gap-3">
                <Heading>{t("heading")}</Heading>
                <FramerWrapper y={0} x={200}>
                    <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
                        {t("intro")}
                    </p>
                </FramerWrapper>
            </div>

            <div className="w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
                {projects.map((val, indx) => (
                    <ProjectCards key={indx} value={val} num={indx} />
                ))}
            </div>
        </div>
    );
};

export default projectsPage;