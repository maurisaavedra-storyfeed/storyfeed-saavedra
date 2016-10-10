# Storyfeed V3.7.3
New version of Storyfeed with images in google cloud - Saavedra with Packages Folder

New and improvements in 3.7.3
- New Rss for categories working for the mailchimp newsletter.
- Added Media:Content for showing images in mailchimp.

New and improvements in 3.7.1
- Another bottom desing in mobile.

New and improvements in 3.7
- Nav with transparency
- Animation fixed in Menu mobile on safari
- Suggested locations improved in Mobile Menu
- Comments with new design

New and Imporvements 3.6.6
- Without zooming in mobile
- Desactivate Geobytes we are only working with geoplugin now, speed should be very improved.
- Desactivate Hero Banner
- Added Announcements box above side Bar
- Categories boxes sizes have been changed as well

New and Imporvements 3.6.5
- Added Facebook, twitter, and about links in categories.
- Added Embed in categories.
- Added an Embed version of the site.

New and Improvements 3.6.4
- Added a couple of packages like softwarerero:accounts-t9n and devian:detectlanguage to package folders.
- Edited both files to work with make detect language with t9n and i18n.

New and Improvements 3.6.3
- Added "go to link" in posts domain
- Added Discussion
- Added Added Fast-render? (check if working)

New and Improvements 3.6.2
- Now with telescope:prerender package

Fixed and Improvements 3.6.1
- Meteor Version 1.4
- Images pulled from Google Cloud now
- Mobile version with imporvements for development like new menu and stuff.

Fixed and Improvements 3.4
- New Design

Fixes and Improvements 3.3
- New Geolocation and Georedirection working but turned off
- New main header with geobytes redirection
- Facebook Plugin


// DON'T MODIFY PACKAGES FOLDER
// The only documents we modified in packages folder are:
// storyfeed-saavedra/packages/telescope-rss/lib/server/routes.js  (starting in line 20 we added two new Picker.route to get top and best rss from categories)
// storyfeed-saavedra/packages/telescope-theme-base/lib/client/scss/specific/_mobile_nav.scss (starting in line 160 to change background and color of bottom)
// storyfeed-saavedra/packages/telescope-theme-base/lib/client/scss/specific/_mobile_nav.scss (starting in line 42 to change the speed of the animation when opening the mobile menu)
// storyfeed-saavedra/packages/telescope-theme-base/lib/client/scss/specific/_layout.scss (to change the background color when embed)
// storyfeed-saavedra/packages/meteor-accounts-t9n-master/t9n/en.coffee - es.coffee (we can change all in this folder)
// storyfeed-saavedra/packages/Detect-language-master/detectlanguage.js  (starting in line 9 to add t9n capability)
// storyfeed-saavedra/packages/telescope-posts/lib/menus.js  (starting in line 19 to add icon menu in mobile)
// storyfeed-saavedra/packages/telescope-tags/lib/client/templates/autoform_category.js
// storyfeed-saavedra/packages/telescope-tags/lib/client/templates/autoform_category.html (the two above we changed to set the tags in different categories and add geopluign into the categories)
// storyfeed-saavedra/packages/telescope-comments/lib/comments.js (in this document we changed the line: 67 rows from 5 to 1 to minimize the size of the comments-submit box)
// 
// for telescope-packages-legacy go to https://github.com/maurisaavedra-storyfeed/system-legacy.git
// 

