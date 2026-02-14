# 🔎 GitHub Profile Viewer

A simple and responsive **GitHub Profile Finder** web application that allows users to search for any GitHub username and view their public profile details in real time using the **GitHub REST API**.

---

## 🚀 Features

* 🔍 Search any GitHub username
* 👤 View profile picture & bio
* 👥 Followers & following count
* 📦 Public repositories count
* 🔗 Direct link to GitHub profile
* ❌ Error handling for invalid usernames
* 🎨 Clean and responsive UI

---

## 🛠️ Tech Stack

**Frontend**

* EJS (Embedded JavaScript Templates)
* CSS / Bootstrap
  
**Backend**

* Node.js
* Express.js

**API**

* GitHub REST API

---

## 📦 Dependencies

```json
{
  "axios": "^1.13.5",
  "dotenv": "^17.3.1",
  "ejs": "^4.0.1",
  "ejs-mate": "^4.0.0",
  "express": "^5.2.1",
  "path": "^0.12.7"
}
```

### Dependency Usage

* **axios** → Fetch GitHub API data
* **dotenv** → Manage environment variables (API tokens if used)
* **ejs** → Templating engine
* **ejs-mate** → Layout & partial support
* **express** → Server framework
* **path** → File path utilities

---

## ⚙️ Installation & Setup

1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/github-profile-viewer.git
cd github-profile-viewer
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Create `.env` file

```env
PORT=YOUR_PORT
```

4️⃣ Run the server

```bash
npm start
```

or

```bash
node app.js
```

5️⃣ Open in browser

```
http://localhost:3000
if error occur check server & PORT
```

---

## 📸 Screenshots
<img width="1297" height="859" alt="Screenshot 2026-02-14 190646" src="https://github.com/user-attachments/assets/516b25d8-a54e-49c9-a893-7a7ea09161f0" />



### 🔍 Search Profile

Displays user profile details including avatar, bio, followers, following, and repositories.

### ❌ Profile Not Found

Shows an error UI when the username does not exist.

<img width="1039" height="730" alt="Screenshot 2026-02-14 190729" src="https://github.com/user-attachments/assets/cb171c84-c8a9-47bc-87a8-3a1e6186e01a" />

---

## 📂 Project Structure

```
github-profile-viewer/
│
├── views/
│   ├── layouts/
│       ├── boilerplate.ejs
│   ├── index.ejs
│   ├── card.ejs
│   └── error.ejs
│
├── public/
│   ├── bootstrap/
│       ├── all.css
│       ├── bootstrap.css
│   ├── style.css
│   └── wrong.png
│
├── .env
├── index.js
├── package.json
└── README.md
```

---

## 🔗 API Reference

GitHub Users API:

```
https://api.github.com/users/{username}
```

Example:

```
https://api.github.com/users/SaketTiwari2008
```

---

## 🧠 How It Works

1. User enters a GitHub username
2. Request sent to Express server
3. Server calls GitHub API via Axios
4. Data passed to EJS template
5. Profile rendered dynamically

---

## 🚧 Future Improvements

* ⭐ Show repositories list
* 📊 Contribution stats
* 🌙 Dark / Light mode toggle
* 🔎 Search history
* 📱 Mobile optimization

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Saket Tiwari**
Sharing coding projects & tutorials

GitHub: https://github.com/SaketTiwari2008

---
