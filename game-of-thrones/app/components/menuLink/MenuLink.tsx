'use client';
import Link, { LinkProps } from "next/link";

interface TextLinkProps extends LinkProps {
    texto: string,
    alt?: string,
    className?: string
}

export default function MenuLink({ texto, href, className, ...rest }: TextLinkProps) {
    return (
        <>
            <Link href={ href } { ...rest }>
                <div className={ className }>
                    { texto }
                </div>
            </Link>
        </>
    );
}