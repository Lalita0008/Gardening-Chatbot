# 🌱 Gardening AI Chatbot 

---

## 📌 Project Overview

This project is an **AI-powered Gardening Chatbot** that helps users grow fruits and vegetables 🌿🍅🍎.

It uses **Retrieval-Augmented Generation (RAG)** to provide accurate answers using a PDF-based knowledge system.

---

## 🎯 Objectives

- 🌱 Provide beginner-friendly gardening guidance  
- 📚 Use real-world PDF knowledge  
- 🤖 Build an AI chatbot using modern tools  
- 🔍 Implement semantic search  
- ⚡ Deliver fast and accurate responses  

---

## 🚀 Features

- 🚀 Deliver fast and accurate responses  
- 💬 Ask questions about fruits & vegetables  
- 📄 PDF-based knowledge system  
- 🤖 Context-aware AI responses  
- 🔍 Semantic similarity search  
- ⚡ Fast retrieval using Pinecone  
- 🌐 Simple Flask-based UI  
- 🎨 Clean frontend using HTML, CSS, JS  

---

## 🧠 Tech Stack

### 🔹 Backend
- Python  
- LangChain  
- OpenAI API  
- Pinecone (Vector Database)  
- HuggingFace Embeddings  

### 🔹 Frontend
- Flask  
- HTML  
- CSS  
- JavaScript  

---

## ⚙️ System Architecture

```
User Query
   ↓
Flask Frontend
   ↓
LangChain Pipeline
   ↓
Embedding Model
   ↓
Pinecone Vector Search
   ↓
Relevant Context Retrieved
   ↓
OpenAI LLM
   ↓
Final Response
```

---

## 📂 Project Structure

```
project/
│── data/
│   ├── FruitGarden.pdf
│   └── Vegitable.pdf
│
│── static/
│   ├── style.css
│   └── script.js
│
│── templates/
│   └── index.html
│
│── app.py
│── function.py
│── prompt.py
│── store_index.py
│── requirements.txt
│── .env
│── .gitignore
```

---

## 🔄 Workflow

### 1️⃣ Data Ingestion
Load PDFs using LangChain  

### 2️⃣ Text Processing
Split text into smaller chunks  

### 3️⃣ Embeddings
sentence-transformers/all-MiniLM-L6-v2  

### 4️⃣ Vector Storage
Store embeddings in Pinecone  

### 5️⃣ Query Handling
Convert query → embedding → similarity search  

### 6️⃣ Response Generation
LLM generates final answer  

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```
git clone https://github.com/Lalita0008/Gardening-chatbot.git
cd gardening-chatbot
```

### 2️⃣ Create Virtual Environment
```
python -m venv venv
venv\Scripts\activate
```

### 3️⃣ Install Dependencies
```
pip install -r requirements.txt
```




## ▶️ Run the Project

```
python app.py
```



---

## 💬 Example Queries

- How to grow tomatoes?  
- Best soil for vegetables?  
- How much sunlight is needed?  
- How to grow fruits at home?  

---



## 🚀 Future Improvements

- 🎤 Voice chatbot  
- 📸 Plant disease detection  
- 🌍 Multi-language support  
- 📱 Better UI  

---

## 👩‍💻 Author

**Lalita jhapate**

---

"From data to decisions — using AI to guide real-world gardening practices."
