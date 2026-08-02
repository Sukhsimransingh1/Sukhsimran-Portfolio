import { Section } from '@/components/layout/section'

/**
 * ROOT LOADING BOUNDARY
 * ----------------------------------------------------------------------------
 * Shown while a route segment streams.
 *
 * WHY IT IS ALMOST EMPTY
 * Every page here is statically generated, so this rarely appears — it covers
 * the gap during client-side navigation before the next segment resolves. A
 * skeleton that guesses at the incoming layout would flash a shape that does
 * not match what arrives; an empty band of the correct height does not.
 *
 * The accessible name is what communicates the pending state. There is no
 * visible text to announce, and a live region here would interrupt on every
 * navigation.
 */
export default function Loading() {
  return <Section spacing="xl" label="Loading" />
}
