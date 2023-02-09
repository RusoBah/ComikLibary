import {ROOT_INDEX} from "../../const/root";
import './Error.css';
class Error{
   render(){
      const htmlWrapper =`
         <div class="error__container">
            <span class="error__alert">
               <p class="error__message">Ошибка!<br>
               Попробуйте зайти позже!</p>
            </span>
         </div>
      `;
      ROOT_INDEX.innerHTML = htmlWrapper;
   }
}

export default new Error();
