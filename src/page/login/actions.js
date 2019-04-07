// 这是自动生成的文件，可以修改。
import * as type from './constants';

const login = data => ({
	type: type.LOGIN,
	data,
});

const loginAction = param => (dispatch, getState) => {
	
	return new Promise(()=>{
		dispatch(login(param));
	});
};

export { loginAction };
