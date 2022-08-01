import { useState, useEffect } from 'react';
import { NotionRenderer } from 'react-notion';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';

const Notion = () => {
    const [response, setResponse] = useState({});

    useEffect( () => {
        const NOTION_ID = 'UX-sharing-service-e54fe880c8ed4d80bcb3307183c090ca';

        fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_ID}`)
        .then( res => res.json() )
        .then( res => setResponse(res) )
        
    }, []);

    return (
        <NotionRenderer blockMap={response} fullPage={true} />
    );
}

export default Notion;