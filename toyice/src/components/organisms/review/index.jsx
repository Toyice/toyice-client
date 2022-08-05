import { useState, useEffect } from 'react';

import axios from 'axios';

import ReviewBox from '../../molecules/review_box';
import Input from '../../atoms/input';
import Button from '../../atoms/button';

import './style.css';

const Review = ({ data, id }) => {
    const [reviewInput, setReviewInput] = useState("");
    const [reviews, setReviews] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const [reviewList, setReviewList] = useState([]);

    const reviewClickHandler = async () => {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_HOST}/toy/review`, {
            content: reviewInput,
            toyId: id
        });

        setReviews([...reviews, { contents: reviewInput }])
        setReviewInput("");
    }

    useEffect(() => {
        const response = axios.get(`${process.env.REACT_APP_SERVER_HOST}/toy/${id}`).then( res => setReviewList(res.data.reviewList));
    }, [reviews])

    const enterClickHandler = async () => {
        if(window.event.keyCode === 13) {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_HOST}/toy/review`, {
                content: reviewInput,
                toyId: id
            });
    
            setReviews([...reviews, { contents: reviewInput }])
            setReviewInput("");
        }
    }

    return (
        <div style={{marginTop: '69px'}}>
            <div className='reviewbox'>
            { reviewList && reviewList.map( (review, i) => <ReviewBox data={review} key={i} id={i === 0 && 'review-top'} /> ) } 
            </div>
            <div style={{ marginTop: '55px' }}>
                <Input setDisabled={setDisabled} value={reviewInput} setValue={setReviewInput} placeholder={'텍스트를 입력해주세요.'} className={'info-review-input'} onKeyPress={enterClickHandler}>
                    <Button onClick={ reviewClickHandler } className={'info-review-btn'} theme={'button-review'} size={'button-small'} disabled={disabled}>작성</Button>
                </Input>
            </div>
        </div>
    );
}

export default Review;