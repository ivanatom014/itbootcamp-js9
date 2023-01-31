export class ChatUi {
    constructor(l) {
        this.list = l;
    }
    set list(l) {
        this._list = l;
    }
    get list() {
        return this._list;
    }
    dateTime(data) {
        let date = data.created_at.toDate();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hour = date.getHours();
        let min = date.getMinutes();
        day = String(day).padStart(2, '0');
        month = String(month).padStart(2, '0');
        hour = String(hour).padStart(2, '0');
        min = String(min).padStart(2, '0');
        let messageTime = `${day}.${month}.${year}. - ${hour}:${min}`
        return messageTime;
    }
    templateLi(data){
        let htmlList =
        `<li>
            <span class=“username”>${data.username} : </span>
            <span class=“message”>${data.message}</span>
            <div class=“date”>${this.dateTime(data)}</div>
        </li>`;
        this.list.innerHTML += htmlList;
    }
}