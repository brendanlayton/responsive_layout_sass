/* Instructions & Steps

- Hide site/page navigation behind a menu icon
- When users tap the menu icon on mobile devices the navigation appears/disappears

*/

$(".main-nav-mob a").click(function(event) {
		event.preventDefault();
		$(".main-nav").slideToggle('slow');
	});
	