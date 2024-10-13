import { Inter } from 'next/font/google';
import React from 'react';
import ClientLayout from './ClientLayout';
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
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
