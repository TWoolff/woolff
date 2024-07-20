import { TransitionLink } from '@/utils/transitionLinks';
import css from './Header.module.css';

const Header: React.FC = () => {
    return ( 
        <header className={`grid ${css.header}`}>
            <h2>Woolff</h2>
			<nav>
				<ul>
					<li><TransitionLink href='/'>Index</TransitionLink></li>
					<li><TransitionLink href='/portfolio'>Portfolio</TransitionLink></li>
				</ul>
			</nav>
        </header>
    );
}

export default Header;