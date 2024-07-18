import css from './Footer.module.css';

const Footer: React.FC = () => {
    return ( 
        <footer className={`grid ${css.footer}`}>
            <div className={css.services}>
                <h2>Services</h2>
                <p>Creative Development</p>
                <p>Digital Design</p>
            </div>
            <div className={css.contact}>
                <h2>Contact</h2>
                <p><a href="mailto:hello@woolff.dk">Mail: hello@woolff.dk</a></p>
                <p><a href="tel:+4531410046">Phn: +45 31 41 00 46</a></p>
            </div>
            <div className={css.copyright}>
                <p>&copy; 2024 Woolff</p>
            </div>
        </footer>
    );
}

export default Footer;