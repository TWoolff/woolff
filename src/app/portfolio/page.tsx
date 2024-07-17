import Accordion from '@/components/Accordion/Accordion';
import Link from 'next/link';

const Portfolio: React.FC = () => {
    return ( 
        <section className='pagewrapper'>
            <h1>Portfolio</h1>
            <Accordion title='PrettyUgly' link='portfolio/prettyugly' image='/images/featureTEMP.webp' content='PrettyUgly is a danish jewelery and fashion brand. The webshop is made in Next.js with Contentful as CMS and Stripe for handling payment and product catalogue.' />
        </section>
    );
}

export default Portfolio;