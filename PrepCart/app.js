/* PrepCart — meal prep planner + grocery list builder
 * All state lives client-side in localStorage. No backend/API keys required for this MVP.
 * See README.md for where a real grocery-delivery API (Instacart Connect, Kroger API, etc.)
 * would plug into the "Send to store" step.
 */

// ---------------------------------------------------------------------------
// Recipe data
// Each recipe represents one prep batch (~4 servings). Ingredient quantities
// are for that whole batch. If you assign the same recipe to more than one
// slot in the week, PrepCart adds another full batch of ingredients — it does
// not try to guess leftovers/serving splits.
// ---------------------------------------------------------------------------

const CATEGORY_LABELS = {
  produce: "Produce",
  protein: "Meat, Poultry & Fish",
  dairy: "Dairy & Eggs",
  grains: "Grains & Bread",
  pantry: "Pantry & Canned Goods",
};

const CATEGORY_ORDER = ["produce", "protein", "dairy", "grains", "pantry"];

// emoji + gradient stand in for photography so the app never depends on an
// external image host being reachable. Swap `photo` for a real licensed photo
// URL per recipe when this goes to production.
const RECIPES = [
  // ---- Breakfast ----
  {
    id: "b1", meal: "breakfast", name: "Overnight Oats with Berries",
    photo: "🫐", gradient: "linear-gradient(135deg,#6b7cff,#8fd3f4)",
    calories: 350, prepMin: 10, tags: ["vegetarian", "no-cook"],
    ingredients: [
      { name: "Rolled oats", qty: 2, unit: "cup", cat: "grains" },
      { name: "Milk (or plant milk)", qty: 2, unit: "cup", cat: "dairy" },
      { name: "Chia seeds", qty: 4, unit: "tbsp", cat: "pantry" },
      { name: "Honey", qty: 4, unit: "tbsp", cat: "pantry" },
      { name: "Mixed berries", qty: 2, unit: "cup", cat: "produce" },
      { name: "Vanilla extract", qty: 1, unit: "tsp", cat: "pantry" },
    ],
  },
  {
    id: "b2", meal: "breakfast", name: "Veggie Egg Muffin Cups",
    photo: "🍳", gradient: "linear-gradient(135deg,#f7b733,#fc4a1a)",
    calories: 220, prepMin: 25, tags: ["high-protein", "low-carb"],
    ingredients: [
      { name: "Eggs", qty: 12, unit: "egg", cat: "dairy" },
      { name: "Bell pepper", qty: 1, unit: "whole", cat: "produce" },
      { name: "Spinach", qty: 2, unit: "cup", cat: "produce" },
      { name: "Onion", qty: 1, unit: "whole", cat: "produce" },
      { name: "Shredded cheese", qty: 1, unit: "cup", cat: "dairy" },
      { name: "Salt", qty: 1, unit: "tsp", cat: "pantry" },
      { name: "Black pepper", qty: 0.5, unit: "tsp", cat: "pantry" },
    ],
  },
  {
    id: "b3", meal: "breakfast", name: "Greek Yogurt Parfait",
    photo: "🥣", gradient: "linear-gradient(135deg,#f6d365,#fda085)",
    calories: 300, prepMin: 5, tags: ["vegetarian", "no-cook", "high-protein"],
    ingredients: [
      { name: "Greek yogurt", qty: 4, unit: "cup", cat: "dairy" },
      { name: "Granola", qty: 2, unit: "cup", cat: "grains" },
      { name: "Mixed berries", qty: 2, unit: "cup", cat: "produce" },
      { name: "Honey", qty: 4, unit: "tbsp", cat: "pantry" },
    ],
  },
  {
    id: "b4", meal: "breakfast", name: "Chia Pudding with Mango",
    photo: "🥭", gradient: "linear-gradient(135deg,#f9d423,#ff4e50)",
    calories: 280, prepMin: 10, tags: ["vegan", "no-cook", "gluten-free"],
    ingredients: [
      { name: "Chia seeds", qty: 8, unit: "tbsp", cat: "pantry" },
      { name: "Coconut milk", qty: 3, unit: "cup", cat: "pantry" },
      { name: "Mango, diced", qty: 2, unit: "cup", cat: "produce" },
      { name: "Maple syrup", qty: 4, unit: "tbsp", cat: "pantry" },
    ],
  },
  {
    id: "b5", meal: "breakfast", name: "Breakfast Burrito Bowls",
    photo: "🌯", gradient: "linear-gradient(135deg,#56ab2f,#a8e063)",
    calories: 420, prepMin: 20, tags: ["high-protein"],
    ingredients: [
      { name: "Eggs", qty: 8, unit: "egg", cat: "dairy" },
      { name: "Black beans", qty: 2, unit: "cup", cat: "pantry" },
      { name: "Brown rice, cooked", qty: 2, unit: "cup", cat: "grains" },
      { name: "Salsa", qty: 1, unit: "cup", cat: "pantry" },
      { name: "Avocado", qty: 2, unit: "whole", cat: "produce" },
      { name: "Cheddar cheese, shredded", qty: 1, unit: "cup", cat: "dairy" },
    ],
  },

  // ---- Lunch ----
  {
    id: "l1", meal: "lunch", name: "Chicken & Quinoa Power Bowl",
    photo: "🍗", gradient: "linear-gradient(135deg,#11998e,#38ef7d)",
    calories: 480, prepMin: 30, tags: ["high-protein", "gluten-free"],
    ingredients: [
      { name: "Chicken breast", qty: 1.5, unit: "lb", cat: "protein" },
      { name: "Quinoa, cooked", qty: 2, unit: "cup", cat: "grains" },
      { name: "Broccoli", qty: 2, unit: "cup", cat: "produce" },
      { name: "Cherry tomatoes", qty: 1, unit: "cup", cat: "produce" },
      { name: "Olive oil", qty: 2, unit: "tbsp", cat: "pantry" },
      { name: "Lemon", qty: 1, unit: "whole", cat: "produce" },
    ],
  },
  {
    id: "l2", meal: "lunch", name: "Mediterranean Chickpea Salad",
    photo: "🥗", gradient: "linear-gradient(135deg,#a8e063,#56ab2f)",
    calories: 390, prepMin: 15, tags: ["vegetarian", "no-cook"],
    ingredients: [
      { name: "Chickpeas", qty: 3, unit: "cup", cat: "pantry" },
      { name: "Cucumber", qty: 1, unit: "whole", cat: "produce" },
      { name: "Cherry tomatoes", qty: 2, unit: "cup", cat: "produce" },
      { name: "Feta cheese", qty: 1, unit: "cup", cat: "dairy" },
      { name: "Red onion", qty: 1, unit: "whole", cat: "produce" },
      { name: "Olive oil", qty: 3, unit: "tbsp", cat: "pantry" },
      { name: "Lemon", qty: 1, unit: "whole", cat: "produce" },
    ],
  },
  {
    id: "l3", meal: "lunch", name: "Turkey & Veggie Wraps",
    photo: "🌮", gradient: "linear-gradient(135deg,#f83600,#f9d423)",
    calories: 410, prepMin: 20, tags: ["high-protein"],
    ingredients: [
      { name: "Ground turkey", qty: 1.5, unit: "lb", cat: "protein" },
      { name: "Whole wheat tortillas", qty: 4, unit: "whole", cat: "grains" },
      { name: "Spinach", qty: 2, unit: "cup", cat: "produce" },
      { name: "Shredded carrot", qty: 1, unit: "cup", cat: "produce" },
      { name: "Hummus", qty: 1, unit: "cup", cat: "pantry" },
    ],
  },
  {
    id: "l4", meal: "lunch", name: "Asian Sesame Noodle Bowl",
    photo: "🍜", gradient: "linear-gradient(135deg,#ff9966,#ff5e62)",
    calories: 440, prepMin: 25, tags: ["vegetarian"],
    ingredients: [
      { name: "Soba noodles", qty: 8, unit: "oz", cat: "grains" },
      { name: "Edamame", qty: 2, unit: "cup", cat: "protein" },
      { name: "Carrot", qty: 2, unit: "whole", cat: "produce" },
      { name: "Cucumber", qty: 1, unit: "whole", cat: "produce" },
      { name: "Sesame oil", qty: 3, unit: "tbsp", cat: "pantry" },
      { name: "Soy sauce", qty: 4, unit: "tbsp", cat: "pantry" },
      { name: "Green onion", qty: 1, unit: "bunch", cat: "produce" },
    ],
  },
  {
    id: "l5", meal: "lunch", name: "Black Bean & Rice Bowl",
    photo: "🫘", gradient: "linear-gradient(135deg,#414d0b,#727a17)",
    calories: 460, prepMin: 20, tags: ["vegan", "gluten-free"],
    ingredients: [
      { name: "Black beans", qty: 3, unit: "cup", cat: "pantry" },
      { name: "Brown rice, cooked", qty: 2, unit: "cup", cat: "grains" },
      { name: "Corn", qty: 1, unit: "cup", cat: "produce" },
      { name: "Bell pepper", qty: 1, unit: "whole", cat: "produce" },
      { name: "Avocado", qty: 2, unit: "whole", cat: "produce" },
      { name: "Lime", qty: 2, unit: "whole", cat: "produce" },
    ],
  },

  // ---- Dinner ----
  {
    id: "d1", meal: "dinner", name: "Baked Salmon & Veggies",
    photo: "🐟", gradient: "linear-gradient(135deg,#ff758c,#ff7eb3)",
    calories: 520, prepMin: 35, tags: ["high-protein", "gluten-free"],
    ingredients: [
      { name: "Salmon fillet", qty: 1.5, unit: "lb", cat: "protein" },
      { name: "Broccoli", qty: 2, unit: "cup", cat: "produce" },
      { name: "Sweet potato", qty: 2, unit: "whole", cat: "produce" },
      { name: "Olive oil", qty: 2, unit: "tbsp", cat: "pantry" },
      { name: "Garlic", qty: 3, unit: "clove", cat: "produce" },
      { name: "Lemon", qty: 1, unit: "whole", cat: "produce" },
    ],
  },
  {
    id: "d2", meal: "dinner", name: "Turkey Chili",
    photo: "🌶️", gradient: "linear-gradient(135deg,#c31432,#240b36)",
    calories: 410, prepMin: 45, tags: ["high-protein", "gluten-free"],
    ingredients: [
      { name: "Ground turkey", qty: 1.5, unit: "lb", cat: "protein" },
      { name: "Kidney beans", qty: 2, unit: "cup", cat: "pantry" },
      { name: "Diced tomatoes", qty: 2, unit: "cup", cat: "pantry" },
      { name: "Onion", qty: 1, unit: "whole", cat: "produce" },
      { name: "Bell pepper", qty: 1, unit: "whole", cat: "produce" },
      { name: "Chili powder", qty: 2, unit: "tbsp", cat: "pantry" },
      { name: "Garlic", qty: 3, unit: "clove", cat: "produce" },
    ],
  },
  {
    id: "d3", meal: "dinner", name: "Chicken Stir-Fry",
    photo: "🥢", gradient: "linear-gradient(135deg,#f7971e,#ffd200)",
    calories: 430, prepMin: 25, tags: ["high-protein"],
    ingredients: [
      { name: "Chicken breast", qty: 1.5, unit: "lb", cat: "protein" },
      { name: "Broccoli", qty: 2, unit: "cup", cat: "produce" },
      { name: "Snap peas", qty: 1, unit: "cup", cat: "produce" },
      { name: "Carrot", qty: 2, unit: "whole", cat: "produce" },
      { name: "Soy sauce", qty: 4, unit: "tbsp", cat: "pantry" },
      { name: "Garlic", qty: 3, unit: "clove", cat: "produce" },
      { name: "Ginger", qty: 1, unit: "tbsp", cat: "produce" },
    ],
  },
  {
    id: "d4", meal: "dinner", name: "Lentil Curry",
    photo: "🍛", gradient: "linear-gradient(135deg,#e65c00,#f9d423)",
    calories: 400, prepMin: 35, tags: ["vegan", "gluten-free"],
    ingredients: [
      { name: "Red lentils", qty: 2, unit: "cup", cat: "pantry" },
      { name: "Coconut milk", qty: 2, unit: "cup", cat: "pantry" },
      { name: "Diced tomatoes", qty: 2, unit: "cup", cat: "pantry" },
      { name: "Onion", qty: 1, unit: "whole", cat: "produce" },
      { name: "Garlic", qty: 3, unit: "clove", cat: "produce" },
      { name: "Curry powder", qty: 2, unit: "tbsp", cat: "pantry" },
      { name: "Spinach", qty: 2, unit: "cup", cat: "produce" },
    ],
  },
  {
    id: "d5", meal: "dinner", name: "Sheet-Pan Chicken Fajitas",
    photo: "🫓", gradient: "linear-gradient(135deg,#eb5757,#f2994a)",
    calories: 450, prepMin: 30, tags: ["high-protein", "gluten-free-option"],
    ingredients: [
      { name: "Chicken breast", qty: 1.5, unit: "lb", cat: "protein" },
      { name: "Bell pepper", qty: 3, unit: "whole", cat: "produce" },
      { name: "Onion", qty: 1, unit: "whole", cat: "produce" },
      { name: "Olive oil", qty: 2, unit: "tbsp", cat: "pantry" },
      { name: "Fajita seasoning", qty: 2, unit: "tbsp", cat: "pantry" },
      { name: "Tortillas", qty: 8, unit: "whole", cat: "grains" },
    ],
  },
];

