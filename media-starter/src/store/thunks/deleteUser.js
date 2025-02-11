import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pause } from "./pause";

const deleteUser = createAsyncThunk("users/delete", async (user) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);

  // DEV ONLY
  await pause(1000);

  return user; // do not return response.data because it could not contain the deleted user data
});

export { deleteUser };
