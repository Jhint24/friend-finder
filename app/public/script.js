// $(document).ready(function() {
//     $('select').formSelect();
//     $('.modal').modal();

//                 //submit button results
//         $(".submit").on("click", function (event) {
//             event.preventDefault();
//             // Here we grab the form elements
//             var newMatch = {
//                 name: $("#first_name").val().trim(),
//                 photo: $("#user_photo").val().trim(),
//                 scores: [
//                     $("#Q1").val(),
//                     $("#Q2").val(),
//                     $("#Q3").val(),
//                     $("#Q4").val(),
//                     $("#Q5").val(),
//                     $("#Q6").val(),
//                     $("#Q7").val(),
//                     $("#Q8").val(),
//                     $("#Q9").val(),
//                     $("#Q10").val(),
//             ]
//             };
//             console.log(newMatch);
//             var currentURL = window.location.origin;
//             $.post(currentURL + "/api/friends", newMatch, function (data) {
//                    console.log(data + " data");
//                    if (data)    {
//                     $("#matchName").text(data.name);
//             $('#matchPic').attr("src", data.photo);
//             $("#modal1").modal('toggle');
//                    }
//                     // Clear the form when submitting
//                     $("first_name").val("");
//                     $("user_photo").val("");
//                     $("#Q1").val("");
//                     $("#Q2").val("");
//                     $("#Q3").val("");
//                     $("#Q4").val("");
//                     $("#Q5").val("");
//                     $("#Q6").val("");
//                     $("#Q7").val("");
//                     $("#Q8").val("");
//                     $("#Q9").val("");
//                     $("#Q10").val("");
//                 });




// //getMatchData();
// });
// });