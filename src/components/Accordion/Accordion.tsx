import Link from 'next/link'
import css from './Accordion.module.css'

type AccordionProps = {
    title: string
    content: string
    link: string
    image: string
}

const Accordion: React.FC<AccordionProps> = ({title, content, link, image}) => {
    return ( 
        <details className={css.accordion} open>
            <summary>
                <input type="checkbox" name="input" id="input" />
                <label htmlFor="input">{title}</label>
            </summary>
            <article>
                <p>{content}</p>
                <Link href={link} className={css.link}>View project</Link>
            </article>
            <div className={css.image} style={{ backgroundImage: `url(${image})` }} />
        </details>

    )
}

export default Accordion