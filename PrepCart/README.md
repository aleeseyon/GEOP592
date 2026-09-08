# PrepCart

A simple meal-prep planner: browse easy, nutritious meals, drop them into a
Monday–Sunday breakfast/lunch/dinner grid, and get an auto-generated grocery
list you can check off and export.

## Run it

No build step, no dependencies. Just serve the folder and open it:

```
cd PrepCart
python3 -m http.server 8000
# open http://localhost:8000
```

(Opening `index.html` directly with `file://` also mostly works, except the
clipboard "Copy list" button, which browsers restrict on `file://`.)

## How it works

- **`app.js`** holds everything: the 15-recipe catalog (`RECIPES`), the
  planner state, grocery-list aggregation, and rendering. All state
  (weekly plan + which grocery items are checked) is saved to
  `localStorage` under the key `prepcart.v1`, so a reload doesn't lose your
  plan.
- **Grocery aggregation** (`computeGroceryList` in `app.js`): each recipe
  card is one full prep batch (~4 servings). Every ingredient is summed
  across the week keyed by `name|unit`. If you assign the same recipe to
  two slots, its ingredients are added twice — PrepCart does not try to
  infer that "cook once, eat twice" only needs one batch, since that
  depends on how many servings a batch actually makes and how many you eat
  per sitting. Ingredients are grouped by aisle-style category (produce,
  meat/fish, dairy & eggs, grains, pantry) for a shopping-list-shaped
  output.
- **Recipe photos** are CSS-gradient + emoji cards, not hosted images, so
  the app has zero external dependencies and never shows a broken image.
  Swap `recipe.photo`/`recipe.gradient` in `app.js` for licensed food
  photography before shipping this for real.

## Export / "send to store"

Three of the four export actions are fully real:

- **Copy list** — plain text to the clipboard.
- **Download .txt** / **Download .csv** — a file with only the checked
  items.

The **"Send to store"** button is intentionally a labeled demo. There is no
live connection to any grocery delivery service — building that requires a
signed partnership/API agreement with each store (e.g. Instacart Connect,
Kroger's Marketplace API, a regional grocer's own ordering API), which is a
business integration, not something that can be faked client-side. The
button shows exactly what would be handed off (item count + the same list a
real integration would submit) so the UX and data shape are already correct
once a real API is wired in — see the comment above `sendToStore()` in
`app.js` for where that call would go.

## Business model note (as scoped by the request)

The footer states the intended model: grocery stores pay for placement in
the "send to store" partner list (a paid-subscription marketplace connecting
meal planners to stores), rather than PrepCart charging end users. That's a
business/legal arrangement (contracts, payment processing, per-store API
integration) outside the scope of this client-side prototype — flagging it
explicitly rather than pretending it's implemented.

## What's not built (and why)

- **No accounts/backend.** Everything is local to one browser
  (`localStorage`). Multi-device sync, multiple users, or partner-store
  billing would need a real backend + database — a reasonable next step,
  not an MVP requirement.
- **No real photography** — see above.
- **No unit conversion.** If the same ingredient shows up in two different
  units across recipes (e.g. "2 cloves garlic" vs "1 tsp minced garlic"),
  it's listed as two separate line items rather than guessed-converted into
  one. Silently converting units without a reliable source is how grocery
  lists end up wrong.
