import { ChangeEvent, FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showsFetchAction } from "../Actions/shows";
import { Show } from "../Modles/show";
import {
  showListLoadingSelector,
  showsQuerySelector,
  showsSelector,
} from "../Selectors/selector";
import ShowRow from "./ShowRow";
import { State } from "../Store/store";

type Props = {
  shows: Show[];
  fetchShows: (query: string) => void;
  query: string;
  showsLoading: boolean;
};

const ShowsList: FC<Props> = ({ shows, showsLoading, fetchShows, query }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    fetchShows(event.target.value);
  };
  console.log("showsLoading", showsLoading);
  return (
    <div>
      <div className="bg-slate-400 p-4">
        <input
          className="border border-gray-200 rounded-md bg-gray-300 placeholder-text-white"
          value={query}
          type="text"
          placeholder="search"
          onChange={handleChange}
        />
      </div>
      <div className="h-8 relative">
        {!showsLoading && query && (
          <span className="loader absolute right-12"></span>
        )}
      </div>
      <div className="flex flex-wrap justify-betweenpx-2">
        {shows.map((s) => (
          <ShowRow show={s} key={s.id} query={query} />
        ))}
        <span className="w-32 m-2" />
        <span className="w-32 m-2" />
        <span className="w-32 m-2" />
        <span className="w-32 m-2" />
        <span className="w-32 m-2" />
        <span className="w-32 m-2" />
        <span className="w-32 m-2" />
      </div>
    </div>
  );
};

const mapStateToProps = (s: State) => ({
  shows: showsSelector(s),
  query: showsQuerySelector(s),
  showsLoading: showListLoadingSelector(s),
});

const mapDispatchToProps = {
  fetchShows: showsFetchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(ShowsList));
