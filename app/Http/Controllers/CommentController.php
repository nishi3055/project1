<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use App\Models\Event;

class ChatController extends Controller
{
    // メッセージ送信処理
    public function send(Request $request, Event $event)
    {
        $request->validate([
            'message' => 'required|string',
        ]);

        Message::create([
            'event_id' => $event->id,
            'user_id' => auth()->id(),
            'message' => $request->message,
        ]);

        return response()->json(['success' => true]);
    }

    // メッセージ取得処理
    public function fetchMessages(Event $event)
    {
        $messages = $event->messages()->with('user')->latest()->get();
        return response()->json($messages);
    }
}
