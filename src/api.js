import axios from "axios";

const request = axios.create({
	baseURL: "https://youtube.googleapis.com/youtube/v3/",
	params : {
		key: "AIzaSyAbF7N7fuYzSytJwWRPtoM68occblR-sRc"
	}
});

export default request;