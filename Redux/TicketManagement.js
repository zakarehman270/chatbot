
import api from "@/utilities/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {    
	getListTicket: null,    
	loading: false,    
	errorMessage: null,    
    AddTicketList:null,
    getSingleTicket:null
};   
///  get ticket    //// 
export const handlerGetListTicket = createAsyncThunk(
	"Ticket/GetListTicket",
	async (data, thunkAPI) => {
		try {
			const response = await api.get(`/tickets/`)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error?.response?.data);
		}
	}
);

///  ADD ticket    //// 
export const handlerAddTicket = createAsyncThunk(
	"Ticket/AddTicket",
	async (data, thunkAPI) => {
		try {
			const response = await api.post(`/tickets/`,data)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error?.response?.data);
		}
	}
);


///  get single Details    //// 
export const handlerGetSingleTicket = createAsyncThunk(
	"Ticket/getSingleDetailsTicket",
	async (data, thunkAPI) => {
		try {
			const response = await api.get(`/tickets/${data}`)
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

        ResetAddTicket(state, action) {
			state.AddTicketList = null;
		},

        
	},
	extraReducers: (builder) => {
		/// get List Ticket  //// 
		builder.addCase(handlerGetListTicket.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerGetListTicket.fulfilled, (state, action) => {
			state.getListTicket = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerGetListTicket.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});

        	/// Add Ticket  //// 
		builder.addCase(handlerAddTicket.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerAddTicket.fulfilled, (state, action) => {
			state.AddTicketList = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerAddTicket.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});

        	/// get single ticket  //// 
		builder.addCase(handlerGetSingleTicket.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerGetSingleTicket.fulfilled, (state, action) => {
			state.getSingleTicket = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerGetSingleTicket.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});


        
        
	},
});

export const { ResetErrorMessage , ResetAddTicket } = userReducer.actions;
export default userReducer.reducer;