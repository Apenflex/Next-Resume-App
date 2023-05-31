import Link from "next/link";

const Projects = ({ data }) => {
    const { works } = data;
    return (
        <section>
            <div>
                <h2 className="mb-1">MY PROJECTS</h2>
                <span className="flex h-1 bg-grey w-full mb-4 gap-3"></span>
                <div className="flex flex-col gap-2">
                    {works.map(({ title, link, description, stack }) => (
                        <div
                            key={title}
                            className="flex flex-col justify-between items-center bg-grey-light p-4 drop-shadow-md rounded-lg gap-3 md:flex-row"
                        >
                            <div className="flex flex-col items-center w-full md:w-1/2 md:items-start">
                                <Link
                                    href={`${link}`}
                                    target="_blank"
                                    className="link relative"
                                >
                                    {title}
                                </Link>
                                <h4 className="mt-4">{description}</h4>
                            </div>
                            <div className="flex flex-col w-full md:w-1/2">
                                <h4>Used in project</h4>
                                <ul className="flex flex-row flex-wrap list-none py-2 gap-1">
                                    {stack.map((item) => (
                                        <li
                                            key={item}
                                            className="bg-green-light py-1 px-3 w-fit rounded-md"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects;
