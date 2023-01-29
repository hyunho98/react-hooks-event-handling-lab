// Code EyesOnMe Component Here
function EyesOnMe() {
    function focusHandler(event) {
        console.log('Good!');
    }

    function blurHandler() {
        console.log('Hey! Eyes on me!')
    }
    return (
    <button onFocus={focusHandler} onBlur={blurHandler}>
        Eyes on me
    </button>
    );
}

export default EyesOnMe;