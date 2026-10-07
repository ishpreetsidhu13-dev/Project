'use client';

import { ChangeEvent, useState } from "react";
import Link from "next/link";

export default function Contact() {
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [confirmation, setConfirmation] = useState<string>("");

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const handleSubmit = () => {
        setConfirmation(
            `Name: ${name} - Phone: ${phone} - Message: ${message}`
        );
    };

    return (
        <main>
            <h1>Contact Me</h1>

            <p>
                If you would like to contact me, please fill out the form below.
            </p>

            <section className="contactForm">
                <label>Full Name</label>

                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleNameChange}
                />

                <label>Contact Number</label>

                <input
                    type="text"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={handlePhoneChange}
                />

                <label>Short Message</label>

                <textarea
                    placeholder="Enter your message"
                    value={message}
                    onChange={handleMessageChange}
                ></textarea>

                <button onClick={handleSubmit}>
                    Submit
                </button>

                <p className="confirmation">
                    {confirmation}
                </p>

                {confirmation && (
                    <Link href="/about" className="backLink">
                        Back to About Me
                    </Link>
                )}
            </section>
        </main>
    );
}