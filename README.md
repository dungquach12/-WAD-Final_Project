﻿# -WAD-Final_Project
## Introduction
The project, titled Simple Threads, is a minimalistic social media platform designed for
users to share text-based updates while optionally including a picture or short video. Built
using `Node.js` and `Express` with `PostgreSQL`. Users can create profiles,
follow others, and engage with content by liking and commenting on threads. A home feed
displays posts from followed users, while a notification system keeps users informed about
interactions. Overall, Simple Threads aims to foster connection and interaction in a
straightforward, user-friendly environment.
## Functional Requirements
### 1. User Authentication
* Sign up: Users can create an account with email and password.
  * Unique Username: Each username must be unique and meet specified criteria (e.g., length and allowed characters).
  * Email Verification: Upon registration, users receive a verification email containing a link to confirm their email address.
* Login: Users can log in to their accounts using their email/username + password.
* Logout: Users can log out of their accounts.
* Password reset: Users can request a password reset link via email.
      * Email Reset Verification: Upon request, users receive a reset email with a link to set a new password.

### 2. User Profiles
* Each user has a profile page displaying their information and threads.
* Ability to edit profile information (username, bio, profile picture).
### 3. Thread Creation
* Users can create new threads (text-based posts).
* Each thread may include one optional picture
* Threads should have a timestamp and display the creator's username.
### 4. Feed Display
* Home feed showing threads from users the logged-in user follows.
* Option to view all threads from all users.
### 5. Follow System
* Users can follow and unfollow other users.
* Display list of followers and following on user profiles.
### 6. Thread Interaction
* Like Threads: Users must be able to like threads, and the total number of likes should be displayed.
* Comment on Threads: Users must be able to comment on threads, and all comments should be visible below each thread.

### 7. Notifications
* Implement a simple notification list for users.
  * Notifications for actions like new followers, likes on their threads, or comments.
  * Notifications should be viewable in the user interface but do not need to be real-time.
  * Ensure notifications are manageable (e.g., mark as read, delete).

### Non-Functional Requirements
* Performance: Fast response times for rendering pages.
* Security: Passwords should be hashed; protect against common vulnerabilities (e.g., SQL injection, XSS).
* Scalability: Database schema should allow for easy expansion (e.g., adding more features).
* Mobile First Design: Focus on a mobile-first design approach to ensure usability on smaller screens.
