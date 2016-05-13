// add template module to the hero zone
Telescope.modules.add("hero", {
  template: 'hello',
  order: 1
});


// add location_menu template to the nav zone
//Telescope.modules.add("primaryNav", {
//  template: 'location_menu',
//  order: 4
//});

Telescope.modules.add("mobileNav", {
  template: 'location_menu',
  order: 4
});

// add location_menu and source_menu template to the sideMenu
Telescope.modules.add("sideBar", [
	{
	template: 'location_menu',
	order: 4
    },
    {
    template: 'topic_menu',
    order: 2
    },
    {
    template: 'source_menu',
    order: 3
    }
]);


// Remove Categories menu from PrimaryNav
Telescope.modules.remove("primaryNav", "categories_menu");