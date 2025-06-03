import React from 'react';
import { SideBar } from './SideBar';

interface HomepageLayoutProps {
    children: React.ReactNode;
}

export function HomepageLayout({ children }: HomepageLayoutProps) {
    return (
        <div className="flex min-h-screen">
            <SideBar />
            <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-900">
                {children}
            </main>
        </div>
    );
}