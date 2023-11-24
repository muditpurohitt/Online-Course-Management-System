# Online Course Management System

## Overview

This project is an Online Course Management System, a full-stack web application built with the MERN (MongoDB, Express.js, React, Node.js) stack. The system allows users to sign up, log in, and perform various actions based on their role (admin or user). Admins can manage courses, while users can view and purchase them.

## Features

- **Authentication**: Users and admins can securely log in and sign up. JSON Web Tokens (JWT) are used for authentication.

- **Admin Functionality**: Admins can add, edit, and publish courses, providing detailed information such as title, description, image, and price.

- **User Interaction**: Users can view available courses, purchase them, and view their purchased courses.

- **Responsive UI**: The frontend is built with React and Material-UI, ensuring a responsive and user-friendly interface.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Frontend**: React, Material-UI
- **Authentication**: JWT

## How to Run

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/online-course-management.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd online-course-management
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up MongoDB:**

    - Create a MongoDB database.
    - Update the MongoDB connection string in the `app.js` file.

5. **Start the server:**

    ```bash
    npm start
    ```

6. **Start the frontend:**

    ```bash
    cd client
    npm start
    ```

7. **Open the application in your browser:**

    [http://localhost:3000](http://localhost:3000)

## Contributions

Contributions are welcome! If you find a bug or want to add new features, please open an issue or submit a pull request.

