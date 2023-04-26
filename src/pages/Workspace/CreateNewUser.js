import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { createUserData, getUserData } from "../../database/firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { setUserDataAction } from "../../storage/actions";

export const CreateNewUser = (props) => {
  const { uid } = useAuth();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [isUserName, setIsUserName] = useState(false);

  const [firstWorkspaceTitle, setFirstWorkspaceTitle] = useState("");
  const [isFirstWorkspaceTitle, setIsFirstWorkspaceTitle] = useState(false);

  return (
    <div className="CreateNewUser">
      {!isUserName ? (
        <div className="CreateNewUserContainer">
          <span className="Heading">Tell a bit about yourself</span>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Enter your name..."
          />
          <button
            disabled={userName.length < 3}
            onClick={() => setIsUserName(true)}
          >
            Continue
          </button>
        </div>
      ) : !isFirstWorkspaceTitle ? (
        <div className="CreateNewUserContainer">
          <span className="Heading">One more step!</span>
          <input
            value={firstWorkspaceTitle}
            onChange={(e) => setFirstWorkspaceTitle(e.target.value)}
            type="text"
            placeholder="Name your workspace..."
          />
          <button
            disabled={firstWorkspaceTitle.length < 3}
            onClick={async () => {
              console.log(uid, { name: userName });
              await createUserData(uid, firstWorkspaceTitle, {
                name: userName,
              });
              const userData = await getUserData();
              if (!userData) return;
              dispatch(setUserDataAction(userData));
              setIsFirstWorkspaceTitle(true);
            }}
          >
            Move on
          </button>
        </div>
      ) : (
        <Navigate to="/workspace" />
      )}
    </div>
  );
};
