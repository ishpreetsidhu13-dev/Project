export default function Projects() {
    return (
        <main>
            <h1>My Projects</h1>

            <p>
                Here are some examples of the projects that I have undertaken during my web design and development training.
            </p>

            <section className="cardContainer">
                <div className="card">
                    <img
                        src="/Screenshot 2026-10-05 at 5.46.18 PM.png"
                        alt="CSS Grid Project"
                        className="projectImage"
                    />

                    <h3>CSS Grid Assignemnt</h3>

                    <p>
                        This project helped me practice creating page layouts
                        By using CSS Grid, I dealt with various sections such as
                        Including a header, a navigation bar, a sidebar, the main content area, and a footer.
                    </p>
                </div>

                <div className="card">
                    <img
                        src="/website.png"
                        alt="WordPress Project"
                        className="projectImage"
                    />

                    <h3>WordPress Live Hosting Site</h3>

                    <p>
                        I created a WordPress website using themes, pages,
                        categories and posts. This project helped me understand
                        how websites can be created and managed using WordPress.
                    </p>
                </div>

                <div className="card">
                    <img
                        src="/CRUD.png"
                        alt="CRUD Project"
                        className="projectImage"
                    />

                    <h3>CRUD File</h3>

                    <p>

                        I developed a CRUD application with PHP and MySQL.
                        The application enables users to create, view, edit and delete
                        data in a database. This project helped me improve my skills
                         in working with forms, databases and programming on the server side.

                    </p>
                </div>
            </section>
        </main>
    );
}