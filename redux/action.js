import axios from "axios";
import * as types from "./actionType";

const signupFunction = (data) => (dispatch) => {
  dispatch({ type: types.SIGNUP_PROCESSING });
  localStorage.setItem("userData", JSON.stringify(data));
  dispatch({ type: types.SIGNUP_SUCCESS, payload: data });
};

const loginFunction = (data) => (dispatch) => {
  dispatch({ type: types.LOGIN_PROCESSING });

  const savedUserData = localStorage.getItem("userData");
  const userData = JSON.parse(savedUserData);

  if (
    userData &&
    userData.email === data.email &&
    userData.password === data.password
  ) {
    dispatch({ type: types.LOGIN_SUCCESS, payload: userData });
  } else {
    dispatch({ type: types.LOGIN_FAIL, payload: "Invalid credentials" });
  }
};

const logoutFunction = () => (dispatch) => {
  dispatch({ type: types.LOGOUT_PROCESSING });
  dispatch({ type: types.LOGOUT_SUCCESS });
};

const getLaunchData =
  (rocket_name, launch_year, launch_success) => async (dispatch) => {
    dispatch({ type: types.GET_LAUNCHES_DATA_PROCESSING });

    try {
      const res = await axios.get(
        `https://api.spacexdata.com/v3/launches?launch_success=${launch_success}&rocket_name=${rocket_name}&launch_year=${launch_year}`
      );

      dispatch({ type: types.GET_LAUNCHES_DATA_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: types.GET_LAUNCHES_DATA_FAIL,
        payload: "Oops! Something Wrong",
      });
    }
  };

export { signupFunction, loginFunction, getLaunchData, logoutFunction };
