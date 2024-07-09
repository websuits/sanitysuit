import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import siteConfig from './siteConfig'
import post from './post'
import menu from './menu'

export const schemaTypes = [post, menu, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteConfig, post, menu, blockContent],
}
