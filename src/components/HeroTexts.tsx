"use client";
import TextRotator from "./TextRotator";
import { portfolioConfig } from "@/config/portfolio.config";
import { useTranslations } from "next-intl";

type ContentType = typeof portfolioConfig.content["fr"];

type HeroTextsProps = {
    content: ContentType;
};

const HeroTexts = ({ content }: HeroTextsProps) => {
    const t = useTranslations("home");
    const nameParts = portfolioConfig.name.split(" ");
    const firstName = nameParts[0];
    const middleName = nameParts.length > 2 ? nameParts[1] : "";
    const lastName = nameParts.length > 2 ? nameParts[2] : nameParts[1];

    return (
        <>
            <h3 className="font-poppins text-2xl max-sm:text-xl">
                {t("greeting")}
            </h3>
            <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl">
                {firstName} {middleName} <br /> {lastName} .
            </h1>
            <TextRotator content={content} />
        </>
    );
};

export default HeroTexts;