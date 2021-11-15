import * as api from '../apis/api.js';
import { GET_PROPOSALS_SUCCESS } from '../constants/applyConstant.js';
import variable from '../config.js';


export const addUserInfo = (userInfo) => async (dispatch) => {
    try {
        await api.addNewInfo(userInfo);
    } catch (error) {
        console.log("backend is not called", error);
    }
}

export const getProposalList = () => async (dispatch) => {
    try {
        const { data } =  await api.getProposals();
        dispatch({ type: GET_PROPOSALS_SUCCESS, payload: data });
    } catch (error) {
        console.log("backend is not called", error);
    }
}

export const setApproved = () => async (dispatch) => {
    try {
        await api.addNewInfo();
    } catch (error) {
        console.log("backend is not called", error);
    }
}

export const updateProposal = (id, newData) => async (dispatch) => {
    try {
        const { data } = await api.updateProposal(id, newData);
        dispatch(getProposalList());
    } catch (error) {
        console.log("backend is not called", error);
    }
}

export const deleteProposal = (id) => async (dispatch) => {
    try {
        await api.deleteProposal(id);
        dispatch(getProposalList());
    } catch (error) {
        console.log("backend is not called", error);
    }
}

export const getApproved = (id) => async (dispatch) => {
//   console.log("Approve:", id);
    try {
        await api.getApproved(id);
        dispatch(getProposalList());
    } catch (error) {
        console.log("backend is not called", error);
    }
}

export const getDeclined = (id) => async (dispatch) => {
    // console.log("decline:", id);
    try {
        await api.getDeclined(id);
        dispatch(getProposalList());
    } catch (error) {
        console.log("backend is not called", error);
    }
}

export const viewRequest = (id) => async (dispatch) => {
    // console.log("viewid:", id);
    try {
        const { data } = await api.viewRequest(id);
        window.open(data,'_blank');
        
    } catch (error) {
        console.log("backend is not called", error);
    }
}

export const sendMail = (id) => async (dispatch) => {
    try {
        const {data} = await api.sendMail(id);
        console.log(data);
    } catch (error) {
        console.log("backend is not called", error);
    }
}
