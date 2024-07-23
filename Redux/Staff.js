
import api from "@/utilities/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {    
	getListStaff: null,    
	loading: false,    
	errorMessage: null,    
    AddTicketList:null
};   
///  get ticket    //// 
export const handlerGetListStaff = createAsyncThunk(
	"Service/GetListStaff",
	async (data, thunkAPI) => {
		try {
			const response = await api.get(`/staff/`)
			return response.data
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
		/// get Staff  //// 
		builder.addCase(handlerGetListStaff.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerGetListStaff.fulfilled, (state, action) => {
			state.getListStaff = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerGetListStaff.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});
	},
});

export const { ResetErrorMessage , ResetAddTicket } = userReducer.actions;
export default userReducer.reducer;