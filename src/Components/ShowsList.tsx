import { ChangeEvent, FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showsFetchAction } from "../actions/shows";
import { Show } from "../Modles/show";
import {
  showListLoadingSelector,
  showsQuerySelector,
  showsSelector,
} from "../Selectors/selector";
import ShowRow from "./ShowRow";
import { State } from "../Store/store";
import { useNavigate, useSearchParams } from "react-router-dom";

type Props = {
  shows: Show[];
  fetchShows: (query: string) => void;
  query: string;
  showsLoading: boolean;
};

const ShowsList: FC<Props> = ({ shows, showsLoading, fetchShows, query }) => {
  const [search] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const urlQuery = search.get("q");
    if (urlQuery) {
      fetchShows(urlQuery);
      console.log("showlist");
    }
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    fetchShows(event.target.value);
    navigate(`/?q=${event.target.value}`);
  };

  return (
    <div>
      <div className="p-4 bg-slate-400">
        <input
          className="bg-gray-300 border border-gray-200 rounded-md placeholder-text-white"
          value={query}
          type="text"
          placeholder="search"
          onChange={handleChange}
        />
      </div>
      <div className="relative h-8">
        {!showsLoading && query && (
          <span className="absolute loader right-12"></span>
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
