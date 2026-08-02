'use client'

/**
 * CURSOR — PLACEHOLDER
 * ----------------------------------------------------------------------------
 * Deliberately renders nothing. This file exists to reserve the architectural
 * slot: mount point, client boundary, and the guards any real implementation
 * will need.
 *
 * WHEN THIS IS IMPLEMENTED, THE FOLLOWING ARE NON-NEGOTIABLE:
 *
 * 1. NEVER hide the native cursor.
 *    `cursor: none` removes the OS-level pointer, which is a hard accessibility
 *    failure — users with motor or visual impairments rely on system cursor
 *    settings (size, contrast, trails). A custom cursor may *augment* the
 *    native one; it may not replace it.
 *
 * 2. Gate on `useHasPointer()`.
 *    Touch devices have no cursor. The component must not mount at all there —
 *    not merely render invisibly, which still costs listeners and a frame loop.
 *
 * 3. Gate on `useReducedMotion()`.
 *    An element that continuously tracks the pointer is precisely the
 *    unpredictable, persistent motion `prefers-reduced-motion` exists to
 *    suppress.
 *
 * 4. Drive it with `useMotionValue`, never `useState`.
 *    Pointer position updates at the display refresh rate. Routing that through
 *    React state re-renders the tree on every frame.
 *
 * 5. `pointer-events: none` on the element.
 *    Otherwise the cursor visual intercepts its own clicks and the page becomes
 *    inoperable.
 *
 * 6. Render into `z-cursor` (100) — above content, below nothing.
 *
 * OPEN QUESTION FOR THE DESIGN PHASE
 * Whether this ships at all. A custom cursor is a strong stylistic statement,
 * and the brand guide asks for restraint. It earns inclusion only if it
 * communicates something the native cursor cannot — link affordance, drag
 * capability — rather than existing as decoration.
 */
export function Cursor() {
  return null
}
