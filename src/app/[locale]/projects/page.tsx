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

const ProjectsPage = async ({ params }: Props) => {
    const { locale } = await params;
    const t = await getTranslations("projects");
    const content = portfolioConfig.content[locale];

    const projectLinksMap = Object.fromEntries(
        portfolioConfig.projectLinks.map((project) => [project.id, project])
    );

    const projects = content.projects.map((project) => ({
        ...project,
        ...(projectLinksMap[project.id] ?? {}),
    }));

    return (
        <div className="relative flex h-full w-full flex-col items-start gap-5 overflow-hidden">
            <Badge variant="secondary" className="gap-1.5 py-1">
                <Layers className="h-4 w-4" />
                {t("badge")}
            </Badge>

            <div className="flex flex-col gap-3">
                <Heading>{t("heading")}</Heading>

                <FramerWrapper y={0} x={200}>
                    <p className="w-full font-poppins text-lg text-primary max-sm:text-base">
                        {t("intro")}
                    </p>
                </FramerWrapper>
            </div>

            <div className="flex w-full flex-row flex-wrap gap-3 max-lg:flex-col">
                {projects.map((project, index) => (
                    <ProjectCards key={project.id} value={project} num={index} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;