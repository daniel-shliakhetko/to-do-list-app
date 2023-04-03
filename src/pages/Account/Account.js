import React from "react";
import { logoutUser } from "../../database/firebase";
import { useDispatch } from "react-redux";
import { logoutUserAction } from "../../storage/actions";

export const Account = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      Account
      <button
        onClick={() => {
          logoutUser();
          dispatch(logoutUserAction());
        }}
      >
        Loggout
      </button>
    </div>
  );
};
