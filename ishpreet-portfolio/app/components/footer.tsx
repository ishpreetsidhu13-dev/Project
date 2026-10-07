import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Ishpreet Singh</p>

            <p>
                <Link
                    href="https://github.com/ishpreetsidhu13-dev"
                    target="_blank"
                >
                    GitHub
                </Link>

                <Link
                    href="https://www.linkedin.com/in/ishsinghdesigns-8b379a387/?isSelfProfile=true"
                    target="_blank"
                >
                    LinkedIn
                </Link>
            </p>
        </footer>
    );
}