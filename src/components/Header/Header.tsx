'use client'
import { useAppContext } from '@/app/context';
import { TransitionLink } from '@/utils/transitionLinks';
import { StaggerText } from '@/utils/staggerText/staggerText';
import css from './Header.module.css';

const Header: React.FC = () => {
    const { state } = useAppContext() || {};

    return ( 
        <header key={state?.route} className={`grid ${css.header}`}>
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
