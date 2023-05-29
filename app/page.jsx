import { aboutMe, skills, professionalData, projectsData } from "../data/page-data";

import AboutMe from "./components/About-me";
import Projects from "./components/Projects";
import ProffesionalExperience from "./components/proffesional-experience";

export default function Page() {
    return (
        <div>
            <AboutMe data={aboutMe} skills={skills} />
            <Projects data={projectsData} />
            <ProffesionalExperience data={professionalData} />
        </div>
    );
}