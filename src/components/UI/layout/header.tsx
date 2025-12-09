"use client";
import {siteConfig} from "@/src/config/site.config";

export default function Header() {
    return (
        <header className="w-full bg-white shadow-sm py-4 px-6">
            <h1 className="text-xl md:text-2xl font-semibold text-blue-600">
                {siteConfig.title}
            </h1>
        </header>
    );
}