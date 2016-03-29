
// Custom User Field

Users.addField({
  fieldName: 'instagram',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["member", "admin"]
  }
});
