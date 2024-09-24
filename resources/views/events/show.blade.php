<!DOCTYPE html>
<html>
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href='{{ asset('css/app.css') }}' rel='stylesheet' />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <title>{{ $event->title }} - 詳細</title>
</head>
<body>
    <h1>{{ $event->title }}</h1>
    <p>{{ $event->detail }}</p>

    <h2>チャット</h2>
    <div id="chat-box">
        <ul id="chat-messages"></ul>
    </div>

    <form id="chat-form">
        <input type="text" id="chat-message" placeholder="メッセージを入力" required>
        <button type="submit">送信</button>
    </form>

    <script>
        // CSRFトークンのセットアップ
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        // メッセージ送信処理
        $('#chat-form').on('submit', function(e) {
            e.preventDefault();
            const message = $('#chat-message').val();

            $.ajax({
                url: '{{ route("chat.send", $event->id) }}',
                method: 'POST',
                data: { message: message },
                success: function(response) {
                    $('#chat-message').val('');  // 入力欄をクリア
                    fetchMessages();  // メッセージを再取得
                }
            });
        });

        // メッセージ取得処理
        function fetchMessages() {
            $.ajax({
                url: '{{ route("chat.messages", $event->id) }}',
                method: 'GET',
                success: function(response) {
                    let messages = '';
                    response.forEach(function(message) {
                        messages += '<li>' + message.user.name + ': ' + message.message + '</li>';
                    });
                    $('#chat-messages').html(messages);
                }
            });
        }

        // 3秒ごとにメッセージを取得（ポーリング）
        setInterval(fetchMessages, 3000);

        // 初期メッセージを取得
        fetchMessages();
    </script>
    
</body>
</html>
