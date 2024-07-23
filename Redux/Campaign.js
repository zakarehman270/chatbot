
import api from "@/utilities/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {    
	getListCampaign: null,    
	loading: false,    
	errorMessage: null,    
    AddCampaignList:null,
    getSingleCampaign:null,
};   
///  get ticket    //// 
export const handlerGetListCampaign = createAsyncThunk(
	"campaign/GetListCampaign",
	async (data, thunkAPI) => {
		try {
			const response = await api.get(`/campaigns/`)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error?.response?.data);
		}
	}
);

///  ADD ticket    //// 
export const handlerAddCampaigns = createAsyncThunk(
	"campaign/AddTicket",
	async (data, thunkAPI) => {
		try {
			const response = await api.post(`/campaigns/`,data)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error?.response?.data);
		}
	}
);

///  get single Details    //// 
export const handlerGetSingleCampaigns = createAsyncThunk(
	"campaign/getSingleDetailsTicket",
	async (data, thunkAPI) => {
		try {
			const response = await api.get(`/campaigns/${data}`)
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
        ResetAddCampaignList(state, action) {
			state.AddCampaignList = null;
		},
	},
	extraReducers: (builder) => {
		/// get List Ticket  //// 
		builder.addCase(handlerGetListCampaign.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerGetListCampaign.fulfilled, (state, action) => {
			state.getListCampaign = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerGetListCampaign.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});

        	/// Add Ticket  //// 
		builder.addCase(handlerAddCampaigns.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerAddCampaigns.fulfilled, (state, action) => {
			state.AddCampaignList = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerAddCampaigns.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});

        	/// get single ticket  //// 
		builder.addCase(handlerGetSingleCampaigns.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerGetSingleCampaigns.fulfilled, (state, action) => {
			state.getSingleCampaign = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerGetSingleCampaigns.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});
	},
});

export const { ResetErrorMessage , ResetAddTicket , ResetAddCampaignList} = userReducer.actions;
export default userReducer.reducer;