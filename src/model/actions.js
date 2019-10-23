import axios from "axios";

export default {
	async loadProfile(store) {
		let result = await axios.get('/mockup/profile.json');
		
		let data = result.data;
		
		store.commit("setProfile", data);
	}
};