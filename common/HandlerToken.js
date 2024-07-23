export function HandleToken() {
    if (localStorage.getItem("tokenChatBoat") !== null || undefined) {
        let token = localStorage.getItem("tokenChatBoat");
        token = JSON.parse(token);
        return  token.access;
    }
}