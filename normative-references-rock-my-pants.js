/* jshint -W100 */

$.getJSON("data.json", function (data) {
    var $tbody = $("#data tbody")
    ,   total = 0
    ,   done = 0
    ;
    $.each(data, function (ref, info) {
        total++;
        if (info.type !== "unknown") done++;
        var $tr = $("<tr><th></th></tr>")
                    .addClass(info.type)
                    .addClass(info.stable ? "stable" : "unstable")
                    .find("th")
                        .text(ref)
                    .end()
        ,   $td = $("<td></td>")
        ,   titles = []
        ;
        if (info.urls.length) {
            for (var i = 0, n = info.urls.length; i < n; i++) {
                titles.push("<a href='" + info.urls[i] + "'>" + info.titles[i] + "</a>");
            }
        }
        else {
            titles = info.titles;
        }
        $td.clone()
            .html(titles.join("<br>"))
            .appendTo($tr)
        ;
        $td.clone().text(info.type).addClass("type").appendTo($tr);
        $td.clone().text(info.stable ? "✓" : "☠").addClass("stability").appendTo($tr);
        $td.clone().html(info.notes).appendTo($tr);
        $tbody.append($tr);
    });
    $("#total").text(total);
    $("#done").text(done);
    $("#percent").text(((done/total) * 100).toFixed(2) + "%");
});

