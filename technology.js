var Technology = (function () {
    function Technology(oL, nme, eL, isC) {
        this.orderLearned = oL;
        this.name = nme;
        this.expertiseLevel = eL;
        this.isCool = isC;
    }
    return Technology;
}());
var git = new Technology(1, 'Git', 'Medium', true);
var html = new Technology(2, 'HTML', 'Medium', true);
var css = new Technology(3, 'CSS', 'Medium', true);
var javaScript = new Technology(4, 'JavaScript', 'Medium', true);
var jQ = new Technology(5, 'jQuery', 'Medium', true);
var aJax = new Technology(6, 'AJAX', 'Low', true);
var jSon = new Technology(7, 'jSon', 'Medium', true);
var typeScript = new Technology(8, 'TypeScript', 'Low', true);
var techArr = [git, html, css, javaScript, jQ, aJax, jSon, typeScript];
var techTable = "<table cellspacing = '0'>";
techTable += "<tr>"
    + "<th colspan = '4'>Technologies Learned</th>"
    + "</tr>"
    + "<th>Order Learned</th>"
    + "<th>Name</th>"
    + "<th>Expertise</th>"
    + "<th>Cool?</th>"
    + "</tr>";
for (var idx = 0; idx < techArr.length; idx++) {
    var techValue = techArr[idx];
    var tr = "<tr>";
    tr += "<td>" + techValue.orderLearned + "</td>";
    tr += "<td>" + techValue.name + "</td>";
    tr += "<td>" + techValue.expertiseLevel + "</td>";
    tr += "<td>" + techValue.isCool + "</td>";
    tr += "</tr>";
    techTable += tr;
}
console.log(techTable);
$().ready(function () {
    $('#techTable').append(techTable);
    $('style').append("* {font-family: tahoma; font-size: 24pt}"
        + "tr th {border: 1px solid black; padding: 0px 5px 0px 5px}"
        + "tr td {border: 1px solid black; padding: 0px 5px 0px 5px; text-align: center};");
});
