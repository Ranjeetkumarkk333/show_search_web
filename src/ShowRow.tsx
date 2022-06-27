import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Show } from "./Modles/show"

type Props = {
    show:Show,
}

const ShowRow:FC<Props> =({show})=>{
    const navigate = useNavigate()
    return (
    <div className="flex flex-col items-stretch p-2 bg-gray-500 cursor-pointer" onClick = {()=> navigate("/details/" + show.id)}>
    <div className='w-20 shrink=0'>
    <img className="w-full" src={show.image?.medium || 
    "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
    }/>
    </div>
    <div>
        <h1>
            {show.name}
        </h1>
        <p>
            {show.summary}
        </p>
    </div>
    
    </div>
    )
};
export default ShowRow;