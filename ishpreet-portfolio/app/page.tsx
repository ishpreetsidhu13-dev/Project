import Link from "next/link";

export default function Home() {
    return (
        <main>
            <section className="hero">
                <div className="heroText">
                    

                    <h1>
                        Ishpreet <span className="highlight">Singh</span>
                    </h1>

                    <h2>Front-End Developer</h2>

                    <p>
                        I study Interactive Media Design – Web.
                        I enjoy creating simple, responsive and user-friendly
                        The websites that I am acquiring the skills for in class.
                    </p>

                    <p>
                        My goal is to continue developing my skills in web development
                        and design by offering digital experiences to the users.
                    </p>

                    <Link href="/about">
                        <button>About Me</button>
                    </Link>

                    <Link href="/projects">
                        <button className="secondaryButton">
                            My Projects
                        </button>
                    </Link>
                </div>

                <div>
                    <img
                        src="/home logo.jpeg"
                        alt="Ishpreet Singh"
                        className="profileImage"
                    />
                </div>
            </section>
        </main>
    );
}