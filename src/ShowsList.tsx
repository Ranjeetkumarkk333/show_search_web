import { ChangeEvent, FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showsFetchAction } from "./actions/shows";
import { Show } from "./Modles/show";
import { showsQuerySelector, showsSelector } from "./selector";
import ShowRow from "./ShowRow";
import { State } from "./store";

type Props ={
    shows:Show[],
    fetchShows:(query:string)=>void,
    query:string
}

const ShowsList:FC<Props> =({shows, fetchShows, query})=>{
   const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        fetchShows(event.target.value)
    };
    console.log('shows', shows)
return (
<>
<div>
  <input className='border rounded-md' value={query} type="text" placeholder="search" onChange={handleChange}/>  
</div>
<div>

{shows.map((s)=> (
<ShowRow show={s} key={s.id} />
    ))}
</div>
</>
)
};

const mapStateToProps =(s:State)=>({
    shows:showsSelector(s),
     query:showsQuerySelector(s)
});

const mapDispatchToProps={
fetchShows:showsFetchAction
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(ShowsList))