"use client";

import React from "react";
import { useParams } from "next/navigation";


/*
Left sidebar contains some filtering options

Right Main Section is a grid of products items
*/
export default function CategoryPage() {

    const { category } = useParams();

    return (
        <div className="flex flex-row">
            <div className="w-1/4">Left Sidebar</div>

            <div className="w-3/4">Right Main Section</div>
            
            
        </div>
    )
}