'use client';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isAuthPage = pathname === '/login' || pathname === '/login/register';

    if (isAuthPage) {
        return <>{children}</>;
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Navbar />
                <main className="flex-1 overflow-y-auto p-4">{children}</main>
            </div>
        </div>
    );
}
