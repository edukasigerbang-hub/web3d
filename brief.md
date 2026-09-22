AI AGENT BRIEF — CONVALT ENERGY 3D WEBSITE
1. ROLE

You are a Senior Creative Technologist, 3D Web Developer, UI/UX Designer, and Frontend Architect.

Your task is to design and build a production-ready website for Convalt Energy, based strictly on the attached Scope of Work (SOW).

The project consists of:

ONE primary 3D/WebGL landing page
All remaining pages as standard 2D responsive pages
Consistent visual language between the 3D landing page and 2D internal pages.

Do not interpret the project as a fully 3D website.

2. SOURCE OF TRUTH

Use the attached document:

Convalt_Energy_3D_Website_SOW_DigiCollect.pdf

as the primary project specification.

Important source requirements:

3D/WebGL is required only for the landing page.
Internal pages are standard 2D.
The visual benchmark is Mont-Fort.
The current Convalt website is the content/information architecture reference.
The final website must be responsive.
Source code and assets must be handed over through Git.
The website must be production-ready.

3. PRIMARY OBJECTIVE

Create a premium, cinematic, minimalist corporate website for Convalt Energy.

The homepage should feel like an interactive 3D visual story, rather than a traditional corporate website.

The experience should communicate Convalt Energy's business through visual storytelling:

Solar Manufacturing
Power Generation
Data Centers
Recycling

The 3D experience should use motion, camera movement, depth, lighting, and spatial composition rather than relying on large amounts of text.

The landing page specification explicitly calls for a cinematic, scroll-driven 3D experience with camera/parallax movement and guided revelation of value propositions.

4. DESIGN DIRECTION

Use the visual language of the supplied Mont-Fort reference as inspiration.

Do NOT copy the reference website.

Instead, extract the following principles:

cinematic
minimal
sophisticated
restrained
large negative space
strong typography
controlled motion
elegant transitions
immersive 3D
premium corporate aesthetic
subtle UI
strong visual hierarchy

Avoid:

excessive UI
excessive gradients
flashy effects
unnecessary particles
game-like interfaces
clutter
excessive text
generic template appearance.
5. HOMEPAGE — 3D EXPERIENCE

The homepage is the most important component of the project.

Build the homepage as a sequence of connected 3D scenes.

Suggested narrative structure:

INTRO / HERO
      ↓
SOLAR MANUFACTURING
      ↓
POWER GENERATION
      ↓
DATA CENTERS
      ↓
RECYCLING
      ↓
COMPANY / VALUE PROPOSITION
      ↓
CTA

This structure is a proposed implementation concept, not additional mandatory copy from the client.

The exact content must be based on the supplied Convalt content and approved design direction.

6. 3D SCENE REQUIREMENTS

Create lightweight 3D environments that communicate the four major business areas.

Scene 01 — Hero

Purpose:

Introduce Convalt Energy.

Possible visual language:

abstract energy infrastructure
solar geometry
architectural structures
subtle environmental motion
controlled camera movement

Do not over-model the environment.

Scene 02 — Solar Manufacturing

Visually communicate:

solar panels
manufacturing infrastructure
production
clean energy technology

Use optimized geometry and textures.

Scene 03 — Power Generation

Visually communicate:

energy generation
infrastructure
power systems
renewable energy

Use cinematic composition rather than a literal industrial simulation.

Scene 04 — Data Centers

Visually communicate:

data center infrastructure
server architecture
computing
energy-intensive infrastructure

Use lighting and depth to create visual interest.

Scene 05 — Recycling

Visually communicate:

circular economy
material recovery
recycling
sustainability

Keep the visual language consistent with previous scenes.

7. INTERACTION MODEL

The primary interaction mechanism should be scroll-driven storytelling.

Scroll position controls:

camera position
camera rotation
scene transitions
object movement
animation progress
text reveal
visual transitions

Example architecture:

Scroll Position
      ↓
Narrative Timeline
      ↓
Camera
      ↓
Scene Objects
      ↓
Text/UI

Use a proper animation timeline rather than implementing dozens of independent scroll event handlers.

Recommended technology:

GSAP ScrollTrigger
React Three Fiber
Three.js

