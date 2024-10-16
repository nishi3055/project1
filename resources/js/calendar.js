import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import axios from 'axios';


let calendar;
let selectedEvent = null;
let selectedDate = null;

document.addEventListener('DOMContentLoaded', function () {
    const appUrl = document.getElementById('app-url').getAttribute('data-url');
    window.scheduleGetUrl = `${appUrl}/schedule-get`;
    console.log("App URL:", appUrl);

    // axios のベース URL を設定
    axios.defaults.baseURL = appUrl;

    initializeCalendar();
    setupEventListeners();
});

function initializeCalendar() {
    const calendarEl = document.getElementById("calendar");
    calendar = new Calendar(calendarEl, {
        plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,listWeek",
        },
        locale: "ja",
        selectable: true,
        select: handleDateSelect,
        eventClick: handleEventClick,
        events: fetchEvents
    });
    calendar.render();
}

function handleDateSelect(info) {
    selectedEvent = null;
    selectedDate = info.start;
    openModal('add');
}

function handleEventClick(info) {
    selectedEvent = info.event;
    selectedDate = null;
    openModal('edit');
    const chatButton = document.getElementById('chat-button');
    chatButton.style.display = 'inline-block'; style.display = 'inline-block';

    // チャットボタンのイベントリスナーを更新
    chatButton.onclick = function (e) {
        e.preventDefault();
        const eventId = selectedEvent.id;
        const url = `${new URL(window.scheduleGetUrl).origin}/events/${eventId}/chat`;
        window.location.href = url;
    };
}

function fetchEvents(info, successCallback, failureCallback) {
    axios.post(window.scheduleGetUrl, {
        start_date: info.start.valueOf(),
        end_date: info.end.valueOf(),
    })
        .then((response) => {
            successCallback(response.data);
        })
        .catch((error) => {
            console.error("Failed to fetch events:", error);
            failureCallback(error);
        });
}

function setupEventListeners() {
    document.getElementById('save-event').addEventListener('click', saveEvent);
    document.getElementById('delete-event').addEventListener('click', deleteEvent);
    document.getElementById('cancel-event').addEventListener('click', closeModal);
}

function saveEvent() {
    const eventId = document.getElementById('event-id').value;
    const eventName = document.getElementById('event-name').value.trim();
    const eventDetail = document.getElementById('event-detail').value.trim();
    const eventStart = document.getElementById('event-start').value;
    const eventEnd = document.getElementById('event-end').value;

    if (!eventName || !eventStart || !eventEnd) {
        showError('必須フィールドを入力してください');
        return;
    }

    const eventData = {
        event_name: eventName,
        event_detail: eventDetail,
        start_date: new Date(eventStart).valueOf(),
        end_date: new Date(eventEnd).valueOf(),
    };

    if (selectedEvent) {
        // 編集の場合
        eventData.id = eventId;
        axios.post(window.scheduleGetUrl.replace('schedule-get', 'schedule-update'), eventData)
            .then((response) => {
                selectedEvent.remove();
                calendar.addEvent({
                    id: response.data.id,
                    title: response.data.title,
                    start: response.data.start,
                    end: response.data.end,
                    extendedProps: { detail: response.data.extendedProps.detail }
                });
                closeModal();
            })
            .catch((error) => {
                console.error("Failed to update event:", error);
                showError('更新に失敗しました。もう一度お試しください。');
            });
    } else {
        // 新規追加の場合
        axios.post(window.scheduleGetUrl.replace('schedule-get', 'schedule-add'), eventData)
            .then((response) => {
                calendar.addEvent({
                    id: response.data.id,
                    title: response.data.title,
                    start: response.data.start,
                    end: response.data.end,
                    extendedProps: { detail: response.data.extendedProps.detail }
                });
                closeModal();
            })
            .catch((error) => {
                console.error("Failed to save event:", error);
                showError('登録に失敗しました。もう一度お試しください。');
            });
    }
}

function deleteEvent() {
    if (selectedEvent) {
        axios.post(window.scheduleGetUrl.replace('schedule-get', 'schedule-delete'), { id: selectedEvent.id })
            .then(() => {
                selectedEvent.remove();
                closeModal();
            })
            .catch((error) => {
                console.error("Failed to delete event:", error);
                showError('削除に失敗しました。もう一度お試しください。');
            });
    }
}

function openModal(mode) {
    const modal = document.getElementById('eventModal');
    const modalTitle = document.getElementById('modalTitle');
    const deleteButton = document.getElementById('delete-event');
    const eventIdInput = document.getElementById('event-id');
    const eventNameInput = document.getElementById('event-name');
    const eventDetailInput = document.getElementById('event-detail');
    const eventStartInput = document.getElementById('event-start');
    const eventEndInput = document.getElementById('event-end');

    if (mode === 'edit') {
        modalTitle.textContent = 'イベントを編集';
        eventIdInput.value = selectedEvent.id;
        eventNameInput.value = selectedEvent.title;
        eventDetailInput.value = selectedEvent.extendedProps.detail || '';
        eventStartInput.value = selectedEvent.start.toISOString().slice(0, 16);
        eventEndInput.value = selectedEvent.end ? selectedEvent.end.toISOString().slice(0, 16) : selectedEvent.start.toISOString().slice(0, 16);
        deleteButton.style.display = 'inline-block';
        document.getElementById('chat-button').style.display = 'inline-block';
    } else {
        modalTitle.textContent = 'イベントを追加';
        eventIdInput.value = '';
        eventNameInput.value = '';
        eventDetailInput.value = '';
        eventStartInput.value = selectedDate.toISOString().slice(0, 16);
        eventEndInput.value = selectedDate.toISOString().slice(0, 16);
        deleteButton.style.display = 'none';
        document.getElementById('chat-button').style.display = 'none';
    }

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('eventModal').style.display = 'none';
    selectedEvent = null;
    selectedDate = null;
}

function showError(message) {
    alert(message);  // 簡単のため、アラートを使用
}