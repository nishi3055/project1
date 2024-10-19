<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>夫婦共有アプリ</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Noto Sans JP"', 'sans-serif'],
                    },
                    colors: {
                        'primary': '#3A506B',
                        'secondary': '#5BC0BE',
                        'accent': '#FFD700',
                        'background': '#F0F4F8',
                    }
                }
            }
        }
    </script>
</head>
<body class="antialiased bg-background text-primary font-sans">
    <div class="min-h-screen flex flex-col justify-center items-center p-4">
        <div class="max-w-4xl w-full bg-white shadow-xl rounded-lg overflow-hidden">
            <header class="bg-primary text-white p-10 text-center">
                <h1 class="text-4xl font-bold mb-2">夫婦共有アプリ</h1>
                <p class="text-sm uppercase tracking-wider">二人の絆を深める日々の記録</p>
            </header>

            <main class="p-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    @auth
                        <a href="{{ url('/dashboard') }}" class="group block p-8 bg-white border-2 border-primary rounded-lg text-center transition duration-300 ease-in-out hover:bg-primary hover:text-white">
                            <h2 class="text-2xl font-bold mb-2 group-hover:text-accent">ダッシュボード</h2>
                            <p class="text-sm opacity-75">今日の予定と記録を確認</p>
                        </a>
                    @else
                        <a href="{{ route('login') }}" class="group block p-8 bg-white border-2 border-secondary rounded-lg text-center transition duration-300 ease-in-out hover:bg-secondary hover:text-white">
                            <h2 class="text-2xl font-bold mb-2 group-hover:text-accent">ログイン</h2>
                            <p class="text-sm opacity-75">アカウントにアクセス</p>
                        </a>
                        @if (Route::has('register'))
                            <a href="{{ route('register') }}" class="group block p-8 bg-white border-2 border-secondary rounded-lg text-center transition duration-300 ease-in-out hover:bg-secondary hover:text-white">
                                <h2 class="text-2xl font-bold mb-2 group-hover:text-accent">新規登録</h2>
                                <p class="text-sm opacity-75">新しいアカウントを作成</p>
                            </a>
                        @endif
                    @endauth
                    
                    <a href="#calendar" class="group block p-8 bg-white border-2 border-primary rounded-lg text-center transition duration-300 ease-in-out hover:bg-primary hover:text-white">
                        <h2 class="text-2xl font-bold mb-2 group-hover:text-accent">カレンダー</h2>
                        <p class="text-sm opacity-75">二人の予定を一括管理</p>
                    </a>
                    
                    <a href="#memories" class="group block p-8 bg-white border-2 border-primary rounded-lg text-center transition duration-300 ease-in-out hover:bg-primary hover:text-white">
                        <h2 class="text-2xl font-bold mb-2 group-hover:text-accent">思い出</h2>
                        <p class="text-sm opacity-75">大切な瞬間を振り返る</p>
                    </a>
                </div>
            </main>

            <footer class="bg-primary text-white p-4 text-center">
                <p class="text-sm">&copy; 2024 夫婦共有アプリ. All rights reserved.</p>
            </footer>
        </div>
    </div>
</body>
</html>