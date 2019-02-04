import memorize from "../src/index";

import chai from "chai"
const expect = chai.expect;

describe("Memorize ", () => {
  it("should return 1", () => {
    expect(memorize((() => 1))).to.equal(1)
  });
});