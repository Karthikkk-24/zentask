// app/layout.tsx
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Task Management App',
    description: 'Manage your tasks efficiently',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex h-screen bg-gray-100">
                    {!isAuthPage() && (
                        <>
                            <Sidebar />
                            <div className="flex flex-col flex-1">
                                <Navbar />
                                <main className="flex-1 overflow-y-auto p-4">
                                    {children}
                                </main>
                            </div>
                        </>
                    )}
                    {isAuthPage() && children}
                </div>
            </body>
        </html>
    );
}

function isAuthPage() {
    if (typeof window !== 'undefined') {
        return ['/login', '/login/register'].includes(window.location.pathname);
    }
    return false;
}
