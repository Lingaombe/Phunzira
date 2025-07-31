🎓 **Phunzira — Student Resource Hub**

**Phunzira** is a student-focused web application that allows users to upload and browse past exam papers and access free academic books and resources (like those from Project Gutenberg). Built with React, MongoDB, OneDrive API, and Chakra UI for a clean, accessible experience.

---

## 🚀 Quickstart

```bash
git clone https://github.com/yourusername/Phunzira.git
cd Phunzira
```

### 📁 Project Structure

```
Phunzira/
├── client/       # React + Chakra UI frontend
├── server/       # Node.js + Express + MongoDB backend
└── README.md
```

---

## 🛠 Tech Stack

* **Frontend:** React.js + Chakra UI
* **Backend:** Node.js + Express.js
* **Database:** MongoDB
* **File Storage:** OneDrive API

---

## 🔐 Setup Environment Variables

Create a `.env` file inside `/server/`:

```env
MONGO_URI=your_mongodb_connection_string
ONEDRIVE_CLIENT_ID=your_onedrive_client_id
ONEDRIVE_CLIENT_SECRET=your_onedrive_client_secret
ONEDRIVE_REDIRECT_URI=http://localhost:5000/auth/callback
```

> ✅ Add `.env` to `.gitignore` to keep credentials safe

---

## 🧪 Run the Project

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd ../client
npm install
npm run dev
```

---

## 🌐 Main Features

* 📤 Upload and view past exam papers
* 🔍 Search past papers by subject, year, tags
* 📚 Browse free books from Project Gutenberg
* ☁️ Store files securely using OneDrive API
* 🧘‍♀️ Chakra UI for responsive and clean design

---

## ✨ Coming Soon

* Favorites & bookmarks
* User authentication with roles (admin/students)
* Resource ratings and reviews
* Offline access to downloaded resources

---

## 🤝 Contributing

Pull requests are welcome!
If you'd like to improve or fix something:

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/foo`
3. Commit changes: `git commit -m "Add foo"`
4. Push to your fork: `git push origin feature/foo`
5. Open a PR

---

## 📄 License

MIT License
