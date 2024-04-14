import { createSlice } from "@reduxjs/toolkit";
import {
  createContact,
  getAllContact,
  updateContact,
  deleteContact,
} from "./actions";
import {
  createAndUpdateContactFulfilled,
  createAndUpdateContactRejected,
  getAllContactFulfilled,
  getAllContactRejected,
  handlePending,
} from "./case";

const initialState = {
  loading: false,
  loaded: true,
  redirect: false,
  ui_error: false,
  singleContact: {},
  lists: [],
  hasNext: false,
};

const SliceObj = createSlice({
  name: "contact",
  initialState: { ...initialState },
  reducers: {
    setContactData: (state, action) => {
      state = { ...state, ...(action.payload || {}) };
    },
  },
  extraReducers: (_) => {
    const addCase = _.addCase;

    addCase(createContact.pending, handlePending);
    addCase(createContact.fulfilled, createAndUpdateContactFulfilled);
    addCase(createContact.rejected, createAndUpdateContactRejected);

    addCase(updateContact.pending, handlePending);
    addCase(updateContact.fulfilled, createAndUpdateContactFulfilled);
    addCase(updateContact.rejected, createAndUpdateContactRejected);

    addCase(deleteContact.pending, handlePending);
    addCase(deleteContact.fulfilled, createAndUpdateContactFulfilled);
    addCase(deleteContact.rejected, createAndUpdateContactRejected);

    addCase(getAllContact.pending, handlePending);
    addCase(getAllContact.fulfilled, getAllContactFulfilled);
    addCase(getAllContact.rejected, getAllContactRejected);
  },
});

export { createContact, getAllContact, updateContact, deleteContact };
export const { setContactData } = SliceObj.actions;
export default SliceObj.reducer;
