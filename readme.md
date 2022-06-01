# Description

Moovi is a React-Native application made for fun. It uses TMDB API to list the latest popular movies available at the moment.

You also have the ability to store your favorite movies **in-memory** using Redux.

# API Key

In order to use TMDB API you have to :

1. [Create an account](https://www.themoviedb.org/signup?language=fr).
2. Navigate to [API Settings](https://www.themoviedb.org/settings/api) page.
3. Scroll to the bottom of the page and copy your API Key (v3 auth).
4. Open the React-Native project and create a file named `.env` in the root folder.
5. Paste the key you copied from TMDB in that file like this :

```shell
API_KEY=[Your Key]
```

# Screenshots

## Home Page

![Alt text](screenshots/Home.jpg?raw=true "Home Page")

## Favorite Movies Page

![Alt text](screenshots/Favorite.jpg?raw=true "Favorite Movies Page")
