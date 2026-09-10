# Forkify 🍳

A modern recipe application built with **Vanilla JavaScript**, following the **MVC architecture** and consuming the Forkify API.

Users can search for recipes, view detailed recipe information, adjust servings, bookmark recipes, and upload their own recipes.

## 🚀 Live Demo

https://forkify-subham.netlify.app/

## ✨ Features

- 🔎 Search recipes
- 📖 View detailed recipe information
- 👥 Adjust recipe servings dynamically
- 🔖 Bookmark recipes with `localStorage`
- ➕ Upload custom recipes
- 🔗 URL-based recipe navigation
- ⚡ Asynchronous API requests with `async/await`
- 📱 Responsive user interface

## 🛠️ Tech Stack

- HTML5
- CSS3 / Sass
- JavaScript (ES6+)
- Parcel
- Forkify API
- Git & GitHub
- Netlify

## 🏗️ Architecture

The application follows the **MVC (Model–View–Controller)** pattern.

```text
User Interaction
       ↓
      View
       ↓
   Controller
       ↓
      Model
       ↓
   Forkify API
       ↓
   Application State
       ↓
      View
```

The project also uses a **Publisher–Subscriber pattern** for communication between views and the controller.

## 📂 Project Structure

Forkify/
│
├── src/
│ ├── img/
│ │ └── icons.svg
│ │
│ ├── js/
│ │ ├── views/
│ │ │ ├── addRecipeView.js
│ │ │ ├── bookmarksView.js
│ │ │ ├── paginationView.js
│ │ │ ├── previewView.js
│ │ │ ├── recipeView.js
│ │ │ ├── resultsView.js
│ │ │ ├── searchView.js
│ │ │ └── View.js
│ │ │
│ │ ├── config.js
│ │ ├── controller.js
│ │ ├── helpers.js
│ │ └── model.js
│ │
│ └── sass/
│
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

## ⚙️ Run Locally

```bash
git clone <your-repository-url>
cd Forkify
npm install
npm start
```

The application will run locally using Parcel.

## 🎓 About the Project

This project was built as part of **The Complete JavaScript Course by Jonas Schmedtmann**.

The project provided practical experience with:

- MVC architecture
- Object-oriented JavaScript
- Asynchronous JavaScript
- REST API communication
- State management
- DOM manipulation
- Local Storage
- ES Modules
- Parcel
- Git/GitHub
- Netlify deployment

## 👨‍💻 Author

**Subham Bimali**

---

⭐ If you found this project useful, feel free to explore the repository.
