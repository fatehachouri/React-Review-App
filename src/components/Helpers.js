
export const showRating= (rating) =>{
    switch(rating){
        case 1:
            return(
                 <>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                 </>
            ) 
        case 2:
            return (
                <>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
                </>
            )
        case 3:
            return ( <>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
              </>
              )
        case 4:
            return  ( <>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star"></i>
              </>
              )
        case 5:
            return  ( <>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
              </>
              )
        default:
            return 'something went wrong '
    }
}