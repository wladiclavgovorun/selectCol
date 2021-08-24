$("body").on("change", ".select_color_edit", function ()
    {
        var th = $(this);
        var text = $(this)
            .find("option:selected")
            .text();

        var data = {};
        data.id = $(this)
            .parents("tr.reports-list-item")
            .attr("data-id");
        data.code = "CVET";
        data.value = [$(this).val()];
        if (data.value == 0)
        {
            text = "";
        }
        code = "edit_one";

        $.ajax({
            url: "/local/components/cod/pro/ajax.php",
            type: "POST",
            data: { data: data, code: code }
        }).done(function ()
        {
            $(th)
                .parent()
                .find(".color_value")
                .html(text + "<br>");
            $(th).remove();
        });
    });