const RECIPES_BY_ID = Object.fromEntries(RECIPES.map((r) => [r.id, r]));

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MEALS = ["breakfast", "lunch", "dinner"];
const MEAL_LABELS = { breakfast: "Breakfast", lunch: "Lunch", dinner: "Dinner" };

const PARTNER_STORES = [
  "GreenCart Grocery — same-day delivery",
  "Fresh Fields Market — pickup or delivery",
  "Neighborhood Foods Co-op — delivery",
];

// ---------------------------------------------------------------------------
// State (persisted to localStorage)
// ---------------------------------------------------------------------------

const STORAGE_KEY = "prepcart.v1";

function emptyPlan() {
  const plan = {};
  for (const day of DAYS) {
    plan[day] = { breakfast: null, lunch: null, dinner: null };
  }
  return plan;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { plan: emptyPlan(), uncheckedItems: [] };
    const parsed = JSON.parse(raw);
    return {
      plan: parsed.plan || emptyPlan(),
      uncheckedItems: parsed.uncheckedItems || [],
    };
  } catch (err) {
    console.warn("PrepCart: failed to load saved plan, starting fresh.", err);
    return { plan: emptyPlan(), uncheckedItems: [] };
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ plan: state.plan, uncheckedItems: [...state.uncheckedItems] })
  );
}

