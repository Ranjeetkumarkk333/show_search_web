import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Show } from "./Modles/show"
import DefaultImage from "../DefaultImage.png"

type Props = {
    show:Show,
}

const ShowRow:FC<Props> =({show})=>{
    const navigate = useNavigate()
    return (
    <div className=" p-2  cursor-pointer flex flex-col justify-between "
     onClick = {()=> navigate("/details/" + show.id)}>
        
    <div className='w-32 shrink=0'>
    <img className="w-full bg-white text-center" src={show.image?.medium || 
    DefaultImage
    }/>
    </div>
    <div className="w-32 ">
        <h1 className="">
            {show.name}
        </h1>
        </div>
    
    
    </div>
    )
};
export default ShowRow;