"use client";

import React from "react";
import { useParams } from "next/navigation";
import ProductUnit from "@/components/ProductUnit";


/*
Left sidebar contains some filtering options

Right Main Section is a grid of products items
*/
export default function CategoryPage() {

    const { category } = useParams();

    return (
        <div className="flex flex-row min-h-[90vh] max-h-[90vh] pt-8">
            <div className="w-1/4">
            <div className="flex flex-col p-8">
                <div className="bg-white/5 p-4 rounded-md">
                    <h2>Filters</h2>
                </div>
            </div>
            </div>

            <div className="w-3/4">
                <div className="grid grid-cols-5 gap-4 p-8">
                    <ProductUnit />
                    <ProductUnit />
                    <ProductUnit />
                    <ProductUnit />
                </div>
            </div>

            
        </div>
    )
}