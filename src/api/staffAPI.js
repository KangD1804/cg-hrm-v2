import axios from "axios";

const STAFF_MANAGEMENT_API = "https://646dc5749c677e23218a6080.mockapi.io/api/v1";

export const findStaffs = async () => {
    let result = null;
    try {
        result = await axios.get(`${STAFF_MANAGEMENT_API}/staff`);
    } catch (e) {
        console.log("Find books API error: " + e);
    }
    return result;
};

export const findStaff = async (staffId) => {
    let result = null;
    try {
        result = await axios.get(`${STAFF_MANAGEMENT_API}/staff/${staffId}`);
    } catch (e) {
        console.log("Find book API error: " + e);
    }
    return result;
};

export const createStaff = async (staff) => {
    let result = null;
    try {
        result = await axios.post(`${STAFF_MANAGEMENT_API}/staff`, staff);
    } catch (e) {
        console.log("Find book API error: " + e);
    }
    return result;
};

export const updateStaff = async (staff) => {
    let result = null;
    try {
        result = await axios.put(`${STAFF_MANAGEMENT_API}/staff/${staff.id}`, staff);
    } catch (e) {
        console.log("Update book API error: " + e);
    }
    return result;
};

export const deleteStaff = async (staffId) => {
    let result = null;
    try {
        result = await axios.delete(`${STAFF_MANAGEMENT_API}/staff/${staffId}`);
    } catch (e) {
        console.log("Delete book API error: " + e);
    }
    return result;
};