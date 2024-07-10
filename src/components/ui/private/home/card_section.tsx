import React from 'react';

export default function Card_section({
    title,
    contents
}: { 
    title: string; 
    contents : string;
}) {
    return (
        <div >
            <div className="max-w-[350px] sm:w-auto md:w-[300px] lg:max-w-xs flex flex-col bg-white border border-t-[6px] border-t-blue-600 hover:border-t-8 hover:-mt-3 hover:shadow-2xl shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70">
                <div className="p-4 md:p-5">
                    <h3 className="text-center sm:text-start text-lg font-bold text-gray-800 dark:text-white">
                        {title}
                    </h3>
                    <p className="text-center sm:text-start mt-2 text-gray-500 dark:text-neutral-400">
                        {contents}
                    </p>
                </div>
            </div>
        </div>

    );
}
