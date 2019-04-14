import {Component} from "can";

const Counter = Component.extend({

  // The name of the custom element
  tag: "my-counter",

  // The HTML content within the custom element.
  //  - {{count}} is a `stache` magic tag.
  //  - `on:click` is a `stache` event binding.
  // Read the VIEWS section below for more details. ?
  view: `
        Count: <span>{{this.count}}</span>
        <button on:click='this.increment()'>+1</button>
    `,

  // Defines a DefineMap used to control the
  // logic of this custom element.
  // Read the OBSERVABLES section below for more details. ?
  ViewModel: {
    count: {default: 0},
    increment() {
      this.count++;
    }
  }
});

export default Counter;
export const ViewModel = Counter.ViewModel;