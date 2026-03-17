import { portfolioConfig } from "@/config/portfolio.config";

export function ApprenticeshipBadge() {
    if (!portfolioConfig.apprenticeship?.enabled) return null;

    return (
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-sm text-blue-700 border border-blue-100 text-center">
            {portfolioConfig.apprenticeship.text}
        </p>
    );
}
