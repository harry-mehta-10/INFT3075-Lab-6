import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex gap-4 items-center justify-center">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/todos">Todos</Link>
        </header>
    );
}

export default Header;