const state = {
  ...loadState(),
  galleryFilter: "all",
  pickerTarget: null, // { day, meal } while the "choose a recipe" modal is open
};
state.uncheckedItems = new Set(state.uncheckedItems);

// ---------------------------------------------------------------------------
// Grocery list aggregation
// ---------------------------------------------------------------------------

function computeGroceryList() {
  const totals = new Map(); // key `${name}|${unit}` -> { name, unit, qty, cat }

  for (const day of DAYS) {
    for (const meal of MEALS) {
      const recipeId = state.plan[day][meal];
      if (!recipeId) continue;
      const recipe = RECIPES_BY_ID[recipeId];
      for (const ing of recipe.ingredients) {
        const key = `${ing.name}|${ing.unit}`;
        if (!totals.has(key)) {
          totals.set(key, { name: ing.name, unit: ing.unit, qty: 0, cat: ing.cat });
        }
        totals.get(key).qty += ing.qty;
      }
    }
  }

  const byCategory = {};
  for (const cat of CATEGORY_ORDER) byCategory[cat] = [];
  for (const item of totals.values()) {
    byCategory[item.cat].push(item);
  }
  for (const cat of CATEGORY_ORDER) {
    byCategory[cat].sort((a, b) => a.name.localeCompare(b.name));
  }
  return byCategory;
}

