import { createClient } from "next-sanity"


export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET_ID!
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION_ID!

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn:false
})
