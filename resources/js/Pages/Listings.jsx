import { usePage } from "@inertiajs/react"
import { useState } from "react";
import { router } from '@inertiajs/react';


export default function Listings({test}) {
    const propTest = usePage().props;
    console.log(propTest);

    return (
        <div className="flex h-screen w-full justify-center items-center bg-slate-100">
            <div className="p-6 rounded-lg bg-white grid grid-cols-1">
               
                <h1 className="text-3xl font-bold underline w-full text-center my-4">Listings</h1>
                {/* <p>{test}</p> */}
                    {/* <form action="./listings" method="POST" className="max-w-60"> */}
                    
                
            </div>
        </div>
    
    )
}