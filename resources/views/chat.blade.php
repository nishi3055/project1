@extends('layouts.app')

@section('content')
<div class="container">
    <h1>チャット: {{ $event->title }}</h1>
    <div id="chat-messages" class="mb-4" style="height: 400px; overflow-y: scroll; border: 1px solid #ccc; padding: 10px;">
        @foreach($messages as $message)
            <div class="message">
                <strong>{{ $message->user->name }}:</strong> {{ $message->content }}
            </div>
        @endforeach
    </div>
    <form id="chat-form">
        @csrf
        <div class="form-group">
            <input type="text" id="message-input" class="form-control" placeholder="メッセージを入力...">
        </div>
        <button type="submit" class="btn btn-primary">送信</button>
    </form>
</div>
@endsection

@push('scripts')
<script>
    const eventId = {{ $event->id }};
</script>
@endpush