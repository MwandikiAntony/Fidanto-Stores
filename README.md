#  MERN E-commerce React Shopping Website 👜🛍

[![React](https://img.shields.io/badge/React-★★★★★-blue)](https://react.dev/)
[![node](https://img.shields.io/badge/node-★★★★★-yellow)]()
[![express](https://img.shields.io/badge/Express-★★★★★-green)]()
[![mongoDB](https://img.shields.io/badge/mongoDB-★★★★★-pink)]()
[![Firebase](https://img.shields.io/badge/Firebase-★★★★★-brown)]()
[![Javascript](https://img.shields.io/badge/JavaScript-★★★★★-orange)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<div align="center"><img width=auto height="150px" src="https://github.com/shanibider/ANASTACIA-MERN-ECOMMERCE/assets/72359805/f7ca753d-2874-48c9-a7a2-f3fe8fc25811"></div>

#### **Live Demo:** [Explore the live website. 🖥](https://anastacia-mern-ecommerce-website.onrender.com/)

A comprehensive feature-rich e-commerce website developed as a server-client React application, powered by the **MERN (MongoDB, Express.js, React.js, Node.js) stack**. 

This project showcases proficiency in full-stack development, including frontend UI/UX design, backend API development, database management, and integration with external services. <br>

> Please try to experience full purchase on the website:) Register, choose products, pay with PayPal user.
### 🛒 Key Features:
- **dynamic shopping cart**
- 🖊 **Interactive review system**
- 🗂️ **Organized product listings**
- 💳**Paypal payment process**
- 🔒 **User authentication and authorization**
- 🛠️ **User functionalities**, such as order history, and **admin functionalities** such as real-time metrics (registered users, order count, total money orders), creation, editing, and deletion of products.
<br>


## 🌟 Frontend Implementation 
The frontend is built using **React.js**, using React features such as hooks (`useState`, `useEffect`), and state management using **Redux**. It includes components and routing to create an interactive user experience.

### Key React features:
1. **React Components**: Utilizes functional components and hooks to manage state and side effects, promoting code reusability and simplification.
2. **Redux State Management**: Manages the global state of the application, including user authentication, product listing, and shopping cart state. Redux Thunk is used for asynchronous operations.
3. **Routing with React Router**: Implements dynamic routing for different parts of the application, including product pages, user login, and the shopping cart.
4. **State Management with useState and useEffect**: Manages local component state and side effects, ensuring components respond to changes in application state efficiently.
5. **Asynchronous Operations with Redux Thunk**: Handles asynchronous logic such as fetching data from the backend.


## Backend Implementation 🧱
The backend of this e-commerce website is built using **Node.js** and **Express.js**, connecting to **MongoDB Atlas** for database management. It includes secure user authentication with **Firebase** and implements API endpoints to handle various functionalities such as product management, user management, and order processing.

# Technologies Used 🏆
### **MERN Stack:**
- [x] **MongoDB:** Efficient and scalable NoSQL database, ensuring robust data storage and retrieval capabilities.
- [x] **Express.js:** Fast and minimalist web framework for Node.js, facilitating the creation of powerful APIs and web applications.
- [x] **React.js:** Dynamic and responsive JavaScript library for building modern and engaging user interfaces, utilizing:
  - [ ] **useState:** React hook for managing state in functional components, enhancing component interactivity and reactivity. ⚛️
  - [ ] **useContext:** React hook for accessing and consuming context values across components, facilitating efficient data sharing. 🔄
  - [ ] **useReducer:** React hook for managing complex state logic with reducer functions, offering a more organized approach to state management. 🔴
- [x] **Node.js:** Lightweight and efficient JavaScript runtime environment, enabling scalable and high-performance server-side execution.

### **Firebase:**
- [x] **Authentication:** Firebase authentication services for secure user authentication and authorization management.
- [x] **Real-time Database:** Firebase real-time database for seamless and synchronized data updates across clients in real-time.

### **HTTP/S Protocols:**
- [x] **Axios:** Promise-based HTTP client for making asynchronous requests to the server, enhancing data fetching and manipulation.
- [x] **AJAX:** Asynchronous JavaScript and XML for making seamless requests to the server without refreshing the entire page.
- [x] **Fetch API:** Modern browser API for fetching resources asynchronously across the network, improving data retrieval efficiency.

### **Payment Processing:**
- [x] **PayPal API:** Integration of PayPal API for secure and reliable payment processing, ensuring seamless transactions for users.

### **Frontend Development:**
- [x] **HTML, CSS, JavaScript:** Foundational technologies for building the frontend interface, providing structure, style, and interactivity to web applications.
- [x] **Bootstrap:** Frontend framework for developing responsive and mobile-first web projects, streamlining the design and layout process and ensuring compatibility across various devices. 🌐
<br>



# Key Features 🎯
- [x] 🏠 **Home Page:** 
  - Lists products to browse and explore.

- [x] 🔍 **Detailed Product View:** 
  - Provides in-depth information about a selected product.

- [x] 📂 **Product Categories:** 
  - Categorizes products for easy navigation.

- [x] 🛒 **Shopping Cart:** 
  - Allows users to add and manage items in their cart.

- [x] 💳 **Order Processing with PayPal:** 
  - Securely handles payment processing using the PayPal API for demo purposes.

- [x] 🔐 **Secure User Registration and Login:** 
  - Ensures a safe and secure user authentication system.

- [x] 👩‍💼👨‍💼 **Admin Functionalities:** 
  - Manages 'Products' and 'Orders' lists
  - Features a dashboard displaying real-time metrics: registered users, order count, and financial performance through total money orders.
  - Enables the creation, editing, and deletion of products.

- [x] 👩‍💼 **User Functionalities:** 
  - Accesses order history.
  - Edits user profile.

- [x] 👩🏻‍🤝‍🧑🏻 **About The Team Page:** 
  - Provides information about the development team.   
<br>



# MERN Project Architecture 📁

This repository contains the main files and folder structure for the MERN (MongoDB, Express.js, React.js, Node.js) project.
The app follows a typical MERN architecture where React is used for the front-end, Node.js and Express for the back-end, MongoDB for the database, and JWT for authentication.
These components work together to provide a seamless shopping experience for users while allowing for easy management of products, orders, and user accounts.

## Folder Structure 📁

```
MERN-project/
├── frontend/
│   ├── components/
│   │   ├── AdminRoute.js
│   │   ├── CheckoutSteps.js
│   │   ├── LoadingBox.js
│   │   ├── MessageBox.js
│   │   ├── Product.js
│   │   ├── ProtectedRoute.js
│   │   ├── Rating.js
│   │   └── SearchBox.js
│   ├── screens/
│   │   ├── AboutUsScreen.js
│   │   ├── CartScreen.js
│   │   ├── DashboardScreen.js
│   │   ├── HomeScreen.js
│   │   ├── HowToScreen.js
│   │   ├── OrderHistoryScreen.js
│   │   ├── OrderListScreen.js
│   │   ├── OrderScreen.js
│   │   ├── PaymentMethodScreen.js
│   │   ├── PlaceOrderScreen.js
│   │   ├── ProductEditScreen.js
│   │   ├── ProductListScreen.js
│   │   ├── ProductScreen.js
│   │   ├── ProfileScreen.js
│   │   ├── SearchScreen.js
│   │   ├── ShippingAddressScreen.js
│   │   ├── SigninScreen.js
│   │   └── SignupScreen.js
│   ├── App.js
│   ├── Store.js
│   ├── index.js
│   └── utils.js
├── Backend/
│   ├── routes/
│   │   ├── orderRoutes.js
│   │   ├── productRoutes.js
│   │   ├── seedRoutes.js
│   │   └── userRoutes.js
│   ├── models/
│   │   ├── orderModel.js
│   │   ├── productModel.js
│   │   └── userModel.js
│   ├── server.js
│   ├── firebase.js
│   ├── utils.js
│   ├── data.js
│   └── cloths.json
└── ...
```

- [x] **backend**: Contains the backend files and resources, following a RESTful architecture.
- [x] **frontend**: Houses the frontend files and components developed with React.js.
- [x] **config**: Stores configuration files for the project, such as database configurations or environment variables.
- [x] **models**: Defines the database models and schemas used in the application.
- [x] **routes**: Contains the route definitions for the API endpoints.
- [x] **controllers**: Includes the controller functions responsible for handling requests and responses.
- [x] **middlewares**: Houses custom middleware functions used in the API.
- [x] **utils**: Stores utility functions and helper modules used throughout the project.
- [x] **public**: Stores any static assets or files served by the backend.
- [x] **views**: Contains server-side views if any, typically used in server-side rendering applications.


## Backend Structure 🧱🔨-

### Server -

- [ ] **`server.js`:** This is the main entry point for the Node.js backend. It initializes Express, connects to MongoDB using Mongoose, defines API routes, and serves the React frontend. It also includes logic for seeding initial data and serving static files.

### Routes -

- [ ] **`orderRoutes.js`,** `productRoutes.js`, `seedRoutes.js`, `userRoutes.js`: These files define the API endpoints and route handlers for managing orders, products, user authentication, and seeding initial data.

### Models -

- [ ] `Order.js`, `Product.js`, `User.js`: These files define the data models using Mongoose, which allow you to interact with MongoDB collections.

### firebase.js -

- [ ] **`firebase.js`:** This file sets up Firebase for authentication and database management in the application. It ensures that the Firebase app is properly configured and ready to use authentication and Firestore services.

### utils.js -

- [ ] **`utils.js`:** This file provides essential utility functions and middleware for user authentication and authorization in the application. It ensures that only authenticated users with the appropriate permissions can access certain routes or perform specific actions.



## Frontend Structure 🖼 -

### Components

- [ ] **`AdminRoute.js`, `CheckoutSteps.js`, `LoadingBox.js`, `MessageBox.js`, `Product.js`, `ProtectedRoute.js`, `Rating.js`, `SearchBox.js`**.

### Screens -

- [ ] **`CartScreen.js`, `DashboardScreen.js`, `HomeScreen.js`, `HowToScreen.js`, `OrderHistoryScreen.js`, `OrderListScreen.js`, `OrderScreen.js`, `PaymentMethodScreen.js`, `PlaceOrderScreen.js`, `ProductEditScreen.js`, `ProductListScreen.js`, `ProductScreen.js`, `ProfileScreen.js`, `SearchScreen.js`, `ShippingAddressScreen.js`, `SigninScreen.js`, `SignupScreen.js`, `AboutUsScreen.js`**.

### app.js -

- `App.js`: This file is the entry point for your React frontend application- controls the frontend structure and behavior. It defines routes using `react-router-dom` for different pages/screens of the application and orchestrates the structure and behavior of your frontend application.

### store.js

- [ ] **`store.js`:** This file defines and manages the application's global state management using React context and reducers. It essentially manages the global state of the application, handling user authentication, cart management, and related operations.

### index.js

- [ ] **`index.js`:** This file serves as the entry point for the React application. It wraps the `<App />` component with providers such as `StoreProvider`, `HelmetProvider`, and `PayPalScriptProvider`.

## Setup Instructions
1. Clone the repository: `git clone [repository_url]`
2. Set up the MongoDB database and Firebase authentication.
3. Configure environment variables.
4. Run Backend-
```
$ cd our-website
$ cd backend
$ npm i
$ npm start
```

5. Run Frontend-
   
open new terminal
```
$ cd our-website
$ cd frontend
$ npm i
$ npm start
```

<footer>
<p style="float:left; width: 20%;">
Copyright © Antony Mwandiki, 2025
</p>
</footer>

## License

This project is licensed under the MIT License.
