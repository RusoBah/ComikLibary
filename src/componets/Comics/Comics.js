import {API_URL, URL_COMICS, IMG_STANDARD_XLARGE, IMG_NOT_AVAILABLE, URL_CHARACTERS} from "../../const/api";
import { getDataApi } from "../../utils/getDataApi";
import { ROOT_INDEX } from "../../const/root";
import Error from "../Error/Error";
import Characters from "../Сharacters/Characters";
import './Comics.css'

class Comics{
   renderComics(data){
      let htmlContent = '';
     // forEach - перебирает массив. 
      data.forEach(({id, title, thumbnail: {path, extension}}) => {
         
         // Проверка на наличие изображения
         // lastIndexOf - возвращает индекс последнего элемента
         // Если совпадений не найдено(т.е нет image_not_available) что равно -1, то код выполняется и выводит записи где есть изображения
         if(path.lastIndexOf(IMG_NOT_AVAILABLE) === -1){
            const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;
            const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension;
            

            htmlContent += `
               <li class="comics__banner"  data-uri="${uri}">
                  <span class="comics__title">${title}</span>
                  <img class="comics__img" src="${imgSrc}"/>
               </li>
            `;
         }
         
         
      });

      const htmlWrapper = `
         <ul class="comics__container">
            ${htmlContent}
         </ul>
      `;


      ROOT_INDEX.innerHTML = htmlWrapper;
   }
   async render(){
      const data = await getDataApi.getData(API_URL + URL_COMICS);
      // if(data){
      //    this.renderComics(data);
      // }else{
      //    Error.render();
      // }
      // Более короткая запись
      data ? this.renderComics(data) : Error.render();
   
   }

   // Обработчик событий
   eventListener(){
      document.querySelectorAll('.comics__banner').forEach(element => {
         const uri = element.getAttribute('data-uri');
         
         element.addEventListener('click', () => {
            
            Characters.render(uri);
         }) 
      })
   }
}

export default new Comics();