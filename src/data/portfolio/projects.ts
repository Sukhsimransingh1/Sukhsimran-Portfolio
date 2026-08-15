export const projects = [
  {
    name: "PranRakshak AI",

    type: "Intelligent Clinical Decision Support System",

    description:
      "An AI-powered clinical decision support system focused on early sepsis detection, explainable risk assessment, and AI-assisted medical reasoning.",

    technologies: [
      "FastAPI",
      "React",
      "PostgreSQL",
      "LangGraph",
      "RAG",
      "Groq",
      "SHAP",
      "OCR",
      "Render",
      "Vercel",
    ],

    highlights: [
      "Engineered an early sepsis detection model using the PhysioNet CinC 2019 ICU dataset.",
      "Worked with 40K+ patient records.",
      "Used Sepsis-3 guidelines for clinical risk prediction.",
      "Implemented SHAP-based explainability.",
      "Built a RAG-powered clinical assistant.",
      "Added OCR-based medical report understanding.",
      "Deployed the full-stack system using FastAPI, PostgreSQL, React, Render, and Vercel.",
    ],

    github:
      "https://github.com/Sukhsimransingh1/PRANRAKSHAK_AI",
  },

  {
    name: "DisasterSense AI",

    type: "AI-Powered Disaster Intelligence Platform",

    description:
      "A full-stack disaster intelligence platform for emergency assistance, incident reporting, retrieval-augmented generation, and AI-powered disaster image analysis.",

    technologies: [
      "FastAPI",
      "React",
      "PostgreSQL",
      "FAISS",
      "Sentence Transformers",
      "Google Gemini",
    ],

    highlights: [
      "Built a full-stack disaster intelligence platform.",
      "Implemented emergency assistance and incident reporting.",
      "Built FAISS-based Retrieval-Augmented Generation.",
      "Used Sentence Transformer embeddings.",
      "Integrated Gemini 2.5 Flash.",
      "Integrated Gemini Vision for disaster severity assessment and emergency guidance.",
    ],

    github:
      "https://github.com/Sukhsimransingh1/DisasterSense-AI",
  },

  {
    name: "OmniRAG AI",

    type: "Multi-Document Research Assistant",

    description:
      "A multi-document Retrieval-Augmented Generation system designed for contextual conversations, semantic retrieval, and document ingestion.",

    technologies: [
      "FastAPI",
      "Next.js",
      "LangChain",
      "ChromaDB",
      "HuggingFace Embeddings",
      "Llama 3",
    ],

    highlights: [
      "Built a multi-document RAG system.",
      "Implemented isolated retrieval pipelines.",
      "Used LangChain for orchestration.",
      "Used ChromaDB for vector storage.",
      "Used HuggingFace embeddings for semantic retrieval.",
      "Used Llama 3 for contextual AI conversations.",
    ],

    github:
      "https://github.com/Sukhsimransingh1/OmniRAG-AI",
  },

  {
    name: "Resume Screening AI",

    type: "AI-Powered Resume Evaluation System",

    description:
      "An NLP-based candidate evaluation system that semantically matches resumes with job descriptions and provides candidate scoring and skill-gap insights.",

    technologies: [
      "FastAPI",
      "Sentence Transformers",
      "BERT",
      "Scikit-learn",
      "Streamlit",
    ],

    highlights: [
      "Used semantic similarity for resume and job-description matching.",
      "Implemented section-wise candidate evaluation.",
      "Evaluated skills, education, projects, and experience.",
      "Implemented skill-gap detection.",
      "Generated improvement recommendations.",
      "Built an interactive recruiter-facing interface.",
    ],

    github: "",
  },
] as const;