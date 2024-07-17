import Link from 'next/link';
import css from './Header.module.css';

const Header: React.FC = () => {
    return ( 
        <header className={`grid ${css.header}`}>
            <h1>Woolff</h1>
			<nav>
				<ul>
					<li><Link href='/'>Index</Link></li>
					<li><Link href='/portfolio'>Portfolio</Link></li>
				</ul>
			</nav>
        </header>
    );
}

export default Header;