import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import cleartermsImg from "../assets/clearterms.png";
import greenrideImg from "../assets/greenride.png";
import studyhubImg from "../assets/studyhub.png";
import lexiumImg from "../assets/lexium.png";
import ProjectModal, { type Project } from "./ProjectModal";
import { motion } from "framer-motion";
import { useRef } from "react";
import type { Variants, Easing } from "framer-motion";

const projectsData: Project[] = [
    {
        id: 1,
        number: "01",
        title: "ClearTerms AI",
        subtitle: "Serverless Full-Stack Legal-Tech App",
        shortDescription:
            "Built with React, Vite, TypeScript, Tailwind, Vercel serverless functions and Gemini 2.5 Flash, featuring PDF/DOCX/URL import and text pre-processing, delivering AI-driven Terms & Conditions summarization, automated risk detection, intelligent question answering and secure, on-demand serverless execution.",
        fullDescription: `
        ClearTerms-AI is a production application that turns long, opaque Terms & Conditions into information you can act on. The front end is built with React and TypeScript on Vite, structured with React Router and Redux Toolkit for clear state flows and predictable side effects. Styling is handled by Tailwind CSS with lucide-react icons, producing a consistent, accessible UI that stays responsive across screen sizes. Routes are split by page to keep initial loads quick and navigation snappy.\n
        Document intake covers the formats people actually use: PDF, DOCX, plain text, and URLs. PDFs are parsed in-browser with pdf.js (worker-based to keep the main thread responsive). DOCX files are converted to text via mammoth. For URLs, the app fetches the page and strips scripts, styles, and markup to retain readable content. Before any AI call, a normalization pass prepares the text: Unicode fixes, de-hyphenation across line breaks, whitespace/punctuation tidy, removal of list/heading tokens (e.g., 3.1, (A), iv.), trimming of cross-references and administrative blocks, and stitching of line continuations. The result is compact, model-friendly input.\n 
        The AI layer is designed to be fast, consistent, and easy to reason about. All model work runs as serverless functions on Vercel at /api/..., using @google/generative-ai with Gemini 2.5 Flash at temperature 0. Summarization uses a strict prompt to produce short, plain-English bullets that focus on obligations, restrictions, pricing/fees, disclaimers, termination, governing law, privacy/data handling, IP, and AI/model-training clauses. Outputs are validated (JSON parsing enforced) and polished at render time (leading capitalization for readability). If a response is malformed or empty, a deterministic fallback promotes sentences to bullets so users still receive a coherent summary.\n 
        Q&A is grounded via a lightweight retrieval step optimized for interactivity. The document is split into overlapping windows; each window is scored with a fast hash-based embedding combined with lexical overlap to rank relevance without external vector infrastructure. The top windows are assembled into a focused context and sent to Gemini through the serverless endpoint. Answers are concise, tied to the provided material, and clearly indicate when the requested fact isn’t in the document. This keeps latency low, reduces operational complexity, and preserves tight alignment to the source text.\n 
        Risk surfacing is handled by a deterministic regex rules pass over the summary. It flags common contractual patterns—arbitration, class-action waiver, indemnification, limitation of liability, exclusions of consequential damages, auto-renewal, price changes, refunds, termination/suspension, data collection/sharing/retention, third-party processors, cookies/tracking, location data, biometrics, broad licenses, IP ownership, trademark usage, governing law/jurisdiction, age limits, force majeure, and API quotas—and assigns clear low / medium / high indicators. This produces immediate visual signal without generative variability.\n 
        Deployment is centered on Vercel and serverless execution. The UI ships as static assets; AI actions run on demand inside Vercel Functions. There’s no always-on server to maintain—each analyze/ask request spins up ephemeral compute, performs the model call, and returns JSON. The model key is provided as a deployment environment variable and never exposed to the browser. SPA routing is configured so deep links like /ask and /summary reload cleanly. This architecture scales automatically with traffic, keeps costs aligned with usage, and keeps sensitive configuration in the Vercel platform.\n 
        From a codebase perspective, the project favors clarity and maintainability: typed modules for ingestion, normalization, chunking, summarization, retrieval, risk tagging, and export; ESLint/TypeScript guardrails; and predictable Vite builds. Local persistence avoids unnecessary repeat work across sessions, reading-time metrics quantify value, and export utilities produce clean TXT/Markdown handoffs. The result is a modern, resilient stack that pairs a polished React interface with precise serverless AI orchestration—delivering fast summaries, grounded answers, and trustworthy risk signals without the operational weight of a traditional backend.
           `,
        technologies: [
            "React",
            "TypeScript",
            "Gemini 2.5 Flash",
            "Vite",
            "React Router",
            "Redux Toolkit",
            "Tailwind CSS",
            "Vercel Functions",
            "PDF.js ",
            "Mammoth.js",
            "Vercel CLI",
        ],
        image: cleartermsImg,
        liveDemo: "https://clearterms-ai.vercel.app/",
        github: "https://github.com/danielleconeva/ClearTerms-AI",
    },
    {
        id: 2,
        number: "02",
        title: "GreenRide",
        subtitle: "Full-Stack Eco-Driven Ride-Sharing Service",
        shortDescription:
            "Built with React, TypeScript, Vite, styled-components, Redux Toolkit, React Query, Node.js, Express, and MongoDB (Mongoose), featuring secure cookie-based JWT authentication, ride publishing and booking flows, and real-time eco-impact tracking — enabling users to share rides, reduce carbon emissions and promote sustainable travel.",
        fullDescription: `
GreenRide is a production-grade ride-sharing platform that I engineered end to end to demonstrate clear domain modeling, secure session handling, and disciplined front-end and back-end design. The product enables drivers to publish and manage rides, travelers to discover trips and book seats with price transparency and notes, and both roles to see quantified CO₂ reductions. The system consists of a TypeScript React client and an Express/MongoDB API. The two communicate over credentialed CORS using HTTP-only JWT cookies so the browser never handles tokens directly. The frontend is deployed on Vercel for fast global delivery, and the API runs on Fly.io with cookie attributes and CORS tuned for cross-origin, cookie-based sessions in production.\n
The client application is written in React 18 with TypeScript and uses React Router for navigation and guards. Data fetching and cache control are implemented with @tanstack/react-query, which provides in-flight deduplication, background refresh, and targeted invalidation after mutations. Lightweight global UI state for authentication and notifications is managed with Redux Toolkit, keeping server data in React Query and avoiding overlap between client and server sources of truth. Styling is implemented with styled-components and a typed theme for consistent colors, spacing, and typography. Components are structured around responsibilities found in the domain. CityInput provides a dependency-free typeahead for Bulgarian cities with keyboard behavior and controlled focus. PublishForm normalizes dates and times, computes duration across midnight, validates numeric inputs, and serializes amenities. The booking flow separates concerns cleanly: BookingDetails captures passenger count and an optional message to the driver; PriceSummary computes totals deterministically and displays currency consistently; BookingSummary renders route and schedule, formats duration, surfaces driver contact when available, and includes accessible labels for assistive technologies. EcoBadge exposes two O(1) calculations: incremental savings from the current booking and full-capacity potential based on the trip duration. ProfileHeader aggregates authored rides and passenger bookings to present total journeys and CO₂ saved, and it shows role badges derived from user activity. A portal-based confirmation modal, an animated mobile menu, and a global loader bound to React Query’s active network count support a responsive interface without blocking user actions.\n 
The server application is an Express service backed by MongoDB via Mongoose. It exposes stateless REST endpoints for authentication, ride publication and discovery, seat booking, eco-impact computation, and achievement progression. Authentication creates a short-lived JWT that is set as an HTTP-only cookie with SameSite=None and Secure in production; logout clears the cookie. Middleware enforces coarse-grained access control: requests that require a session return 401 when the cookie is missing or invalid, while guest-only routes prevent double login and registration. CORS is configured with explicit allow-lists, credentials enabled, and HTTPS assumed in production to satisfy secure cookies. The data model favors documents with targeted references for the core entities User, Ride, and Booking. Read paths populate only the minimal driver fields needed by the UI, such as username, phone, and vehicle summary, which keeps payloads compact while preserving usability.\n 
Concurrency and data integrity are treated explicitly. Booking validates that the driver cannot book their own ride and that requested seats are available. Seat updates are performed atomically with conditional increments, and any race that fails the update triggers a rollback of the just-created booking and returns a precise, user-facing message. The ride’s passenger list is derived from non-cancelled bookings and stored as a unique set of user IDs. Occupant counts are defined as one driver plus unique passengers. Eco impact is recomputed on each booking creation and cancellation and applied to both the ride and the users involved. The service adjusts user-level eco statistics in both directions when reversing actions and floors them at zero to prevent negative drift. Booking states move from confirmed at creation to cancelled by the owner only, and status changes drive the integrity of seats, passengers, and eco metrics throughout the system.\n 
Error handling is consistent and predictable. Schemas enforce structural constraints, controllers perform business validation, and all failures return a uniform payload of { "error": "message" } with clear HTTP status codes for invalid input, unauthenticated access, forbidden operations, missing resources, and unexpected conditions. On the client, errors surface in unobtrusive notifications and inline messages, while the UI avoids optimistic updates in paths that are prone to contention, such as seat allocation. The request layer always sends credentials: "include" so the cookie is attached automatically, and the client never mirrors authentication state outside Redux’s minimal snapshot.\n
The application is tuned for performance without sacrificing clarity. On the client, component boundaries are small and purpose-built, derived values are computed locally instead of refetched, and CSS animations are light and short. React Query eliminates redundant network calls and provides cache lifetimes that fit user expectations, with targeted invalidation after publish, edit, delete, or booking actions. On the server, search endpoints constrain date windows and apply case-insensitive matches for origin and destination. Derived eco values are constant-time and persisted at write time, avoiding repeated computation on read paths. Selective population and narrow projections keep documents lean across list and detail views.\n 
Accessibility and usability are first-class concerns. Headings, labels, and ARIA attributes are present on summaries and totals. Focus outlines are visible and navigable by keyboard across menus and modals. Contrast meets practical thresholds, and motion is brief to reduce cognitive load. Empty states and confirmations are written for clarity, and the mobile experience mirrors desktop capability rather than falling back to a reduced feature set.\n 
Operational behavior is observable and configurable. The API logs database connection status and controller-level errors without exposing sensitive data. Environment variables control database connectivity, cookie names and secrets, allowed origins, and server port. The frontend is built and served on Vercel, with the API origin injected at build time via VITE_API_URL. The backend on Fly.io issues cookies for the Fly domain, and both sides assume HTTPS to satisfy Secure cookies and avoid mixed-content issues. Public GETs can be cached safely at the CDN edge, while mutations rely on the session cookie and server-side authorization. The contract between client and server is stable: cookie-based auth, a consistent error envelope, and predictable shapes for search, ride, booking, and profile data. Local development runs with Node 18 or newer, a MongoDB Atlas connection, and a Vite dev server configured to send credentials and target the local API. Production uses the same primitives with restricted origins and secure cookie attributes, and token lifetime and rotation are planned at the API level.\n 
GreenRide presents a cohesive system that aligns front-end rigor with back-end correctness. The code demonstrates typed React with disciplined state boundaries, credentialed cross-origin sessions with HTTP-only cookies, atomic seat accounting with precise rollback semantics, constant-time eco impact calculations applied at write time, and a clear accessibility posture. The deployment story is straightforward: the React client is delivered on Vercel, the API is hosted on Fly.io, CORS and cookies are configured for cross-site credentials, and environment settings control the rest. The result is a reliable, secure, and maintainable application that highlights practical engineering depth for recruiters and gives technical interviewers a concrete basis for discussion around state management, API contracts, data integrity, and production operations.`,
        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "React Router",
            "TanStack Query",
            "Redux Toolkit",
            "styled-components",
            "Lucide Icons",
            "React Portals",
            "Node.js",
            "Express",
            "MongoDB Atlas",
            "Mongoose",
            "JWT",
            "bcrypt",
            "Vercel",
            "Fly.io",
        ],
        image: greenrideImg,
        liveDemo: "https://green-ride-flax.vercel.app",
        github: "https://github.com/danielleconeva/GreenRide",
    },
    {
        id: 3,
        number: "03",
        title: "StudyHub",
        subtitle: "Full-Stack Productivity Platform for Students",
        shortDescription:
            "Built with Angular, TypeScript, Firebase (Authentication & Firestore), and RxJS, leveraging signal-based reactive state management, featuring intelligent task tracking, structured study-page creation, a public hub for shared resources, interactive comments, and Pomodoro-style focus timers — empowering students to organize learning, track progress, and maintain focus in a distraction-free environment.",
        fullDescription: `
        StudyHub is a comprehensive productivity web platform built for students and self-learners to organize academic materials, track progress, and maintain focus.The application is developed with Angular v20, fully utilizing standalone components and the Signals API to establish a clean, reactive state-management architecture. Through this approach, data updates propagate seamlessly across the interface without the overhead of traditional state libraries. The app structure embraces lazy-loaded feature modules and route-level code-splitting, ensuring performance and scalability as the project grows.\n On the backend and infrastructure side, StudyHub integrates tightly with the Firebase ecosystem, providing complete end-to-end cloud functionality. Authentication and user sessions are managed with Firebase Authentication, enabling secure email/password sign-in and persistent identity across devices. The Firestore NoSQL database serves as the central data layer for study pages, tasks, subtasks, comments, likes, and user profiles, enabling real-time synchronization between client and server. With Firebase Hosting, the application is deployed through an automated cloud pipeline, resulting in a fully cloud-native architecture with minimal setup and continuous availability.\n The platform follows a modular and service-oriented architecture. Each major feature—Auth, Tasks, Focus Room, and Study Pages—is encapsulated as an independent Angular module with its own routing and components. Shared logic is abstracted into global services for authentication, error handling, and Firestore data management, ensuring separation of concerns and maintainable scalability. Route guards and ownership logic enforce fine-grained access control, while Firestore streams combined with Angular Signals guarantee that user actions (e.g., updating a task, toggling a like, adding a comment) reflect instantly in the interface.\n The user interface is engineered with a modern design philosophy and a fully custom glassmorphism-inspired CSS design system. It features translucent cards, layered gradients, soft shadows, and subtle hover transitions for a polished, high-end aesthetic. The layout is fully responsive, adapting seamlessly from mobile to widescreen displays, and uses modern typography (Google Fonts Inter) alongside vector-based iconography (Font Awesome / inline SVGs) for crisp visual rendering. Animations are implemented with Angular Animations rather than pure CSS, enabling coordinated entrance and interaction effects tied to component lifecycles for a more dynamic yet performant experience.\n Functionally, StudyHub extends far beyond standard CRUD operations. The Task Management system supports hierarchical subtasks, dynamic progress tracking, completion percentages, and visual priority badges—all persisted to Firestore with real-time feedback. The Study Pages feature allows users to create structured academic pages, toggle visibility (private/public), and share them through the Explore Hub, where others can like, comment, and engage in real time. Each interaction is handled optimistically for immediate UI response, ensuring a fluid and responsive user experience even on slower connections.\n A standout element, the Focus Room, provides a productivity-oriented environment featuring Pomodoro timers, ambient sound loops, and session tracking, built entirely with Angular’s reactive tools. It merges front-end logic, audio management, and timing control into a cohesive interactive module that promotes user focus and consistency during study sessions.\n Overall, StudyHub demonstrates strong full-stack engineering capabilities—combining a cutting-edge Angular front end, real-time data architecture through Firebase, and refined UI/UX craftsmanship into a cohesive, production-grade platform. From reactive programming patterns to scalable cloud integration, modular code organization, and custom design-system consistency, the project exemplifies modern web architecture and a commitment to delivering performant, user-centric digital experiences.
`,
        technologies: [
            "Angular 20",
            "TypeScript",
            "RxJS",
            "Firebase Auth",
            "Cloud Firestore",
            "Angular Signals",
            "Firebase Hosting",
            "Angular Fire",
            "Angular Animations",
            "SCSS",
            "Karma & Jasmine",
        ],
        image: studyhubImg,
        liveDemo: "https://studyhub-6b7d9.web.app",
        github: "https://github.com/danielleconeva/studyhub",
    },
    {
        id: 4,
        number: "04",
        title: "Lexium",
        subtitle: "Digital Workspace for Law Firms",
        shortDescription:
            "Lexium is a platform for managing law firms’ internal workflow, built with React, TypeScript, Vite, styled-components, Redux Toolkit, React Router and Firebase (Authentication, Cloud Firestore, Hosting) — providing firm-specific workspaces for cases, hearings and tasks, dashboards for tracking workload and progress, an upcoming hearings schedule, and a public catalogue of anonymised case summaries with granular visibility controls.",
        fullDescription: `
        Lexium is a web-based portal for managing a law firm’s internal workflow — cases, hearings, and tasks — with a small, controlled public-facing layer for sharing anonymised case summaries. The application is built with React and TypeScript on Vite, structured with React Router for routing and Redux Toolkit for predictable state management. Styling is handled by styled-components with lucide-react icons, producing a cohesive, card-based UI with subtle gradients, hover effects, and glassy surfaces that stays usable and readable across screen sizes. The platform is backed by Firebase Authentication, Cloud Firestore, and Firebase Hosting, so authentication, data, and deployment all live inside the Firebase ecosystem.\n
The client is organised around three main concerns: authentication, firm-scoped data, and UI orchestration. Authentication flows (register, login, global auth state) are implemented via a dedicated auth slice and a useAuth hook that wraps Firebase Authentication and exposes methods like register, login, and logout alongside the current user and loading state. Firm accounts are email/password–based, and each successful login yields a firm user whose uid is used as the firm identifier. All subsequent reads and writes to Firestore include this firmId, ensuring that every case and every task is automatically tied to a single firm, and that no firm can see the internal data of another.\n
Domain data is managed through dedicated Redux slices and custom hooks. The cases slice holds the in-memory catalogue of CaseRecord objects — including fields such as firmId, firmName, caseNumber, caseYear, type, court, formation, status, isPublic, isStarred, initiationDate, clientName, opposingParty, partiesInitials, publicDescription, and hearingsChronology. The tasks slice tracks TaskRecord entries with caseId, firmId, title, status, dueDate, createdAt, and optional notes. Custom hooks like useCases and useTasks encapsulate all interaction with these slices: they orchestrate Firestore reads/writes, normalise data coming from the database, and expose high-level operations to components: load all firm cases, fetch a single case, create/update/delete a case, compute the next upcoming hearing, load tasks for a specific case, create and update tasks, and so on. Components never talk to Firestore directly — they simply call methods on these hooks, which in turn dispatch Redux actions and thunks.\n
Routing is split into public and private areas. Public routes include the landing/public home (where login and registration live) and the entire public cases catalogue: /public-cases and /public-cases/:id. Private routes (/dashboard, /cases, /cases/new, /cases/:id, /cases/:id/edit, /case/:id/tasks, /upcoming) are guarded so that only authenticated firms can access them, while logged-in firms are kept away from login/register. A small set of layout-level components handles cross-cutting UI behaviour: GlobalLoader listens to multiple loading flags from the Redux slices and shows a central spinner overlay whenever auth, cases, or tasks are performing network work; a Redux-backed notification system surfaces success and error messages; and a reusable ConfirmModal component handles destructive actions like deleting tasks or cases.
The dashboard consolidates multiple derived metrics from the cases and tasks slices through selector logic and mapping. A set of animated StatBadge components shows open cases, pending tasks, total cases, and overall task completion rate (percentage of tasks with status “Done”). A TaskProgressCard visualises progress via a gradient progress bar and summarises how many tasks are completed vs remaining. RecentCasesCard and RecentTasksCardboth connect back to the global Redux state, rely on helper formatting functions for dates, and render the latest records by sorting arrays from the store. The result is a single page that gives a partner or associate a quick picture of workload and upcoming responsibilities, driven entirely by reactive state derived from Firestore-backed slices.\n
The cases module represents the core workflow of the app. /cases renders a responsive grid of CaseCard components — each one showing case type badges, court, status, next hearing date, and a star icon for marking important cases. Clicking the star triggers a handler passed down from the parent component, which calls useCases().updateCase to toggle the isStarred flag in Firestore and update Redux state, giving instant visual feedback. Create and edit flows are implemented as structured, multi-section forms: CaseIdentificationCard for case number and year; CaseDetailsCard for type, court, formation, and status; PartiesInvolvedCard for client and opposing party; ImportantDatesCard for initiation date and a dynamic list of hearings (each with date and time, with add/remove row logic); and NotesAndDescriptionCard for internal notes and public description. These cards are pure presentational components that receive values and setters as props, while the container page component holds the local React state and coordinates saving via the useCases hook.\n
The case details view pulls data for a single case from Redux (via getFirmCaseById) and organises it into several specialised components. IntroductionCard presents the high-level status: case number/year, status, type, star status, visibility badge (“Public” vs “Private”), and client name. It also hosts management actions mapped to callbacks provided by the container: an edit button (navigates to /cases/:id/edit), an archive/reopen button (toggling the status between active and archived via Firestore/Redux updates), and a delete button that removes the case after confirmation. InformationCard renders core metadata (court, formation, initiation date, notes) with robust date formatting. NextHearingCard derives and validates the next hearing date and presents it in a visually emphasised card, gracefully handling cases with no upcoming hearings. TasksCard surfaces the tasks associated with that case by passing in task data from the tasks slice, sorts tasks by creation time, surfaces status badges and due dates, and links into the dedicated tasks board at /case/:id/tasks.
The tasks module is centred on case-specific task boards. The /case/:id/tasks route fetches all tasks for the given case via the useTasks hook and groups them by status for presentation in three TaskColumn components: “To Do”, “In Progress”, and “Done”. Each column renders TaskCard entries showing the task title, due date, and action buttons for editing and deleting. Editing opens a TaskModal that is reused for both create and edit flows: it holds local component state for title, due date, and status; derives a simple validity flag via useMemo; and uses useTasks().createTask or useTasks().updateTask to persist changes. Upon success, Redux and Firestore are updated and a success notification is dispatched; errors are caught and passed to the notification system. Delete actions trigger ConfirmModal, and on confirmation the deleteTask method from useTasks is called, ensuring the same Redux–Firestore synchronisation and a clean UI refresh.\n
The public area is intentionally read-only and anonymised. /public-cases uses the useCases hook to load only cases where isPublic is true, then renders them as PublicCaseCard components. Each card shows the firm name, case reference, type, court, status, and a computed next hearing date determined by computeNextHearing, which filters and sorts hearingsChronology entries to pick the earliest upcoming date. A top-level SearchBar allows visitors to search by case number, updating local React state and filtering the list of cases without needing extra network requests. /public-cases/:id reuses the same CaseRecord data as internal views but passes it into a dedicated set of public-safe components: GeneralInfoCard for firm name, core metadata, and initiation date; CaseInformationCard for court, formation, client initials (derived via a getInitials helper), and public description; PartiesCard for displaying parties using initials instead of full names; and HearingsCard for rendering a timeline of hearings with clearly formatted dates and times. The same Redux-managed cases data powers both internal and external views; the difference is purely in which fields are shown and how they’re anonymised.\n
Throughout the application, state management and side effects remain deliberate and predictable. Redux Toolkit slices hold canonical state and define reducers and async thunks; custom hooks (useAuth, useCases, useTasks) expose that functionality to components in a cohesive way; selectors and helper functions map raw Firestore data into view-ready structures; and styled-components handle the UI layer with component-scoped styles, animations, and layout primitives. Firebase Authentication secures access, Cloud Firestore provides the single source of truth for firms, cases, hearings, and tasks, and Firebase Hosting serves the built Vite bundle as a single-page application. The result is a structured, maintainable React + Firebase stack that doesn’t just display data, but models a realistic law-firm workflow end-to-end — from registration and dashboards, through case and task management, to upcoming hearings and a controlled, anonymised public catalogue.

`,
        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "React Router",
            "Redux Toolkit",
            "React Redux",
            "styled-components",
            "Firebase Authentication",
            "Cloud Firestore",
            "Firebase Hosting",
            "React Portals",
        ],
        image: lexiumImg,
        liveDemo: "https://lexium-7e457.web.app",
        github: "https://github.com/danielleconeva/Lexium.git",
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const [startIndex, setStartIndex] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);

    const smoothEase: Easing = [0.25, 0.6, 0.3, 1];

    const titleVariants: Variants = {
        hidden: { opacity: 0, y: 80 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2.2,
                ease: smoothEase,
                delay: 0.4,
            },
        },
    };

    const introVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2.4,
                ease: smoothEase,
                delay: 0.8,
            },
        },
    };

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % projectsData.length);
    };

    const handlePrevious = () => {
        setStartIndex(
            (prev) => (prev - 1 + projectsData.length) % projectsData.length
        );
    };

    const getVisibleProjects = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(projectsData[(startIndex + i) % projectsData.length]);
        }
        return visible;
    };

    return (
        <Wrapper id="projects" ref={ref}>
            <motion.div
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                <SectionTitle>Featured</SectionTitle>
                <SectionTitle>Projects</SectionTitle>
            </motion.div>

            <motion.div
                variants={introVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                <IntroText>Showcasing a selection of my recent work.</IntroText>
            </motion.div>

            <ProjectsGrid>
                {projectsData.map((project) => (
                    <ProjectCard key={project.id}>
                        <ProjectImageWrapper>
                            <ProjectImage
                                src={project.image}
                                alt={project.title}
                            />
                        </ProjectImageWrapper>
                        <ProjectContent>
                            <ProjectNumber>{project.number}</ProjectNumber>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <ProjectOneLine>{project.subtitle}</ProjectOneLine>
                            <ProjectDescription>
                                {project.shortDescription}
                            </ProjectDescription>
                            <DetailsButton
                                onClick={() => setSelectedProject(project)}
                            >
                                Details
                            </DetailsButton>
                        </ProjectContent>
                    </ProjectCard>
                ))}
            </ProjectsGrid>

            <CarouselWrapper>
                <NavButton
                    onClick={handlePrevious}
                    aria-label="Previous project"
                >
                    ←
                </NavButton>

                <ProjectsCarouselGrid>
                    {getVisibleProjects().map((project) => (
                        <ProjectCard key={project.id}>
                            <ProjectImageWrapper>
                                <ProjectImage
                                    src={project.image}
                                    alt={project.title}
                                />
                            </ProjectImageWrapper>
                            <ProjectContent>
                                <ProjectNumber>{project.number}</ProjectNumber>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <ProjectOneLine>
                                    {project.subtitle}
                                </ProjectOneLine>
                                <ProjectDescription>
                                    {project.shortDescription}
                                </ProjectDescription>
                                <DetailsButton
                                    onClick={() => setSelectedProject(project)}
                                >
                                    Details
                                </DetailsButton>
                            </ProjectContent>
                        </ProjectCard>
                    ))}
                </ProjectsCarouselGrid>

                <NavButton onClick={handleNext} aria-label="Next project">
                    →
                </NavButton>
            </CarouselWrapper>

            <GitHubButton
                href="https://github.com/danielleconeva"
                target="_blank"
                rel="noopener noreferrer"
            >
                For more
            </GitHubButton>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 4rem;
    padding-bottom: 6rem;
    background: white;
    scroll-margin-top: 80px;

    @media (max-width: 1200px) {
        padding: 3rem 2rem 5rem;
    }

    @media (max-width: 768px) {
        padding: 2.5rem 3rem 4rem;
    }

    @media (min-width: 1600px) {
        padding: 6rem 5rem 8rem;
    }

    @media (min-width: 1900px) {
        padding: 8rem 6rem 10rem;
    }
`;

const SectionTitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.headingMain};
    font-size: 8rem;
    font-weight: 500;
    color: black;
    text-transform: uppercase;
    padding-left: 2rem;

    &:nth-of-type(2) {
        margin-top: -3rem;
        padding-left: 7rem;
    }

    @media (max-width: 1200px) {
        font-size: 6rem;
        &:nth-of-type(2) {
            margin-top: -2rem;
            padding-left: 4rem;
        }
    }

    @media (max-width: 768px) {
        font-size: 4.2rem;
        padding-left: 0;
        text-align: center;
        margin-top: 2rem;

        &:nth-of-type(2) {
            margin-top: -1rem;
            padding-left: 0;
        }
    }

    @media (min-width: 1600px) {
        font-size: 10rem;

        &:nth-of-type(2) {
            margin-top: -4rem;
            padding-left: 9rem;
        }
    }

    @media (min-width: 1900px) {
        font-size: 12rem;

        &:nth-of-type(2) {
            margin-top: -5rem;
            padding-left: 11rem;
        }
    }
`;

const IntroText = styled.p`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.7rem;
    color: black;
    margin: 0 0 5rem 4rem;
    font-weight: 200;

    @media (max-width: 1200px) {
        font-size: 1.4rem;
        margin: 0 0 4rem 2rem;
    }

    @media (max-width: 768px) {
        font-size: 1.1rem;
        margin: 1rem auto 4rem;
        text-align: center;
        max-width: 90%;
    }

    @media (min-width: 1600px) {
        font-size: 2rem;
        margin: 0 0 6rem 5rem;
    }

    @media (min-width: 1900px) {
        font-size: 2.3rem;
        margin: 0 0 7rem 6rem;
    }
`;

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 0 2rem 4rem 3rem;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        margin: 0 1.5rem 3rem 1.5rem;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2.5rem;
        margin: 0 0 3rem 0;
    }

    @media (min-width: 1400px) and (max-width: 1899px) {
        display: none;
    }

    @media (min-width: 1600px) {
        gap: 2.8rem;
        margin: 0 3rem 5rem 4rem;
    }

    @media (min-width: 1900px) {
        gap: 3rem;
        margin: 0 4rem 6rem 5rem;
    }
`;

const CarouselWrapper = styled.div`
    display: none;

    @media (min-width: 1400px) and (max-width: 1899px) {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin: 0 2rem 4rem 3rem;
    }
`;

const ProjectsCarouselGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    flex: 1;
`;

const NavButton = styled.button`
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: black;
    color: white;
    border: none;
    font-size: 1.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background: rgba(0, 0, 0, 0.85);
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.95);
    }
`;

const ProjectCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background: black;
    overflow: hidden;
    height: 960px;
    border-radius: 28px 28px 0 0;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;

    &:hover {
        transform: translateY(-12px);
    }

    @media (max-width: 1200px) {
        height: 780px;
    }

    @media (max-width: 768px) {
        height: auto;
        border-radius: 24px;
    }

    @media (min-width: 1600px) {
        height: 1100px;
    }

    @media (min-width: 1900px) {
        height: 1250px;
    }
`;

const ProjectImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 28px 28px 0 0;
    flex-shrink: 0;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
            180deg,
            transparent 50%,
            rgba(0, 0, 0, 0.5) 100%
        );
        pointer-events: none;
        border-radius: inherit;
    }

    @media (max-width: 768px) {
        height: 240px;
        border-radius: 24px 24px 0 0;
    }

    @media (min-width: 1600px) {
        height: 360px;
    }

    @media (min-width: 1900px) {
        height: 420px;
    }
`;

const ProjectImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);

    ${ProjectCard}:hover & {
        transform: scale(1.1);
    }
