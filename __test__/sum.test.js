describe("doo", () => {
  it("basic dom event", () => {

    document.body.innerHTML = `<span id="foobar">hello world</span>`;

    const btn = document.querySelector('#foobar');
    const clickHandler = jest.fn();

    btn.addEventListener('click', clickHandler, false);
    btn.click();

    expect(clickHandler).toHaveBeenCalled();
  });

});