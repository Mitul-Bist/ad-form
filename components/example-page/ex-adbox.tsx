"use client";
import { useState, useEffect, useRef } from "react";

interface AdBoxProps {
    adName: string;
    width: string;
    height: string;
}

export default function AdBox({ adName, width, height }: AdBoxProps) {
    return (

        <div
            className={`bg-red-500 flex flex-col items-center justify-center text-xl transition-all duration-200 shadow-md hover:shadow-2xl hover:-translate-y-1 shadow-black/20`}
            style={{ width: width, height: height }}>
            <div className="text-xl font-semibold text-gray-800 mb-0.5">{adName}</div>
            <div>{width.slice(0, -2)} x {height.slice(0, -2)}</div>
        </div>
    );
}