function formatQty(qty) {
  // Round trip clean fractions (e.g. 1.5, 2.25) without floating point noise.
  return Number(qty.toFixed(2)).toString();
}

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

const el = (sel) => document.querySelector(sel);

function recipeCardHTML(recipe, { showAddButton = false } = {}) {
  return `
    <article class="recipe-card" data-recipe-id="${recipe.id}">
      <div class="recipe-photo" style="background:${recipe.gradient}">
        <span>${recipe.photo}</span>
      </div>
      <div class="recipe-body">
        <span class="meal-badge meal-${recipe.meal}">${MEAL_LABELS[recipe.meal]}</span>
        <h3>${recipe.name}</h3>
        <p class="recipe-meta">${recipe.calories} kcal (approx) · ${recipe.prepMin} min prep</p>
        <p class="recipe-tags">${recipe.tags.map((t) => `#${t}`).join(" ")}</p>
        ${showAddButton ? `<button class="btn btn-small btn-pick" data-pick-recipe="${recipe.id}">Add to plan</button>` : ""}
      </div>
    </article>
  `;
}

function renderGallery() {
  const grid = el("#gallery-grid");
  const recipes =
    state.galleryFilter === "all"
      ? RECIPES
      : RECIPES.filter((r) => r.meal === state.galleryFilter);
  grid.innerHTML = recipes.map((r) => recipeCardHTML(r, { showAddButton: true })).join("");
}

function renderPlanner() {
  const grid = el("#planner-grid");
  let html = `<div class="planner-corner"></div>`;
  for (const day of DAYS) html += `<div class="planner-day-head">${day}</div>`;

  for (const meal of MEALS) {
    html += `<div class="planner-meal-head">${MEAL_LABELS[meal]}</div>`;
    for (const day of DAYS) {
      const recipeId = state.plan[day][meal];
      const recipe = recipeId ? RECIPES_BY_ID[recipeId] : null;
      html += `<div class="planner-cell" data-day="${day}" data-meal="${meal}">`;
      if (recipe) {
        html += `
          <div class="planner-slot filled" style="background:${recipe.gradient}">
            <span class="planner-slot-emoji">${recipe.photo}</span>
            <span class="planner-slot-name">${recipe.name}</span>
            <button class="planner-remove" data-remove-day="${day}" data-remove-meal="${meal}" aria-label="Remove">×</button>
          </div>`;
      } else {
        html += `<button class="planner-slot empty" data-open-picker-day="${day}" data-open-picker-meal="${meal}">+ Add</button>`;
      }
      html += `</div>`;
    }
  }
  grid.innerHTML = html;
}

function renderGroceryList() {
  const container = el("#grocery-list");
  const byCategory = computeGroceryList();
  const hasAnyItems = CATEGORY_ORDER.some((cat) => byCategory[cat].length > 0);

  if (!hasAnyItems) {
    container.innerHTML = `<p class="empty-state">Add recipes to your weekly plan above and your grocery list will build itself here.</p>`;
    el("#export-panel").hidden = true;
    return;
  }
  el("#export-panel").hidden = false;

  let html = "";
  for (const cat of CATEGORY_ORDER) {
    const items = byCategory[cat];
    if (items.length === 0) continue;
    html += `<div class="grocery-category"><h4>${CATEGORY_LABELS[cat]}</h4><ul>`;
    for (const item of items) {
      const key = `${item.name}|${item.unit}`;
      const checked = !state.uncheckedItems.has(key);
      html += `
        <li>
          <label>
            <input type="checkbox" data-item-key="${encodeURIComponent(key)}" ${checked ? "checked" : ""}>
            <span class="${checked ? "" : "struck"}">${formatQty(item.qty)} ${item.unit} — ${item.name}</span>
          </label>
        </li>`;
    }
    html += `</ul></div>`;
  }
  container.innerHTML = html;
}

function getCheckedItemLines() {
  const byCategory = computeGroceryList();
  const lines = [];
  for (const cat of CATEGORY_ORDER) {
    const items = byCategory[cat].filter(
      (item) => !state.uncheckedItems.has(`${item.name}|${item.unit}`)
    );
    if (items.length === 0) continue;
    lines.push({ category: CATEGORY_LABELS[cat], items });
  }
  return lines;
}

function renderAll() {
  renderGallery();
  renderPlanner();
  renderGroceryList();
}

// ---------------------------------------------------------------------------
// Picker modal (choose a recipe for a specific day/meal slot)
// ---------------------------------------------------------------------------

function openPicker(day, meal) {
  state.pickerTarget = { day, meal };
  const modal = el("#picker-modal");
  const list = el("#picker-list");
  const options = RECIPES.filter((r) => r.meal === meal);
  el("#picker-title").textContent = `Choose ${MEAL_LABELS[meal]} for ${day}`;
  list.innerHTML = options.map((r) => recipeCardHTML(r, { showAddButton: true })).join("");
  modal.hidden = false;
}

function closePicker() {
  state.pickerTarget = null;
  el("#picker-modal").hidden = true;
}

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

function buildPlainTextList() {
  const lines = getCheckedItemLines();
  let out = "PrepCart Grocery List\n";
  out += `Generated ${new Date().toLocaleDateString()}\n\n`;
  for (const group of lines) {
    out += `${group.category}\n`;
    for (const item of group.items) {
      out += `  [ ] ${formatQty(item.qty)} ${item.unit} — ${item.name}\n`;
    }
    out += "\n";
  }
  return out;
}

function buildCSV() {
  const lines = getCheckedItemLines();
  let out = "category,quantity,unit,item\n";
  for (const group of lines) {
    for (const item of group.items) {
      out += `${csvEscape(group.category)},${formatQty(item.qty)},${csvEscape(item.unit)},${csvEscape(item.name)}\n`;
    }
  }
  return out;
}

function csvEscape(value) {
  if (/[",\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}

function downloadFile(filename, content, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function copyListToClipboard() {
  const text = buildPlainTextList();
  try {
    await navigator.clipboard.writeText(text);
    flashStatus("#copy-status", "Copied!");
  } catch (err) {
    flashStatus("#copy-status", "Couldn't access clipboard — try Download instead.");
  }
}

function flashStatus(selector, message) {
  const node = el(selector);
  node.textContent = message;
  node.classList.add("visible");
  setTimeout(() => node.classList.remove("visible"), 2500);
}

function sendToStore() {
  const storeName = el("#store-select").value;
  const lines = getCheckedItemLines();
  const itemCount = lines.reduce((n, g) => n + g.items.length, 0);
  if (itemCount === 0) {
    el("#send-result").innerHTML = `<p class="empty-state">Check at least one item first.</p>`;
    return;
  }
  el("#send-result").innerHTML = `
    <div class="send-confirmation">
      <p><strong>${itemCount} items</strong> ready to send to <strong>${storeName}</strong>.</p>
      <p class="fine-print">
        Demo only — this button illustrates where PrepCart would hand off the list via the
        partner store's real ordering API (e.g. Instacart Connect, Kroger Marketplace API) so items
        drop straight into your cart there for checkout and delivery scheduling.
      </p>
      <pre class="list-preview">${buildPlainTextList().trim()}</pre>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Event wiring
// ---------------------------------------------------------------------------

function init() {
  renderAll();

  // Gallery filter tabs
  el("#gallery-tabs").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    state.galleryFilter = btn.dataset.filter;
    el("#gallery-tabs").querySelectorAll("button").forEach((b) => b.classList.toggle("active", b === btn));
    renderGallery();
  });

  // Clicking "Add to plan" in the main gallery opens the day/meal picker in reverse:
  // ask which slot first isn't needed there — instead this button jumps to planner focus.
  el("#gallery-grid").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-pick-recipe]");
    if (!btn) return;
    const recipeId = btn.dataset.pickRecipe;
    openSlotPickerForRecipe(recipeId);
  });

  // Planner grid: open picker on empty slot, remove on filled slot
  el("#planner-grid").addEventListener("click", (e) => {
    const openBtn = e.target.closest("[data-open-picker-day]");
    if (openBtn) {
      openPicker(openBtn.dataset.openPickerDay, openBtn.dataset.openPickerMeal);
      return;
    }
    const removeBtn = e.target.closest("[data-remove-day]");
    if (removeBtn) {
      state.plan[removeBtn.dataset.removeDay][removeBtn.dataset.removeMeal] = null;
      saveState();
      renderPlanner();
      renderGroceryList();
    }
  });

  // Picker modal: assign a recipe to the target slot
  el("#picker-list").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-pick-recipe]");
    if (!btn || !state.pickerTarget) return;
    const { day, meal } = state.pickerTarget;
    state.plan[day][meal] = btn.dataset.pickRecipe;
    saveState();
    closePicker();
    renderPlanner();
    renderGroceryList();
  });
  el("#picker-close").addEventListener("click", closePicker);
  el("#picker-modal").addEventListener("click", (e) => {
    if (e.target.id === "picker-modal") closePicker();
  });

  // Grocery list checkboxes
  el("#grocery-list").addEventListener("change", (e) => {
    const input = e.target.closest("[data-item-key]");
    if (!input) return;
    const key = decodeURIComponent(input.dataset.itemKey);
    if (input.checked) state.uncheckedItems.delete(key);
    else state.uncheckedItems.add(key);
    saveState();
    renderGroceryList();
  });

  // Export controls
  el("#copy-list-btn").addEventListener("click", copyListToClipboard);
  el("#download-txt-btn").addEventListener("click", () =>
    downloadFile("prepcart-grocery-list.txt", buildPlainTextList(), "text/plain")
  );
  el("#download-csv-btn").addEventListener("click", () =>
    downloadFile("prepcart-grocery-list.csv", buildCSV(), "text/csv")
  );
  el("#send-store-btn").addEventListener("click", sendToStore);

  // Populate partner store dropdown
  el("#store-select").innerHTML = PARTNER_STORES.map((s) => `<option>${s}</option>`).join("");
}

function openSlotPickerForRecipe(recipeId) {
  const recipe = RECIPES_BY_ID[recipeId];
  // Find the first empty slot for this meal type across the week, or fall back to Mon.
  let day = DAYS.find((d) => state.plan[d][recipe.meal] === null) || DAYS[0];
  state.plan[day][recipe.meal] = recipeId;
  saveState();
  renderPlanner();
  renderGroceryList();
  document.getElementById("planner").scrollIntoView({ behavior: "smooth", block: "start" });
  flashStatus("#gallery-status", `Added "${recipe.name}" to ${day} ${MEAL_LABELS[recipe.meal]}.`);
}

document.addEventListener("DOMContentLoaded", init);
