const ProffesionalExperience = ({ data }) => {
    const { title, experiences } = data;
    return (
        <section>
            <h2 className="mb-4">{title}</h2>
            <div className="flex flex-col gap-6">
                {experiences.map(({company, role, time, description, current}) => (
                    <div key={role} className="flex flex-col rounded-lg">
                        <span className={`h-2 ${current ? "bg-green" : "bg-grey"}`} />
                        <div className="bg-grey-light p-6 drop-shadow-md">
                            <h3>{company}</h3>
                            <h3>{time}</h3>
                            <h3>
                                {role}
                            </h3>
                            <p className="mt-4">
                                {description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default ProffesionalExperience;