Alternative technologies may be used if they provide a clear technical advantage.

8. PERFORMANCE REQUIREMENTS

Performance is a first-class requirement.

Optimize for:

desktop
tablet
recent mobile devices
modern Chrome
Safari
Edge
Firefox

The SOW specifically requires support for current and previous major versions of modern evergreen browsers.

Target:

60 FPS on a mid-range laptop where reasonably achievable.

Implement:

optimized GLB/GLTF
compressed textures
limited polygon count
efficient materials
minimal draw calls
lazy loading
scene lifecycle management
object reuse
efficient lighting
minimal post-processing
responsive rendering resolution
mobile-specific optimization

Do not sacrifice performance for unnecessary visual effects.

9. LOW-POWER DEVICE FALLBACK

Implement a graceful fallback for low-power devices.

Possible fallback:

Full WebGL
   ↓
Device Capability Detection
   ↓
If capable:
    Full 3D experience
Else:
    Lightweight animation / static hero

The SOW explicitly allows a static hero image or CSS animation as a fallback for low-power devices.

10. UI

The UI must remain minimal and immersive.

Required:

Logo
Navigation
Primary CTA
Section indicators if useful
Subtle interaction cues
Text overlays

UI must remain:

readable
accessible
responsive
visually integrated with the 3D scene

Do not allow UI to compete with the 3D experience.

11. INTERNAL PAGES — 2D ONLY

Build the remaining website as normal responsive 2D pages.

Required categories from the SOW:

Projects
Team
Media
Press Releases
Resources
Contact
Project Details

No WebGL is required on these pages.

Build reusable components so the internal pages share a common design system.

12. DESIGN SYSTEM

Create a unified design system derived from the 3D homepage.

Define:

Typography
Heading styles
Body styles
Caption
Navigation
CTA
Colors
Primary
Secondary
Background
Surface
Text
Muted
Accent
Components
Header
Footer
Buttons
Cards
Section headers
Project cards
Media cards
Forms
Navigation
Page transitions

The visual theme, typography, color palette, and component style must carry from the 3D landing page into the internal pages.

13. RESPONSIVE DESIGN

Implement three major layouts:

Desktop
Tablet
Mobile

Do not simply scale the desktop scene down.

For mobile:

simplify geometry
reduce rendering resolution
reduce effects
reduce animation complexity
adjust camera composition
simplify navigation
ensure text remains readable
14. SEO

Internal pages must include basic SEO fundamentals:

semantic HTML
page titles
meta descriptions
Open Graph metadata
alt text
proper heading hierarchy
accessible links/buttons

The SOW explicitly requires basic SEO fundamentals including meta tags, semantic HTML and alt text.

15. CONTACT PAGE

Implement a standard responsive contact page including:

contact information
contact form
validation
success/error state

Do not over-engineer the backend unless the provided project requirements require it.

16. ARCHITECTURE

Use a maintainable architecture.

Recommended:

React
React Three Fiber
Three.js
GSAP
TypeScript
Vite or Next.js

Suggested structure:

src/
  components/
  pages/
  layouts/
  scenes/
  3d/
    models/
    materials/
    lights/
    cameras/
  shaders/
  animations/
  hooks/
  utils/
  data/
  styles/

public/
  models/
  textures/
  images/
  fonts/

Keep 3D logic isolated from normal UI logic.

17. 3D ARCHITECTURE

Create reusable scene components.

Example:

<HeroScene />
<SolarScene />
<PowerScene />
<DataCenterScene />
<RecyclingScene />

Use a central narrative controller:

NarrativeController
        ↓
Scene State
        ↓
Camera Timeline
        ↓
Object Animation
        ↓
UI State

Avoid putting the entire 3D experience into one huge component.

18. ASSET MANAGEMENT

All assets must be organized clearly.

Example:

assets/
  3d/
    hero/
    solar/
    power/
    datacenter/
    recycling/

  textures/
  images/
  icons/
  fonts/

Optimize assets before production.

Use GLB/GLTF where appropriate.

19. CODE QUALITY

Code must be:

TypeScript
modular
readable
documented where necessary
reusable
maintainable
free of unnecessary complexity

