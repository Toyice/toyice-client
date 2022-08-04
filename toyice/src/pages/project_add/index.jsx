import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';
import axios from 'axios';
import { useState } from 'react';

import Span from '../../components/atoms/span';
import Body from '../../components/organisms/body';
import AddBasicInfo from '../../components/molecules/add_basicInfo';
import AddProjectType from '../../components/molecules/add_projectType';
import AddTag from '../../components/molecules/add_tag';
import AddLink from '../../components/molecules/add_link';
import Button from '../../components/atoms/button';
import { useEffect } from 'react';

export const mainImage = atom({ key: 'img', default: ''});
export const title = atom({ key: 'title', default: ''});
export const description = atom({ key: 'description', default: ''});
export const type = atom({ key: 'type', default: ''});
export const tags = atom({ key: 'tags', default: []});
export const notionUrl = atom({ key: 'notionUrl', default: ''});

export const toyFormData = atom({ key: 'toyFormData', default: []});

export default function Index() {
    const [disabled, setDisabled] = useState(true);
    const temp =useRecoilValue(mainImage);
    const ttitle =useRecoilValue(title);
    const tdes =useRecoilValue(description);
    const ttype =useRecoilValue(type);
    const ttags =useRecoilValue(tags);
    const tnotion =useRecoilValue(notionUrl);
    const setTemp = useSetRecoilState(mainImage);
    
    const addClickHandler = () => {
        const Json = {
            "description": tdes,
            "notionUrl": tnotion,
            "title": ttitle,
            "type" : ttype,
            "tagList" : ttags
        };
    
        const formData = new FormData();
        formData.append("request", new Blob([ JSON.stringify(Json) ], { type: "application/json" }));
        formData.append("image", temp);
        console.log(tdes, tnotion, ttitle, ttype, ttags);

        const temp2 = temp;
        temp2.append('request', new Blob([ JSON.stringify(Json) ], { type: "application/json" }));
        setTemp(temp2);
        const response = axios.post(`${process.env.REACT_APP_SERVER_HOST}/toy`, formData, {
            headers: {
              "Content-Type": 'multipart/form-data',
            },
          }).then( res => console.log(res));
          
          
          console.log(temp2.get('image'));
       
    }

    useEffect(() => {
        if(temp !== "" && ttitle !== "" && tdes !== "" && ttype !== "" && tnotion.includes("https://") && tnotion.includes("notion.site")) setDisabled(false);
        else setDisabled(true);
    }, [temp, ttitle, tdes, ttype, tnotion])

    useEffect(() => {
        document.body.scrollTop = window.scrollTo(0,0);
    }, [])

    return (
        <Body className='project-add-body'>
            <div>
                <Span color={'span-point'} size={'span-large'}>My Toy 등록하기</Span>
            </div>
            <AddBasicInfo />
            <AddProjectType />
            <AddTag />
            <AddLink />
            <Button className='project-add-btn' theme='button-point' size='button-large' onClick={addClickHandler} disabled={disabled}>나의 Toy 자랑하기</Button>
        </Body>
    );
}