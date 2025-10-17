import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const socialInsights = [
  {
    fecha: "2025-10-17",
    red_social: "Instagram",
    cuenta: "@smartcret",
    tipo_contenido: "Reel",
    alcance: 16000,
    impresiones: 17400,
    interacciones: 600,
    likes: 510,
    comentarios: 48,
    compartidos: 18,
    engagement_rate: 3.9,
    insight: "Los Reels con demostraciones prácticas generan un 25% más de alcance."
  },
  {
    fecha: "2025-10-16",
    red_social: "Facebook",
    cuenta: "Smartcret España",
    tipo_contenido: "Post",
    alcance: 8500,
    impresiones: 9400,
    interacciones: 320,
    likes: 270,
    comentarios: 24,
    compartidos: 9,
    engagement_rate: 3.4,
    insight: "Las publicaciones con testimonios de clientes impulsan la conversación."
  }
];

app.get("/api/social-insights", (req, res) => {
  res.json(socialInsights);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ API Smartcret corriendo en puerto ${PORT}`));
