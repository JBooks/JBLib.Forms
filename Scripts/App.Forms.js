(function ($) {
    $.fn.extend({

        prepareRichEditor: function (options) {

            var defaults = {
                idir: "/Content/HtmlBox/Images/",
                about: false,
                toolbars: [
	                     ["cut", "copy", "paste", "separator_dots", "bold", "italic", "underline", "strike", "sub", "sup",
                         "separator_dots", "undo", "redo", "separator_dots",
		                 "left", "center", "right", "justify", "separator_dots", "ol", "ul", "indent",
                         "outdent", "separator_dots", "link", "unlink", "image", "code",
                        "removeformat", "striptags", "separator_dots", "quote", "paragraph", "hr"]
                         , ["separator", "formats", "fontsize", "fontfamily", "separator", "fontcolor"]
	                ],
                icons: "silk",
                skin: "green"
            }

            var options = $.extend(defaults, options);

            return this.each(function () {

                var o = options;

                var e = $(this);

                e.htmlbox(options);

            });

            return $(this);
        }
    });

})(jQuery);



(function ($) {
    $.fn.extend({

        prepareForm: function (options) {


            var formDefaults = {
                labelSuffix: ":",
                labelLocation: "left",
                labelAlignment: "left",
                labelPaddingRight: "5px",
                labelWidth: "120px",
                errorLocation: "right",
                requireFieldCss: "required",
                errorPaddingleft: "5px",
                adjustActionArea: ""
            };

            var options = $.extend(formDefaults, options);

            return this.each(function () {

                var o = options;

                var form = $(this);


                if (o.labelSuffix.length > 0) {
                    $("div.editor-label label", form).append(o.labelSuffix);
                }

                // Apply label width.
                if (o.labelWidth.length > 0) {
                    $("div.editor-label", form).css("width", o.labelWidth);
                }


                // Show label to left of the field.
                if (o.labelLocation.length > 0 && o.labelLocation.toLowerCase() == "left") {
                    $("div.editor-label", form).css("float", "left");
                    $("div.editor-field", form).css("float", "left");
                    $("div.editor", form).append("<div class='form-clear-fix'></div>");
                }

                // Align label to right.
                if (o.labelAlignment.length > 0 && o.labelAlignment.toLowerCase() == "right") {
                    $("div.editor-label", form).css("text-align", "right");
                }

                // Apply label padding right.
                if (o.labelPaddingRight.length > 0) {
                    $("div.editor-label", form).css("padding-right", o.labelPaddingRight);
                }


                // Show error in desired location.
                if (o.errorLocation.length > 0 && o.errorLocation.toLowerCase() == "right") {
                    $("div.editor-field", form).append("<div class='form-clear-fix'></div>");
                    $("div.input-area", form).css("float", "left");
                    $("div.input-validation-area", form).css("float", "left");
                    $("div.input-validation-area", form).css("padding-left", o.errorPaddingleft);


                }
                else {
                    $("div.input-area", form).css("float", "none");
                    $("div.input-validation-area", form).css("float", "none");
                }




                if (o.adjustActionArea.length > 0 && o.adjustActionArea.toLowerCase() != 'false') {

                    var paddingWidth = "";
                    if (o.adjustActionArea.toLowerCase() == "bylabelwidth" || o.adjustActionArea.toLowerCase() == "usinglabelwidth") {
                        paddingWidth = o.labelWidth;
                        if (o.labelAlignment.toLowerCase() == "right") {
                            paddingWidth = (parseInt(paddingWidth.replace("px", "")) + parseInt(o.labelPaddingRight.replace("px"))).toString() + "px";
                        }
                    }
                    else
                        paddingWidth = o.adjustActionArea;
                    $(".form-action-area", form).css("padding-left", paddingWidth);
                }

            });

            return $(this);
        },


        adjustFieldWidth: function (width, inputFieldTypes) {
            var form = $(this);

            if (inputFieldTypes == null) {
                $('input[type="text"], input[type="password", input=[type="select"]', form).css("width", width);
            }
            else {

                var fields = inputFieldTypes.split(",");
                var filters = "";
                for (i = 0; i < fields.length; i++) {
                    if (i > 0)
                        filters = ", " + filters;
                    filters += "input[type='" + fields[i] + "']";
                }
                $(filters, form).css("width", width);
            }
        }

    });

})(jQuery);




