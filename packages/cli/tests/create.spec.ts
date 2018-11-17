import "jest";
import path from "path";
import * as fs from "fs-extra";
import inquirer from "inquirer";
import create from "../src/commands/create";

jest.mock("inquirer");

const here = process.cwd();

describe("curi create", () => {
  it("sets up expected file struture", done => {
    const mockValues = {
      dir: "tests/fixtures/create",
      routes: "routes.js",
      components: "components/routes",
      ui: "react-dom"
    };

    inquirer.prompt = jest.fn().mockResolvedValue(mockValues);
    const fixture = path.join(here, mockValues.dir);
    const routesJS = path.join(fixture, mockValues.routes);
    const componentsDir = path.join(fixture, mockValues.components);

    fs.removeSync(fixture);

    create().then(() => {
      expect(fs.existsSync(fixture)).toBe(true);
      expect(fs.existsSync(routesJS)).toBe(true);
      expect(fs.existsSync(componentsDir)).toBe(true);
      done();
    });
  });
});
