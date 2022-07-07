import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import {
  actorsFetchAction,
  showDetailsFetchAction,
  showsFetchAction,
} from "../Actions/shows";
import WithRouterProps, { withRouter } from "../Hocs/withRouter";
import { Show } from "../Modles/show";
import {
  showActorsSelector,
  showEntitiesSelector,
  showLoadingSelector,
  showsSelector,
} from "../Selectors/selector";
import { State } from "../Store/store";
import "../Spiner.css";
import { Actor } from "../Modles/actor";
import ActorRow from "./ActorRow";
import ShowDetail from "./ShowDetailsRow";
import LinkWithQuery from "./LinkWithQuery";

type Props = {
  show: Show;
  actors: Actor[];
  loading: boolean;
  fetchShowDetails: (id: number) => void;
  fetchactorsDetail: (id: number) => void;
  fetchShows: (q: string) => void;
  prev?: string;
  next?: string;
} & WithRouterProps;

const ShowDetailsPage: FC<Props> = ({
  show,
  actors,
  params,
  loading,
  search,
  prev,
  next,
  fetchShowDetails,
  fetchactorsDetail,
  fetchShows,
}) => {
  useEffect(() => {
    const query = search.get("q");
    if (!show && query) {
      fetchShows(query);
    }
    const showId = +params.id;
    fetchShowDetails(showId);
    fetchactorsDetail(showId);
  }, [params.id]);

  return (
    <>
      <h1 className="bg-slate-400 text-white text-xl font-semibold p-2">
        Show Details
      </h1>
      <div className="h-8 relative">
        {!loading && <span className="loader absolute right-12"></span>}
      </div>
      {show && (
        <div>
          <ShowDetail show={show} />
          <div className="flex flex-wrap justify-betweenpx-2">
            {actors &&
              actors.map((actor) => <ActorRow key={actor.id} actor={actor} />)}
            <span className="w-32 m-2" />
            <span className="w-32 m-2" />
            <span className="w-32 m-2" />
            <span className="w-32 m-2" />
            <span className="w-32 m-2" />
            <span className="w-32 m-2" />
            <span className="w-32 m-2" />
          </div>
          <div className="flex justify-between p-4">
            {prev ? (
              <LinkWithQuery to={prev}>Prev</LinkWithQuery>
            ) : (
              <span></span>
            )}
            {next ? (
              <LinkWithQuery to={next}>Next</LinkWithQuery>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = {
  fetchShowDetails: showDetailsFetchAction,
  fetchactorsDetail: actorsFetchAction,
  fetchShows: showsFetchAction,
};
const mapStateToProps = (s: State, props: any) => {
  const showId = +props.params.id;
  const shows = showsSelector(s);
  let prevShow, nextShow;
  const i = shows.findIndex((show) => show.id === showId);

  if (i >= 1) {
    prevShow = shows[i - 1];
  }
  if (i + 1 < shows.length) {
    nextShow = shows[i + 1];
  }
  return {
    show: showEntitiesSelector(s)[showId],
    loading: showLoadingSelector(s)[showId],
    actors: showActorsSelector(s)[showId],
    prev: prevShow && `/shows/${prevShow.id}`,
    next: nextShow && `/shows/${nextShow.id}`,
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(memo(ShowDetailsPage))
);
