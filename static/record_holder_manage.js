$(document).ready(function () {
  ajax_button_click($('#new-button'), 'dark', window.location.href, () => { return { type: 'new', }; }, () => location.reload(), norm_wrap);
});
$(document).ready(function () {
  $('#import-button').on("click", function () {
    var formData = new FormData();
    var name = $("#csv-upload").val();
    formData.append('csv', $("#csv-upload")[0].files[0]);
    $.ajax({
      url: '/record/import_record_holder',
      type: 'post',
      async: false,
      data: formData,
      processData: false,
      contentType: false,
      success: function (res) {
        if (res["code"] == 1) {
          Swal.fire({
            title: 'Success',
            text: res["message"],
            icon: 'success',
          });
        } else {
          if (res["message"]) {
            Swal.fire({
              title: 'Failure',
              text: res["message"],
              icon: 'error'
            });
          } else {
            Swal.fire({
              title: 'Failure',
              text: '请求错误',
              icon: 'error'
            });
          }
        }
      },
      error: function () {
        Swal.fire({
          title: 'Failure',
          text: '请求错误',
          icon: 'error'
        });
      }
    })
  })
});
$(document).ready(function () {
  $('#export-button').on("click", function () {
    window.location.href = "/record/export_record_holder";
  });
});
