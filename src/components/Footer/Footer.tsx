import css from './Footer.module.css';

const Footer: React.FC = () => {
    return ( 
        <footer className={`grid ${css.footer}`}>
            <div className={css.services}>
                <h2>Services</h2>
                <p>Digital Design</p>
                <p>Creative Development</p>
            </div>
            <div className={css.contact}>
                <h2>Contact</h2>
                <p>Mail: <a href="mailto:hello@woolff.dk">hello@woolff.dk</a></p>
                <p>Phn: <a href="tel:+4531410046">+45 31 41 00 46</a></p>
            </div>
        </footer>
    );
}

export default Footer;