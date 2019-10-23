export default {
	setAcheivementAddVisible(state, value){
		state.Acheivements.add_visible = value;
	},
	setCareerAddVisible(state, value){
		state.Careers.add_visible = value;
	},
	setMenubookVisible(state, value){
		state.Menubook.visible = value;
	},
	setProfile(state, json){
		let profile = json.User.profile;
		
		state.User.profile.name = profile.name;
		state.User.profile.birth = profile.birth;
		state.User.profile.email = profile.email;
		state.User.profile.github = profile.github;
	}
};