import axios from "axios";

const instance = axios.create({
	baseURL: "https://socialhangout-backend.herokuapp.com",
});

export default instance;
