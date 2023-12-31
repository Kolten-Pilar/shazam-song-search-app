# Shazam API based Song Searching App
# PerScholas / Project 2
- This is my second project for PerScholas. It is based on all of the React reposistories we have made in class. 
- https://tubular-kleicha-9c386d.netlify.app/
- Link to API used: https://rapidapi.com/apidojo/api/shazam
--------------------------------------------------

# App Description
- This app is a song searching app that uses the Shazam API to search for songs based on the user's input.
- The user can search for a song by typing in the song name and artist name in the search bar (only the song name is required, but adding the artist will narrow results).
- The results will be the top track from the first hits array in the API response.
- The user can also press the heart button on the left side to add the song to their favorites list which will be displayed on the right side.

--------------------------------------------------
# Approach Taken
- I started by creating a new React app using the Vite template and deleted unnecessary files.
- The app is heavily influenced from the React reposistories we have made in class (Weather App, Movie App, etc.)
- I based my styling off of the Apple CarPlay music app.
![Apple CarPlay Music App](https://canada.crutchfieldonline.com/ImageBank/v20191007110100/ImageHandler/scale/978/978/core/learn/article/3450/carplay-screenshot-4.jpg)

--------------------------------------------------
# Unsolved Problems
- I wanted the Album Title to be listed, however it is not in the API data. Further research shows the API has an endpoint that has albums, but I am unsure of how to implement it.
- I want to add local storage but currently I am unsure of how to implement it.
- I want to add functionality to the clear favorites button.
- I need to refactor the css to incorporate a more responsive design. Currently, the app is only responsive to a certain screen size.

--------------------------------------------------
# Technologies Used
- React+Vite
- Shazam API
- HTML
- CSS
- JavaScript














# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
