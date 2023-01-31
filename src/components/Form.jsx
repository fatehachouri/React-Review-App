import { useContext, useEffect, useState } from "react";
import { Rating } from 'react-simple-star-rating';
import { v4 as uuidv4 } from 'uuid';
import { ReviewContext } from "./context/ReviewContext";

export default function Form() {
    const[ name,setName]=useState('');
    const [message,setMessage]=useState('');
    const [rating, setRating] = useState(0)
    const {addReview,reviewToEdit,updateReview}=useContext(ReviewContext);


    useEffect(()=>{
        if(reviewToEdit.updating === true){
            setName(reviewToEdit.review.name);
            setMessage(reviewToEdit.review.message);
            setRating(reviewToEdit.review.rating );
        }
    },[reviewToEdit])

    const handleRating = (rate) => {
        setRating(rate);
      }
    const formSubmit=(e)=>{
        e.preventDefault();
        if(reviewToEdit.updating){
            const review={
                id:reviewToEdit.review.id,
                name,
                message,
                rating: rating > 5 ? rating / 20 : rating,
            }
            updateReview(review);
        }else{
            const review={
                id:uuidv4(),
                name,
                message,
                rating: rating  ,
            }
            addReview(review);
        }
        setName('');
        setMessage('');
        setRating(0)
    }
    const isDisabled=()=>{
        if(!name || !message || !rating > 0 ){
            return true;
        }
    }
  return (
    <div>
    <form className="mt-5" onSubmit={(e)=>formSubmit(e)}>
    <div className="mb-3">
  <label htmlFor="name" className="form-label">Name</label>
  <input type="text" 
  value={name}
  onChange={(e)=>setName(e.target.value)}
    className="form-control"
    name="name" 
    placeholder="Type your Name" />
</div>
<div className="mb-3">
  <label htmlFor="message" 
  className="form-label">Message</label>
  <textarea 
  value={message}
  onChange={(e)=>setMessage(e.target.value)}
  className="form-control" 
  name="message" rows="3"
  placeholder="Comment"></textarea>
</div>
<div className='mb-3'>
      <Rating
        onClick={handleRating}
        initialValue={rating}
      />
</div>
<div className="mb-3">
    <button  
    disabled={isDisabled()}
    type="submit" className={`btn btn-${reviewToEdit.updating ? 'warning' : 'primary' }`}>
        
   {reviewToEdit.updating ? 'Update': 'Submit'}</button>
  </div>
</form>
    </div>
  )
}
