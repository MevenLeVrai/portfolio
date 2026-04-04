import { portfolioConfig } from "@/config/portfolio.config";

type ContentType = typeof portfolioConfig.content["fr"];

type ApprenticeshipBadgeProps = {
    content: ContentType;
};

export function ApprenticeshipBadge({ content }: ApprenticeshipBadgeProps) {
    if (!content.apprenticeship?.enabled) return null;

    return (
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-sm text-blue-700 border border-blue-100 text-center">
            {content.apprenticeship.text}
        </p>
    );
}