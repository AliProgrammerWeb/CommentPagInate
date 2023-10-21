import { faPlus, faMinus, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function AboutAuthor({img,first_name,last_name,description,follow}) {
    return ( 
        <div className="flex py-5">
            <div className="text-center">
                <img src={img} className="rounded-full w-28 "/>
                <h5 className="text-base text-slate-700">{first_name}</h5>
                <h5 className="text-base text-slate-700">{last_name}</h5>
            </div>
            <div className="flex flex-col justify-center space-y-5 px-8">
                <h2 className="text-2xl text-slate-700">About The Author</h2>
                <span className="text-sm text-zinc-700">
                    {description}
                </span>
                <div className="flex text-[12px] font-bold text-slate-700">
                    <div className=" py-1 px-3 border border-slate-700 ">
                        <p>FOLLOW {follow ? (<FontAwesomeIcon icon={faPlus} />
                                    ) : (
                                        <FontAwesomeIcon icon={faMinus} />
                                    )}</p>
                    </div>
                    <div className=" py-1 px-3 mx-3 bg-red-400 text-white">
                        <p>BOOK A CALL <FontAwesomeIcon icon={faEnvelope} />
                        </p>
                    </div>
                    <div className=" py-1 px-3 border border-slate-700 ">
                        <p>VIEW PROFILE</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default AboutAuthor;