<div align="center">

**Star Cinema** — удобное приложение для поиска фильмов. В нем Вы можете искать интересующие Вас фильмы и сериалы, получать подробную информацию о них, а также добавлять в избранное (для этого необходимо авторизироваться). Также авторизованным пользователям доступна история поиска.

### **1 уровень (обязательный - необходимый минимум)**

</div>

- [x] Реализованы **Требования к функциональности.**
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем **LocalStorage**.

**React**

- [x] **Пишем функциональные компоненты c хуками** в приоритете над классовыми.
- [x] Есть разделение на **умные и глупые компоненты**. 
- Глупые - ([Registration](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Pages/Registration/Registration.jsx), [Login](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Pages/Login/Login.jsx), [Detailed](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Pages/Detailed/Detailed.jsx), [Search](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Pages/Search/Search.jsx));
- Умные - ([RegistrationContainer](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Pages/Registration/RegistrationContainer.jsx), [LoginContainer](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Pages/Login/LoginContainer.jsx), [DetailedContainer](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Pages/Detailed/DetailedContainer.jsx), [SearchContainer](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Pages/Search/SearchContainer.jsx))
- [x] Есть **рендеринг списков**. ([Main](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Pages/Main/Main.jsx), [Favorites](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Pages/Favorites/Favorites.jsx), [History](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Pages/History/History.jsx), [Search](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Pages/Search/Search.jsx))
- [x] Реализована хотя бы одна **форма**. ([Login](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Pages/Login/Login.jsx), [Registration](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Pages/Registration/Registration.jsx))
- [x] Есть применение **Контекст API**.  ([App](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/App.jsx))
- [x] Есть применение **предохранителя**. ([App](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/App.jsx))
- [x] Есть хотя бы один **кастомный хук**. ([useDebounce](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Hooks/useDebounce.js), [useActions](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Hooks/useActions.js))
- [x] Хотя бы несколько компонентов используют **PropTypes**. ([HistoryItem](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Components/HistoryItem/HistoryItem.jsx), [CardItem](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Components/CardItem/CardItem.jsx), [Detailed](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Pages/Detailed/Detailed.jsx))
- [x] Поиск не должен триггерить много запросов к серверу (**debounce**). ([useDebounce](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Hooks/useDebounce.js), [SearchForm](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/Components/SearchForm/SearchForm.jsx))
- [x] Есть применение **lazy + Suspense**. ([App](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/App.jsx))

**Redux**

- [x] Используем **Modern Redux with Redux Toolkit**. ([store](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/redux/store.js))
- [x] Используем **слайсы**. ([authSlice](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/redux/slices/authSlice.js), [favoriteMovieSlice](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/redux/slices/favoriteMovieSlice.js), [historySlice](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/redux/slices/historySlice.js))
- [x] Есть хотя бы одна **кастомная мидлвара**. ([middleware](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/redux/middleware/middleware.js))
- [x] Используется **RTK Query**. ([api](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/api/api.js)
- [x] Используется **Transforming Responses**. ([api](https://github.com/anastas1ya-programming/aston-starCinema/blob/main/src/api/api.js))

<div align="center">



**Функциональность проекта**

</div>

- Пользователи могут регистрироваться и авторизироваться. Для доступа к некоторым страницам необходима авторизация.
- Реализована возможность поиска с саджестами. 
- Все поисковые запросы пользователя хранятся в разделе «История».
- Зарегистрированный пользователь может сохранять фильмы в избранное, а также удалять их оттуда.

**Использованное API** 
- API Кинопоиска: https://kinopoisk.dev/ 
