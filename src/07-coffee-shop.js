/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  if (
    (size === "small" || (size === "medium") | (size === "large")) &&
    (type === "regular" ||
      type === "latte" ||
      type === "cappuccino" ||
      type === "mocha")
  ) {
    let cost = 0.0;
    if (size === "small") {
      cost += 3.0;
      if (type === "regular") {
        cost += 0.0;
        if (extras) {
          if (extras.whippedCream) {
            cost += 0.5;
          }
          if (extras.extraShot) {
            cost += 0.75;
          }
        }
        return cost;
      } else if (type === "latte") {
        cost += 1.0;
        if (extras) {
          if (extras.whippedCream) {
            cost += 0.5;
          }
          if (extras.extraShot) {
            cost += 0.75;
          }
        }
        return cost;
      } else if (type === "cappuccino") {
        cost += 1.5;
        if (extras) {
          if (extras.whippedCream) {
            cost += 0.5;
          }
          if (extras.extraShot) {
            cost += 0.75;
          }
        }
        return cost;
      } else {
        cost += 2.0;
        if (extras) {
          if (extras.whippedCream) {
            cost += 0.5;
          }
          if (extras.extraShot) {
            cost += 0.75;
          }
        }
        return cost;
      }
    } else if (size === "medium") {
      cost += 4.0;
      if (type === "regular") {
        cost += 0.0;
        if (extras) {
          if (extras.whippedCream) {
            cost += 0.5;
          }
          if (extras.extraShot) {
            cost += 0.75;
          }
        }
        return cost;
      } else if (type === "latte") {
        cost += 1.0;
        if (extras) {
          if (extras.whippedCream) {
            cost += 0.5;
          }
          if (extras.extraShot) {
            cost += 0.75;
          }
        }
        return cost;
      } else if (type === "cappuccino") {
        cost += 1.5;
        if (extras) {
          if (extras.whippedCream) {
            cost += 0.5;
          }
          if (extras.extraShot) {
            cost += 0.75;
          }
        }
        return cost;
      } else {
        cost += 2.0;
        if (extras) {
          if (extras.whippedCream) {
            cost += 0.5;
          }
          if (extras.extraShot) {
            cost += 0.75;
          }
        }
        return cost;
      }
    } else {
      cost += 5.0;
      if (type === "regular") {
        cost += 0.0;
        if (extras) {
          if (extras.whippedCream) {
            cost += 0.5;
          }
          if (extras.extraShot) {
            cost += 0.75;
          }
        }
        return cost;
      } else if (type === "latte") {
        cost += 1.0;
        if (extras) {
          if (extras.whippedCream) {
            cost += 0.5;
          }
          if (extras.extraShot) {
            cost += 0.75;
          }
        }
        return cost;
      } else if (type === "cappuccino") {
        cost += 1.5;
        if (extras) {
          if (extras.whippedCream) {
            cost += 0.5;
          }
          if (extras.extraShot) {
            cost += 0.75;
          }
        }
        return cost;
      } else {
        cost += 2.0;
        if (extras) {
          if (extras.whippedCream) {
            cost += 0.5;
          }
          if (extras.extraShot) {
            cost += 0.75;
          }
        }
        return cost;
      }
    }
  } else {
    return -1;
  }
}
