
function submitQuestion(n) {

    n++;
    if (n == 6) {
        window.location.href="/result.html";
    } else {
        $(".tab-pane").removeClass("active");
        $(".qpill").removeClass("active");
        $("#q"+n).addClass("active");
        $("#qpill"+n).addClass("active");
        updateSideResult(n);
    }
};


function updateSideResult(n) {

    var url = "/ajax/answers/a" + n + ".json";
    var div = document.getElementById("side-result");

    jQuery.getJSON(url, function(data) {
        var html = [];

        html.push('<table class="table table-condensed"><tbody>');
        data.mps.map(function(mp) {
            html.push('<tr>');
            html.push('<td><img src="', mp.url, '" title="', mp.name, '" style="height: 56px;"></td>');
            html.push('<td><b>', mp.name, '</b><br>');
            html.push('<img src="/static/img/green.png" style="height: 10px; width: ', mp.score * 2, 'px;"> ', mp.score, '%</td>');
            html.push('</tr>');
        });
        html.push('</tbody></table>');

        jQuery(div).html(html.join(""));
    });
};
