# AI Chatbot Full-Stack Application

A modern, full-stack AI chatbot application built with React, Express.js, MongoDB, and Tailwind CSS. Features user authentication, protected routes, and a beautiful responsive design.

## 🚀 Features

- **Authentication System**: JWT-based login/signup with protected routes
- **Responsive Design**: Modern UI with Tailwind CSS
- **AI Chat Interface**: Interactive chatbot with message history
- **Multiple Pages**: Home, About Us, Contact Us, Privacy Policy
- **Secure Backend**: Express.js with security middleware
- **Database Integration**: MongoDB with Mongoose ODM
- **Modern React**: Hooks, Context API, React Router DOM

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager
- Git

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd ai-chatbot-fullstack
```

### 2. Frontend Setup (Client)
```bash
cd client
npm install
```

**Frontend Dependencies:**
```bash
npm install react react-dom react-router-dom axios lucide-react
npm install -D tailwindcss autoprefixer postcss @vitejs/plugin-react vite eslint
```

### 3. Backend Setup (Server)
```bash
cd server
npm install
```

**Backend Dependencies:**
```bash
npm install express mongoose bcryptjs jsonwebtoken cors dotenv helmet express-rate-limit express-validator
npm install -D nodemon
```

### 4. Environment Configuration

#### Client (.env)
Create `client/.env`:
```env
VITE_API_URL=your_gemini_api_url_here
VITE_BACKEND_URL=http://localhost:5000/api
```

#### Server (.env)
Create `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ai-chatbot
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

### 5. Database Setup

#### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Database will be created automatically

#### Option B: MongoDB Atlas
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in server/.env

## 🚀 Running the Application

### Development Mode

**Start Backend Server:**
```bash
cd server
npm run dev
```
Server runs on: http://localhost:5000

**Start Frontend Client:**
```bash
cd client
npm run dev
```
Client runs on: http://localhost:5173

### Production Build

**Build Frontend:**
```bash
cd client
npm run build
```

**Start Production Server:**
```bash
cd server
npm start
```

## 📁 Project Structure

```
ai-chatbot-fullstack/
├── client/                      # Frontend (React + Tailwind)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/           # Login/Signup components
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── ChatbotIcon.jsx
│   │   │   ├── ChartForm.jsx
│   │   │   └── ChatMessage.jsx
│   │   ├── pages/              # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Chat.jsx
│   │   │   ├── AboutUs.jsx
│   │   │   ├── ContactUs.jsx
│   │   │   ├── PrivacyPolicy.jsx
│   │   │   └── NotFound.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── tailwind.config.js
│   └── package.json
├── server/                      # Backend (Node.js + Express)
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── chatController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Message.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── chatRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
└── README.md
```

## 🔗 API Endpoints

### Authentication Routes
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Chat Routes (Protected)
- `POST /api/chat/message` - Save chat message
- `GET /api/chat/history/:conversation` - Get chat history
- `GET /api/chat/conversations` - Get user conversations
- `DELETE /api/chat/conversation/:conversation` - Delete conversation

### Utility Routes
- `GET /api/health` - Health check
- `GET /` - API information

## 🎨 Pages & Routes

| Route | Component | Access | Description |
|-------|-----------|--------|-------------|
| `/` | Home | Public | Landing page with features |
| `/login` | Login | Public | User login form |
| `/signup` | Signup | Public | User registration form |
| `/chat` | Chat | Protected | AI chatbot interface |
| `/about` | AboutUs | Public | Company information |
| `/contact` | ContactUs | Public | Contact form and info |
| `/privacy-policy` | PrivacyPolicy | Public | Privacy policy |
| `/*` | NotFound | Public | 404 error page |

## 🔧 Configuration

### Tailwind CSS Setup
The project uses Tailwind CSS for styling with custom configurations:
- Custom color scheme (primary colors)
- Responsive design breakpoints
- Custom components and utilities

### Security Features
- JWT authentication
- Password hashing with bcrypt
- Rate limiting
- CORS protection
- Helmet security headers
- Input validation

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Configure environment variables

### Backend Deployment (Heroku/Railway)
1. Set environment variables
2. Ensure MongoDB connection
3. Deploy with start script

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in .env

2. **Frontend Build Errors**
   - Clear node_modules and reinstall
   - Check all dependencies are installed

3. **Authentication Issues**
   - Verify JWT_SECRET is set
   - Check CORS configuration

4. **API Connection Issues**
   - Ensure backend is running on correct port
   - Verify VITE_BACKEND_URL in client/.env

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Built with ❤️ using React, Express.js, MongoDB, and Tailwind CSS**
