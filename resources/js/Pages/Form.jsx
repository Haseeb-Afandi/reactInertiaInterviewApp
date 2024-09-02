import { usePage } from "@inertiajs/react"
import { useState } from "react";
import { router } from '@inertiajs/react';


export default function Form({test}) {
    const propTest = usePage().props;
    console.log(propTest);

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [pickUpDate, setPickUpDate] = useState('');
    const [pickUpTime, setPickUpTime] = useState('');
    const [passengers, setPassengers] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('form submitted!');

        // router.post('./listings', { from, to, pickUpDate, pickUpTime, passengers,});
        router.post('./listings', { from, to, pickUpDate, pickUpTime, passengers,});

    };
    return (
        <div className="flex h-screen w-full justify-center items-center bg-slate-100">
            <div className="p-6 rounded-lg bg-white grid grid-cols-1">
               
                <h1 className="text-3xl font-bold underline w-full text-center my-4">FORM</h1>
                {/* <p>{test}</p> */}
                    {/* <form action="./listings" method="POST" className="max-w-60"> */}
                    <form onSubmit={handleSubmit} className="max-w-60">
                    <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="From" className="bg-slate-100 w-full my-2 p-2 rounded"/>
                    <input type="text" value={to} onChange={(e) => setTo(e.target.value)} placeholder="To" className="bg-slate-100 w-full my-2 p-2 rounded"/>
                    <div className="flex justify-between">
                    <input type="text" value={pickUpDate} onChange={(e) => setPickUpDate(e.target.value)} placeholder="Pickup Date" className="bg-slate-100 my-2 p-2 rounded w-[48%]"/>
                    <input type="text" value={pickUpTime} onChange={(e) => setPickUpTime(e.target.value)} placeholder="Pickup Time" className="bg-slate-100 my-2 p-2 rounded w-[48%]"/>
                    </div>
                    <button type="button" className="bg-white w-full my-2 p-2 rounded hover:border-slate-950 border-2 font-black">ADD RETURN</button>
                    <input type="text" value={passengers} onChange={(e) => setPassengers(e.target.value)} placeholder="Passengers" className="bg-slate-100 w-full my-2 p-2 rounded"/>
                    <button type="submit" className="bg-amber-500 hover:bg-amber-400 w-full my-2 p-2 rounded text-white font-black">Search</button>
                    </form>
                
            </div>
        </div>
    
    )
}