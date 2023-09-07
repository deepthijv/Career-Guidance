(function($) {
  $.fn.progressbar = function (options) {

    var opts = $.extend({ }, options);

    return this.each(function() {
      var $this = $(this);

      var $ul = $('<ul>').attr('class', 'progressbar');

      var currentIdx = -1

      $.each(opts.steps, function(index, value) {
        var $li = $('<li class="col-sm-12 col-xs-12">').text(value.replace('@', '').replace('~', ''));
        $li.css('width', (100 / opts.steps.length) + '%');

        if(value.indexOf('@') > -1) {
          $li.addClass('current');
          currentIdx = index;
        }

        if(value.indexOf('~') > -1) {
          $li.addClass('fail');
        }
		
		  if(value.indexOf('$') > -1) {
          $li.addClass('remaining');
        }
		
        $ul.append($li);
      });

      for(var i = 0; i < currentIdx; i++) {
        $($ul.find('li')[i]).addClass('done');
      }

      $this.append($ul);
    });
  };
})(jQuery);