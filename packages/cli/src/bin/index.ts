import commander from "commander";
import create from "../commands/create";
import staticCommand from "../commands/static";

commander
  .command("create")
  .description("Create a Curi config module")
  .action(create);

commander
  .command("static <command>")
  .description("Static file generation")
  .action(staticCommand);

commander.parse(process.argv);
