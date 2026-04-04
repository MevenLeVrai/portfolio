"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Circle, Globe, Heart, Languages, UserCircle2 } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
import { useTranslations } from "next-intl";

type ContentType = typeof portfolioConfig.content["fr"];

type AboutCardsProps = {
    content: ContentType;
};

const AboutCards = ({ content }: AboutCardsProps) => {
    const t = useTranslations("about");

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.20 }}
            style={{ overflow: "visible" }}
            className="w-full grid grid-cols-3 gap-4 max-lg:grid-cols-1 pb-2"
        >
            {/* Language */}
            <Card className="w-full h-full flex flex-col hover:shadow-lg transition-all duration-300 border-2">
                <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                        <Languages className="h-6 w-6" /> {t("languages")}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    {content.about.personalInfo.language.map((lang: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-xl text-primary">
                            <Circle className="h-3 w-3" /> {lang}
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Nationality */}
            <Card className="w-full h-full flex flex-col hover:shadow-lg transition-all duration-300 border-2">
                <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                        <Globe className="h-6 w-6" /> {t("nationality")}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xl text-primary">
                        <Circle className="h-3 w-3" /> {content.about.personalInfo.nationality}
                    </div>
                </CardContent>
            </Card>

            {/* Gender */}
            <Card className="w-full h-full flex flex-col hover:shadow-lg transition-all duration-300 border-2">
                <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                        <UserCircle2 className="h-6 w-6" /> {t("gender")}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xl text-primary">
                        <Circle className="h-3 w-3" /> {content.about.personalInfo.gender}
                    </div>
                </CardContent>
            </Card>

            {/* Hobbies */}
            <Card
                style={{ gridColumn: "1 / -1" }}
                className="w-full hover:shadow-lg transition-all duration-300 border-2"
            >
                <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                        <Heart className="h-6 w-6" /> {t("hobbies")}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-row flex-wrap gap-x-12 gap-y-2">
                        {content.about.hobbies.map((hobby: string, i: number) => (
                            <div key={i} className="flex items-center gap-2 text-xl text-primary whitespace-nowrap">
                                <Circle className="h-3 w-3 shrink-0" /> {hobby}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default AboutCards;