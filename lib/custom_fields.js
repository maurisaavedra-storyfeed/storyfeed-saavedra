
// Custom User Field

Users.addField({
  fieldName: 'Instagram',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["member", "admin"]
  }
});
