import React from 'react';
import { SideBar } from './SideBar';

interface HomepageLayoutProps {
    children: React.ReactNode;
}

export function HomepageLayout({ children }: HomepageLayoutProps) {
    return (
        <div className="flex h-screen bg-gray-50">
            <SideBar />
            <div className="flex-1 flex flex-col">
                {children}
            </div>
        </div>
    );
}
