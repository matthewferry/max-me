const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const fact = urlParams.get('fact')

export default fact;
