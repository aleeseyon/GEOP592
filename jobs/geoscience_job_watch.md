# Geoscience Job Watch (multi-company)

Was Aramco-only for two weeks (2026-08-29 to 2026-09-12). That produced
**zero forward progress**: the same ~13 Aramco reqs sat unchanged in
search results the whole time, and when the candidate independently
checked, all 4 of the top-ranked ones (CO2 Storage Geoscientist, Seismic
Depth Imaging Geophysicist, Development Geophysicist, and the Exploration
Geoscientist replacement req) turned out to already be filled/withdrawn —
despite still appearing live in fresh WebSearch results run the same day.
Broadened to multiple employers on 2026-09-13 at the candidate's request.

## Method and hard limitations (read before trusting anything below)

This environment's network egress policy blocks direct page fetches
(`WebFetch`, `curl`) to every employer careers site and every job
aggregator — confirmed via the agent proxy status check. The only web
access here is `WebSearch`, which returns search-engine snippets.

**Empirically demonstrated, not just theoretical: WebSearch snippets for
these career pages go stale badly.** On 2026-09-13 every one of the 4
top-ranked Aramco postings still appeared live in a fresh, direct
WebSearch query — and every one had actually already closed. This is not
an edge case; treat **everything in this file as an unverified lead, never
as a confirmed-open job**, until independently clicked through. Given
that, this file stopped trying to rank "top matches" with false
confidence — it lists candidate leads, and match-report depth is spent
only on ones the candidate confirms are worth the effort.

## Candidate priorities

- Reservoir characterization and rock physics (main stated interest)
- Exploration Geoscientist / Development Geophysicist titles
- Aramco still gets a look given her PhD is at KFUPM, Saudi Arabia — but
  is no longer the only employer tracked

## Companies in scope

Saudi Aramco, SLB, Halliburton, Baker Hughes, TGS, Viridien (formerly CGG),
Shearwater GeoServices, Fugro, Wood, TechnipFMC — plus CCS/geothermal
employers as they surface. Only counting **senior-level** postings (her
profile is 17+ years) — early-career/graduate programme listings are
noted but not tracked as real leads.

## Candidate leads (updated 2026-09-13, unverified — click through before investing more time)

| Company | Title | Fit note | Link |
|---|---|---|---|
| **TGS** | **Staff Geophysicist (R718)** | **Best match found so far** — full CV + cover letter + match report built. Mentoring/QC/imaging-leadership pattern from her CV lines up directly with the posting's responsibilities. Houston-based; relocation/remote status unconfirmed. | https://tgs.wd1.myworkdayjobs.com/en-US/TGS_External/job/Houston-Operational-Headquarters---77041/Staff-Geophysicist_R718 |
| TGS | Sr Advising Geophysicist II (R674) | Not yet fully evaluated — plausible senior-level fit, same Houston HQ | https://tgs.wd1.myworkdayjobs.com/TGS_External/job/Houston-Operational-Headquarters---77041/Sr-Advising-Geophysicist-II_R674 |
| TGS | Geophysicist – Processing & Imaging (R714) | Not yet fully evaluated — processing/imaging core matches her background, title suggests possibly less senior than Staff | https://tgs.wd1.myworkdayjobs.com/TGS_External/job/Houston-Operational-Headquarters---77041/Geophysicist---Processing---Imaging_R714 |
| TGS | Principal Research Geophysicist | Exciting on paper (imaging + data science, echoes her PGNN project) but requires strong C/C++/Fortran and GPU/parallel-computing programming — not evidenced on her CV. Weaker fit than it looks; don't over-invest without addressing that gap first. | (req ID not isolated yet) |
| Viridien (CGG) | Research Geophysicist (JR101276) / Imaging Geophysicist (JR100313, JR100639, JR101112) | Plausible fit — subsurface imaging R&D overlaps her depth-imaging and now PGNN/ML research background; seniority per req needs checking, several similarly-named reqs exist at different levels | https://cgg.wd103.myworkdayjobs.com/en-US/viridiencareers/job/Research-Geophysicist_JR101276-2 |
| Baker Hughes | Consulting (reservoir-driven solutions, field development/reserves) | Vague listing, not a specific req yet — needs a targeted follow-up search | https://careers.bakerhughes.com/ (general) |
| Halliburton | Reservoir Engineering & Geoscience Consultant, Unified Ensemble Modeling (UEM) | Only wants 5-10 yrs — likely under-leveled for her 17+ yrs experience; reservoir characterization overlap is real | https://careers.halliburton.com/job/kuala-lumpur/reservoir-engineering-and-geoscience-consultant/543/99162381168 |

Noted but not tracked (early-career/graduate level, wrong seniority):
Halliburton Geoscientist II / Assoc II / Solutions Geoscientist I; SLB
Early Careers Geophysicist; Viridien Graduate/Intern Imaging Geophysicist
roles (several).

## Aramco (now confirmed dead — kept for the lesson, not as leads)

| Title | Req ID | Status | Verified |
|---|---|---|---|
| Exploration Geoscientist | 857034723 | CONFIRMED filled | Candidate click-through, 2026-08-29 |
| Exploration Geoscientist (replacement) | 855962823 | CONFIRMED closed | Candidate check, 2026-09-13 |
| CO2 Storage Geoscientist | 852796723 | CONFIRMED closed | Candidate check, 2026-09-13 |
| Seismic Depth Imaging Geophysicist | 855971423 | CONFIRMED closed | Candidate check, 2026-09-13 |
| Development Geophysicist | 850823823 | CONFIRMED closed | Candidate check, 2026-09-13 |

Other previously-tracked Aramco reqs (Carbon Capture and Storage
Specialist, Petrophysicist, 3D Geological Modeler, Development Geologist
x2, Field Development Geologist, Geophysical Software Specialist, Clastic
Sedimentologist) were never independently verified either way — treat as
unknown, not as leads, until re-checked.

## Run log

- **2026-08-29 → 2026-09-12** — Aramco-only daily watch ran successfully
  every day (verified: routine fired and succeeded 14/14 days) but found
  zero changes in search results the entire time. In hindsight this
  reflected genuinely static search snippets, not necessarily a static
  job market — see below.
- **2026-09-13** — Candidate independently verified that all 4 top-ranked
  Aramco postings were actually already closed, despite appearing live in
  a same-day WebSearch re-check. This proves the search-snippet signal is
  not just occasionally stale but unreliable enough that "still appears
  in search" carries near-zero confidence for these career sites. Dropped
  the "Top ranked matches with confidence" framing entirely. Broadened
  scope to SLB, Halliburton, Baker Hughes, TGS, Viridien, Shearwater,
  Fugro, Wood, TechnipFMC per candidate's explicit request. Initial pass
  surfaced TGS Depth Imaging Manager and Viridien Research/Imaging
  Geophysicist as the two most promising senior-level leads pending
  candidate verification and a full match report.
- **2026-09-13 (update)** — Got direct TGS req links (site had been
  underindexed in the first pass). Built a full match report + tailored
  CV + cover letter for **TGS Staff Geophysicist (R718)** — currently the
  strongest evidenced match across all companies tracked. Added Sr
  Advising Geophysicist II (R674) and Geophysicist – Processing & Imaging
  (R714) as further TGS leads not yet evaluated. Flagged TGS Principal
  Research Geophysicist as a weaker fit than its title suggests — it
  wants C/C++/Fortran and GPU programming depth she hasn't evidenced.
