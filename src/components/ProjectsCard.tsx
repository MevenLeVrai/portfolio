import {cn} from "@/lib/utils";
import Link from "next/link";
import {buttonVariants} from "./ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./animation/FramerWrapper";
import {ArrowUpRight} from "lucide-react";

interface ProjectCardProps {
    value: {
        title: string;
        description: string;
        tags: string[];
        link: string;
        status?: string;
    };
    num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({value, num}) => {
    return (
        <FramerWrapper
            className="max-w-[32%] max-lg:max-w-full"
            y={0}
            scale={0.8}
            delay={num / 4}
            duration={0.15}
        >
            <Card
                className="w-full h-full flex flex-col hover:shadow-lg transition-all duration-300 border-2 relative overflow-hidden">

                {/* Bandeau status */}
                {value.status === "new" && (
                    <div className="absolute top-3 left-[-22px] rotate-[-45deg] bg-emerald-500 text-white text-[10px] font-bold px-7 py-0.5 z-10">
                        NEW
                    </div>
                )}
                {value.status === "in progress" && (
                    <div className="absolute top-3 left-[-22px] rotate-[-45deg] bg-orange-400 text-white text-[10px] font-bold px-7 py-0.5 z-10">
                        WIP
                    </div>
                )}


                <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold text-primary">{value.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col gap-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>

                    <div className="flex flex-wrap gap-2">
                        {value.tags.map((tag: string, index: number) => {
                            const tagStyles = {
                                'Java': 'bg-red-100 text-red-800',
                                'C/C++': 'bg-red-100 text-red-800',
                                'Java Spring': 'bg-violet-100 text-violet-800',
                                'Angular': 'bg-violet-100 text-violet-800',
                                'MySQL': 'bg-orange-100 text-orange-800',
                                'MongoDB': 'bg-orange-100 text-orange-800',
                                'Redis': 'bg-orange-100 text-orange-800',
                                'GitHub Actions': 'bg-indigo-100 text-indigo-800',
                                'CI/CD': 'bg-indigo-100 text-indigo-800',
                                'Docker': 'bg-indigo-100 text-indigo-800',
                                'DevOps': 'bg-indigo-100 text-indigo-800',
                                'Self‑Hosted': 'bg-indigo-100 text-indigo-800',
                                'Azure': 'bg-sky-100 text-sky-800',
                                'Azure DevOps': 'bg-sky-100 text-sky-800',
                                'Container Apps': 'bg-sky-100 text-sky-800',
                                'Networking': 'bg-teal-100 text-teal-800',
                                'OPNsense': 'bg-teal-100 text-teal-800',
                                'VMware': 'bg-teal-100 text-teal-800',
                                'Firewall': 'bg-teal-100 text-teal-800',
                                'VLAN': 'bg-teal-100 text-teal-800',
                                'DHCP': 'bg-teal-100 text-teal-800',
                                'HP ProCurve': 'bg-teal-100 text-teal-800',
                                'Telnet': 'bg-teal-100 text-teal-800',
                                'PfSense': 'bg-teal-100 text-teal-800',
                                'Grafana': 'bg-yellow-100 text-yellow-800',
                                'Prometheus': 'bg-yellow-100 text-yellow-800',
                                'Loki': 'bg-yellow-100 text-yellow-800',
                                'Monitoring': 'bg-yellow-100 text-yellow-800',

                                'Wazuh': 'bg-red-100 text-red-800',
                                'GLPI': 'bg-rose-100 text-rose-800',
                                'ITSM': 'bg-rose-100 text-rose-800',
                                'SOC-lite': 'bg-red-100 text-red-800',
                                'Cybersecurity': 'bg-red-100 text-red-800',

                                'CTF': 'bg-red-100 text-red-800',
                                'HackTheBox': 'bg-red-100 text-red-800',
                                'TryHackMe': 'bg-red-100 text-red-800',
                                'Web Exploitation': 'bg-red-100 text-red-800',
                                'Reverse Engineering': 'bg-red-100 text-red-800',
                                'OSINT': 'bg-red-100 text-red-800',
                                'COMCYBER': 'bg-red-100 text-red-800',
                                'Capture The Flag': 'bg-red-100 text-red-800',

                                'ESP32': 'bg-amber-100 text-amber-800',
                                'Wi‑Fi': 'bg-amber-100 text-amber-800',
                                'Packet Sniffing': 'bg-amber-100 text-amber-800',
                                'Embedded': 'bg-amber-100 text-amber-800',
                                'Git': 'bg-slate-100 text-slate-800',
                                'Forgejo': 'bg-slate-100 text-slate-800',
                                'Debian': 'bg-slate-100 text-slate-800',
                                'CCNA': 'bg-teal-100 text-teal-800',
                                'Cisco': 'bg-teal-100 text-teal-800',
                                'IPv4': 'bg-teal-100 text-teal-800',
                                'IPv6': 'bg-teal-100 text-teal-800',
                                'Routing': 'bg-teal-100 text-teal-800',
                                'Switching': 'bg-teal-100 text-teal-800',
                            } [tag] || 'bg-gray-100 text-gray-800';

                            return (
                                <span
                                    key={index}
                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tagStyles}`}
                                >
                    {tag}
                  </span>
                            );
                        })}
                    </div>
                </CardContent>
                <CardFooter className="pt-2">
                    {value.link && (
                        <Link
                            href={value.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                buttonVariants({variant: "default", size: "sm"}),
                                "w-fit transition-all hover:translate-y-[-2px] hover:shadow-md group"
                            )}
                        >
                            Visit Project
                            <ArrowUpRight
                                className="h-4 w-4 ml-1 hidden group-hover:block -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"/>
                        </Link>
                    )}
                </CardFooter>
            </Card>
        </FramerWrapper>
    );
};

export default ProjectCards;
