import { getDataApi} from "../../utils/getDataApi";
import { IMG_STANDARD_XLARGE } from "../../const/api";
import { ROOT_MODAL } from "../../const/root";
import imgClose from "./cross.svg";
import Notification from "../Notification/Notification";
import './Characters.css';

class Characters{
   renderContent(data){
      let htmlContent =` `;
      data.forEach(({ name, thumbnail: { path, extension } }) => {
      const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension; 
        
      htmlContent += `
            <li class="characters__item">
               <img class="characters__img" src="${imgSrc}"/>
               <span class="characters__name">${name}</span>
            </li>
         `;
      });

      const htmlWrapper =`
         <div class="wrapper">
            <ul class="characters__container">
               ${htmlContent}
            </ul>
            <button class="characters__close" onclick="modal.innerHTML='' style="background-image:url(${imgClose}) "></button>
         </div>
      `;



      ROOT_MODAL.innerHTML = htmlWrapper;
   }

   async render(uri) {
      const data = await getDataApi.getData(uri);
      // Если массив не пустой, то выполняется renderContent, иначе renderNotification
      data.length ? this.renderContent(data) : Notification.render();
  }
}

export default new Characters();