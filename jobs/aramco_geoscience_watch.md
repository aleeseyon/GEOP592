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

Candidate has flagged a role-type preference: **Exploration Geoscientist**
and **Development Geophysicist** titles are the priority match categories
going forward (marked ★ below); other titles are tracked but lower
priority.

## Active postings (last checked: 2026-08-29)

| Title | Dept/Location | Req ID | URL | Consecutive misses |
|---|---|---|---|---|
| ★ Exploration Geoscientist | Eastern Area Exploration Department (EAED) | 857034723 | https://careers.aramco.com/expat_uk/job/Exploration-Geoscientist/857034723/ | 0 |
| ★ Development Geophysicist | — | 850823823 | https://careers.aramco.com/expat_uk/job/Development-Geophysicist/850823823/ | 0 |
| Exploration Geophysicist | Unconventional Exploration Division (UED) | 855939123 | https://careers.aramco.com/expat_us/job/Exploration-Geophysicist/855939123/ | 0 |
| Seismic Depth Imaging Geophysicist | Geophysical Imaging Department | 855971423 | https://careers.aramco.com/expat_uk/job/Seismic-Depth-Imaging-Geophysicist/855971423/ | 0 |
| Development Geologist | Field development | 852296323 | https://careers.aramco.com/expat_uk/job/Development-Geologist/852296323/ | 0 |
| Field Development Geologist | Manifa/AFK & Satellite Fields | 857076523 | https://careers.aramco.com/expat_uk/job/Field-Development-Geologist/857076523/ | 0 |
| Geophysical Software Specialist | — | 852635123 | https://careers.aramco.com/expat_uk/job/Geophysical-Software-Specialist/852635123/ | 0 |
| CO2 Storage Geoscientist | CCS Projects | 852796723 | https://careers.aramco.com/expat_uk/job/CO2-Storage-Geoscientist/852796723/ | 0 |
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
