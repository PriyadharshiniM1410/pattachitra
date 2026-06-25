// sanity/schemaTypes/artwork.ts

import { defineField, defineType } from 'sanity'
import { ImageIcon } from '@sanity/icons'
import { ArtworkIdInput } from '../../components/ArtworkIdInput'

export default defineType({
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  icon: ImageIcon,

  fields: [
    // ── 1. Category first ──
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      description: 'Select category first — Artwork ID will be auto generated',
      validation: (Rule) => Rule.required(),
      options: {
        disableNew: false,
        filter: 'isActive == true',
      },
    }),

    // ── 2. Artwork ID — auto generated ──
    defineField({
      name: 'artworkId',
      title: 'Artwork ID',
      type: 'string',
      description: 'Auto generated after category is selected (e.g. JP001, KL002)',
      readOnly: true,
      components: {
        input: ArtworkIdInput,
      },
    }),

    // ── 3. Artwork Name ──
    defineField({
      name: 'title',
      title: 'Artwork Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // ── 4. Slug — auto from artwork name ──
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'Auto generated from artwork name',
      validation: (Rule) => Rule.required(),
    }),

    // ── 5. Price ──
    defineField({
      name: 'price',
      title: 'Price (₹)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),

    // ── 6. Size ──
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // ── 7. Description ──
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),

    // ── 8. Artwork Image ──
    defineField({
      name: 'image',
      title: 'Artwork Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the artwork for accessibility & SEO',
        }),
      ],
    }),

    // ── 9. Available for Sale ──
    defineField({
      name: 'availableForSale',
      title: 'Available for Sale',
      type: 'boolean',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      artworkId: 'artworkId',
      media: 'image',
      available: 'availableForSale',
    },
    prepare({ title, artworkId, media, available }: any) {
      return {
        title: title ?? 'Untitled Artwork',
        subtitle: `${artworkId ?? '—'} · ${available ? '🟢 For Sale' : '🔴 Not for Sale'}`,
        media,
      }
    },
  },

  orderings: [
    {
      title: 'Artwork ID',
      name: 'artworkIdAsc',
      by: [{ field: 'artworkId', direction: 'asc' }],
    },
    {
      title: 'Newest First',
      name: 'createdDesc',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
  ],
})