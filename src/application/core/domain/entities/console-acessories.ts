export class ConsoleAcessories {

    constructor(
        public readonly name: string,
        public readonly console: Console
    ) { }

    regydrate(id: bigint, name: string, console: Console) {
        const consoleAcessories = new ConsoleAcessories(name, console);
        (consoleAcessories as any).id = id

        return consoleAcessories
    }

    public readonly id!: bigint

}