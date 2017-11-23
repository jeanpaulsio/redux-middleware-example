export default ({ dispatch }) => next => action => {
  console.log("CAPSLOCK MIDDLEWARE", action.payload);

  if (action.formatted) return next(action);

  let formatted = action.payload.map(item => {
    return { ...item, name: item.name.toUpperCase() };
  });

  const newAction = { ...action, payload: formatted, formatted: true }
  dispatch(newAction);
};
