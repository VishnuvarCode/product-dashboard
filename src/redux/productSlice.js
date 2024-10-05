import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  searchTerm: "",
  sortOrder: "asc",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { setCategory, setSearchTerm, setSortOrder } =
  productSlice.actions;
export default productSlice.reducer;
