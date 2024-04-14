import { createAsyncThunk } from "@reduxjs/toolkit";

import apiAxios from "../../../utils/apiAxios";

export const getAllContact = createAsyncThunk(
  "GET_ALL_CONTACT",
  async (params, { rejectWithValue }) => {
    try {
      const result = await apiAxios.get("/contact", { params: params });
      return result.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createContact = createAsyncThunk(
  "CREATE_CONTACT",
  async (params, { rejectWithValue }) => {
    try {
      const result = await apiAxios.post("/contact", params);
      return result.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateContact = createAsyncThunk(
  "UPDATE_CONTACT",
  async (params, { rejectWithValue }) => {
    try {
      const result = await apiAxios.put(`/contact/${params._id}`, params);
      return result.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "DELETE_CONTACT",
  async (id, { rejectWithValue }) => {
    try {
      const result = await apiAxios.delete(`/contact/${id}`);
      return result.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
