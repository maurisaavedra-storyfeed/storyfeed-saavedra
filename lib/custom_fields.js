
// Custom User Field

Users.addField({
  fieldName: 'instagramUsername',
  fieldSchema: {
    type: String,
    optional: true,
    public: true,
    profile: true,
    editableBy: ["member", "admin"],
    template: "custom_user_profile_instagram"
  }
});

Users.addField({
  fieldName: 'Veryfied',
  fieldSchema: {
    type: Boolean,
    optional: true,
    defaultValue: false,
    editableBy: ["admin"]
  }
});


// Custom Category Field

Categories.addField({
  fieldName: 'categoryType',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["admin"]
  }
})

