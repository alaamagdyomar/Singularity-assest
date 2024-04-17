import React from 'react';

export default function Layout({ children }) {
    return (
        <div className="flex flex-col h-full w-full">
            <main>{children}</main>
        </div>
    );
}
