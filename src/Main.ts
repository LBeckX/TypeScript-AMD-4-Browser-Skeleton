import {ModuleOne} from "./ModuleOne";

class Main {
    public static run() {
        console.log('; Starting main ...');

        new ModuleOne();

        console.log('; ... stopping main');
    }
}

Main.run();
