import type { Metadata } from "next";

export const metadata:Metadata = {
    title: "SEO title",
    description: "SEA Description",
    keywords: ["About pages", "Cristhian Valera", "information", "..."],
};

export default function AboutPage(){
    return(
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}