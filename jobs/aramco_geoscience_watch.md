# Aramco Geoscience Job Watch

Automated weekly check for Saudi Aramco geoscience/geophysics openings.

## Method and honest limitations

This environment's network egress policy blocks direct page fetches
(`WebFetch`, `curl`, etc.) to `careers.aramco.com` and to third-party job
boards (Rigzone, GulfTalent, iHireUtilities, ...) — confirmed by checking
the agent proxy status directly. The only web access available is
`WebSearch`, which returns search-engine snippets, not live pages. That
means:

- **Nothing here is confirmed as currently open.** A listing appearing
  below means it showed up in a recent targeted search — nothing more.
- **We cannot detect "filled" directly.** As a proxy, if a posting stops
  appearing in search results for 2 consecutive weekly checks, it's moved
  to "Recently dropped" as *presumed* closed/delisted — not confirmed.
- **Only postings on `careers.aramco.com` itself are tracked.** Listings
  seen only on aggregator/mirror sites (Rigzone, GulfTalent, iHire, etc.)
  are excluded — those sites are known to keep stale/expired Aramco
  postings crawlable long after they close, which was creating junk
  entries with unconfirmed req IDs.
- **Always click through and verify on careers.aramco.com yourself**
  before treating anything here as a real, open opportunity.

Real fix for the underlying limitation: this environment's network policy
would need to allow those domains for direct verification to be possible.
See the Claude Code on the web docs for how environment egress policy is
configured.

Candidate priority (updated 2026-08-29): **reservoir characterization and
rock physics** is now the stated main interest, alongside **Exploration
Geoscientist** and **Development Geophysicist** titles. Priority postings
are marked ★; other titles are tracked but lower priority.

## Top ranked matches (direct links)

Ranked by strength of evidence match against the candidate's actual CV
(full evidence matrix in each linked match report, kept locally — not in
this repo). Rank reflects fit given her career evidence, not confirmed
live/open status — verify each posting is still open before applying.

