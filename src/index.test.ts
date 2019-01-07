import * as helper from './index'

describe("Lib export", () => {
  it("should export function list as expect", () => {
    expect(helper.LinkedList).toBeDefined();
    expect(helper.Queue).toBeDefined();
  })
})
