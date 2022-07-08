### Semester project android part for the SEP4 Course at VIA University College.

![Image](https://upload.wikimedia.org/wikipedia/commons/5/5d/VIA_UC_logo.png)

### Contributors

- Lili Toth
- Stefan Georgiev

### API Endpoints

| ID  | Method |                      Description                      |                     URL                      |                       Response                        |
| :-: | :----: | :---------------------------------------------------: | :------------------------------------------: | :---------------------------------------------------: |
|  0  |  Base  |           This is where our API is situated           | https://weather-forecast-sep4.herokuapp.com/ |                           /                           |
|  1  |  GET   |               To get all weather values               |               api/v1/weather/                |              List of all weather objects              |
|  2  |  GET   |          To get weather for a specific city           |            api/v1/weather/{city}/            |          Weather object for a specific city           |
|  4  |  POST  |             To create a weather location              |               api/v1/weather/                |   Weather object for a specific city after creation   |
|  3  |  PUT   |        To update an existing weather location         |            api/v1/weather/{city}/            |    Weather object for a specific city after update    |
|  5  | DELETE |        To delete an existing weather location         |            api/v1/weather/{city}/            |  Weather object for a specific city before deletion   |
|  6  |  GET   |                 To get all users data                 |                api/v1/users/                 |               List of all users objects               |
|  7  |  GET   | To get a specifuc user you need to provide a username |           api/v1/users/{username}/           |          User object for a specific username          |
|  8  |  GET   |           To login with a username+password           |             api/v1/users/login/              |                User object after login                |
|  9  |  POST  |              To create a user (register)              |                api/v1/users/                 | User object for a specific username after registering |
| 10  |  PUT   |              To update an existing user               |           api/v1/users/{username}/           |   User object for a specific username after update    |
| 11  | DELETE |              To delete an existing user               |           api/v1/users/{username}/           |  User object for a specific username before deletion  |

### Change log:

| ID  | Description                                                                                                          | Contributor |    Date    |
| --- | -------------------------------------------------------------------------------------------------------------------- | :---------: | :--------: |
| 1   | Initial backend commit <br> **_1. Added file(s) ✔️ ->_** 10 ↔️ **_2. Edited file(s) 📝 ->_** 0                       |   Stefan    | 02.07.2022 |
| 2   | Update README <br/> 1. **_Added file(s) ✔️ ->_** 0 ↔️ **_2. Edited file(s) 📝 ->_** 1                                |   Stefan    | 02.07.2022 |
| 3   | Update README <br/> 1. **_Added file(s) ✔️ ->_** 0 ↔️ **_2. Edited file(s) 📝 ->_** 1                                |   Stefan    | 02.07.2022 |
| 4   | Update README <br/> 1. **_Added file(s) ✔️ ->_** 0 ↔️ **_2. Edited file(s) 📝 ->_** 1                                |   Stefan    | 02.07.2022 |
| 5   | Update README <br/> 1. **_Added file(s) ✔️ ->_** 0 ↔️ **_2. Edited file(s) 📝 ->_** 1                                |   Stefan    | 02.07.2022 |
| 6   | Dotenv fix for heroku <br/> 1. **_Added file(s) ✔️ ->_** 0 ↔️ **_2. Edited file(s) 📝 ->_** 3                        |   Stefan    | 02.07.2022 |
| 7   | Home page fix for CANNOT GET / <br/> 1. **_Added file(s) ✔️ ->_** 1 ↔️ **_2. Edited file(s) 📝 ->_** 3               |   Stefan    | 02.07.2022 |
| 8   | Small change in app.js <br/> 1. **_Added file(s) ✔️ ->_** 1 ↔️ **_2. Edited file(s) 📝 ->_** 2                       |   Stefan    | 02.07.2022 |
| 9   | Update README <br/> 1. **_Added file(s) ✔️ ->_** 0 ↔️ **_2. Edited file(s) 📝 ->_** 1                                |   Stefan    | 02.07.2022 |
| 10  | Adding User pathing, changes to weather path <br/> 1. **_Added file(s) ✔️ ->_** 4 ↔️ **_2. Edited file(s) 📝 ->_** 7 |   Stefan    | 07.07.2022 |
| 11  | Update README.md <br/> 1. **_Added file(s) ✔️ ->_** 0 ↔️ **_2. Edited file(s) 📝 ->_** 1                             |   Stefan    | 07.07.2022 |
| 12  | Small changes to Weather Model <br/> 1. **_Added file(s) ✔️ ->_** 0 ↔️ **_2. Edited file(s) 📝 ->_** 2                             |   Stefan    | 08.07.2022 |
| 12  | Small fixes in the PUT chain for Weather <br/> 1. **_Added file(s) ✔️ ->_** 0 ↔️ **_2. Edited file(s) 📝 ->_** 3                             |   Stefan    | 08.07.2022 |

### Progress bar

- [x] Initial commit of the app (02.07.2022)
- [x] Initial commit of README.md (02.07.2022)
- [ ] Work period for the SEP4 app ( 02.07.2022 - 12.08.2022 )
- [ ] Handin for the android app semester project (12.08.2022)
- [ ] Examination (Late August)

### [Base API URL](https://weather-forecast-sep4.herokuapp.com/)

### References
