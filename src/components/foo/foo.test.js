import Foo from "./foo";
import Counter from "../counter/";

describe("Foo Component", () => {
  test("programmatic init", () => {
    const foo = new Foo();
    expect(foo.element.innerHTML).toBe("hello component");
  });
});