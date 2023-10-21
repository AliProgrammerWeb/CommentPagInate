import { useContext } from "react";
import NewsData from "./context/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";



function NewsImage({firstName,lastName,img}) {
    return ( 
        <div className="bg-slate-200 text-[14px] cursor-pointer">
            
            <img src={img} alt={firstName} className="w-full h-32"/>
            <p className="p-2">
                <span className="mr-2 text-orange-600 "><FontAwesomeIcon icon={faNewspaper} /></span>
                <span className="text-orange-600 mr-2">
                    Article by
                </span>
                <span>
                    {firstName}
                    {' '}
                    {lastName}
                </span>
            </p>

        </div>
     );
}

export default NewsImage;