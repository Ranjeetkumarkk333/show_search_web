import React from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

export default interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
  navigate: ReturnType<typeof useNavigate>;
  params: Record<string, string>;
  search: ReturnType<typeof useSearchParams>[0];
}

export const withRouter = <T extends WithRouterProps>(
  Component: React.ComponentType<T>
) => {
  return (props: Omit<T, keyof WithRouterProps>) => {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    const [search] = useSearchParams();

    return (
      <Component
        {...(props as T)}
        location={location}
        params={params}
        navigate={navigate}
        search={search}
      />
    );
  };
};
