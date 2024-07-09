import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import menu from './menu'

export const schemaTypes = [post, menu, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, menu, blockContent],
}
