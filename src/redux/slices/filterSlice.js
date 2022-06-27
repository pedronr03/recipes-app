import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  textFilter: '',
  mealOrDrink: 'meal',
  filteredData: '',
  radioFilter: 'name',
  categorys: [],
};

const reducers = {
  actionFilteredData: (state, { payload }) => {
    state.filteredData = payload;
    if (!payload.drinks && !payload.meals) {
      state.filteredData = [];
    }
  },
  actionTextFilter: (state, { payload }) => {
    state.textFilter = payload;
  },
  actionMealOrDrink: (state, { payload }) => {
    state.mealOrDrink = payload;
  },
  actionRadioFilter: (state, { payload }) => {
    state.radioFilter = payload;
  },
  // actionCategorys: (state, { payload }) => state,
};

export const slice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  reducers,
});

export const {
  actionTextFilter,
  actionFilteredData,
  actionMealOrDrink,
  actionRadioFilter,
  // actionCategorys,
} = slice.actions;

export default slice.reducer;
