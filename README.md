# 🔗 URL Shortener

A simple and responsive **URL Shortener web application** built with **Node.js, Express.js, MongoDB, EJS, and Tailwind CSS**.

The application converts long URLs into short, easy-to-share links.

## 🚀 Features

- 🔗 Create short URLs from long URLs
- ⚡ Generate unique short IDs using `nanoid`
- 🔄 Redirect users from short URLs to the original URL
- 🗄️ Store shortened URLs in MongoDB
- 🎨 Responsive UI using Tailwind CSS
- 🖥️ Server-side rendering with EJS
- 📱 Mobile-friendly interface

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend web framework |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| EJS | Server-side templating |
| Tailwind CSS | UI styling |
| nanoid | Short ID generation |

## 📁 Project Structure

```text
url-shortener/
│
├── controllers/
│   └── url.controller.js
│
├── models/
│   └── url.model.js
│
├── routes/
│   └── url.routes.js
│
├── views/
│   ├── index.ejs
│   └── ...
│
├── public/
│   └── ...
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ How It Works

```text
User enters long URL
        ↓
Express receives request
        ↓
Generate unique short ID
        ↓
Store URL in MongoDB
        ↓
Return short URL
        ↓
User opens short URL
        ↓
Find original URL
        ↓
Redirect to original URL
```

## 🗄️ Data Model

The shortened URL information is stored in MongoDB using Mongoose.

Example:

```javascript
{
  shortId: String,
  redirectURL: String
}
```

## 🔧 Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd url-shortener
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### 4. Start the application

For development:

```bash
npm run dev
```

Or:

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

## 🔌 Routes

### Create Short URL

```http
POST /url
```

Creates a new shortened URL.

### Redirect

```http
GET /:shortId
```

Redirects the user to the original URL associated with the short ID.

## 📊 Example

Original URL:

```text
https://www.example.com/very/long/url
```

Generated short URL:

```text
http://localhost:3000/Ab3xK9
```

When a user opens the short URL, the application finds the original URL from MongoDB and redirects the user.

## 🎨 UI

The frontend is rendered using **EJS** and styled with **Tailwind CSS**, providing a clean and responsive interface for creating shortened URLs.

## 🧠 What I Learned

While building this project, I practiced:

- Building routes with Express.js
- Connecting Node.js applications to MongoDB
- Designing Mongoose schemas
- Generating unique IDs with `nanoid`
- Handling HTTP redirects
- Server-side rendering with EJS
- Using Tailwind CSS for responsive UI
- Structuring a Node.js/Express project using controllers, models, and routes
- Working with environment variables

## 🔮 Future Improvements

- User authentication
- Custom short URLs
- URL expiration
- QR code generation
- Click analytics
- Device and location analytics
- Rate limiting
- Redis caching
- Admin dashboard
- API authentication
- Production deployment

## 👨‍💻 Author

**Haidar Ansari**

BCA Student | MERN Stack Developer

Interested in **Backend Development, MERN Stack, APIs, System Design, and AI-powered applications**.

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
