$(document).ready(function() {
    $(".arrow-link").click(function(e) {
        e.preventDefault();
        var icon = $(this).find(".arrow-icon");
        if (icon.hasClass("fa-chevron-down")) {
            icon.removeClass("fa-chevron-down").addClass("fa-chevron-up");
        } else {
            icon.removeClass("fa-chevron-up").addClass("fa-chevron-down");
        }
    });
    $('#chooseAvatar').click(function() {
        $('#fileInputAvatar').click(); // Kích hoạt sự kiện click cho input file
    });
    
    $('#fileInputAvatar').change(function() {
        $('#textAvatar').text(`Tệp đã chọn: ${$(this).val()}`);
    });
    
    // Degree
    $('#chooseDegree').click(function() {
        $('#fileInputDegree').click(); // Kích hoạt sự kiện click cho input file
    });
    
    $('#fileInputDegree').change(function() {
        $('#textDegree').text(`Tệp đã chọn: ${$(this).val()}`);
    });
});