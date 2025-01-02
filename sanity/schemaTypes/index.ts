import { type SchemaTypeDefinition } from 'sanity'
import { blogsType } from './modelTypes/blog'
import { categoryType } from './modelTypes/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogsType, categoryType],
}
