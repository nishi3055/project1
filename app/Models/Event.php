<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'detail', 'start_date', 'end_date', 'user_id'];

    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function updateEvent($data)
    {
        $this->update($data);
    }

    public function getEventDetails()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'detail' => $this->detail,
            'start_date' => $this->start_date->toISOString(),
            'end_date' => $this->end_date->toISOString(),
        ];
    }
    public function messages()
    {
    return $this->hasMany(Message::class);
    }
}