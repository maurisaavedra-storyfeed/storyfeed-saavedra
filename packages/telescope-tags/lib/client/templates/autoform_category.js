AutoForm.addInputType("bootstrap-category", {
  template: "afCategory",
  valueOut: function () {
    var categories = [];
    this.find(":checked").each(function() {
      categories.push($(this).val());
    });
    return categories;
  }
});

// -------- Reference Template --------- //

Template.afCategory_bootstrap3.helpers({
  menuItems: function () {

    var selectedCategoriesIds = this.value;
    var prefilledCategoriesIds = _.pluck(Session.get("prefilledCategories"), "_id");

    selectedCategoriesIds = _.compact(prefilledCategoriesIds.concat(selectedCategoriesIds));

    var menuItems = _.map(Categories.find({}, {sort: {order: 1, name: 1}}).fetch(), function (category) {
      var isSelected = _.contains(selectedCategoriesIds, category._id);
      return {
        _id: category._id,
        parentId: category.parentId,
        template: "category_input_item",
        label: category.name,
        isSelected: isSelected,
        isExpanded: isSelected,
        itemClass: "category-"+category.slug,
        data: category
      };
    });
    return menuItems;
  },
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    return atts;
  }
});

Template.afCategory_bootstrap3.onDestroyed(function () {
  Session.set("prefilledCategories", null);
});

Template.afCategory_bootstrap3.events({
  "click .category-input-item label": function (e) {
    // only trigger on actual checkbox' click event, and if the checkbox has just been checked
    if ($(e.toElement).is("input") && $(e.toElement).prop("checked")) {
      // when marking a category as checked, check all checkboxes of all parent nodes as well
      $(e.currentTarget).parentsUntil('.category-input', ".menu-item").find(">.menu-item-wrapper input:checkbox").prop("checked", true);
    }
  }
});


// -------- Location Menu --------- //


Template.afCategory_location.helpers({
  menuItems: function () {

    var selectedCategoriesIds = this.value;
    var prefilledCategoriesIds = _.pluck(Session.get("prefilledCategories"), "_id");

    selectedCategoriesIds = _.compact(prefilledCategoriesIds.concat(selectedCategoriesIds));

    var menuItems = _.map(Categories.find({categoryType: "location"}).fetch(), function (category) {

      var isSelected = _.contains(selectedCategoriesIds, category._id);
      return {
        _id: category._id,
        parentId: category.parentId,
        template: "category_input_item",
        label: category.name,
        isSelected: isSelected,
        isExpanded: isSelected,
        itemClass: "category-"+category.slug,
        data: category
      };
    });
    return menuItems;
  },
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    return atts;
  }
});

Template.afCategory_location.onDestroyed(function () {
  Session.set("prefilledCategories", null);
});

Template.afCategory_location.events({
  "click .category-input-item label": function (e) {
    // only trigger on actual checkbox' click event, and if the checkbox has just been checked
    if ($(e.toElement).is("input") && $(e.toElement).prop("checked")) {
      // when marking a category as checked, check all checkboxes of all parent nodes as well
      $(e.currentTarget).parentsUntil('.category-input', ".menu-item").find(">.menu-item-wrapper input:checkbox").prop("checked", true);
    }
  }
});



// -------- Topic Menu --------- //



Template.afCategory_topic.helpers({
  menuItems: function () {

    var selectedCategoriesIds = this.value;
    var prefilledCategoriesIds = _.pluck(Session.get("prefilledCategories"), "_id");

    selectedCategoriesIds = _.compact(prefilledCategoriesIds.concat(selectedCategoriesIds));

    var menuItems = _.map(Categories.find({categoryType: "topic"}).fetch(), function (category) {

      var isSelected = _.contains(selectedCategoriesIds, category._id);
      return {
        _id: category._id,
        parentId: category.parentId,
        template: "category_input_item",
        label: category.name,
        isSelected: isSelected,
        isExpanded: isSelected,
        itemClass: "category-"+category.slug,
        data: category
      };
    });
    return menuItems;
  },
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    return atts;
  }
});

Template.afCategory_topic.onDestroyed(function () {
  Session.set("prefilledCategories", null);
});

Template.afCategory_topic.events({
  "click .category-input-item label": function (e) {
    // only trigger on actual checkbox' click event, and if the checkbox has just been checked
    if ($(e.toElement).is("input") && $(e.toElement).prop("checked")) {
      // when marking a category as checked, check all checkboxes of all parent nodes as well
      $(e.currentTarget).parentsUntil('.category-input', ".menu-item").find(">.menu-item-wrapper input:checkbox").prop("checked", true);
    }
  }
});


// -------- Source Menu --------- //


Template.afCategory_source.helpers({
  menuItems: function () {

    var selectedCategoriesIds = this.value;
    var prefilledCategoriesIds = _.pluck(Session.get("prefilledCategories"), "_id");

    selectedCategoriesIds = _.compact(prefilledCategoriesIds.concat(selectedCategoriesIds));

    var menuItems = _.map(Categories.find({categoryType: "source"}).fetch(), function (category) {

      var isSelected = _.contains(selectedCategoriesIds, category._id);
      return {
        _id: category._id,
        parentId: category.parentId,
        template: "category_input_item",
        label: category.name,
        isSelected: isSelected,
        isExpanded: isSelected,
        itemClass: "category-"+category.slug,
        data: category
      };
    });
    return menuItems;
  },
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    return atts;
  }
});

Template.afCategory_source.onDestroyed(function () {
  Session.set("prefilledCategories", null);
});

Template.afCategory_source.events({
  "click .category-input-item label": function (e) {
    // only trigger on actual checkbox' click event, and if the checkbox has just been checked
    if ($(e.toElement).is("input") && $(e.toElement).prop("checked")) {
      // when marking a category as checked, check all checkboxes of all parent nodes as well
      $(e.currentTarget).parentsUntil('.category-input', ".menu-item").find(">.menu-item-wrapper input:checkbox").prop("checked", true);
    }
  }
});



Template.category_input_item.helpers({
  atts: function () {
    if (this.item.isSelected) {
      return "checked";
    }
  }
});