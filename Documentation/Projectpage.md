# The Library App

The Library App is a React-based web application that allows users to store and manage their personal library of books. Each book is associated with a signed-up user and contains essential information like the title, author, genre, language, and more. The app is built using Vite, Firebase Firestore for database storage, and Netlify for deployment.

## Features
- User authentication (Google, Facebook, Phone, or Email/Password) via Firebase.
- Add, edit, and delete books from the user’s library.
- Ability to view and manage book details such as author, title, genre, language, and more.
- Users/Readers can add reviews for each book.
- Supports geolocation or address of where the book was added.

## Constrains for Book Upload

When uploading a book, the following fields are mandatory:

- Title: Must not be empty.
- Genre: Must not be empty. 
- Language: Must not be empty. 

## Database Structure

### **Users Collection**

This collection stores all the user data.

```jsonc
{
"userId": "abc123",  // unique identifier for each user
"name": "John Doe",
"email": "john.doe@example.com",
"profilePictureUrl": "https://example.com/profile.jpg",
"mobileNumber": ,
"createdAt": "2024-10-03T12:34:56Z", // need to show how long he is been a user
"lastEdited": "2024-10-03T12:34:56Z", 
"address": "123 Library Lane, Booktown, NY, USA",  // human-readable address
"geoPoint": { "latitude": 40.7128,"longitude": -74.0060 }
}
```

### **Users Library Collection**

This collection stores the library data associated with a user
```json
{
"lastEdited": "2024-10-03T12:34:56Z",
"libraryName": "Django Library",
"libraryRating": 5,
"numberOfBooks": 20,
"followers": 5,
"booksLent": 10,
"booksRead": 4,
"userId": , 
}
```

### **Books Collection**

This collection stores all the books data

```json
{
"bookId": "book123",  // unique identifier for each book
"title": "The Great Gatsby",
"author": "F. Scott Fitzgerald",
"genre": "Fiction",
"language": "English", 
"publishedDate": "1925-04-10", 
"description": "A novel set in the Jazz Age about the enigmatic Jay Gatsby and his love for Daisy Buchanan.", 
"userId": "abc123",  // this links the book to a specific user
"createdAt": "2024-10-03T13:45:56Z",  // timestamp when the book was added
"lastEditedAt": "2024-10-03T12:34:56Z", 
"coverImageUrl": "https://example.com/gatsby.jpg",
"additionalImageUrl": "https://pictures.jpg" -> Array of image urls
"views": 5
"status": //Draft, InReview, Published
}
```

### **Books Review Collection**

This collection stores all the book reviews

```json
{
"userId": "abc143", //this links the review to a specific user
"bookId": 
"reviewText": "It was a great read", 
"rating": 4.5
"createdAt": "2024-10-03T13:45:56Z",  // timestamp when the book was added
}
```

## Technologies Used

Frontend: React with TypeScript and Vite
Backend: Firebase Firestore for storing data
Deployment: Netlify for hosting
Authentication: Firebase Authentication (Google, Facebook, Phone, and Email/Password)

## How to Run the Project Locally

**Clone the repository**:
   ```bash
   git clone https://github.com/your-username/library-app.git
   cd LibraryApp
   npm install
   # To build for production:
   npm run build
   # Start the development server:
   npm run dev
   ```










