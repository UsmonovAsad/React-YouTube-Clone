import axios from "axios";

const request = axios.create({
	baseURL: "https://youtube.googleapis.com/youtube/v3/",
	params : {
		key: // Your Youtube Api Key
	}
});

export default request;
