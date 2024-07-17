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
            <input type="checkbox" name="detail-three" id="detail-three" />
            <summary>
                <h2>{title}</h2>
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