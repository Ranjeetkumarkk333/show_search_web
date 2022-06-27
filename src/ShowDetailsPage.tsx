import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showDetailsFetchAction } from "./actions/shows";
import WithRouterProps, { withRouter } from "./Modles/hocs/withRouter";
import { Show } from "./Modles/show"
import { showEntitiesSelector } from "./selector";
import { State } from "./store";
import DefaultImage from "../DefaultImage.png";
import MDEditor from '@uiw/react-md-editor';

type Props = {show:Show,
fetchShowDetails: (id:number)=>void,
} & WithRouterProps;

const ShowDetailsPage:FC<Props> =({show, fetchShowDetails, params})=>{
    useEffect(()=> {
        console.log("id",params.id)
        fetchShowDetails(+params.id)
    }, [params.id]);
    if(!show){
        return <div>Loadig...</div>
    }

    return (
        <div className="bg-gray-800 text-white h-screen">
            <h1 className="bg-slate-400 text-white text-xl font-semibold p-2">
                Show Details
            </h1>
    <div className="flex text-white p-6 items-stretch">
    <div className='w-32 mr-2 shrink-0'>
    <img className="w-full bg-white h-full" src={show.image?.medium || 
    DefaultImage
    }/>
    </div>
    <div className="flex flex-col justify-between">
        
        <h1>
            {show.name}
        </h1>
        <h3>{show.rating.average}</h3>
        <h3>{show.language}</h3>
        <h3>{show.status}</h3>
        <MDEditor.Markdown source={show.summary} className="bg-gray-800" />
        <a href={show.url} target="blanck" className="text-blue-500">Link</a>
        
    </div>
    
    </div>
    </div>
    )
};

const mapDispatchToProps = {
    fetchShowDetails: showDetailsFetchAction
}
const mapStateToProps = (s:State, props:any) =>({
    show: showEntitiesSelector(s)[+props.params.id]
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(memo(ShowDetailsPage)));