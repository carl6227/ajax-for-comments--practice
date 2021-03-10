$(document).ready(function () {
  $("#trigger").on("click", function () {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/comments",
      dataType: "json",
      success: function (data) {
        var index = Math.floor(Math.random() * data.length);
        myTable=$("#myTable").append('<tr><td>'+data[index].id+'</td><td>'+ data[index].name+'</td><td>'+ data[index].email+'</td><td>'+ data[index].body+'</td></tr>');
      
        // $("#dataholder").text("id: " + data[index].id);
        // $("#dataholder2").text("name: " + data[index].name);
        // $("#dataholder3").text("email: " + data[index].email);
        // $("#dataholder4").text("body: " + data[index].body);
      },
    });
//     setInterval(function () {
//       $.ajax({
//         url: "https://jsonplaceholder.typicode.com/posts",
//         dataType: "json",
//         success: function (data) {
//           var index = Math.floor(Math.random() * data.length);
//           $("#dataholder5").text("id: " + data[index].title);
//         },
//       });
//     },1000);
 });
});
