import Link from 'next/link';

const Portfolio: React.FC = () => {
    return ( 
        <section>
            <h1>Portfolio</h1>
            <Link href='portfolio/prettyugly'>PrettyUgly</Link>
        </section>
    );
}

export default Portfolio;