1. **[Exploration Geoscientist](https://careers.aramco.com/expat_uk/job/Exploration-Geoscientist/857034723/)** (857034723) — strongest match overall: prospect generation, maturation, and petroleum-systems risk/resource evaluation are a recurring, literal theme across nearly her whole career. No material gaps identified.
2. **[CO2 Storage Geoscientist](https://careers.aramco.com/expat_uk/job/CO2-Storage-Geoscientist/852796723/)** (852796723) — strongest match for her stated reservoir characterization/rock physics interest, especially after adding her PGNN coursework project (built on a CO2-storage saline-aquifer analogue dataset). Real gaps: no industry-level CCS project track record, no geomechanical/DFN/induced-seismicity experience.
3. **[Seismic Depth Imaging Geophysicist](https://careers.aramco.com/expat_uk/job/Seismic-Depth-Imaging-Geophysicist/855971423/)** (855971423) — strong DIRECT match on the core 15+ year depth-imaging requirement (PSDM, FWI, velocity modeling). Gaps: no evidenced land/transition-zone or OBN work, no programming/software-dev exposure.
4. **[Development Geophysicist](https://careers.aramco.com/expat_uk/job/Development-Geophysicist/850823823/)** (850823823) — strong technical overlap (well-tie, velocity modeling with uncertainty, AVO), but the posting's core bar — 10 years specifically as a reservoir/development geophysicist — isn't evidenced; her career reads as exploration/processing-centric.

Not yet run through a full evidence-matrix match report (found via the
reservoir-characterization search expansion, ranked provisionally by title
fit only):

5. **[Carbon Capture and Storage Specialist](https://careers.aramco.com/expat_uk/job/Carbon-Capture-and-Storage-Specialist/856013423/)** (856013423) — likely similar profile to #2 above.
6. **[3D Geological Modeler](https://careers.aramco.com/expat_us/job/3D-Geological-Modeler/855971723/)** (855971723) — reservoir characterization department, but requires a Geology (not Geophysics) degree and drilling-ops/coring experience she hasn't evidenced.
7. **[Petrophysicist](https://careers.aramco.com/expat_uk/job/Petrophysicist/857285823/)** (857285823) — relevant department (reservoir characterization), but a title/discipline mismatch (she's a geophysicist, not a petrophysicist).

## Active postings (last checked: 2026-08-29)

| Title | Dept/Location | Req ID | URL | Consecutive misses |
|---|---|---|---|---|
| ★ Exploration Geoscientist | Eastern Area Exploration Department (EAED) | 857034723 | https://careers.aramco.com/expat_uk/job/Exploration-Geoscientist/857034723/ | 0 |
| ★ Development Geophysicist | — | 850823823 | https://careers.aramco.com/expat_uk/job/Development-Geophysicist/850823823/ | 0 |
| ★ CO2 Storage Geoscientist | Western Area & Strategic Exploration Dept (WA&SED) | 852796723 | https://careers.aramco.com/expat_uk/job/CO2-Storage-Geoscientist/852796723/ | 0 |
| ★ Carbon Capture and Storage Specialist | — | 856013423 | https://careers.aramco.com/expat_uk/job/Carbon-Capture-and-Storage-Specialist/856013423/ | 0 |
| Petrophysicist | Eastern Unconventional Characterization Division (EUCD) | 857285823 | https://careers.aramco.com/expat_uk/job/Petrophysicist/857285823/ | 0 |
| 3D Geological Modeler | Southern Area Reservoir Characterization Dept | 855971723 | https://careers.aramco.com/expat_us/job/3D-Geological-Modeler/855971723/ | 0 |
| Exploration Geophysicist | Unconventional Exploration Division (UED) | 855939123 | https://careers.aramco.com/expat_us/job/Exploration-Geophysicist/855939123/ | 0 |
| Seismic Depth Imaging Geophysicist | Geophysical Imaging Department | 855971423 | https://careers.aramco.com/expat_uk/job/Seismic-Depth-Imaging-Geophysicist/855971423/ | 0 |
| Development Geologist | Field development | 852296323 | https://careers.aramco.com/expat_uk/job/Development-Geologist/852296323/ | 0 |
| Development Geologist | Southern Area Reservoir Characterization Dept, Central Arabia Division | 852794923 | https://careers.aramco.com/expat_uk/job/Development-Geologist/852794923/ | 0 |
| Field Development Geologist | Manifa/AFK & Satellite Fields | 857076523 | https://careers.aramco.com/expat_uk/job/Field-Development-Geologist/857076523/ | 0 |
| Geophysical Software Specialist | — | 852635123 | https://careers.aramco.com/expat_uk/job/Geophysical-Software-Specialist/852635123/ | 0 |
| Clastic Sedimentologist and Stratigrapher | Clastic reservoir geology | 853339723 | https://careers.aramco.com/expat_uk/job/Clastic-Sedimentologist-and-Stratigrapher/853339723/ | 0 |

## Recently dropped (presumed closed/unlisted — unverified)

_(none yet)_

## Run log

- **2026-08-29** — Initial baseline: 8 postings confirmed as
  `careers.aramco.com` URLs kept as Active. Dropped 2 entries ("Risk &
  Resource Geoscientist", "Reservoir Geophysicist") that only appeared on
  third-party aggregator sites with no confirmed req ID — treated as junk
  per user request, since those sites are known to keep expired Aramco
  postings indexed indefinitely. Confirmed via proxy status check that
  direct page verification is blocked in this environment; watch relies
  on WebSearch snippet visibility only.
- **2026-08-29 (update)** — Added Development Geophysicist (850823823),
  found via targeted search after candidate stated a preference for
  Exploration Geoscientist / Development Geophysicist role types. Both
  titles marked ★ priority for future searches and tailored-CV generation.
- **2026-08-29 (update 2)** — Candidate's main interest updated to
  reservoir characterization and rock physics. Elevated CO2 Storage
  Geoscientist to ★ and added: Carbon Capture and Storage Specialist
  (★, 856013423), Petrophysicist (857285823), 3D Geological Modeler
  (855971723), and a second Development Geologist req (852794923,
  Southern Area Reservoir Characterization Dept) — all found via targeted
  `site:careers.aramco.com` searches on reservoir characterization terms.
