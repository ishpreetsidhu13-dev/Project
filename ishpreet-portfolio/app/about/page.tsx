export default function About() {
    return (
        <main>
            <h1>About Me</h1>

            <section className="aboutSection">
                <div>
                    <img
                        src="/logo2.jpeg"
                        alt="Ishpreet Singh"
                        className="profileImage"
                    />
                </div>

                <div className="aboutText">
                    <p>
                       Ishpreet This Side I am  currently pursuing my studies in Interactive Media Design - Web
                       at gerogian college 

                    </p>

                    <p>
                       I like to learn about website development with HTML, CSS,
                        JavaScript, React, and Next.js.
                    </p>

                    <p>
                        I enjoy designing websites that are easy to navigate and respond well to user interaction.
                    </p>

                    <p>
                        My personal mission is to continue improving my design
                        and development skills and create useful digital
                        experiences.
                    </p>
                </div>
            </section>
        </main>
    );
}