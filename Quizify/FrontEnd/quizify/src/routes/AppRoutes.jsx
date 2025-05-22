import React from "react";
import { Routes, Route } from "react-router-dom";

import AllQuestions from "../pages/Questions/AllQuestions";
import AddQuestion from "../pages/Questions/AddQuestion";
import EditQuestion from "../pages/Questions/EditQuestions";
import QuestionDetails from "../pages/Questions/QuestionsDetails";
import QuestionsByCategory from "../pages/Questions/QuestionsByCategory";
import CreateQuiz from "../pages/Quizzes/CreateQuiz";
import QuizList from "../pages/Quizzes/QuizList";
import TakeQuiz from "../pages/Quizzes/TakeQuiz";
import QuizResult from "../pages/Quizzes/QuizResult";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home/Home";
import Layout from "../layouts/Layout";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignUpForm";

import ProtectedRoute from "../components/auth/ProtectedRoute";
import RoleRoute from "../components/auth/RoleRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />

        {/* Authenticated Routes */}
        <Route
          path="/quizzes"
          element={
            <ProtectedRoute>
              <QuizList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quiz/:id"
          element={
            <ProtectedRoute>
              <TakeQuiz />
            </ProtectedRoute>
          }
        />
        <Route
          path="/result/:id"
          element={
            <ProtectedRoute>
              <QuizResult />
            </ProtectedRoute>
          }
        />
        <Route
          path="/questions"
          element={
            <ProtectedRoute>
              <AllQuestions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/question/:id"
          element={
            <ProtectedRoute>
              <QuestionDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/questions/category/:category"
          element={
            <ProtectedRoute>
              <QuestionsByCategory />
            </ProtectedRoute>
          }
        />

        {/* Admin-Only Routes */}
        <Route
          path="/add-question"
          element={
            <RoleRoute role="admin">
              <AddQuestion />
            </RoleRoute>
          }
        />
        <Route
          path="/editQuestion/:id"
          element={
            <RoleRoute role="admin">
              <EditQuestion />
            </RoleRoute>
          }
        />
        <Route
          path="/create"
          element={
            <RoleRoute role="admin">
              <CreateQuiz />
            </RoleRoute>
          }
        />
        <Route
          path="/quiz/view/:id"
          element={
            <RoleRoute role="admin">
              <TakeQuiz />
            </RoleRoute>
          }
        />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
