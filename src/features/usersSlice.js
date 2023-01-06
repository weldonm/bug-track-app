import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Users: {},
  // isLoading: {},
  Users: {
    user_01: {
      user_name: "Tom A",
      user_email: "toma@mail.com",
      user_password: "toma01pw",
      user_role: "Admin",
      user_mobile: "Not Provided",
      user_avatar: "PIC",
      user_inbox: {},
      user_notifications: {},
    },
    user_02: {
      user_name: "Tom B",
      user_email: "tomb@mail.com",
      user_password: "tomb02pw",
      user_role: "Project Manager",
      user_mobile: "Not Provided",
      user_avatar: "PIC",
      user_inbox: {},
      user_notifications: {},
    },
    user_03: {
      user_name: "Tom C",
      user_email: "tomc@mail.com",
      user_password: "tomc03pw",
      user_role: "Developer",
      user_mobile: "Not Provided",
      user_avatar: "PIC",
      user_inbox: {},
      user_notifications: {},
    },
  },
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;