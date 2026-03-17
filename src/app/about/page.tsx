import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { User2 } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
import AboutCards from "@/components/ui/AboutCards";

const page = () => {
    return (
        <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            <Badge variant="secondary" className="gap-1.5 py-1">
                <User2 className="h-4 w-4" />
                About me
            </Badge>

            <div className="flex flex-col gap-5">
                <Heading>
                    {portfolioConfig.title},<br /> Based In{" "}
                    {portfolioConfig.about.personalInfo.nationality}.
                </Heading>

                <FramerWrapper y={0} x={100}>
                    <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
                        {portfolioConfig.about.bio}
                    </p>
                </FramerWrapper>
            </div>
                <AboutCards />
        </div>
    );
};

export default page;
