jQuery(function($) {
    var elem = $('.cars'); //replace this with your list selector
 
    sortList(elem);
 
    function sortList($elem) {
        var $li = $elem.find('li'),
            $listLi = $($li,$elem).get();
        $listLi.sort(function(a, b){
            var keyA = $(a).text().toUpperCase();
            var keyB = $(b).text().toUpperCase();
 
            return (keyA < keyB) ? -1 : 1;
            //uncomment below and comment above if you want descending order
            //return (keyA > keyB) ? -1 : 1;
        });
        $.each($listLi, function(index, row){
            $elem.append(row);
        });
    }
});
