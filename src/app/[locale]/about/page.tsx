import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { User2 } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
import AboutCards from "@/components/ui/AboutCards";
import { ApprenticeshipBadge } from "@/components/ui/ApprenticeshipBadge";
import { getTranslations } from "next-intl/server";

type Props = {
    params: Promise<{ locale: "fr" | "en" }>;
};

const Page = async ({ params }: Props) => {
    const { locale } = await params;
    const t = await getTranslations("about");
    const content = portfolioConfig.content[locale];

    return (
        <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            <Badge variant="secondary" className="gap-1.5 py-1">
                <User2 className="h-4 w-4" />
                {t("badge")}
            </Badge>

            <div className="flex flex-col gap-5">
                <Heading>
                    {content.title},<br /> {t("basedIn")}{" "}
                    {content.location}.
                </Heading>

                <FramerWrapper y={0} x={100}>
                    <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
                        {content.about.bio}
                    </p>
                    <ApprenticeshipBadge content={content} />
                </FramerWrapper>
            </div>

            <AboutCards content={content} />
        </div>
    );
};

export default Page;