`;

const ProjectContent = styled.div`
    padding: 2.3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: black;
    color: white;
    flex: 1;

    @media (max-width: 1200px) {
        padding: 2rem;
    }

    @media (max-width: 768px) {
        padding: 1.5rem;
    }

    @media (min-width: 1600px) {
        padding: 3rem;
    }

    @media (min-width: 1900px) {
        padding: 3.5rem;
    }
`;

const ProjectNumber = styled.span`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.3rem;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
`;

const ProjectTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.headingMain};
    font-size: 2.2rem;
    font-weight: 500;
    color: white;
    margin: 0;
    line-height: 1.1;
    letter-spacing: 0.1rem;

    @media (max-width: 1200px) {
        font-size: 1.9rem;
    }

    @media (max-width: 768px) {
        font-size: 1.7rem;
    }

    @media (min-width: 1600px) {
        font-size: 2.6rem;
    }

    @media (min-width: 1900px) {
        font-size: 3rem;
    }
`;

const ProjectOneLine = styled.p`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.1rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.6);
    margin: 0.2rem 0 0.5rem 0;
    text-transform: uppercase;
    letter-spacing: 0.08rem;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

const ProjectDescription = styled.p`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.1rem;
    font-weight: 200;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.7;
    margin: 0.5rem 0 0 0;
    flex: 1;
    min-height: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 12;
    -webkit-box-orient: vertical;

    @media (max-width: 1200px) {
        font-size: 1rem;
        -webkit-line-clamp: 8;
    }

    @media (max-width: 768px) {
        font-size: 0.95rem;
        line-height: 1.6;
        -webkit-line-clamp: 7;
    }

    @media (min-width: 1600px) and (max-width: 1899px) {
        font-size: 1.3rem;
        line-height: 1.85;
    }

    @media (min-width: 1900px) {
        font-size: 1.5rem;
        line-height: 1.9;
    }
