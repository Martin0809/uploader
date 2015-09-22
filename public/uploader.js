;(function ($) {
	var defaultVal = {
		type: "image",
		max: 4,
		size: 5 * 1024,
		fail: function () {return;},
		method: "POST",
		url: "",
		success: function () {return;},
		error: function () {return;}
	};
	$.fn.uploader = function (options) {
		var opts = $.extend(defaultVal, options);
		return this.each(function () {
			if(typeof FormData === "undefined") alert("请使用现代浏览器");

			var obj = $(this);
			var fileList = obj[0].files;
			if(fileList.length === 0) return;

			var localSrcs = [];
			var len = fileList.length > opts.max ? opts.max : fileList.length;
			for(var i = 0; i < len; i++) {
				localSrcs.push(window.URL.createObjectURL(fileList[i]));

				if(fileList[i].type.split("/")[0] == opts.type && fileList[i].size <= opts.size * 1024) {
					var formdata = new FormData();
					formdata.append("files" + i, fileList[i]);
					$.ajax({
						type: opts.method,
						url: opts.url,
						data: formdata,
						contentType: false,
						processData: false,
						success: opts.success,
						error: opts.error
					});
				} else {
					opts.fail();
				}
			}
		});
	};
})(jQuery);