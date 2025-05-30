# 💍 Venkat & Nandini Wedding Invitation

<div align="center">

![Wedding Banner](https://img.shields.io/badge/💕_Wedding_Invitation-Live_on_Netlify-ff69b4?style=for-the-badge&logoColor=white)

**A beautiful, interactive wedding invitation website for Naga Venkateswara Rao and Nandini**

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/venkat-nandini/deploys)
![Visitors](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=Total%20Visitors&query=count&url=https://venkat-nandini.netlify.app/.netlify/functions/visitor-counter&style=flat-square)

[🌐 **Live Website**](https://venkat-nandini.netlify.app/) • [📸 **Screenshots**](#-preview) • [🛠️ **Setup Guide**](#%EF%B8%8F-local-development)

</div>

---

## 🎯 Overview

This project is the **Netlify-hosted version** of a wedding invitation website featuring:
- Real-time visitor tracking with **Upstash Redis**
- Serverless backend using **Netlify Functions**
- Responsive design optimized for all devices
- Elegant and modern wedding invitation layout

---

## ✨ What's New in This Branch

<table>
<tr>
<td>

**🚀 Deployment**
- ✅ Live on Netlify
- ✅ Custom domain ready
- ✅ HTTPS enabled

</td>
<td>

**📊 Analytics**
- ✅ Visitor counter
- ✅ Real-time tracking
- ✅ Redis persistence

</td>
<td>

**⚡ Performance**
- ✅ Serverless functions
- ✅ CDN optimization
- ✅ Fast loading

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

| **Frontend** | **Backend** | **Database** | **Hosting** |
|:---:|:---:|:---:|:---:|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | ![Netlify Functions](https://img.shields.io/badge/Netlify_Functions-00C7B7?style=flat&logo=netlify&logoColor=white) | ![Upstash Redis](https://img.shields.io/badge/Upstash_Redis-DC382D?style=flat&logo=redis&logoColor=white) | ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | **Cloud KV Store** | **CDN + SSL** |

</div>

---

## 🌐 Live Site

<div align="center">

### 🔗 [https://venkat-nandini.netlify.app/](https://venkat-nandini.netlify.app/)

*Experience the beautiful wedding invitation with real-time visitor tracking*

</div>

---

## 🚀 Local Development

### Prerequisites
- Node.js (v16 or higher)
- Git
- Netlify CLI

### Quick Start

1. **📥 Clone & Setup**
   ```bash
   git clone https://github.com/viswabnath/venkat-nandini.git
   cd venkat-nandini
   git checkout netlify
   ```

2. **📦 Install Dependencies**
   ```bash
   npm install
   ```

3. **🔐 Configure Environment**
   Create a `.env` file in the root directory:
   ```env
   UPSTASH_REDIS_REST_URL=https://your-database.upstash.io
   UPSTASH_REDIS_REST_TOKEN=your-secret-token
   ```

4. **⚡ Start Development Server**
   ```bash
   npx netlify dev
   ```

5. **🌐 Open in Browser**
   ```
   http://localhost:8888
   ```

---

## 📁 Project Structure

```
venkat-nandini/
├── 🏠 index.html                    # Main wedding invitation page
├── 🎨 style.css                     # Styling and responsive design
├── 📱 script.js                     # Frontend JavaScript
├── ⚡ netlify/
│   └── functions/
│       └── visitor-counter.js       # Serverless visitor tracking
├── 🔧 package.json                  # Dependencies and scripts
├── 🌐 netlify.toml                  # Netlify configuration
├── 🔐 .env                          # Environment variables (local)
└── 📖 README.md                     # This documentation
```

---

## 👥 Visitor Counter Feature

<div align="center">

### 📊 Real-time Analytics

</div>

The visitor counter provides live tracking of website visits:

- **🔄 Real-time Updates**: Count updates instantly on each page load
- **💾 Persistent Storage**: Uses Upstash Redis for data persistence
- **🔒 Secure Backend**: Server-side counting prevents manipulation
- **⚡ Serverless**: Netlify Functions handle the counting logic

### How it Works:

1. **User visits the site** → Frontend makes request to Netlify Function
2. **Function increments counter** → Updates Redis database securely
3. **Returns current count** → Displays live visitor number on page
4. **Data persists** → Count maintained across deployments

---

## 🛡️ Security & Privacy

<table>
<tr>
<td width="50%">

### 🔐 **Security Features**
- Redis credentials never exposed to browser
- Environment variables for sensitive data
- HTTPS encryption for all requests
- Serverless architecture prevents attacks

</td>
<td width="50%">

### 🔒 **Privacy Focused**
- No personal data collection
- Anonymous visitor counting only
- No cookies or tracking scripts
- GDPR compliant approach

</td>
</tr>
</table>

---

## 🚀 Deployment

### Automatic Deployment
This project uses **continuous deployment**:
- Push to `netlify` branch → Automatic build & deploy
- Environment variables configured in Netlify dashboard
- Domain automatically updates with new changes

### Manual Deployment
```bash
# Build and deploy manually
netlify build
netlify deploy --prod
```

---

## 📸 Preview

<div align="center">

### Desktop View
*Beautiful, responsive design optimized for all screen sizes*

### Mobile View  
*Perfect viewing experience on mobile devices*

> 💡 **Tip**: Visit the [live site](https://venkat-nandini.netlify.app/) to see the full experience!

</div>

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **🍴 Fork the repository**
2. **🌿 Create your feature branch**: `git checkout -b feature/amazing-feature`
3. **💾 Commit your changes**: `git commit -m 'Add some amazing feature'`
4. **📤 Push to the branch**: `git push origin feature/amazing-feature`
5. **🔄 Open a Pull Request**

---

## 📞 Support & Contact

<div align="center">

**Questions about the wedding or website?**

[![Website](https://img.shields.io/badge/🌐_Visit_Website-ff69b4?style=for-the-badge)](https://venkat-nandini.netlify.app/)
[![Issues](https://img.shields.io/badge/🐛_Report_Issue-red?style=for-the-badge)](https://github.com/viswabnath/venkat-nandini/issues)
[![Discussions](https://img.shields.io/badge/💬_Discussions-blue?style=for-the-badge)](https://github.com/viswabnath/venkat-nandini/discussions)

</div>

---

## 🙏 Acknowledgments

- 💕 **Venkat & Nandini** - For sharing their special day with us
- 🚀 **Netlify** - For excellent hosting and serverless functions
- 📊 **Upstash** - For reliable Redis cloud database
- 🌟 **Open Source Community** - For inspiration and support

---

## 📜 License

```
This project is created for personal use only.
© 2025 Venkat & Nandini Wedding Invitation
```

---

<div align="center">

**⭐ Star this repo if you found it helpful! ⭐**

**Made with ❤️ for Venkat & Nandini's Special Day**

![Heart](https://img.shields.io/badge/💕-With_Love-ff69b4?style=for-the-badge)

</div>