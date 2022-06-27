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
    useEffect(()=>{
        fetchShows("show")
    }, [])
   const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        fetchShows(event.target.value)
    };
    console.log('shows', shows)
return (
<div className="bg-gray-800 h-screen">
<div className="bg-slate-400 p-4">
  <input className='border border-gray-200 rounded-md bg-gray-300 placeholder-text-white' 
  value={query} type="text" placeholder="search" onChange={handleChange}/>  
</div>
<div className="flex flex-wrap justify-between text-white px-2">

{shows.map((s)=> (
<ShowRow show={s} key={s.id} />
    ))}
    <span className="w-32 m-2"/>
    <span className="w-32 m-2"/>
    <span className="w-32 m-2"/>
    <span className="w-32 m-2"/>
    <span className="w-32 m-2"/>
    <span className="w-32 m-2"/>
    <span className="w-32 m-2"/>
</div>
</div>
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