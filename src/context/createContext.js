export function createContext(initialState) {
	let state = initialState;
	const listeners = new Set()
	return {
		getState: ()=> state,
		setState: (patch)=>{
			state = {...state, ...patch}
			listeners.forEach(l=> l(state))
		},
		subscribe: (listener)=> {
			listeners.add(listener);
			return ()=> listeners.delete(listener);
		}
	}
}