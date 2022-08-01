import { useState, useEffect } from 'react';

import ReviewBox from '../../molecules/review_box';
import Input from '../../atoms/input';
import Button from '../../atoms/button';

const Review = () => {
    const [reviewInput, setReviewInput] = useState("");
    const [reviews, setReviews] = useState([]);
    const [disabled, setDisabled] = useState(true);

    return (
        <div>
        { reviews && reviews.map( (review, i) => <ReviewBox data={review} key={i} id={i === 0 && 'review-top'} /> ) } 
            <div style={{ marginTop: '55px' }}>
                <Input setDisabled={setDisabled} value={reviewInput} setValue={setReviewInput} placeholder={'텍스트를 입력해주세요.'} className={'info-review-input'}>
                    <Button onClick={ () => setReviews([...reviews, { contents: reviewInput }]) } className={'info-review-btn'} theme={'button-review'} size={'button-small'} disabled={disabled}>작성</Button>
                </Input>
            </div>
        </div>
    );
}

export default Review;