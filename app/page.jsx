import { aboutMe } from "../data/page-data";

import AboutMe from "./components/About-me";

export default function Page() {
    return (
        <div>
            <AboutMe data={aboutMe} />
        </div>
    );
}
