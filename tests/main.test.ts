import "tsarch/dist/jest";

import { filesOfProject } from "tsarch";

describe("architecture", () => {
  it("domain logic should not depend on frameworks", () => {
    const rule = filesOfProject()
      .inFolder("domain")
      .shouldNot()
      .dependOnFiles()
      .inFolder("frameworks");

    expect(rule).toPassAsync();
  });

  it("framework logic should be cycle free", () => {
    const rule = filesOfProject()
      .inFolder("frameworks")
      .should()
      .beFreeOfCycles();

    expect(rule).toPassAsync();
  });
});
