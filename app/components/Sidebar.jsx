import Image from "next/image";
import { Envelope, Linkedin } from "../../icons";

const Sidebar = ({ data }) => {
    const { name, role, education, contactLinks } = data;
    
    return (
        <div className="bg-black flex flex-col h-screen">
            <div>
                <Image alt={name} />
                <h1>{name}</h1>
                <h2>{role}</h2>
                {education.map((item) => (
                    <p key={item}>{item}</p>
                ))}
                <div>
                    <h3> Contact me </h3>
                    {contactLinks.map((link) => (
                        <a href={link.text} key={link.title} aria-label={`${link.title} link`} >
                            {link.title === "mail" ? (
                                <Envelope />
                            ) : (
                                    <Linkedin />
                                )}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
