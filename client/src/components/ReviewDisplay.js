import React from 'react'
import { userIsOwner } from '../helpers/auth'

export const ReviewDisplay = ({ review, handleDeleteBtn }) => {
  console.log('review  -->', review)
  return (
    <div className='review-card'>
      <h6>&quot;{review.title}&quot;</h6>
      {/* <p>By {review.owner.firstName} {review.owner.lastName}</p> */}
      <p>{review.text}</p>
<<<<<<< HEAD
      {userIsOwner(review) ?
        <div className="owner-buttons mb-4">
          <button onClick={(e) => handleDeleteBtn(e, review)}>Delete review</button>
        </div>
        :
        <div>

        </div>
      }


=======
      {/* <p className='posted-by'>{review.owner.firstName}</p> */}
      {/* <button onClick={handleDeleteBtn}>Delete review</button> */}
      <hr />
>>>>>>> 0541efc2530c1dc3c611a9cc2a65b8ff59da6182
    </div>
  )
}

