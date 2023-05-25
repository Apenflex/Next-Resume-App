import Image from "next/image";
import { Envelope, Linkedin } from "../../icons";

const Sidebar = ({ data }) => {
    const { name, role, education, contactLinks } = data;

    return (
        <div className="bg-black flex flex-col h-auto sm:h-screen content-between w-full sm:justify-around sm:w-1/3 sm:fixed">
            <div className="text-white flex flex-col p-10 items-center">
                <Image
                    className="rounded-full h-full mb-6"
                    // priority
                    width={200}
                    height={200}
                    src="/images/avatar.jpg"
                    alt="avatar.jpg"
                    aria-label="avatar.jpg"
                />
                <h1 className="mb-2">{name}</h1>
                <h2 className="mb-8">{role}</h2>
                {education.map((item) => (
                    <p key={item} className="mb-2">
                        {item}
                    </p>
                ))}
                <div className="text-white text-center mb-4 mt-4 sm:mt-8">
                    <h3 className="mb-2"> CONTACT ME </h3>
                    <div className="flex flex-row justify-center gap-3">
                        {contactLinks.map((link) => (
                            <a
                                className="text-2xl m-2"
                                key={link.title}
                                href={link.text}
                                aria-label={`${link.title} link`}
                            >
                                {link.title === "email" ? (
                                    <Envelope />
                                ) : (
                                    <Linkedin />
                                )}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
