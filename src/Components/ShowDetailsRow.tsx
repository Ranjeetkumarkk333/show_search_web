import { FC } from "react";
import { Show } from "../Modles/show";
import DefaultImage from "../Images/DefaultImage.png";
import MDEditor from "@uiw/react-md-editor";

type Props = {
  show: Show;
};
const ShowDetail: FC<Props> = ({ show }) => {
  return (
    <div className="flex px-6 items-stretch">
      <div className="w-32 mr-2 shrink-0">
        <img
          className="w-full bg-white h-full"
          src={show.image?.medium || DefaultImage}
        />
      </div>
      <div className="flex flex-col justify-between">
        <h1>{show.name}</h1>
        <h3>{show.rating.average}</h3>
        <h3>{show.language}</h3>
        <h3>{show.status}</h3>
        <MDEditor.Markdown
          source={show.summary}
          className="bg-white text-gray-700"
        />
        <a href={show.url} target="blanck" className="text-blue-500">
          Link
        </a>
      </div>
    </div>
  );
};

export default ShowDetail;