Avoid:

duplicated components
hard-coded scene logic
giant components
unused dependencies
unnecessary libraries
20. DELIVERABLES

The final project must provide:

1. 3D Landing Page

Live/staging URL + source code.

2. 2D Internal Pages

Live/staging URL + source code.

3. Design Files

Figma or equivalent if used.

4. Asset Library

3D models, textures, images and other source assets.

5. Production Deployment

Production-ready hosted website.

These are explicitly listed as project deliverables in the SOW.

21. README

Create a professional README containing:

Project Overview

Technology Stack

Installation

Development

Production Build

Deployment

Project Structure

3D Architecture

Scene Architecture

Asset Organization

Shader Documentation

Animation System

Performance Optimization

Responsive Strategy

Mobile Fallback

How to Add a New Scene

How to Replace a 3D Asset

How to Modify Narrative Timing

The handoff must be understandable by another developer.

22. IMPORTANT — DO NOT INVENT CLIENT REQUIREMENTS

The attached SOW is the source of truth.

If something is not specified:

Identify the ambiguity.
Make a reasonable implementation proposal.
Clearly mark it as a proposal.
Do not present assumptions as client requirements.

In particular, verify before implementation:

exact sitemap
number of project detail pages
available 3D assets
available brand assets
exact copy
final visual direction
hosting environment
contact form backend
analytics requirements
final content.

The SOW states that Convalt will provide existing copy, project data, logos and brand assets.

23. OUT OF SCOPE

Do NOT automatically implement:

3D WebGL on every internal page
full product configurator
photorealistic 3D asset production beyond landing-page needs
ongoing hosting management
post-launch maintenance

The SOW explicitly excludes these items unless separately agreed.

24. DEVELOPMENT PROCESS

Work in the following order:

Phase 1 — Audit

Analyze:

SOW
existing Convalt website
supplied brand assets
available content
reference visual language
Phase 2 — Information Architecture

Define:

Homepage
Projects
Project Detail
Team
Media
Press
Resources
Contact

Do not assume the exact number of pages until verified.

Phase 3 — Design Direction

Create:

visual concept
color system
typography
3D art direction
interaction concept
responsive strategy
Phase 4 — 3D Prototype

Build a small working prototype demonstrating:

camera movement
scroll interaction
scene transition
UI overlay
performance
Phase 5 — Production Development

Build:

complete 3D landing page
internal 2D pages
responsive behavior
SEO
contact form
fallback
deployment
Phase 6 — Optimization

Test:

desktop
tablet
mobile
Chrome
Safari
Edge
Firefox

Measure:

FPS
load time
asset size
memory
draw calls
responsiveness
Phase 7 — Handoff

Deliver:

Git repository
source code
assets
design files
README
build instructions
deployment instructions.
25. DEFINITION OF DONE

The project is considered complete when:

[ ] 3D landing page works
[ ] Narrative flow works
[ ] Scroll interaction works
[ ] Camera animation works
[ ] Four business themes are visually represented
[ ] Desktop responsive
[ ] Tablet responsive
[ ] Mobile responsive
[ ] Low-power fallback works
[ ] Navigation works
[ ] CTA works
[ ] All required 2D pages work
[ ] Contact form works
[ ] SEO fundamentals implemented
[ ] Assets optimized
[ ] No major console errors
[ ] Production build succeeds
[ ] Website deployed
[ ] Git repository complete
[ ] Assets handed over
[ ] Design files handed over
[ ] README completed
FINAL INSTRUCTION TO THE AI AGENT

Do not start by blindly coding the entire website.

First:

Analyze the SOW.
Audit the existing Convalt website and available assets.
Identify missing information.
Produce the proposed information architecture.
Produce the 3D narrative/scene architecture.
Produce the technical architecture.
Produce the asset requirements.
Identify risks and ambiguities.
Then begin implementation.

Prioritize visual quality, storytelling, performance, maintainability, and production readiness over unnecessary technical complexity.

The goal is not merely to create a website that works.

The goal is to create a premium interactive 3D corporate experience that communicates Convalt Energy's business through visual storytelling while remaining fast, responsive, accessible, and maintainable.