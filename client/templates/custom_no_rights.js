Template.custom_no_rights.helpers({
  errorMessage: function () {
    return !!this.message ? i18n.t(this.message) : i18n.t("sorry_you_dont_have_permissions_to_add_new_items");
  }
});