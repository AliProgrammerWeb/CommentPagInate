import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function DescriptionArticle({img,title,content,first_name,last_name,views,publish_date,likes,read_time,avatar}) {
    return ( 
        <div className="">
            <img src={img} alt={title} className="w-full h-72"/>
            <h2 className="my-4 text-3xl">{title}</h2>
            <p className="text-[16px]">{content}</p>
            <div className="flex my-4 items-center relative">
                <img src={avatar} alt={title} className="rounded-full w-10 z-20 "/>
                <span className="bg-sky-800 text-[14px] px-2 absolute z-10 left-9 pr-5">{first_name}&nbsp;{last_name}</span>
                <span className="text-[12px] left-36 absolute pl-2">{views} views &nbsp; {publish_date} &nbsp; {likes} <FontAwesomeIcon icon={faThumbsUp} />  &nbsp;{read_time} mins read</span>
            </div>          
        </div>
        
     );
}

export default DescriptionArticle;