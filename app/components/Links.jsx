"use client";
import { useCallback, useState } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import { sendEmail } from "../../lib/api";

import { Envelope, Linkedin, GitHub, Phone } from "../../icons";
import "react-toastify/dist/ReactToastify.css";

const Links = ({ contactLinks }) => {
    const [email, setEmail] = useState(false);
    const initial = { email: "", message: "" };
    const [formData, setFormData] = useState({ ...initial });

    const handleSendMessage = useCallback(
        async (e) => {
            e.preventDefault();

            try {
                await sendEmail(formData);
                setFormData({ ...initial });
                toast.success("Message sent successfully");
            } catch (error) {
                toast.error("Something went wrong");
                console.log(error);
            }
        },
        [formData]
    );

    return (
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
                        {link.title === "linkedin" ? (
                            <Linkedin />
                        ) : link.title === "github" ? (
                            <GitHub />
                        ) : (
                            <Phone />
                        )}
                    </a>
                ))}
                <button className="text-2xl" onClick={() => setEmail(!email)}>
                    <Envelope />
                </button>
            </div>
            <ToastContainer
                position="bottom-left"
                autoClose={1400}
                transition={Slide}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
            />
            {email && (
                <form
                    className="flex flex-col gap-2 mt-2"
                    action="#"
                    method="POST"
                    onSubmit={handleSendMessage}
                >
                    <input
                        className="text-black"
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        autoComplete="email"
                        required
                        placeholder="Your email"
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                email: e.target.value,
                            }))
                        }
                    />
                    <input
                        className="text-black"
                        id="message"
                        name="message"
                        type="text"
                        value={formData.message}
                        required
                        placeholder="Your message"
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                message: e.target.value,
                            }))
                        }
                    />
                    <button
                        className="bg-grey-light rounded-md text-black p-1 hover:bg-yellow transition-colors"
                        type="submit"
                    >
                        Send
                    </button>
                </form>
            )}
        </div>
    );
};
export default Links;
