import icons from "url:../../img/icons.svg";
import View from "./View";
class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");
  _generateMarkup() {
    const numPages = this._data.results / this._data.resultsPerPage;
    //page 1 , and there are other pages
    //page 1 , and there are no other pages
    //last page
    //Other page
  }
}
export default new PaginationView();
