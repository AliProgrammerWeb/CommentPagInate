import axios from "axios";
import { useEffect, useState } from "react";
import { resolve } from "styled-jsx/css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import PreviousMap from "postcss/lib/previous-map";


function Comments({articleid }) {

  const [comments,setComments] = useState([]);
  const [nextPage,setNextPage] = useState("")

  useEffect(() => {
    axios.get(`https://api.engenesis.ororra.com/v1/articles/${articleid}/reviews`)
    .then(response => {setComments(response.data.data.data)
                      setNextPage(response.data.data.next_page_url)})
    .catch(error => console.log('error is : ' , error))
  },[articleid])

  const handleShowmore = () => {
    if(nextPage){
      axios.get(nextPage)
      .then(response => {console.log(response)
                          setComments([...comments,...response.data.data.data.map(comment => (comment))]) 
                          
                          // setComments(updatedComments)
                        })
      .catch(error => console.log("error is : " , error))
    }
    else{
      console.log("there is no comments")
    }
  }
  return (
    <div className="border px-8">
      {comments.map((comment) => (
        <div className="border-b py-8">
          <div className="flex">
            <img
              src={comment.writer.avatar}
              className="rounded-full w-10"
            />
            <div className="ml-2">
              <h6 className="text-[16px] text-slate-700">
                {comment.writer.first_name} {comment.writer.last_name}
              </h6>
              <p className="text-[14px] text-gray-500 mt-1">{comment.posted_on}</p>
            </div>
          </div>
          <div className="p-3 text-sm text-zinc-700">
            <p>{comment.content}</p>
          </div>
        </div>
      ))}
      <div className="text-center">
        {nextPage ? (<button onClick={handleShowmore} className="text-sm text-zinc-700 my-2">

                    Show More <FontAwesomeIcon icon={faAngleDown} />

                    </button>) : ("")}
      
      </div>
    </div>
  );
}

export default Comments;
