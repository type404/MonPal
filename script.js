// JavaScript source code
//document.getElementById("search").onclick(showPage());
function showPage() {
    $('html', 'body').animate({ scrollTop: $("#profiles").position().top });
}