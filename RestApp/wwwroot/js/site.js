// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$().ready(function () {
    $('#btnAdd').click(function () {
        $.ajax({
            url: 'api/TodoList',
            data: "'" + $('#txtAdd').val() + "'",
            contentType: "application/json",
            method: 'POST'
        }).done(function () {
            $('#todoList').append('<li>' + $('#txtAdd').val() + '<button type="button" class="btn btn-danger btn-xs btnRemove"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>Eliminar</button></li>');
        });
    });

    $('button.btnRemove').on('click', function () {
        $(this).closest('li').remove();
    });
});

