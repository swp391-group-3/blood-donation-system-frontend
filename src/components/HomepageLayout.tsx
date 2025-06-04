import React from 'react';
import { User, Bell } from 'lucide-react';
import { SideBar } from './SideBar';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from '@/components/ui/breadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
                                        <BreadcrumbLink className="text-zinc-950 font-semibold text-lg">
                                            DashBoard
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                            <Badge variant="secondary">
                                <User className="h-4 w-4" />
                                Member
                            </Badge>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative"
                            >
                                <Bell className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </header>
                {children}
            </div>
        </div>
    );
}
