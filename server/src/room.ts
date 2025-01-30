import Player from "./player";

class Room {
    id: string;
    host: Player;
    players: Player[] = new Array<Player>();
    constructor(id: string, host: Player) {
        this.id = id;
        this.host = host;
        this.players.push(host);
    }
}

export default Room;