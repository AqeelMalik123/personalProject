import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import apiServices from '../services/requestHandler';
const initialState = {
  loading: false,
  getClaimsListData: [],
  getClaimLoading: false,
  getclaimDataId: [],
};
// export const GetClaimsList: any = createAsyncThunk(
//   'GetClaimsList',
//   async (data: any, thunkAPI) => {
//     let state = <any>thunkAPI?.getState();
//     let arr1 = state.claims.getClaimsListData;

//     const res = await apiServices.getClaimsList(data);
//     try {
//       if (res?.status === 200 || res?.status === 201) {
//         let response = res?.data?.result;

//         response.map((item: any) => {
//           if (item.payerId === data.payerId) {
//             item.currentPage = data.currentPage
//           } else {
//             item.currentPage = 1
//           }
//         })
//         // console.log("response", response);
//         // const arr3 = arr1.slice()

//         if (arr1.length > 0) {
//           let updated_data = arr1.map((item) => {
//             if (item.payerId === data.payerId) {
//               item = response[0]
//             }
//             return item
//           });
//           return updated_data;
//         } else {
//           return response;
//         }
//       }
//     } catch (error) {
//       const err: any = thunkAPI.rejectWithValue(error);
//       if (err?.payload?.status !== 200) {
//       }
//     }
//   },
// );
// export const getClaimId: any = createAsyncThunk(
//   'getClaimId',
//   async (data, thunkAPI) => {
//     const res = await apiServices.getclaimId(data);

//     console.log(res, 'res');

//     try {
//       if (res?.status == 200) {
//         return res?.data?.result;
//       }
//     } catch (error) {
//       const err: any = thunkAPI.rejectWithValue(error);
//       if (err?.payload?.status !== 200) {
//         // SnackbarUtils.error(err?.payload?.data?.message, false);
//       }
//     }
//   },
// );
const claimSlice = createSlice({
  name: 'Claim Slice',
  initialState: initialState,
  reducers: {},
  // extraReducers: {
  //   [GetClaimsList.pending]: (state: any) => {
  //     state.loading = true;
  //   },
  //   [GetClaimsList.fulfilled]: (state: any, { payload }: any) => {
  //     state.loading = false;

  //     state.getClaimsListData = payload;
  //   },
  //   [GetClaimsList.rejected]: (state: any) => {
  //     state.loading = false;
  //   },
  //   [getClaimId.pending]: (state: any) => {
  //     state.getClaimLoading = true;
  //   },
  //   [getClaimId.fulfilled]: (state: any, { payload }: any) => {
  //     state.getClaimLoading = false;
  //     state.getclaimDataId = payload;
  //     console.log(payload, 'payload');
  //   },
  //   [getClaimId.rejected]: (state: any) => {
  //     state.getClaimLoading = false;
  //   },
  // },
});

export const claimReducer = claimSlice.reducer;
