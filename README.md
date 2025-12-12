# KPIsMVP 1.0 - Liga de la Rentabilidad: Impacto y KPIs

Dashboard interactivo para medir y analizar la **rentabilidad integrada** en cuatro dimensiones clave: **ambiental, social, financiera y estratégica**.

## ¿Qué es?

Una herramienta de diseño rápido para empresas que necesitan medir su **rentabilidad sostenible**. Permite:
- Simular escenarios de impacto ambiental y social
- Calcular ROI, MRO y otros KPIs financieros
- Visualizar relaciones entre crecimiento económico e impacto ESG
- Tomar decisiones estratégicas basadas en datos integrados

## Características

✓ **4 Categorías de Rentabilidad:**
  - Rentabilidad Ambiental (reducción CO2, eficiencia energética)
  - Rentabilidad Social (empleo, educación, calidad de vida)
  - Rentabilidad Financiera (ROI, MRO, retorno de inversión)
  - Rentabilidad Estratégica (crecimiento, posicionamiento global)

✓ **Calculadora de KPIs en tiempo real** - Ingresa datos y obtén métricas instantáneamente

✓ **Modal de detalle** - Explora fórmula, ejemplo e interpretación de cada KPI

✓ **Interfaz responsiva** - Funciona en desktop, tablet y móvil

✓ **Consejero Estratégico** - Recomendaciones personalizadas por categoría

## Casos de Uso

**Para clientes que necesitan:**
- Presentar ROI incluyendo impacto ambiental y social
- Planificar expansión global evaluando sostenibilidad
- Medir desempeño ESG + financiero en un solo dashboard
- Simular escenarios antes de inversiones grandes

## Ejecutar Localmente

**Requisitos:** Node.js 18+

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Vista previa
npm run preview
```

Luego abre `http://localhost:5173`

## KPIs Incluidos

### Rentabilidad Ambiental
- Reducción de CO2
- Eficiencia Energética
- Residuos Reciclados

### Rentabilidad Social
- Empleos Creados
- Educación Impartida
- Mejora de Calidad de Vida

### Rentabilidad Financiera
- ROI (Retorno sobre Inversión)
- MRO (Retorno sobre Marketing)
- CAC (Costo de Adquisición)
- CLV (Valor de Vida del Cliente)
- Retorno de Inversión de Marketing

### Rentabilidad Estratégica
- Crecimiento Estratégico
- Retorno de Inversión
- Rentabilidad Futura Exponencial

## Tecnologías

- React 19.2.0 (TypeScript)
- Vite (build tool)
- Tailwind CSS (estilos)
- HTML5 + CSS3

## Estructura del Proyecto

```
src/
├─ components/
│  ├─ Dashboard.tsx
│  ├─ KpiCard.tsx
│  ├─ KpiDetailModal.tsx
│  ├─ CalculatorModule.tsx
│  ├─ StrategicAdvisor.tsx
│  ├─ Sidebar.tsx
│  ├─ Footer.tsx
│  └─ icons.tsx
├─ types.ts (definiciones TypeScript)
├─ constants.ts (KPIs y colores)
├─ metadata.json (definiciones de KPIs)
└─ App.tsx
```

## Estado Actual

**Versión:** 1.0.0 (DEMO ESTABLE)
**Licencia:** Demostración - KPIsMVP 1.0
**Última actualización:** 12 de Diciembre, 2025

---

**¿Pregunta?** Esta versión está lista para presentar a clientes. Para cambios o nuevas funcionalidades, consulta `ROADMAP.md`
