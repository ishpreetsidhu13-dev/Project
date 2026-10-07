'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathName: string = usePathname();

    const getLinkClass = (href: string) => {
        return pathName === href
            ? "activeLink"
            : "inactiveLink";
    };

    return (
        <nav>
            <div className="brand">
                <Link href="/">
                    <img
                        src="/main screen logo.png"
                        alt="Ish Design Logo"
                        className="logo"
                    />
                    Ish Design
                </Link>
            </div>

            <ul>
                <li>
                    <Link href="/" className={getLinkClass("/")}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link href="/about" className={getLinkClass("/about")}>
                        About
                    </Link>
                </li>

                <li>
                    <Link href="/projects" className={getLinkClass("/projects")}>
                        Projects
                    </Link>
                </li>

                <li>
                    <Link href="/skills" className={getLinkClass("/skills")}>
                        Skills
                    </Link>
                </li>

                <li>
                    <Link href="/contact" className={getLinkClass("/contact")}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}