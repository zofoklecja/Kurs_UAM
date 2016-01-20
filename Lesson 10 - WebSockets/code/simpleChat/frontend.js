$(function () {
    
    var content = $('#content');
    var input = $('#input');
    var status = $('#status');
    
    // if user is running mozilla then use it's built-in WebSocket
    window.WebSocket = window.WebSocket || window.MozWebSocket;

    var connection = new WebSocket('ws://127.0.0.1:1337');

    // open, message, error implementation goes here
    var chat = document.getElementById('input');    
    
    
    function sendMessage(event) {
        if (event.keyCode == 13) {
            console.log("enter w inpucie");
            connection.send(chat.value);
        }
    }
    
    connection.onmessage = function (event) {
        var data = event.data;
        if (event.type = message) {
            
        }
        console.log(data);
    }
    
    chat.addEventListener('keypress', sendMessage);
    
});