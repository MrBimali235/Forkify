import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import icons from "url:../img/icons.svg";
import "core-js/stable";
import "regenerator-runtime/runtime";
const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const renderSpinner = function (parentEl) {
  const markup = `
  <div class="spinner">
          <svg>
            <use href="${icons}.svg#icon-loader"></use>
          </svg>
        </div>`;
  parentEl.innerHTML = "";
  parentEl.insertAdjacentHTML("afterbegin", markup);
};

const showRecipe = async function () {
  try {
    //Loading the recipe
    const id = window.location.hash.slice(1);
    if (!id) return;
    renderSpinner(recipeContainer);
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};
["hashchange", "load"].forEach((ev) => window.addEventListener(ev, showRecipe));
