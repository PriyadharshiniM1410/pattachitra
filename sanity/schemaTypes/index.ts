import { type SchemaTypeDefinition } from 'sanity'
import { contact } from './contact'
import category from './category'
import artwork from './artwork'

export const schemaTypes = [
  category,
  artwork,
  contact
]
// sanity.config.ts expects 'schema' export
export const schema = {
  types: schemaTypes,
}