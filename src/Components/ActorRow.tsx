import { FC, useEffect } from "react";
import { Actor } from "../Modles/actor";
import DefaultImage from "../Images/DefaultImage.png";
import { useNavigate } from "react-router-dom";
import WithRouterProps, { withRouter } from "../Hocs/withRouter";

type Props = {
  actor: Actor;
} & WithRouterProps;
const ActorRow: FC<Props> = ({ actor, navigate, search, params }) => {
  const query = search.get("q");
  useEffect(() => {});
  return (
    <div
      className=" p-2  cursor-pointer flex flex-col justify-between "
      key={actor.id}
      onClick={() => navigate(`${actor.id}`)}
    >
      <div className="w-32 shrink=0">
        <img
          className="w-full bg-white text-center"
          src={actor.image?.medium || DefaultImage}
        />
      </div>
      <div className="w-32 ">
        <h1 className="">{actor.name}</h1>
      </div>
    </div>
  );
};
export default withRouter(ActorRow);
