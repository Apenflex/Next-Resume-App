import { useId } from "react";

import Skills from "./Skills";

const AboutMe = ({ data, skills }) => {
    const { title, body } = data;
    const id = useId();
    const content = (body?.map((el, i) => (
            <p key={`${id}_${i}`} className="mb-4 text-center">{el}</p>
        ))
    )
    return (
        <section>
            <h2 className="mb-1">{title}</h2>
            <span className="flex h-1 bg-grey w-full mb-4"></span>
            {content}
            <Skills data={skills} />
        </section>
    )
 }
export default AboutMe;