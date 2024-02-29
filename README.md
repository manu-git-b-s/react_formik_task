# Library Management System

This is a simple CRUD application built with HTML, CSS, JavaScript, and React for managing book data. It allows users to perform Create, Read, Update, and Delete (CRUD) operations on book records. The application uses Formik for form validation and integrates with a backend API for data storage and retrieval.

## Technologies Used

- **HTML**: Used for structuring the web pages.
- **CSS**: Used for styling and layout.
- **JavaScript**: Used for implementing dynamic behavior on the client-side.
- **React**: Used for building a modular and scalable user interface.
- **Formik**: Used for form validation and handling in React.
- **Bootstrap**: Used for styling components and responsive design.
- **Axios**: Used for making HTTP requests to the backend API.

## Features

- Add new books with details such as title, author, ISBN number, and publication date.
- Edit existing book details, including updating author information.
- Delete books from the system.

## Backend API Integration

The application communicates with a backend API to perform CRUD operations on book data. The API endpoints are as follows:

- **POST /books**: Add a new book.
- **GET /books**: Retrieve all books.
- **GET /books/:id**: Retrieve a specific book by ID.
- **PUT /books/:id**: Update the details of a book.
- **DELETE /books/:id**: Delete a book.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

1. **Clone the repository:**

   ```bash
   https://github.com/manu-git-b-s/react_context_api.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd shopping-cart
   ```

3. **Visual Code:**

   ```bash
   code .
   ```

4. **Install dependencies:**

   ```bash
   npm install http://localhost:3000
   ```

5. **Port:**

   ```bash
   http://localhost:3000
   ```

## Configuration

1. Open the `config.js` file and configure any necessary settings .

## Usage

1. **Start the development server:**

   ```bash
   npm start
   ```

2. **Open your browser and visit [http://localhost:3000](http://localhost:3000).**

3. **Explore the shopping cart functionality and have fun shopping! 🎉**

## Contributing

We welcome contributions! To contribute to this project, please follow the guidelines outlined in [CONTRIBUTING.md](CONTRIBUTING.md).

## Feedback

If you have any questions, issues, or suggestions, feel free to [open an issue](https://github.com/manu-git-b-s/react_formik_task.git/issues).

## Netlify Link

[React-Formik-Task](https://formik-task-manu.netlify.app/)

```bash
https://formik-task-manu.netlify.app/
```

## Screenshots of Pages

# 1. Home page displays all books

![image](./public/images/Screenshot%202024-03-01%20at%202.31.16 AM.png)

# 2. Add Book Page displays form to add a book

![image](./public/images/Screenshot%202024-03-01%20at%202.40.48 AM.png)

# 3. Return Book page displays all books that are lended by the user

![image](./public/images/Screenshot%202024-03-01%20at%202.41.00 AM.png)

# 4.Edit Book page

![image](./public/images/Screenshot%202024-03-01%20at%202.40.00 AM.png)
