📦 Secure File Upload System
Express.js + MongoDB + Supabase Storage

A full-stack, production-oriented file upload system built using Node.js (Express), MongoDB, and Supabase Storage.
This project demonstrates a secure backend-driven architecture, where all sensitive credentials remain protected while delivering a modern frontend experience using Tailwind CSS and Flowbite.

🌟 Project Overview

This application allows users to upload files through a clean popup interface.
Files are securely processed by an Express backend using Multer, stored in Supabase Storage, and tracked in MongoDB with metadata such as:
File name

File URL

Upload timestamp

The system follows industry best practices:

Backend-only access to cloud storage

Clear separation between UI, API, storage, and database

Scalable and cloud-ready architecture


✨ Key Features

🔐 Secure file upload via Express backend

☁️ Cloud file storage using Supabase Storage

🗄 MongoDB for file metadata management

🎨 Modern popup UI with Tailwind CSS & Flowbite

⚡ Asynchronous upload using Fetch API (no page reload)

🛡 Supabase Service Role Key protected on server

📈 Scalable design suitable for real-world applications

🧰 Tech Stack

Frontend

HTML5

Tailwind CSS

Flowbite

Ejs

Vanilla JavaScript (Fetch API)


Backend

Node.js

Express.js

Multer (memory storage)


Database & Storage

MongoDB (file metadata)

Supabase Storage (file storage)


🏗 System Architecture

Client (Browser)
   │
   │  File Upload (Fetch API)
   ▼
Express.js Backend
   │
   │  Multer (Memory Storage)
   │
   ├── Upload file → Supabase Storage
   │
   └── Save metadata → MongoDB


The frontend never communicates directly with Supabase

All sensitive credentials are handled on the backend

Ensures security and scalability


🔐 Security Practices

No cloud credentials exposed to frontend

Backend-only access to Supabase Service Role Key

In-memory file handling (no local disk storage)

Clean separation of concerns

 🧠 Learning Outcome

This project helped me understand:
Real-world backend file upload architecture
Secure cloud storage integration

API-based frontend-backend communication

Production-level security practices

📬 Feedback

This is my first backend project, and feedback is always welcome!
Feel free to open issues or suggest improvements 😊


 ⭐ If you like this project, don’t forget to star the repo!

