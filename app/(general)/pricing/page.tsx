import type { Metadata } from "next";

export const metadata:Metadata = {
    title: "Pricing page",
    description: "Esta es la descripción de la página de precios",
    keywords: ["Pricing pages", "Cristhian Valera", "information", "..."],
};

export default function PricingPage(){
    return(
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}