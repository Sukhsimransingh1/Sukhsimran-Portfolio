import type { Achievement, Certification } from './types'

/**
 * ACHIEVEMENTS & CERTIFICATIONS
 * ----------------------------------------------------------------------------
 * Kept in one module because both are credentials rendered in the same region
 * of the About page, but typed separately — a certification has an issuer and a
 * credential ID, an achievement does not.
 *
 * `date` and `credentialId` are omitted where no authoritative record exists,
 * rather than guessed. The renderer drops the secondary line when it is empty.
 *
 * ⚠️  CREDENTIAL URLS ARE NOT YET RECORDED. `Certification` already carries
 * `href` and `credentialId`; setting `href` on an entry renders its row as a
 * link with a "View certificate" action, with no component change. They are
 * left empty rather than invented — a credential URL that does not verify is
 * worse than none, since the whole point of the link is verification.
 */

export const achievements = [
  {
    title: 'Top Performer — Data Science Traineeship',
    detail: 'Internshala, in partnership with IITM Pravartak and NSDC',
  },
  {
    title: 'Innovate with TRAE Hackathon',
    detail: 'NIT Jalandhar',
  },
  {
    title: 'Hack on Hills',
    detail: 'NIT Hamirpur',
  },
  {
    title: 'Hackathon 4.0',
    detail: 'GNA University',
  },
  {
    title: 'NCC Cadet',
  },
] as const satisfies readonly Achievement[]

export const certifications = [
  {
    title: 'Data Science',
    issuer: 'Internshala',
  },
  {
    title: 'Data Science, Machine Learning & NLP',
    issuer: 'Udemy',
  },
  {
    title: 'Generative AI with LangChain & HuggingFace',
    issuer: 'Udemy',
  },
  {
    title: 'LangChain',
    issuer: 'LangChain Academy',
  },
] as const satisfies readonly Certification[]
