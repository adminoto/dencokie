var videos = [
'YQtrR5lvhIc',
'zkWz_oHbCKk',
'a2aYoB6LpmY',
'1thMUoO1_Lc',
];

var index=Math.floor(Math.random() * videos.length);
var html='<iframe style="padding: 16px 0;height:250px;" src="https://www.youtube.com/embed/' + videos[index] + '" allowfullscreen></iframe>';
document.write(html);
