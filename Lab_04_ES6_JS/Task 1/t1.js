$(document).ready(function(){

    $("#addItem").click(function(){

        let itemText = $("#itemInput").val().trim();

        if(itemText !== ""){

            let listItem = $("<li></li>").text(itemText);

            let deleteBtn = $("<button></button>")
                .text("Delete")
                .addClass("deleteBtn");

            listItem.append(deleteBtn);

            $("#itemList").append(listItem.hide().fadeIn(400));

            $("#itemInput").val("");
        }
    });

    $("#itemList").on("click", ".deleteBtn", function(){
        $(this).parent().fadeOut(400, function(){
            $(this).remove();
        });
    });

});