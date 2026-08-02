import type { JsonLdObject } from '@/lib/json-ld'

/**
 * JSON-LD
 * ----------------------------------------------------------------------------
 * Emits a structured-data script tag.
 *
 * WHY `dangerouslySetInnerHTML` IS CORRECT HERE
 * React escapes text children, which would turn the JSON's quotes into HTML
 * entities and produce a document crawlers cannot parse. The content is not
 * user input — it is `JSON.stringify` of an object built from site config — so
 * there is no injection surface from the data itself.
 *
 * The one real risk is a `<` inside a string value closing the script tag
 * early. Escaping it as `<` is valid JSON, parses back to the same string,
 * and cannot terminate the element.
 *
 * A Server Component: this must be in the initial HTML, because crawlers do not
 * wait for hydration.
 */

export function JsonLd({ data }: { data: JsonLdObject }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c')

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
