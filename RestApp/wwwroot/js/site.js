// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$().ready(function () {
    function remove() {
        var currentLi = $(this).closest('li');

        $.ajax({
            url: 'api/TodoList',
            data: "'" + $('#todoList li').index(currentLi) + "'",
            contentType: "application/json",
            method: 'DELETE'
        }).done(function () {
            currentLi.remove();
        });
    }

    function add() {
        $.ajax({
            url: 'api/TodoList',
            data: "'" + $('#txtAdd').val() + "'",
            contentType: "application/json",
            method: 'POST'
        }).done(function () {
            $('#todoList').append('<li>' + $('#txtAdd').val() + ' <button type="button" class="btn btn-danger btn-xs btnRemove"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></li>');
            $('#txtAdd').val('');

            $('.btnRemove').off('click', remove);
            $('.btnRemove').on('click', remove);
        });
    }

    
    $('#btnAdd').click(add);

    $('#txtAdd').keypress(function (event) {
        if (event.which === 13) {
            add();
        }
    });
});

