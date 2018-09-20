import { Photo } from "./Photo";
import { Gallery } from "./Gallery";


// window.onload = function () {

    fetch("data.json").then((response: Response) => {
        response.json().then((dataJson: Photo[]) => {
            const element = document.getElementsByClassName("gallery-box")[0];
            
            new Gallery(dataJson, element);
        });
    });
// }
