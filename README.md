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

const handleClickEvent = (event) => {
  // Handle the click event...
};

const SomeComponent = (props) => (
  <button onClick={onEvent(handleClickEvent)}/>
);

```

```JavaScript
import onEvent from '@codewell/on-event';

const handleInputChange = (event, label) => {
  const inputValue = event.target.value;
  return `${label}: ${inputValue}`;
  // "first name: some input value..."
}

const SomeComponent = (props) => (
  <input onChange={onEvent(handleInputChange, 'first name')}/>
)

```
