# Ayesha — Placement-Ready Portfolio v2

This version uses a warm **coffee + cream + pastel lavender** palette chosen to keep the site professional while giving it personality.

## Included
- Professional hijab avatar with transparent background (`avatar.svg`) — no selfie/photo background.
- Download CV button (`resume.pdf`).
- Current project list: eQMS 360, EngiRoot, FinGuard, Project Repository Portal, Superstore Analysis, Classroom Companion.
- Internship experience: Vinayaka IT, EduTantra, IBase7.
- Certifications: Python Programming, Generative AI, Power BI, Cyber Security.
- GitHub link for FinGuard.
- Optional project screenshot system: every project already has a finished abstract preview, so the portfolio never looks empty.
- When you have screenshots, replace the visual with an image without redesigning the card.

## Adding project screenshots later
In `index.html`, each visual has a `data-project` name. You can later add:
`<img class="project-image" src="images/eqms.png" alt="eQMS 360 screenshot">`
inside the matching project visual. The CSS is already prepared for it.

Suggested names:
- `images/eqms.png`
- `images/engiroot.png`
- `images/finguard.png`
- `images/repository.png`
- `images/superstore.png`
- `images/classroom.png`

The existing visual remains the fallback, so an empty screenshot slot will never make the site look incomplete.

## Important
The latest resume information available to me from your previous work was used to create `resume.pdf`. Since the exact original resume file itself is not available in the current file workspace, this PDF is reconstructed from the latest resume details available rather than pretending it is the original file. Replace `resume.pdf` with your exact current resume PDF if needed; the Download CV button will continue to work.
