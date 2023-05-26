import { aboutMe, skills, professionalData } from "../data/page-data";

import AboutMe from "./components/About-me";
import ProffesionalExperience from "./components/proffesional-experience";

export default function Page() {
    return (
        <div>
            <AboutMe data={aboutMe} skills={skills} />
            <ProffesionalExperience data={professionalData} />
        </div>
    );
}