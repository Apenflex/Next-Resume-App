import { useId } from "react";

import Skills from "./Skills";

const AboutMe = ({ data, skills }) => {
    const { title, body } = data;
    const id = useId();
    const content = (body?.map((el, i) => (
            <p key={`${id}_${i}`} className="mb-6">{el}</p>
        ))
    )
    return (
        <section>
            <h2 className="mb-8">{title}</h2>
            {content}
            <Skills data={skills} />
        </section>
    )
 }

export default AboutMe;