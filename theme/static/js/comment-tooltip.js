$(document).on('mouseenter', ".blog-post-div-comment", function() {
     var $this = $(this);
     if(this.offsetWidth < this.scrollWidth && !$this.attr('title')) {
          $this.tooltip({
               title: $this.text(),
               placement: "bottom"
          });
          $this.tooltip('show');
     }
});