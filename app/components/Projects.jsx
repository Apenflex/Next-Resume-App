import Link from 'next/link';

const Projects = ({ data }) => {
    const { works } = data;
    return (
        <section>
            <h2 className="mb-1">MY PROJECTS</h2>
            <span className="flex h-1 bg-grey w-full mb-4 gap-3"></span>
            <div className="flex flex-col gap-2">
                {works.map(({ title, link, description }) => (
                    <div key={title} className="bg-grey-light p-4 drop-shadow-md rounded-lg">
                        <Link href={`${link}`} target='_blank'>{title}</Link>
                        <h4 className="mt-4">{description}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Projects;