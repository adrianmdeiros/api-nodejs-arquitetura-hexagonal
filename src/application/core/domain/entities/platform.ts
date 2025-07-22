import { Game } from "./game";

export class Platform {

    constructor(
        public readonly name: string,
        public readonly games: Game[] = []
    ) { }

    rehydrate(id: bigint, name: string, games: Game[] = []): Platform {
        const platform = new Platform(name, games);
        (platform as any).id = id

        return platform
    }

    public readonly id!: bigint

}