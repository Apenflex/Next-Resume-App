"use client";

import { useState } from "react";

const ProffesionalExperience = ({ data }) => {
    const { title, experiences } = data;
    const [showExp, setShowExp] = useState(false);
    
    return (
        <section>
            <div className="flex w-full justify-center items-center mb-2">
                <h2>{title}</h2>
                <button
                    type="button"
                    className="text-sm cursor-pointer p-2"
                    onClick={() => setShowExp(!showExp)}
                >
                    {showExp ? "▲" : "▼"}
                </button>
            </div>
            <span className="flex h-1 bg-grey w-full mb-4 gap-3"></span>
            <div className="flex flex-col gap-6">
                {experiences.map(
                    ({ company, role, time, description, current }) => (
                        <div
                            key={time}
                            className={`${showExp ? "flex" : "hidden"} flex-col rounded-lg`}
                        >
                            <span
                                className={`h-2 ${
                                    current ? "bg-green" : "bg-black"
                                }`}
                            />
                            <div className="bg-grey-light p-6 drop-shadow-md rounded-md">
                                <h3>{company}</h3>
                                <h3>{time}</h3>
                                <h3>{role}</h3>
                                <p className="mt-4">{description}</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};
export default ProffesionalExperience;
