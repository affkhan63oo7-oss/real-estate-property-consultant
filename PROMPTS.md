# Stored Project Prompts & Specifications

This repository contains the stored prompt templates, system instructions, and master specifications for the Real Estate application.

---

## Table of Contents
1. [Prompt 1: Supabase Backend Connection](#prompt-1-supabase-backend-connection)
2. [Prompt 2: GitHub Repository Push & Security Inspection](#prompt-2-github-repository-push--security-inspection)
3. [Prompt 3: Complete Old Website Recreation & Migration](#prompt-3-complete-old-website-recreation--migration)
4. [Prompt 4: Old Website Recreation with Full Project Modification Permission](#prompt-4-old-website-recreation-with-full-project-modification-permission)
5. [Prompt 5: Master Specification — World-Class Luxury Real Estate Website](#prompt-5-master-specification--world-class-luxury-real-estate-website)

---

## Prompt 1: Supabase Backend Connection

```text
CONNECT THIS EXISTING PROJECT TO MY SUPABASE BACKEND

I have the following Supabase credentials:

Project ID:
[PASTE PROJECT ID HERE]

Publishable Key:
[PASTE SUPABASE PUBLISHABLE KEY HERE]

Use these credentials to connect the existing appointment booking form to my Supabase project.

IMPORTANT:
Do NOT redesign or rebuild the website.
Do NOT change the existing layout, styling, branding, animations, sections, or appointment form UI.
Only implement and fix the backend integration.

1. SUPABASE CONNECTION
- Configure the existing project using the Supabase Project URL generated from my Project ID and the provided publishable key.
- Store credentials using the project's environment-variable system.
- Do NOT hard-code sensitive credentials unnecessarily.
- NEVER use or expose a Supabase service-role/secret key in frontend code.

2. APPOINTMENT FORM
Connect the existing appointment form so that when a user submits it:
- Validate the form.
- Send all appointment information to Supabase.
- Insert the record into my existing appointments table.
- Match every form field with the correct existing database column.
- Preserve the exact information entered by the user.

3. DATE OF BIRTH BUG
Fix the current date-of-birth validation problem.
Users must be able to enter legitimate birth dates from years before 2026.
Do NOT use 2026 as the minimum year.
Reject only invalid or future dates where appropriate.

4. SUBMISSION
When the user clicks Book Appointment:
- Show a loading state.
- Prevent duplicate submissions while processing.
- Insert the appointment into Supabase.
- Show the existing success message/UI after successful insertion.
- Reset the form only after successful insertion.
- If insertion fails, keep the entered information and show a clear error message.

5. DATABASE
First inspect my existing Supabase appointments table and its schema.
Do NOT create a duplicate appointments table if one already exists.
Do NOT delete existing data.
Do NOT unnecessarily modify the database schema.

6. ROW LEVEL SECURITY
Check the existing RLS policies.
Make sure the public appointment form can safely INSERT appointment records.
Public users must NOT be able to read other patients' appointments.
Do not disable RLS just to make the application work.

7. ADMIN PANEL
The existing admin panel must receive and display the appointments submitted through the public website.

Check the entire flow:
PUBLIC APPOINTMENT FORM → SUPABASE INSERT → APPOINTMENTS TABLE → ADMIN PANEL

If the admin panel is currently querying the wrong table, wrong columns, or wrong data structure, fix the integration while keeping the existing admin panel design unchanged.

8. TEST EVERYTHING
After implementation:
- Run the website.
- Submit a test appointment.
- Confirm the record is actually created in Supabase.
- Confirm the appointment appears in the admin panel.
- Test a birth date from before 2026.
- Check browser console errors.
- Check Supabase/API errors.
- Fix any problems you discover.

Do not simply write the integration and stop.
Verify that the complete end-to-end appointment system actually works.

FINAL REQUIREMENT:
Keep the existing website exactly as designed.
Only fix/connect the backend functionality required for:
Appointment Form → Supabase → Appointments Table → Admin Panel
```

---

## Prompt 2: GitHub Repository Push & Security Inspection

```text
PUSH MY ENTIRE EXISTING PROJECT TO A GITHUB REPOSITORY

Do NOT redesign, rebuild, modify, or refactor my project.
Use the existing project exactly as it currently is.

I want you to:
1. Identify the root directory of the existing project.
2. Initialize Git if Git is not already initialized.
3. Check the existing Git configuration and preserve any existing repository history if present.
4. Connect the project to the GitHub repository URL I provide below:
[PASTE GITHUB REPOSITORY URL HERE]

Add ALL required project files to Git.
IMPORTANT SECURITY CHECK:
Before committing anything, inspect the project for:
- Supabase service-role keys
- Secret API keys
- Private credentials
- Passwords
- .env files containing secrets
- Authentication tokens
- Other sensitive credentials

NEVER upload secret credentials to GitHub.
If environment variables are required, keep the real secrets local and ensure the appropriate .env files are included in .gitignore.
If .env.example is useful, create/update it with placeholder values only.

Do NOT upload unnecessary generated or local files such as:
- node_modules
- build/cache folders that should not be version controlled
- local IDE configuration
- operating-system temporary files
- secret environment files

Create or update .gitignore appropriately for this project without breaking the application.
Review the files that will be committed before committing.
Create a clear Git commit with a message such as: "Initial project upload"

Add the GitHub repository as the remote origin if it is not already configured.
Push the complete project to the specified GitHub repository.
If the repository already contains files, do NOT blindly overwrite or destroy existing GitHub content. Inspect the remote state first and safely merge/reconcile when necessary.

After pushing, verify that:
- Git push succeeded
- The remote repository is correct
- The important source files are present
- No secrets were committed
- The project structure remains intact

IMPORTANT:
Do not change the website's: Design, Layout, Branding, Animations, Supabase functionality, Admin panel, Appointment system, Existing features.
This task is ONLY for safely publishing the existing project to GitHub.

If authentication is required to push to GitHub, use the normal secure GitHub authentication flow. Never ask me to paste a GitHub password, personal access token, or other secret directly into the project files.

At the end, clearly report:
- Repository used
- Commit created
- Push status
- Any files intentionally excluded for security or Git best practices
- Any issue that prevented the push
```

---

## Prompt 3: Complete Old Website Recreation & Migration

```text
COMPLETE OLD WEBSITE RECREATION + MAXIMUM INFORMATION MIGRATION

OLD WEBSITE:
[PASTE OLD WEBSITE URL HERE]

I want you to thoroughly inspect my OLD WEBSITE and recreate its publicly accessible content, structure, pages, sections, listings, images, information, and functionality inside my CURRENT PROJECT.

IMPORTANT:
For this task, I DO want the current website to be transformed to closely reproduce the OLD WEBSITE.
The goal is to recreate the old website as accurately and completely as technically possible.
Do NOT make a simplified version.
Do NOT only copy the homepage.
Do NOT only copy a few property listings.
I want you to investigate the OLD WEBSITE deeply and gather as much publicly accessible information as possible.

1. FIRST — FULL WEBSITE RESEARCH
2. GATHER AS MUCH INFORMATION AS POSSIBLE
3. COLLECT ALL IMAGES AND MEDIA
4. RECREATE THE WEBSITE STRUCTURE
5. RECREATE VISUAL DESIGN
6. RECREATE FUNCTIONALITY
7. RECREATE ALL DISCOVERED PAGES
8. PROPERTY DATA ORGANIZATION
9. DUPLICATE DETECTION
10. SEARCH EVERYWHERE
11. DO NOT FABRICATE
12. CURRENT PROJECT INSPECTION
13. DO NOT BREAK IMPORTANT BACKEND FEATURES
14. RESPONSIVE RECREATION
15. PERFORMANCE
16. LEGAL/ACCESS LIMITATION
17. MIGRATION REPORT
18. FINAL QUALITY CHECK
```

---

## Prompt 4: Old Website Recreation with Full Permission to Modify

```text
COMPLETE OLD WEBSITE RECREATION + MAXIMUM INFORMATION MIGRATION + FULL PERMISSION TO MODIFY CURRENT PROJECT

OLD WEBSITE:
[PASTE OLD WEBSITE URL HERE]

CURRENT PROJECT:
This is the project you are currently working on.

MAIN OBJECTIVE:
Thoroughly inspect the OLD WEBSITE and recreate it inside the CURRENT PROJECT as completely and accurately as technically possible.
Near-complete recreation of pages, sections, listings, media, specs, amenities, filters, search, galleries, forms, animations, interactions, and responsive design.

FULL PERMISSION TO MODIFY CURRENT PROJECT:
Permission granted to create new pages, routes, sections, components, data structures, assets, filters, animations, utilities, and dependencies as required.

PHASES:
Phase 1: Inspect Current Project First
Phase 2: Full Old Website Inspection
Phase 3: Maximum Information Collection
Phase 4: Maximum Image and Media Collection
Phase 5: Recreate All Discovered Pages
Phase 6: Recreate Missing Sections
Phase 7: Recreate Functionality
Phase 8: Property Data Structure
Phase 9: Duplicate Detection
Phase 10: Search Everywhere
Phase 11: Current Backend and Important Functionality
Phase 12: Database
Phase 13: Content Accuracy
Phase 14: Do Not Bypass Access Restrictions
Phase 15: Responsive Recreation
Phase 16: Performance
Phase 17: Migration Report
Phase 18: Final Comparison and Quality Check

PRIORITY ORDER:
1. OLD WEBSITE CONTENT
2. OLD WEBSITE PAGES
3. OLD WEBSITE LISTINGS
4. OLD WEBSITE STRUCTURE
5. OLD WEBSITE FUNCTIONALITY
6. OLD WEBSITE VISUAL DESIGN
7. OLD WEBSITE RESPONSIVE BEHAVIOR
8. OLD WEBSITE ANIMATIONS AND INTERACTIONS
9. CURRENT PROJECT INFRASTRUCTURE
10. EXISTING CURRENT PROJECT BACKEND FEATURES
```

---

## Prompt 5: Master Specification — World-Class Luxury Real Estate Website

```text
Create a completely NEW, WORLD-CLASS, PREMIUM REAL ESTATE WEBSITE from scratch.

This is a new project. Do not use a generic real-estate template.

The goal is to create a website that feels like a combination of:
- Apple-level interaction quality
- Luxury architecture studio
- Premium real-estate developer
- High-end editorial magazine
- Award-winning creative agency
- Modern property technology platform

The website must feel sophisticated, cinematic, minimal, extremely smooth, fast, and expensive.

40 CORE REQUIREMENTS:
1. Visual Direction (architectural visual language, editorial typography, full-bleed imagery, asymmetric layouts, deep charcoal on white/neutral, minimal UI)
2. Apple-Level Smooth Scrolling (momentum, fluid, natural, responsive, respects prefers-reduced-motion)
3. Cinematic Hero (full-screen, large image/video, line-by-line reveal, "WHERE ARCHITECTURE MEETS LIFE", CTAs)
4. Cinematic Mouse Interaction (subtle pointer reactions, depth)
5. Premium Custom Cursor (desktop only, expands, VIEW/EXPLORE/DRAG states)
6. Magnetic Buttons (subtle magnetic interaction toward cursor)
7. Scroll Storytelling (Hero → Vision → Featured Property → Architecture → Interiors → Amenities → Location → Lifestyle → Properties → Developer → Testimonials → Schedule Visit)
8. World-Class Typography (editorial display typography, carefully tuned letter spacing/line-height)
9. Featured Property (immersive, large image, specs reveal, subtle scale)
10. Property Discovery (horizontal scroll / dragging / touch swipe / filters / cards)
11. Property Detail Experience (digital magazine feel, hero, gallery, specs, floor plans, location, enquiry)
12. Immersive Image Galleries (lightbox, drag/swipe, zoom, counter, thumbnails)
13. Before / After or Progress Slider (construction progress comparison slider)
14. Interactive Floor Plans (select floor/unit, view dimensions, pricing, highlight)
15. Future 3D Architecture (Spline / Three.js ready architecture)
16. Interactive Location (property location, schools, transit, clean map)
17. Amenities Experience (visual storytelling, dynamic image/content switch on select)
18. Animated Statistics (25+ years, 120+ projects, 18k+ homes, viewport trigger)
19. Parallax (layers move at different speeds, subtle)
20. Text Reveals (mask/line reveals)
21. Page Transitions (smooth fade/scale/clip)
22. Property Search (filters: location, buy/rent, type, price, beds, baths, amenities, sort, grid/list)
23. Favorites (save properties, persistent via localStorage / account)
24. Schedule a Visit (step-by-step booking modal/flow)
25. Lead Generation (enquiry forms with clean validation)
26. WhatsApp / Call (subtle floating contact options)
27. Developer Story (editorial company section, vision, awards)
28. Project Portfolio (completed, ongoing, upcoming; residential, commercial, luxury)
29. Testimonials (client quotes, subtle movement)
30. Premium Footer (editorial, large CTA "FIND YOUR NEXT ADDRESS")
31. Responsive Design (desktop, laptop, tablet, mobile)
32. Performance (fast load, lazy loading, WebP, optimized transforms)
33. Accessibility (ARIA, focus states, keyboard nav, reduced-motion)
34. SEO (meta tags, open graph, structured data)
35. Security (sanitized inputs, safe storage)
36. Admin System (dashboard for properties, leads, appointments, analytics)
37. Analytics (property views, enquiries, conversion metrics)
38. Micro-Interactions (hover states, active states, feedback)
39. Motion System (coherent easing curves, 150-250ms fast, 300-500ms medium, 600-1000ms cinematic)
40. Final Quality Bar (no console errors, fully polished, feels expensive)
```
