import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav className="neumorphism bg-black text-white p-4 ">
            <div className="container mx-auto flex justify-between items-center">
                <ul >
                    <Link href="/" className="mx-2">
                        Home
                    </Link>
                    <Link href="/about" className="mx-2">
                        About
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

