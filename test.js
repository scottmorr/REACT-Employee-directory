var state = {
    count: 0,
    message: "Hello"
}

function setState(obj) {
    Object.keys(obj).forEach(key => state[key] = obj[key])
    render();
}
function render() {
    console.log(state)
}

render();

// state.count++;

// render();

setState({ count: 1 })