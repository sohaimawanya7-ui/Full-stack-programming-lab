$(document).ready(function(){

    const images = [
        {src: "https://picsum.photos/id/1015/700/400", caption: "Mountain Landscape"},
        {src: "https://picsum.photos/id/1025/700/400", caption: "Beautiful Dog"},
        {src: "https://picsum.photos/id/1035/700/400", caption: "River View"},
        {src: "https://picsum.photos/id/1043/700/400", caption: "Ocean Sunset"}
    ];

    let index = 0;

    function updateGallery(){
        $("#galleryImage").fadeOut(400, function(){
            $(this)
                .attr("src", images[index].src)
                .fadeIn(400);
        });

        $("#caption").fadeOut(200, function(){
            $(this)
                .text(images[index].caption)
                .fadeIn(200);
        });
    }

    $("#next").click(function(){
        index = (index + 1) % images.length;
        updateGallery();
    });

    $("#prev").click(function(){
        index = (index - 1 + images.length) % images.length;
        updateGallery();
    });

});