"use client";

import { useState } from "react";

const Skills = ({ data }) => {
    const [activeTab, setActiveTab] = useState("soft");
    const setTabBg = (active) => activeTab === active ? "bg-yellow" : "bg-gray";
    const setTabAlign = (tab) => (tab === "soft" ? "text-left" : "text-right");
    const tabs = (
        <div className="flex">
            {["soft", "hard"].map((tab) => (
                <button
                    key={tab}
                    type="button"
                    className={`btn ${setTabBg(tab)} ${setTabAlign(tab)}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab} Skills
                </button>
            ))}
        </div>
    );
    const content = (
        <ul
            className={`flex flrx-row flex-wrap content-start list-none py-2 gap-2 ${
                activeTab === "soft" ? "justify-start" : "justify-end"
            }`}
        >
            {data[activeTab].map(({ icon, text }) => (
                <li key={text} className="skill">
                    <span className="mr-1">{icon}</span>
                    {text}
                </li>
            ))}
        </ul>
    );
    return (
        <div>
            {tabs}
            {content}
        </div>
    );
};
export default Skills;