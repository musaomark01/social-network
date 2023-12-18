# social-network

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Description
This project is a social networking backend application built using Node.js and MongoDB. It provides various API endpoints for managing users, thoughts, friends, and reactions. The application uses Express for handling HTTP requests, Mongoose as the Object Data Modeling library for MongoDB, and dayjs for date and time.

## Table Of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Technology Used](#Technology)
- [Questions](#questions)

## Installation
- Node.js (version 18.18.0.)
- MongoDB
### npm packages
- mongoose (version 8.0.3), 
- express (version 4.18.2), 
- dayjs (version 1.11.10)

## Usage
- Clone this repository.
- Install all the required packages as listed above.
- In the terminal run `npm run start`
- Using Insomnia `http://localhost:3001/api/`
- `/users`
- Get all users using the `GET` method
- Add a new user username and email are required using the `POST` method
- `/thoughts`
- Get all thoughts using the `GET` method
- Add a new thought thoughtText, username, and userId are required using the `POST` method
- `/users/:id` 
- Get the user only using the `GET` method
- update the user using the `PUT` method
- Delete the user using the `DELETE` method
- `/users/:id/friends/user:id`
- Add a friend using the `POST` method
- Delete friend using the `DELETE` method
- `/thoughts/:id` 
- Get the thought only using the `GET` method
- update the thought using the `PUT` method
- Delete the thought using the `DELETE` method
- `/thoughts/:id/reactions`
- To add a reaction reactionBody and username are required using the `POST` method
- `/thoughts/:id/reactions/reaction:id`
- To delete that reaction using the `DELETE` method

[Walk through video](https://drive.google.com/file/d/1ipDDw2P7DvYsuSMg5XGZg0TAUoyE-n7T/view?usp=drive_link/view)
## License 
This project is licensed under [MIT License](License)

## Contributing
Thank you for your interest in this project! I am not actively seeking external contributions at this time. Feel free to fork the repository and work on your own improvements, but I may not accept pull requests.

## Technology Used
- Node.js (version 18.18.0.)
- MongoDB
- Insomnia
### npm packages
- mongoose (version 8.0.3), 
- express (version 4.18.2), 
- dayjs (version 1.11.10)

## Questions
GitHub: [musaomark01](https://github.com/musaomark01)
For any additional questions, please feel free to contact me at musaomark01@gmail.com.