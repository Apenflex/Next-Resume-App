import Image from "next/image";

import Links from "./Links";

const Sidebar = ({ data }) => {
    const { name, role, location, languages, education, contactLinks } = data;
    const educationContent = (education.map((item) => (
            <p key={item} className="mb-2">
                {item}
            </p>
        ))
    )
    
    return (
        <div className="bg-black flex flex-col h-auto sm:h-screen content-between w-full sm:justify-around sm:w-1/3 sm:fixed">
            <div className="text-white flex flex-col px-10 py-5 items-center">
                <Image
                    className="rounded-full h-full mb-2"
                    // priority
                    width={150}
                    height={150}
                    src="/images/avatar.jpg"
                    alt="avatar.jpg"
                    aria-label="avatar.jpg"
                />
                <h1 className="mb-2">{name}</h1>
                <h3 className="mb-2">{location}</h3>
                <h2 className="mb-5">{role}</h2>
                <h2 className="mb-2">LANGUAGES</h2>
                {languages.map(({ type, level }) => (
                    <div key={type} className="flex flex-col w-full mb-2">
                        <h2>{type}</h2>
                        <h2>{level}</h2>
                    </div>
                ))}
                <h2 className="mb-2">EDUCATION</h2>
                {educationContent}
                <Links contactLinks={contactLinks} />
            </div>
        </div>
    );
};

export default Sidebar;