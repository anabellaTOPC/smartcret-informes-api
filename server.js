import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Página principal
app.get("/", (req, res) => {
  res.send(`
    <h2>✅ Smartcret Informes API</h2>
    <p>Endpoints disponibles:</p>
    <ul>
      <li><a href="/api/social-insights">/api/social-insights</a></li>
      <li><a href="/api/seguidores">/api/seguidores</a></li>
    </ul>
  `);
});

// Datos de insights
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

// Datos de crecimiento de seguidores
const followersData = [
  { cuenta: "@smartcret", semana: "2025-08-26", seguidores: 10000, variacion: 0 },
  { cuenta: "@smartcret", semana: "2025-09-02", seguidores: 10250, variacion: 250 },
  { cuenta: "@smartcret", semana: "2025-09-09", seguidores: 10480, variacion: 230 },
  { cuenta: "@smartcret", semana: "2025-09-16", seguidores: 10700, variacion: 220 },
  { cuenta: "@smartcret", semana: "2025-09-23", seguidores: 10980, variacion: 280 },
  { cuenta: "@smartcret", semana: "2025-09-30", seguidores: 11250, variacion: 270 },
  { cuenta: "@smartcret", semana: "2025-10-07", seguidores: 11540, variacion: 290 },
  { cuenta: "@smartcret.mexico", semana: "2025-08-26", seguidores: 5000, variacion: 0 },
  { cuenta: "@smartcret.mexico", semana: "2025-09-02", seguidores: 5140, variacion: 140 },
  { cuenta: "@smartcret.mexico", semana: "2025-09-09", seguidores: 5280, variacion: 140 },
  { cuenta: "@smartcret.mexico", semana: "2025-09-16", seguidores: 5430, variacion: 150 },
  { cuenta: "@smartcret.mexico", semana: "2025-09-23", seguidores: 5570, variacion: 140 },
  { cuenta: "@smartcret.mexico", semana: "2025-09-30", seguidores: 5730, variacion: 160 },
  { cuenta: "@smartcret.mexico", semana: "2025-10-07", seguidores: 5870, variacion: 140 }
];

app.get("/api/seguidores", (req, res) => {
  const { cuenta } = req.query;
  let data = [...followersData];
  if (cuenta) {
    data = data.filter(d => d.cuenta.toLowerCase() === cuenta.toLowerCase());
  }
  res.json(data);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ API Smartcret corriendo en puerto ${PORT}`);
});
