import { ROOT_MODAL } from "../../const/root";
import imgClose from "../Notification/cross.svg";

class Notification{
    render(){
        const htmlWrapper =`
        <div class="notification__container">
            <span>Нет данных!</span>
            <button class="notification__close" onclick="modal.innerHTML='' style="background-image:url(${imgClose}) "></button>
        </div>
        `;

        ROOT_MODAL.innerHTML = htmlWrapper;
    }
}

export default new Notification()