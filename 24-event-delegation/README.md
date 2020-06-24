# Event Delegation

## Learning Goals
- [ ] Use arrow function syntax
- [ ] Explain event propagation and identify how it can be used
- [ ] Use conditional logic in combination with event propagation to delegate events
- [ ] Use a single event handler callback to handle multiple events
- [ ] Use the `dataset` attribute to store data on specific DOM elements

## Notes

### Event Propagation
- Bubbling!
- When you trigger an event on a child, the event will bubble up to all ancestor elements and trigger event handlers of the same type on all ancestors (e.g. clicking on a child activates child's event click handler AS WELL as parent's click handler)
- `event.stopPropagation` stops the event from bubbling upwards

### Event Delegation
- The combination of conditional logic and event propagation to route events within a single event handler
- In other words, different DOM nodes can trigger different things

### Dataset
- A way to store information on HTML DOM nodes
- Used in a variety of ways, but principally used to store information about that particular node
- HTML must have attribute of `data-<key>="<value>"`
- Accessible on DOM nodes via `dataset` attribute as a object