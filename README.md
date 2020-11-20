# @codewell/on-event

Wrapper function that passes JavaScript event as first parameter to a function when the event is triggered.

```JavaScript
const onEvent = (func, ...args) => (event) => func(event, ...args);
```

## Installation

```
npm install @codewell/on-event
```

## Basic Usage

```JavaScript
import onEvent from '@codewell/on-event';

const doSomething = (event, text) => {
  // Handle event and other params...
}

const SomeComponent = (props) => (
  <button onClick={onEvent(doSomething, 'hello world')}>
)

```
