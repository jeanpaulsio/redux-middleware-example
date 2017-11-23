# Custom Middleware

Writing a quick middleware

It gets passed through the store

```js
export default createStore(reducers, applyMiddleware(CUSTOM_MIDDLEWARE_HERE))
```

Writing a middleware

```js
export default ({ dispatch }) => next => action => {
  if (action.formatted) return next(action);

  let formatted = action.payload.map(item => {
    return { ...item, name: item.name.toUpperCase() };
  });

  const newAction = { ...action, payload: formatted, formatted: true }
  dispatch(newAction);
};
```

It's a function that passes down `dispatch` that returns a function that returns another function!!!!

What is this madness?!

This particular middleware will take data from the API endpoint and transform the `[name]` property to be all uppercase

---

## Couple of things to another

* Return early if some condition is met - this is done by calling `next(action)`
* After doing whatever it is you want to do with this middleware, call `dispatch(newAction)` with the new data so that it can go through all of your middlewares
* Never assume the order in which your middlewares will be called
