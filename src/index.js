import 'regenerator-runtime/runtime';
import App from "./componets/App/App";
import Comics from "./componets/Comics/Comics";

// Асинхронная самовызываюшиеся функция
(async () =>{
   await App.render();

   Comics.eventListener();
})();