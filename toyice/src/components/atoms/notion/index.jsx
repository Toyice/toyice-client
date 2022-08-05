import { useState, useEffect } from 'react';
import { NotionRenderer } from 'react-notion';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';

import defaultImg from '../../../assets/png/Default_image_card.png';

const Notion = ({ data }) => {
    const [response, setResponse] = useState({});

    useEffect( () => {
        const Url = data.split('/');
        const id = Url.at(-1)
        const NOTION_ID = id;

        fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_ID}`)
        .then( res => res.json() )
        .then( res => {setResponse(res);} )
        
    }, []);

    return (
        <>
        { !response.error ? <NotionRenderer blockMap={response} fullPage={true} /> : <div><img src={defaultImg} style={{width: '100%'}}/></div> }
        </>
    );
}

export default Notion;