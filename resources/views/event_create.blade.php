<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>イベント登録</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <h1>イベント登録</h1>
    <p>日付: {{ $date }}</p>

    <div id="chat-box">
        <div id="messages"></div>
        <input type="text" id="message-input" placeholder="メッセージを入力">
        <button id="send-button">送信</button>
    </div>

    <script>
        // CSRFトークンをAjaxリクエストに追加
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        // メッセージを送信する処理
        $('#send-button').click(function() {
            var message = $('#message-input').val();
            $.ajax({
                type: 'POST',
                url: '/events/message',
                data: { message: message },
                success: function(response) {
                    $('#message-input').val('');
                    loadMessages();
                }
            });
        });

        // メッセージをロードする処理
        function loadMessages() {
            $.ajax({
                type: 'GET',
                url: '/events/messages',
                success: function(response) {
                    $('#messages').html('');
                    response.forEach(function(message) {
                        $('#messages').append('<div>' + message.text + '</div>');
                    });
                }
            });
        }

        // 定期的にメッセージを取得
        setInterval(loadMessages, 2000);
    </script>
</body>
</html>
