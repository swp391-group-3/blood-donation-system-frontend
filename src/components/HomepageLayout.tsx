import React from 'react';
import { SideBar } from './SideBar';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"

interface HomepageLayoutProps {
    children: React.ReactNode;
}

export function HomepageLayout({ children }: HomepageLayoutProps) {
    return (
        <div className="flex h-screen bg-gray-50">
            <SideBar />
            <div className="flex-1 flex flex-col">
                <header className="bg-white border-b border-zinc-300 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <nav className="flex space-x-5">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink className="text-zinc-950 font-semibold text-lg">DashBoard</BreadcrumbLink>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                            <Badge variant="secondary">
                                Member
                            </Badge>
                        </nav>
                    </div>
                </header>
                {children}
            </div>
        </div>
    );
}