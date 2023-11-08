$('#btnLoadData').click(function() {
    console.log("clicked");
    

//     let jsonURL = "https://www.w3schools.com/jquery/demo_ajax_json.js";

//     let jsonURL = "demo.json";

    let jsonURL = "https://robcmyk.github.io/India/script/FavoriteData.json";

    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(data) {
            //can log either the entire data or invoke specific properties data.zipCode...
            console.log(data.firstname);
            
            //loads first name into my first input box (in example #1)
            $("#firstname").val(data.firstname);
            console.log(data.firstname);

            //loads last name into my last name input box
            $("#lastname").val(data.lastname);
            console.log(data.lastname);

            $('input[type=radio]').each(function () {
                if (data.radio1 === $(this).val())
                {
                  $(this).prop('checked', true)
                    console.log($(this));
               }

            });
            //console.log (sList);

            $.each(data, function (key, val) {
                //step through results
                console.log(key, val);
                //get each data item
                //put it in the right place
                //$("#dataContainer").append(key + " " + val);
                $(`#${key}`).val(val);
                
            });
        }
    });
});