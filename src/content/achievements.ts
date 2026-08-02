import type { Achievement, Certification } from './types'

/**
 * ACHIEVEMENTS & CERTIFICATIONS
 * ----------------------------------------------------------------------------
 * Kept in one module because both are credentials rendered in the same region
 * of the About page, but typed separately — a certification has an issuer and a
 * credential ID, an achievement does not.
 *
 * Empty by design — real credentials arrive in the content phase.
 */

export const achievements: readonly Achievement[] = []

export const certifications: readonly Certification[] = []
