import AsyncStorage from "@react-native-async-storage/async-storage";
export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";
export const UPDATEUSER = "UPDATEUSER";
export const SET_USER = "SET_USER";
export const USER_BUY = 'USER_BUY';

/*export const fetchUser = (userId) => {
  return async (dispatch) => {
    // any async code you want!
    try {
      const response = await fetch(`https://offsport.b4a.io/users/${userId}`, {
        method: 'GET',
        headers: {
          'X-Parse-Application-Id': '5xjVxMrAA6weFVdln8LsiiG0zMbE0NKLZZTyJcif',
          'X-Parse-REST-API-Key': 'QzW3FSUwlMQoGzuIBiTymLobQfQ8u4OxEUVw2kUN'
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const resData = await response.json();
      //console.log(resData)
      dispatch({ type: SET_USER, user: resData});
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};*/

export const authenticate = (
  userId,
  token,
  Adress,
  username,
  name,
  lastname,
  phonenumber,
  email
) => {
  return {
    type: AUTHENTICATE,
    userId: userId,
    token: token,
    userAdress: Adress,
    userName: username,
    userEmail: email,
    userFirstName: name,
    userLastName: lastname,
    userPhoneNumber: phonenumber,
  };
};

export const updateUser = (
  userToken,
  userId,
  username,
  useremail,
  userAdress,
  name,
  lastName,
  phoneNumber,
  Adress
) => {
  return async (dispatch) => {
    try {
      saveDataToStorage(
        userToken,
        userId,
        username,
        useremail,
        userAdress,
        name,
        lastName,
        phoneNumber
      );
      const response = await fetch(`https://offsport.b4a.io/users/${userId}`, {
        method: "PUT",
        headers: {
          "X-Parse-Application-Id": "5xjVxMrAA6weFVdln8LsiiG0zMbE0NKLZZTyJcif",
          "X-Parse-REST-API-Key": "QzW3FSUwlMQoGzuIBiTymLobQfQ8u4OxEUVw2kUN",
          "X-Parse-Session-Token": userToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          lastName: lastName,
          phoneNumber: phoneNumber,
          Adress: Adress,
        }),
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const resData = await response.json();
      dispatch({ type: UPDATEUSER, userFirstName: name, userLastName: lastName, userPhoneNumber: phoneNumber });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};





export const fetchUserBuy = () => {
  return async (dispatch) => {
    // any async code you want!
    try {
      const response = await fetch("https://offsport.b4a.io/classes/BuyItems", {
        method: 'GET',
        headers: {
          'X-Parse-Application-Id': '5xjVxMrAA6weFVdln8LsiiG0zMbE0NKLZZTyJcif',
          'X-Parse-REST-API-Key': 'QzW3FSUwlMQoGzuIBiTymLobQfQ8u4OxEUVw2kUN'
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const resData = await response.json();
      dispatch({ type: USER_BUY, userBuy: resData.results });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};





export const UserBuy = (
  userId,
  userToken,
  items,
  date,
  amount,
  status,
) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://offsport.b4a.io/classes/BuyItems", {
        method: "POST",
        headers: {
          "X-Parse-Application-Id": "5xjVxMrAA6weFVdln8LsiiG0zMbE0NKLZZTyJcif",
          "X-Parse-REST-API-Key": "QzW3FSUwlMQoGzuIBiTymLobQfQ8u4OxEUVw2kUN",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: items,
          userId: userId,
          userToken: userToken,
          Date: date,
          Amount: amount,
          Status: status
        }),
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const resData = await response.json();
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};




export const signup = (email, password, username, adress) => {
  return async (dispatch) => {
    const response = await fetch("https://offsport.b4a.io/users", {
      method: "POST",
      headers: {
        "X-Parse-Application-Id": "5xjVxMrAA6weFVdln8LsiiG0zMbE0NKLZZTyJcif",
        "X-Parse-REST-API-Key": "QzW3FSUwlMQoGzuIBiTymLobQfQ8u4OxEUVw2kUN",
        "X-Parse-Revocable-Session": 1,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
        Adress: adress,
      }),
    });

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.code;
      let message = "مشکلی در ارتباط وجود دارد";
      if (errorId === 202) {
        message = "کاربری با این نام کاربری وجود دارد!";
      } else if (errorId === 203) {
        message = "کاربری با این ایمیل وجود دارد";
      }
      throw new Error(message);
    }

    const resData = await response.json();
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://offsport.b4a.io/login?username=${username}&password=${password}`,
      {
        method: "GET",
        headers: {
          "X-Parse-Application-Id": "5xjVxMrAA6weFVdln8LsiiG0zMbE0NKLZZTyJcif",
          "X-Parse-REST-API-Key": "QzW3FSUwlMQoGzuIBiTymLobQfQ8u4OxEUVw2kUN",
          "X-Parse-Revocable-Session": 1,
        },
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.code;
      let message = "مشکلی در ارتباط وجود دارد";
      if (errorId === 101) {
        message = "نام کاربری یا کلمه عبور اشتباه است!";
      }
      throw new Error(message);
    }

    const resData = await response.json();
    dispatch(
      authenticate(
        resData.objectId,
        resData.sessionToken,
        resData.Adress,
        resData.username,
        resData.name,
        resData.lastName,
        resData.phoneNumber,
        resData.email
      )
    );
    saveDataToStorage(
      resData.sessionToken,
      resData.objectId,
      resData.username,
      resData.email,
      resData.Adress,
      resData.name,
      resData.lastName,
      resData.phoneNumber
    );
  };
};

export const logout = () => {
  const deleteToken = () => {
    AsyncStorage.removeItem("userData");
  };
  deleteToken();
  return { type: LOGOUT };
};

const saveDataToStorage = (
  token,
  userId,
  userName,
  userEmail,
  userAdress,
  userFirstName,
  userLastName,
  userPhoneNumber
) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token: token,
      userId: userId,
      userName: userName,
      userEmail: userEmail,
      userAdress: userAdress,
      userFirstName: userFirstName,
      userLastName: userLastName,
      userPhoneNumber: userPhoneNumber,
    })
  );
};
