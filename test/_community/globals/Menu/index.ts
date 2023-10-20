import type { GlobalConfig } from '../../../../packages/payload/src/globals/config/types'

import { lexicalEditor } from '../../../../packages/richtext-lexical/src'

export const menuSlug = 'menu'

export const MenuGlobal: GlobalConfig = {
  slug: menuSlug,
  fields: [
    {
      name: 'globalText',
      type: 'text',
    },
    {
      name: 'globalRichText',
      type: 'richText',
      editor: lexicalEditor({}),
      admin: {
        description: 'Global rich text description',
      },
    },
  ],
}
