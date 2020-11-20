const onEvent = (func, ...args) => (event) => func(event, ...args);

export default onEvent;
