import React from 'react';

export default function Card_section({ title }: { title: any }) {
    return (
        <div >
            <div className="max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 hover:border-t-8 hover:-mt-2 hover:shadow-2xl shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70">
                <div className="p-4 md:p-5">
                    <h3 className="sm:text-lg font-bold text-gray-800 dark:text-white">
                        {title}
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-neutral-400">
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                </div>
            </div>
        </div>

    );
}
