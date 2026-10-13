# Om Sikarwar — Personal Portfolio Website 🥋⚽☕✍️

A premium, modern, responsive personal portfolio website engineered specifically for **Om Sikarwar**, harmonizing four distinct disciplines:
- **☕ Java Programmer** (Core OOP, Algorithmic Problem Solving, Architecture, Data Structures)
- **✍️ Personal Story Writer** (Reflective Memoirs, Editorial Essays, Narrative Craft, Empathy)
- **⚽ National-Level Football Player** (High-Stakes Pitch Composure, Tactical Awareness, Team Synergy)
- **🥋 Taekwondo Black Belt & State-Level Competitor** (Martial Discipline, Technical Precision, Indomitable Spirit)

---

## 🌟 Architecture & Key Features

1. **High-End Editorial Meets Developer Aesthetics**:
   - Modern glassmorphism, responsive grid system, and ambient glowing backdrops.
   - Dual theme support: **Stealth Obsidian (Dark Mode)** and **Warm Editorial Paper (Light Mode)** with automatic system preference detection and `localStorage` persistence.
2. **Interactive Quad-Pillar Switcher**:
   - Directly in the hero section, visitors and recruiters can switch between *The Engineer*, *The Storyteller*, *The Athlete*, and *The Black Belt* to view micro-manifestos for each domain.
3. **Interactive Java Code Studio**:
   - Tabbed code viewer displaying clean Java SE code (`DisciplineEngine.java`, `PitchTactics.java`, `StoryNarrative.java`) with syntax highlighting and 1-click clipboard copy.
4. **Editorial Story Reader Modal**:
   - Magazine-style story cards with an interactive modal reader for distraction-free reading of essay excerpts.
5. **Athletic & Martial Arts Pavilions**:
   - Dedicated dossiers for National Football achievements and State-Level Taekwondo Black Belt credentials, featuring the 5 Tenets of Taekwondo (*Ye-Ui, Yom-Chi, In-Nae, Guk-Gi, Baekjul-Boolgool*).
6. **Filterable Projects Grid**:
   - Category filtering across *All Works*, *Java & Software*, *Writing & Narratives*, and *Sports & Analytics*.
7. **Dual-Track Milestone Timeline**:
   - Parallel timeline contrasting Engineering & Academic progression against Athletic & Martial Arts competitive honors.
8. **Recruiter & Engineering Lead Fast Dossier**:
   - High-impact summary demonstrating why hiring a software developer with athletic and martial arts pedigree provides an unmatched advantage.
9. **Zero Build Tooling Required**:
   - Built purely with standard semantic HTML5, modern CSS3 variables, and vanilla ES6+ JavaScript. No `npm install`, Node.js, or compilation steps needed.

---

## 📁 Directory Structure

```
portfolio/
├── index.html            # Core HTML structure, sections, and placeholder annotations
├── css/
│   └── styles.css        # Design tokens, dark/light themes, typography, and responsive layouts
├── js/
│   └── main.js           # Theme switching, pillar tabs, code studio, modal reader, and form validation
└── README.md             # Complete personalization and deployment manual
```

---

## 🚀 How to Run Locally

You can launch and preview the portfolio immediately using any of the following options:

### Option 1: Direct Browser Launch (Simplest)
Double-click `index.html` or drag it into any web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Python Local HTTP Server
Open PowerShell in this directory (`C:\Users\Ayushi sikarwar\.gemini\antigravity\scratch\portfolio`) and run:
```powershell
python -m http.server 8000
```
Then open your browser at:
[http://localhost:8000](http://localhost:8000)

---

## ✏️ How to Personalize Your Placeholders (Checklist)

To ensure strict factual accuracy, all unconfirmed items are wrapped in clearly marked placeholders (e.g. `[Placeholder]`). 
Here is where you can plug in your real records:

### 1. Contact & Social Profiles
Search in `index.html` for:
- `[contact@omsikarwar.dev - Placeholder]` → Replace with your genuine email address.
- `[https://github.com/omsikarwar]` → Link your real GitHub profile.
- `[https://linkedin.com/in/omsikarwar]` → Link your real LinkedIn profile.
- `[https://twitter.com/omsikarwar]` → Link your X / Twitter handle.
- `[https://substack.com/@omsikarwar]` → Link your Substack or Medium blog.

### 2. National Football Records
Search in `index.html` for `National Competition Dossier`:
- Replace `[Enter Tournament / Championship Name...]` with your specific tournament (e.g., National School Games / AIU / Sub-Junior / Junior National, Year, Host City).
- Replace `[Enter Position Placeholder]` with your primary playing position (e.g., Central Midfielder, Winger, Center Back).

### 3. Taekwondo Black Belt & State Records
Search in `index.html` for `State Championship & Dan Record`:
- Replace `[Enter Taekwondo Federation / Academy Name, Dan Rank, Certification Year]` with your Dan/Poom certificate details.
- Replace `[Enter State Championship Tournament Name...]` with your specific State Championship edition, year, and medal/placement.
- Replace `[Enter Category Placeholder]` with your sparring weight category.

### 4. Academic & Engineering Timeline
Search in `index.html` for `timeline-events`:
- Replace `[University / College Name Placeholder]` with your university or college name.
- Replace `[Degree / Major Placeholder]` with your degree (e.g., B.Tech Computer Science).
- Replace `[Year - Present Placeholder]` with your enrollment and graduation years.

### 5. Projects & Code Repositories
Search in `index.html` for `#projects-grid`:
- Replace project titles and summaries with your real GitHub repository links and descriptions.

---

## 🌐 Free Deployment Guide

### Deploying to GitHub Pages (Recommended)
1. Initialize a git repository and push to GitHub:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit of Om Sikarwar Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In GitHub, go to **Settings** > **Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Your website will be live in 1–2 minutes at: `https://<your-username>.github.io/<repo-name>/`.

### Deploying to Netlify / Vercel
- **Netlify**: Log in to [netlify.com](https://www.netlify.com), go to **Sites**, and drag-and-drop the entire `portfolio` folder directly into the upload area.
- **Vercel**: Import the GitHub repository on [vercel.com](https://vercel.com) with zero configuration needed.

---

## 🎨 Color Customization Reference

If you wish to customize any accent colors, adjust the CSS variables in `css/styles.css`:
- `--accent-tech`: Java & Technical Blue/Indigo (`#6366f1`)
- `--accent-writer`: Storytelling Warm Amber (`#f59e0b`)
- `--accent-football`: Football Pitch Emerald (`#10b981`)
- `--accent-martial`: Taekwondo Crimson & Black Belt Accent (`#ef4444`)
