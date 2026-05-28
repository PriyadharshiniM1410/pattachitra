export const artwork = {
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Painting Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price (₹)',
      type: 'number',
    },
    {
      name: 'size',
      title: 'Size (e.g. 18×14 inches)',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Mythology', 'Nature', 'Contemporary'],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Painting Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}