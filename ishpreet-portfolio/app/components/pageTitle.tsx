'use client';

import { useEffect } from "react";

type PageTitleProps = {
    title: string;
};

export default function PageTitle(props: PageTitleProps) {
    useEffect(() => {
        document.title = props.title + " | Ishpreet Singh Portfolio";
    }, [props.title]);

    return (
        <h1>{props.title}</h1>
    );
}