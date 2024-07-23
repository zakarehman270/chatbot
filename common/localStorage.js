
export function HandleLocalStorageSetItem(key, value) {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (err) {
	}
}
export const HandlerLocalStorageGetItem = (key) => {
	let initialValue = null;
	try {
		const value = localStorage.getItem(key);
		return value ? JSON.parse(value) : initialValue;
	} catch (err) {
		return initialValue;
	}
};

export const HandleGetIndividual = () => {
	let user = HandlerLocalStorageGetItem("UserToken")
	if (user)
		return user.role

}
export const HandleKycValidation = () => {
	let user = HandlerLocalStorageGetItem("UserToken")
	if (user.is_superuser) {
		return true
	} else if (user.kyc_accepted) {
		return true
	} else {
		return false
	}
}