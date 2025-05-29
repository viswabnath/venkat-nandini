
````markdown
# 🎉 Venkat & Nandini Wedding Invitation – Netlify Deployment

This is the **Netlify-hosted version** of the wedding invitation website for **Naga Venkateswara Rao and Nandini**. It includes a **visitor counter** powered by **Upstash Redis** using **Netlify Functions**.

---

## 💡 What’s New in This Branch

- ✅ Deployed to **Netlify**  
- ✅ Serverless function to count page visits  
- ✅ Uses **Upstash Redis** for backend storage  
- ✅ Visitor count shown on the frontend  

---

## 🚀 Technologies Used

- HTML5, CSS3, JavaScript  
- **Netlify Functions** (serverless backend)  
- **Upstash Redis** (cloud key-value store)  
- Hosted on **Netlify**

---

## 🔗 Live Site

> [https://venkat-nandini.netlify.app/](https://venkat-nandini.netlify.app/)  


---

## 🛠️ Running Locally

1. **Clone the repo & switch to this branch:**

   ```bash
   git clone https://github.com/viswabnath/venkat-nandini.git
   cd venkat-nandini
   git checkout netlify
````

2. **Install dependencies (for functions):**

   ```bash
   npm install
   ```

3. **Add a `.env` file in the root:**

   ```env
   UPSTASH_REDIS_REST_URL=https://your-db.upstash.io
   UPSTASH_REDIS_REST_TOKEN=your-secret-token
   ```

4. **Start Netlify dev server:**

   ```bash
   npx netlify dev
   ```

---

## 🧪 Folder Structure

```
netlify/functions/
└── visitor-counter.js    # Netlify Function to count visitors

.env                      # Your Upstash Redis credentials
index.html                # Main webpage
README.md                 # This file (only in netlify branch)
```

---

## 👀 Visitor Counter

The visitor count is updated every time someone opens the site.
It is powered by a simple Redis key in Upstash and incremented server-side using a Netlify Function.

---

## 🛡️ Security

* Your Redis token is never exposed to the browser.
* Only the serverless function accesses it securely via environment variables.

---

## 🔒 License

This project is for personal use only.

```


