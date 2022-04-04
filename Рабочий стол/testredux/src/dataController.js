export default () => {
    return async (dispatch) => {
        let res = await fetch('/data.json');
        let data = await res.json();
        dispatch({ type: 'SET_DATA', payload: data });
    }
}
