"use client";
import { useState, useEffect, useRef } from "react";

const adData = [
    {
        type: "Leaderboard",
        description:
            "A horizontal banner that spans the top of a webpage. It is one of the most recognizable display ad formats and is often the first advertisement visitors see.",
        bestFor:
            "Brand awareness, product launches, announcements, and campaigns that need high visibility.",
        engagement:
            "High visibility but moderate click-through rates. Excellent for impressions rather than direct conversions."
    },
    {
        type: "Large Leaderboard",
        description:
            "A wider version of the standard leaderboard that provides additional space for creative content and branding.",
        bestFor:
            "Premium branding campaigns, automotive, technology, finance, and enterprise advertising.",
        engagement:
            "Higher visibility than a standard leaderboard, with good brand recall but moderate interaction."
    },
    {
        type: "Billboard",
        description:
            "A large, attention-grabbing banner commonly placed near the top of a webpage. It supports rich visuals and compelling promotional messages.",
        bestFor:
            "Major promotions, seasonal campaigns, movie releases, product launches, and premium sponsorships.",
        engagement:
            "Very high visibility and strong engagement due to its large size and prominent placement."
    },
    {
        type: "Medium Rectangle",
        description:
            "The most widely used display ad format. It fits naturally within articles and sidebars, making it less intrusive while remaining highly effective.",
        bestFor:
            "Display advertising, affiliate marketing, e-commerce products, and contextual advertisements.",
        engagement:
            "One of the highest-performing display ad formats with consistently strong click-through rates."
    },
    {
        type: "Large Rectangle",
        description:
            "A larger variation of the medium rectangle that offers more space for visuals and promotional content.",
        bestFor:
            "Native-style advertising, detailed product promotions, and content-focused campaigns.",
        engagement:
            "Generally higher engagement than the medium rectangle due to its larger creative area."
    },
    {
        type: "Wide Skyscraper",
        description:
            "A tall vertical advertisement designed for desktop sidebars. It remains visible as users scroll through long pages.",
        bestFor:
            "Long-term branding campaigns, software, education, financial services, and subscription products.",
        engagement:
            "Moderate engagement with excellent long-duration visibility throughout the browsing session."
    },
    {
        type: "Half Page",
        description:
            "A premium vertical display format offering significantly more creative space than traditional sidebar ads.",
        bestFor:
            "Luxury brands, real estate, automobiles, travel, and premium products requiring detailed visuals.",
        engagement:
            "Very high engagement and viewability, making it one of the best-performing desktop display formats."
    },
    {
        type: "Mobile Banner",
        description:
            "A compact mobile advertisement optimized for smartphones. It minimizes disruption while remaining visible.",
        bestFor:
            "General mobile advertising, app installs, local businesses, and simple promotional campaigns.",
        engagement:
            "Moderate engagement with excellent compatibility across nearly all mobile devices."
    },
    {
        type: "Large Mobile Banner",
        description:
            "A taller mobile banner that provides more room for attractive visuals and promotional messaging.",
        bestFor:
            "Mobile e-commerce, app promotions, gaming advertisements, and product showcases.",
        engagement:
            "Higher engagement than the standard mobile banner due to increased visibility."
    },
    {
        type: "Mobile Leaderboard",
        description:
            "A compact banner designed specifically for mobile websites where screen space is limited.",
        bestFor:
            "Lightweight promotions, local businesses, and mobile-friendly advertising campaigns.",
        engagement:
            "Moderate engagement with fast loading times and broad device compatibility."
    },
    {
        type: "Square",
        description:
            "A versatile ad format that can be placed in sidebars, within content, or grid layouts depending on page design.",
        bestFor:
            "General display advertising, product promotions, sponsored content, and small business campaigns.",
        engagement:
            "Moderate engagement that varies depending on placement and surrounding content."
    }
];

export function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        // Add listener to the global window object
        window.addEventListener('mousemove', handleMouseMove);

        // Clean up listener when the component unmounts
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return mousePosition;
}


export default function AdBox(props) {
    const [active, setActive] = useState(false);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
    const timeoutRef = useRef(null);

    const adObj = adData.find((ad) => ad.type == props.adName);
    const { x, y } = useMousePosition();

    const coordsRef = useRef({ x, y });
    coordsRef.current = { x, y };

    function handleMouseEnter() {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            // Freeze the mouse position right when the timer finishes
            setTooltipPos(coordsRef.current);
            setActive(true);
        }, 300);
    }

    const handleMouseLeave = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActive(false);
    };

    return (
        <div
            className="my-5 mx-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onScroll={() => setActive(false)}
        >
            <div className="text-xl font-semibold text-gray-800">{props.adName}</div>
            <div className="bg-white flex flex-col items-center justify-center text-xl shadow-2xl shadow-black/20" style={{ width: props.width, height: props.height }}>
                {props.width.slice(0, -2)} x {props.height.slice(0, -2)}
            </div>
            {
                active &&
                <div
                    className="fixed z-10 w-[25vw] p-2 bg-gray-800 text-gray-50 text-sm font-thin rounded-sm" style={{ top: tooltipPos.y + 10, left: tooltipPos.x + 10 }}>
                    {adObj?.description}
                    <ul className="list-disc pl-5">
                        <li>bestFor: {adObj?.bestFor}</li>
                        <li>engagement: {adObj?.engagement}</li>
                    </ul>
                </div>
            }
        </div>
    );
}