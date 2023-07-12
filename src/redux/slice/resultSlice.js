import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWiki = createAsyncThunk('results/fetchWikiStatus', async (papams) => {
  const { search } = papams;

  //const endPoint = `https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;
  const { data } = await axios.get(
    `https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`,
  );
  console.log(data, 'data resultslise');
  return data;
});

const initialState = {
  results: [],
  searchInfo: {},
  status: 'loading',
};

const resultSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    setResults(state, action) {
      state.results = action.payload;
    },
    setSearchInfo(state, action) {
      state.searchInfo = action.payload;
    },
  },
  extraReducers: {
    [fetchWiki.pending]: (state, action) => {
      state.status = 'loading';
      //state.results = [];
    },
    [fetchWiki.fulfilled]: (state, action) => {
      //state.status = action.payload;
      state.status = 'success';
    },
    [fetchWiki.rejected]: (state, action) => {
      state.status = 'error';
      //state.results = [];
    },
  },
});

export const { setResults, setSearchInfo } = resultSlice.actions;
export default resultSlice.reducer;
