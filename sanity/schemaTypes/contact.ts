export const contact = {
  name: 'contact',
  title: 'Contact Enquiries',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'phone', title: 'Phone', type: 'string' },
    { name: 'subject', title: 'Subject', type: 'string' },
    { name: 'message', title: 'Message', type: 'text' },
    { name: 'createdAt', title: 'Created At', type: 'datetime' },
  ],
}