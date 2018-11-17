import commander from "commander";
import create from "../commands/create";

commander
  .command("create")
  .description("Create a Curi config module")
  .action(create);

commander.parse(process.argv);