`;

const DetailsButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    color: white;
    background: transparent;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    margin-top: auto;
    flex-shrink: 0;

    &::after {
        content: "→";
        font-size: 1.2rem;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover {
        border-top-color: rgba(255, 255, 255, 0.4);
        gap: 1rem;

        &::after {
            transform: translateX(6px);
        }
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        letter-spacing: 0.1rem;
        padding-top: 0.8rem;
    }
`;

const GitHubButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem 3rem;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.4rem;
    text-transform: uppercase;
    color: #000;
    background: transparent;
    border: 0.9px solid rgba(12, 12, 12, 0.4);
    border-left: none;
    border-right: none;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    margin: 2rem auto 0;
    display: flex;
    width: fit-content;

    &:hover {
        background: rgba(160, 160, 159, 0.09);
        border-color: rgba(0, 0, 0, 0.4);
        gap: 1.2rem;
    }

    @media (max-width: 768px) {
        padding: 1rem 2rem;
        font-size: 0.75rem;
        letter-spacing: 0.25rem;
    }

    @media (min-width: 1600px) {
        padding: 2rem 3.5rem;
        font-size: 1rem;
        letter-spacing: 0.45rem;
    }

    @media (min-width: 1900px) {
        padding: 2.4rem 4rem;
        font-size: 1.1rem;
        letter-spacing: 0.5rem;
    }
`;
