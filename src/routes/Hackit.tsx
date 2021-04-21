import React from 'react';
import { useParams } from 'react-router-dom';

type UrlParams = {
    slug: string,
}
const HackitPage = () => {
    const { slug } = useParams<UrlParams>();

    return(
        <div>
            <p>
                I'm a hackit!
            </p>
            <p>
                {slug}
            </p>
        </div>
    )
}

export default HackitPage;