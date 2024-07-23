
import api from "@/utilities/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
	getListService: null,
	loading: false,
	errorMessage: null,
	AddServiceData: null,
	UpdatedService: null
};

/// get List of Service   ////
export const handlerGetListService = createAsyncThunk(
	"Service/GetListService",
	async (data, thunkAPI) => {
		try {
			const response = await api.get(`/service/`)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error?.response?.data);
		}
	}
);


/// Add Service   ////
export const handlerAddService = createAsyncThunk(
	"Service/AddServiceData",
	async (data, thunkAPI) => {
		try {
			const response = await api.post(`/service/`, data)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error?.response?.data);
		}
	}
);

/// Update Service   ////
export const handlerUpdateService = createAsyncThunk(
	"Service/UpdateService",
	async (data, thunkAPI) => {
		try {
			const response = await api.put(`/service/${data?.id}/`, data?.data)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error?.response?.data);
		}
	}
);

/// get Single Service   ////
export const handlerGetSingleService = createAsyncThunk(
	"Service/getSingleService",
	async (data, thunkAPI) => {
		try {
			const response = await api.get(`/service/${data}/`)
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
		ResetDeleteSuccess(state, action) {
			state.DeleteSuccess = null;
		},
		ResetAddService(state, action) {
			state.AddServiceData = null;
		},
		ResetUpdatedService(state, action) {
			state.UpdatedService = null;
		},
	},
	extraReducers: (builder) => {
		/// get list Service  //// 
		builder.addCase(handlerGetListService.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerGetListService.fulfilled, (state, action) => {
			state.getListService = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerGetListService.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});

		/// add Service  //// 
		builder.addCase(handlerAddService.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerAddService.fulfilled, (state, action) => {
			state.AddServiceData = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerAddService.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});


		/// add Service  //// 
		builder.addCase(handlerUpdateService.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerUpdateService.fulfilled, (state, action) => {
			state.UpdatedService = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerUpdateService.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});


		/// handler GetSingle Service  //// 
		builder.addCase(handlerGetSingleService.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerGetSingleService.fulfilled, (state, action) => {
			state.getSingleService = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerGetSingleService.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});


		


	},
});

export const { ResetErrorMessage, ResetDeleteSuccess, ResetAddService, ResetUpdatedService } = userReducer.actions;
export default userReducer.reducer;