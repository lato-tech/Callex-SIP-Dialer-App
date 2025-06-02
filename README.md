# Callex

## ⚙️ Required Software
- **Node.js** >= 14.0.0  
- **npm** >= 6.0.0  
- **MongoDB** >= 4.0.0

---

## 📦 Installation

### Clone the repository
```bash
git clone https://github.com/latotech/callex.git
cd callex
```

### Install dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
```

### Configure environment
```bash
# Create .env file in backend directory
cp .env.example .env
```

Edit `.env` and add your configuration:
```env
MONGODB_URI=mongodb://localhost:27017/callex
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## ▶️ Start Development Servers

```bash
# Start backend (from backend directory)
npm run dev

# Start frontend (in another terminal)
npm start
```

---

## 🛠 Configuration

### SIP Server Setup

Create a `config/sip.json` file with your configuration.

---

### Storage Configuration

#### Local Storage
```env
STORAGE_TYPE=local
STORAGE_PATH=/path/to/recordings
```

#### NAS Storage
```env
STORAGE_TYPE=nas
NAS_HOST=nas.example.com
NAS_PATH=/recordings
NAS_USERNAME=user
NAS_PASSWORD=pass
```

#### S3 Storage
```env
STORAGE_TYPE=s3
AWS_ACCESS_KEY=your_access_key
AWS_SECRET_KEY=your_secret_key
S3_BUCKET=your-bucket-name
S3_REGION=us-east-1
```

---

### LDAP Integration
```env
LDAP_URL=ldap://ldap.example.com
LDAP_BASE_DN=dc=example,dc=com
LDAP_USERNAME=cn=admin,dc=example,dc=com
LDAP_PASSWORD=admin_password
```

---

## 📱 Mobile Build

### iOS Build
```bash
npm install @capacitor/ios
npx cap add ios
npx cap sync ios
npx cap open ios
```

Then:
- Update **Bundle Identifier**
- Add **signing certificate**
- Configure permissions in **Info.plist**
- Build and run via Xcode

---

### Android Build
```bash
npm install @capacitor/android
npx cap add android
npx cap sync android
npx cap open android
```

Then:
- Update **application ID**
- Configure **signing**
- Update permissions in **AndroidManifest.xml**
- Build and run via Android Studio

---

## 🚀 Deployment

### Web Deployment

#### Build the frontend
```bash
npm run build
```

#### Configure nginx
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        root /path/to/build;
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### Start the backend
```bash
cd backend
npm install -g pm2
pm2 start server.js
```

---

### Docker Deployment

#### Build the image
```bash
docker build -t callex .
```

#### Run the container
```bash
docker run -p 3000:3000 -p 5000:5000 callex
```

---

## 🔧 Development

### Project Structure
```
callex/
├── src/
│   ├── components/      # React components
│   ├── utils/           # Utility functions
│   └── App.tsx          # Main application
├── backend/
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── server.js        # Backend server
└── public/              # Static files
```

### Adding New Features

- **Create component:** `src/components/YourComponent.tsx`  
- **Add routing, update navigation, and integrate changes**

---

## 📝 Contributing

1. **Fork** the repository  
2. **Create your feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

---

## 📄 License
This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 👥 Contact

**Lato Technologies** – [www.getlato.com](https://www.getlato.com)  
**Project Link:** [https://github.com/latotech/callex](https://github.com/latotech/callex)
