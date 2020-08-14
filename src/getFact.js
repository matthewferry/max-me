const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const fact = urlParams.has('fact') ? urlParams.get('fact') : 'it’s just a string';

export default fact;
