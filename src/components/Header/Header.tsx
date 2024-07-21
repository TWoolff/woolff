import { TransitionLink } from '@/utils/transitionLinks';
import { StaggerText } from '@/utils/staggerText/staggerText';
import css from './Header.module.css';

const Header: React.FC = () => {
    return ( 
        <header className={`grid ${css.header}`}>
            <StaggerText>Woolff</StaggerText>
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