import { FC } from "react";
import { Actor } from "../Modles/actor";
import DefaultImage from "../Images/DefaultImage.png";

type Props = {
  actor: Actor;
};
const ActorRow: FC<Props> = ({ actor }) => {
  return (
    <div
      className=" p-2  cursor-pointer flex flex-col justify-between "
      key={actor.id}
      // onClick={() => navigate("/details/" + show.id)}
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

export default ActorRow;
