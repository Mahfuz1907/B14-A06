# 🏋️‍♂️ FitLog

A modern, responsive fitness tracking web application built to help users seamlessly track, organize, and manage their daily workout routines and saved exercise plans.

---

## 🚀 Short Description

**FitLog** is an intuitive workout manager that allows fitness enthusiasts to curate daily workout schedules, save routines for future sessions, and automatically calculate total training metrics (exercises, workout duration, and calories burned). Built with performance and user experience in mind using Next.js 15, Tailwind CSS v4, and React Context API.

---

## 🛠️ Technologies Used

- **Framework**: Next.js 15 (App Router with Server & Client Component separation)
- **Styling**: Tailwind CSS v4 & DaisyUI
- **State Management**: React Context API (`WorkContext`)
- **Icons**: React Icons
- **Notifications**: React Toastify
- **Storage**: Browser `localStorage` for client-side persistence
- **Language**: TypeScript

---

## ✨ Key Features

1. **Dynamic Dashboard & Stat Aggregation**  
   Automatically calculates and updates key workout stats, including total exercise count, total training time (minutes), and total estimated calories burned—in real-time as workouts are added or completed.

2. **Persistent Local State Management**  
   Integrated with `localStorage` via React's `useEffect` hooks, ensuring your daily plans and saved workouts persist seamlessly across browser reloads and sessions.

3. **Multi-Criteria Dynamic Sorting**  
   Effortlessly sort workout lists dynamically by **Duration**, **Calories**, or **Rating** without triggering unnecessary re-renders or mutating state arrays directly.

4. **Interactive Workout Plan & Saved Tabs**  
   Easily toggle between your active **Today's Plan** and **Saved Workouts**, complete workouts using "Mark as Done", or remove specific exercises with instant toast notification feedback.

5. **Optimized App Router Architecture**  
   Utilizes Next.js 15 App Router best practices, featuring dynamic SEO metadata generation (`generateMetadata`) and a leaf-component structure that limits `'use client'` usage strictly to interactive components.
