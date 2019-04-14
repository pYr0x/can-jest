import Counter from "./counter";
import {stache} from "can";

test("counter", () => {
  const counter = new Counter();
  expect(counter.viewModel.count).toBe(0);

  counter.element.querySelector('button').click();
  expect(counter.viewModel.count).toBe(1);
});

test("counter in DOM", () =>{
  const view = stache('<my-counter></my-counter>');

  document.body.innerHTML = `<div id="test"></div>`;
  document.querySelector("#test").appendChild(view());

  const counter = document.querySelector("my-counter span");

  expect(counter.innerHTML).toBe("0");

  document.querySelector('button').click();
  expect(counter.innerHTML).toBe("1");

});

it("test with jest-dom", () => {
  document.body.innerHTML = `<div id="hw"></div>`;
  expect(document.querySelector("#hw")).toBeInTheDocument();
});

test("snapshot", () => {
  const counter = new Counter();
  expect(counter.element).toMatchSnapshot("el");
  expect(counter.viewModel.serialize()).toMatchSnapshot("vm");
});