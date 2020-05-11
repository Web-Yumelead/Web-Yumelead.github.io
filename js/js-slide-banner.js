$(window).on('load resize', function(){

  var w = $(window).width();
  var x = 768; //画像を差し替えを実行するウィンドウサイズ

  if (w <= x) {

    var before = '_pc.',
        after = '_sp.';

    replaceImg();

  } else {

    var before = '_sp.',
        after = '_pc.';

    replaceImg();

  }

  function replaceImg(){
    $('img[src*=pc_],img[src*=sp_]').each(function(){
      var img = $(this).attr('src').replace(before, after);
      if( $(this).attr('src').match(before) ) {
        $(this).attr('src', img);
      }
    });
  }

})
