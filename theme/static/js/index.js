$('#intro-svg')[0].addEventListener('load', function() {
	var a = $("#intro-svg");
	var b = $(a[0].getSVGDocument());
	var head = b.find("#head");
	var icons = b.find("#icons");

	var tl = new TimelineLite();
	tl.add("headImplotion")
	  .to(icons, 0.001, {scale: 0.0, transformOrigin:"bottom"}, "headImplotion-=0.1")
	  .to(head, 1, {scale:0.8, transformOrigin:"bottom"}, "headImplotion")
	  .to(head, 0.1, {x:"+=10", yoyo:true, repeat:10}, "headImplotion+=0.5")
	  .to(head, 0.1, {x:"-=10", yoyo:true, repeat:10}, "headImplotion+=0.5")
	  .add("headExplotion")
	  .to(head, 0.25, {scale:1.5, transformOrigin:"bottom"}, "headExplotion")
	  .to(icons, 0.5, {x: 0, y: 0, scale: 1.0}, "headExplotion")
	  .to(head, 1, {scale:1.0, transformOrigin:"bottom"}, "headExplotion+=0.25")
	  ;
});