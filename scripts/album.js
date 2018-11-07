var createSongRow = function (songNumber, songName, songLength) {
  var template =
     '<tr class="album-view-song-item">'
   + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
   + '  <td class="song-item-title">' + songName + '</td>'
   + '  <td class="song-item-duration">' + songLength + '</td>'
   + '</tr>'
   ;

   var $row = $(template);

   return $row;
};

var setCurrentAlbum = function(album) {
  var currentAlbum = album;

  var $albumTitle = $('.album-view-title');
  var $albumArtist = $('.album-view-artist');
  var $albumReleaseInfo = $('.album-view-release-info');
  var $albumImage = $('.album-cover-art');
  var $albumSongList = $('.album-view-song-list');

  $albumTitle.text(currentAlbum.title);
  $albumArtist.text(currentAlbum.artist);
  $albumReleaseInfo.text(currentAlbum.year + ' ' + currentAlbum.label);
  $albumImage.attr('src', currentAlbum.albumArtUrl);

  $albumSongList.empty();

  for (var i = 0; i < currentAlbum.songs.length; i++) {
    var $songRow = createSongRow(i + 1, currentAlbum.songs[i].title, currentAlbum.songs[i].duration);
    $albumSongList.append($songRow);
  }
};

setCurrentAlbum(albums[0]);