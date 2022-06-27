import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default interface WithRouterProps {
    location:ReturnType<typeof useLocation>;
    navigate:ReturnType<typeof useNavigate>;
    params:Record<string, string>;

}

export const withRouter =<T extends WithRouterProps> (Component:React.ComponentType<T>)=>{
    return (
        (props:Omit<T, keyof WithRouterProps>)=> {
            const location = useLocation();
            const params = useParams();
            const navigate = useNavigate();

            return (
                <Component 
                {...(props as T)}
                location ={location}
                params={params}
                navigate={navigate}
                />
            );
        }
    );
};