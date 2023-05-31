import Image from "next/image";

import Links from "./Links";

const Sidebar = ({ data }) => {
    const { name, role, location, languages, education, contactLinks } = data;
    const educationContent = (education.map((item) => (
            <p key={item} className="mb-2 text-center">
                {item}
            </p>
        ))
    )
    
    return (
        <div className="bg-black flex flex-col h-auto sm:h-screen content-between w-full sm:justify-around sm:w-1/3 sm:fixed">
            <div className="text-white flex flex-col px-6 py-5 items-center">
                <Image
                    className="rounded-full h-full"
                    // priority
                    width={150}
                    height={150}
                    src="/images/avatar.jpg"
                    alt="avatar.jpg"
                    aria-label="avatar.jpg"
                />
                <h1 className="mb-2">{name}</h1>
                <h4 className="mb-2">{location}</h4>
                <h3 className="mb-5 text-center">{role}</h3>
                <h4 className="mb-2">LANGUAGES</h4>
                <div className="flex">
                {languages.map(({ type, level }) => (
                    <div key={type} className="flex flex-col text-center w-full mb-3 px-4">
                        <h4>{type}</h4>
                        <h4>{level}</h4>
                    </div>
                ))}
                </div>
                <h4 className="mb-1">EDUCATION</h4>
                {educationContent}
                <Links contactLinks={contactLinks} />
            </div>
        </div>
    );
};

export default Sidebar;