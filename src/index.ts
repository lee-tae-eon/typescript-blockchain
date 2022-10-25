import { init, exit } from "myPackage";

init({ urls: "test" });
exit({ test: 3 });
class Block {
  constructor(private data: string) {}
  static hello() {
    return "hi";
  }
}
