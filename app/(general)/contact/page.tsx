import type { Metadata } from "next";

export const metadata:Metadata = {
    title: "SEO title contact",
    description: "SEA Description contact",
    keywords: ["Contact pages", "Cristhian Valera", "information", "..."],

};

export default function ContactPage(){
    return(
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}