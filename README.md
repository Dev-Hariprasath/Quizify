# 🎯 Quizify

**Quizify** is a full-stack quiz application where users can register, log in, take quizzes, view scores, and where admins can manage quiz content and users.

---

## 🛠️ Tech Stack

<table style="border: none; border-collapse: collapse;">
  <tr>
    <th style="text-align: left; padding: 8px;">Frontend</th>
    <th style="text-align: left; padding: 8px;">Backend</th>
  </tr>
  <tr>
    <td style="padding: 8px;">
      <img height="40" src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript"/>
      <img height="40" src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png" alt="React"/>
      <img height="40" src="https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png" alt="Tailwind CSS"/>
    </td>
    <td style="padding: 8px;">
      <img height="40" src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="Java"/>
      <img height="40" src="https://img.icons8.com/color/48/000000/spring-logo.png" alt="Spring Boot"/>
    </td>
  </tr>
  <tr>
    <th style="text-align: left; padding: 8px;">Database</th>
    <th style="text-align: left; padding: 8px;">API Tool</th>
  </tr>
  <tr>
    <td style="padding: 8px;">
      <img height="40" src="https://img.icons8.com/color/48/000000/postgreesql.png" alt="PostgreSQL"/>
    </td>
    <td style="padding: 8px;">
      <img height="40" src="https://github.com/user-attachments/assets/7fc506fa-3da7-4de0-aa1e-5dc12a9062f9" alt="Postman"/>
    </td>
  </tr>
  <tr>
    <th style="text-align: left; padding: 8px;">Version Control</th>
    <th style="text-align: left; padding: 8px;">IDE</th>
  </tr>
  <tr>
    <td style="padding: 8px;">
      <img height="40" src="https://img.icons8.com/color/50/000000/git.png" alt="Git"/>
      <img height="40" src="https://img.icons8.com/color/50/000000/github.png" alt="GitHub"/>
    </td>
    <td style="padding: 8px;">
      <img height="40" src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" alt="VS Code"/>
      <img height="40" src="https://img.icons8.com/color/48/intellij-idea.png" alt="IntelliJ IDEA"/>
    </td>
  </tr>
</table>

---

## 🧠 Features

### 👥 User
- Register and log in
- Browse available quizzes
- Attempt quizzes
- View results and scores

### 🛡️ Admin
- Add, edit, delete questions
- Create and manage quizzes
- Filter questions by category

---

## 🖼️ Screenshots

### 🔐 Login  
![Login - User Login Page](Quizify/Snaps/Login.png "Login Screen")

### 📝 Signup  
![Signup - User Signup Page](Quizify/Snaps/Signup.png "Signup Screen")

### 🏠 Home  
![Home - Dashboard](Quizify/Snaps/Home.png "Home Screen")

### 🖼️ Landing Page  
![Landing - Landing Page](Quizify/Snaps/Lander.png "Landing Page")

### 📊 Quiz Overview  
![Quiz Overview - List of Quizzes](Quizify/Snaps/QuizView.png "Quiz Overview")

### 📄 Question List  
![Question List - Admin Question Management](Quizify/Snaps/QnList.png "Question List")

### 🧩 Create Quiz  
![Create Quiz - Admin Quiz Creation](Quizify/Snaps/CreateQuiz.png "Create Quiz")

### ➕ Create Question  
![Create Question - Admin Question Creation](Quizify/Snaps/CreateQn.png "Create Question")

---


## 🚀 Getting Started

### 📦 Backend Setup

> **Tech:** Spring Boot 3.4.3, Java 21, PostgreSQL

#### ⚙️ Prerequisites
- Java 21
- PostgreSQL
- Maven

#### 🔧 Configuration

Update the database config in:

`src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/quizify_db
spring.datasource.username=your_db_username
spring.datasource.password=your_db_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

#### ▶️ Start the Backend

```bash
cd backend
mvn spring-boot:run
```

Access the API at: `http://localhost:8080`

#### 📁 Key Dependencies

* `spring-boot-starter-web`
* `spring-boot-starter-data-jpa`
* `spring-boot-devtools`
* `postgresql`
* `lombok`
* `spring-boot-starter-test`

---

### 💻 Frontend Setup

> **Tech:** React 19, Vite, Tailwind CSS 4

#### ⚙️ Prerequisites

* Node.js (v18+)
* npm or yarn

#### 📦 Install & Run

```bash
cd client
npm install
npm run dev
```

Visit the frontend at: `http://localhost:5173`

#### 📁 Key Libraries

* **React 19** – UI components
* **React Router DOM v7** – Routing
* **Axios** – API requests
* **Tailwind CSS 4** – Styling
* **React Toastify** – Notifications
* **React Confetti** – Visual effects
* **React Icons** – Icons

#### 🧪 Dev Tools

* **Vite** – Fast build tool
* **ESLint** – Linting
* **@vitejs/plugin-react** – React integration
* **TypeScript types** (for React)

---

## 🌐 Application Routes

| Route               | Access        | Component      |
| ------------------- | ------------- | -------------- |
| `/`                 | Public        | `Home`         |
| `/login`            | Public        | `LoginForm`    |
| `/signup`           | Public        | `SignupForm`   |
| `/quizzes`          | Authenticated | `QuizList`     |
| `/quiz/:id`         | Authenticated | `TakeQuiz`     |
| `/result/:id`       | Authenticated | `QuizResult`   |
| `/questions`        | Admin         | `AllQuestions` |
| `/add-question`     | Admin         | `AddQuestion`  |
| `/editQuestion/:id` | Admin         | `EditQuestion` |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
