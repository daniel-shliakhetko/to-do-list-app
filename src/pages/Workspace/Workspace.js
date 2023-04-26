import React from "react";
import "./index.scss";
import { CreateNewUser } from "./CreateNewUser";
import { Navigate, useParams } from "react-router-dom";

export const Workspace = (props) => {
  const { page } = useParams();

  const isCreateUser = () => page === "create-user";

  return (
    <div className="Workspace Page">
      {!isCreateUser() && props.userData && !props?.userData.name && (
        <Navigate to="/workspace/create-user" />
      )}
      {isCreateUser() && <CreateNewUser />}
      {props.userData && (
        <>
          <ul>
            {props.userData.spaces?.map((space, i) => (
              <li key={i}>{space.title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
