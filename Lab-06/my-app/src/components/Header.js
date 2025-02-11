import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <nav className="flex space-x-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/todos">Todos</Link>
            <Link href="/posts">Posts</Link>

            </nav>
        </header>
    );
}

export default Header;