import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showDetailsFetchAction } from "./actions/shows";
import WithRouterProps, { withRouter } from "./Modles/hocs/withRouter";
import { Show } from "./Modles/show"
import { showEntitiesSelector } from "./selector";
import { State } from "./store";

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
    <div className="flex flex-col">
    <div className='w-20 shrink=0' >
    <img className="w-full" src={show.image?.medium || 
    "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
    }/>
    </div>
    <div>
        <h3>{show.rating.average}</h3>
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

const mapDispatchToProps = {
    fetchShowDetails: showDetailsFetchAction
}
const mapStateToProps = (s:State, props:any) =>({
    show: showEntitiesSelector(s)[+props.params.id]
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(memo(ShowDetailsPage)));