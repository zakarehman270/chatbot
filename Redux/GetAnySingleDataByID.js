
import api from "@/utilities/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {    
	GetSingleDataById:null,    
	loading: false,    
	errorMessage: null,  
};   
///  Get Any Data   //// 
export const handlerGetAnySingleDataByID = createAsyncThunk(
	"GetSingleData/GetData",
	async (data, thunkAPI) => {
		try {
			const response = await api.get(`/${data?.url}/${data?.id}`)
			return response?.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error?.response?.data);
		}
	}
);

const userReducer = createSlice({
	name: "person",
	initialState,
	reducers: {
		ResetErrorMessage(state, action) {
			state.errorMessage = null;
		},
	},
	extraReducers: (builder) => {
		/// get  General Single Data  //// 
		builder.addCase(handlerGetAnySingleDataByID.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerGetAnySingleDataByID.fulfilled, (state, action) => {
			state.GetSingleDataById = action.payload;  // Directly mutate state
			state.loading = false;
		});
		builder.addCase(handlerGetAnySingleDataByID.rejected, (state, action) => {
			state.loading = false;
			state.errorMessage = action.payload;
		});
	},
});

export const { ResetErrorMessage} = userReducer.actions;
export default userReducer.reducer;