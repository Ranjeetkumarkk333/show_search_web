import { FC, useEffect } from "react";
import { Actor } from "../Modles/actor";
import DefaultImage from "../Images/DefaultImage.png";
import WithRouterProps, { withRouter } from "../Hocs/withRouter";

type Props = {
  actor: Actor;
} & WithRouterProps;
const ActorRow: FC<Props> = ({ actor, navigate}) => {
  useEffect(() => {});
  return (
    <div
      className="flex flex-col justify-between p-2 cursor-pointer "
      key={actor.id}
      onClick={() => navigate(`${actor.id}`)}
    >
      <div className="w-32 shrink=0">
        <img
          className="w-full text-center bg-white"
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
