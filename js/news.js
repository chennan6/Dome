$(function () {
  var jsons =
  {
      'blogs': [
        { 'id': '1', 'title': '卫浴七月快讯|参展、并购、跨界合作玩不停！' ,'text':'123456'}, 
        { 'id': '2', 'title': '卫浴八月快讯|参展、并购、跨界合作玩不停！' ,'text':'123456'}, 
        { 'id': '3', 'title': '卫浴九月快讯|参展、并购、跨界合作玩不停！' ,'text':'123456'}, 
        { 'id': '4', 'title': '卫浴十月快讯|参展、并购、跨界合作玩不停！' ,'text':'123456'}, 
        { 'id': '5', 'title': '卫浴十一月快讯|参展、并购、跨界合作玩不停！' ,'text':'123456'}, 
        { 'id': '6', 'title': '卫浴十二月快讯|参展、并购、跨界合作玩不停！' ,'text':'123456'}, 
        { 'id': '7', 'title': '卫浴十三月快讯|参展、并购、跨界合作玩不停！' ,'text':'123456'}
      ]
  };
  $.each(jsons.blogs, function (index, e) {
      $("#sel").append("<li>"+"<h4>" + e.title + "</h4>"+"<span>"+e.text+"</span>"+"</li>");
  });
});