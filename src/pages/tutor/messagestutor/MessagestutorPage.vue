<template>
    <div class="h-screen bg-white flex text-gray-800">
      <!-- Left Sidebar -->
      <div class="w-80 border-r bg-gray-50 flex flex-col">
        <div class="p-4">
          <div class="flex justify-between items-center mb-4">
            <h1 class="text-xl font-semibold">Messenger</h1>
            <div class="flex gap-2">
              <button class="p-2 hover:bg-gray-200 rounded-full">
                <Search class="w-5 h-5" />
              </button>
              <button class="p-2 bg-blue-500 text-white rounded-full">
                <Plus class="w-5 h-5" />
              </button>
            </div>
          </div>
  
          <div class="space-y-4">
            <!-- Groups Section -->
            <div>
              <div class="flex items-center gap-2 text-blue-500 mb-2">
                <ChevronDown class="w-4 h-4" />
                <span>Groups</span>
              </div>
              <div class="space-y-2">
                <ChatItem
                  v-for="(chat, index) in groups"
                  :key="index"
                  :title="chat.title"
                  :message="chat.message"
                  :unread="chat.unread"
                  :isGroup="true"
                  :active="chat.active"
                />
              </div>
            </div>
  
            <!-- Direct Messages Section -->
            <div>
              <div class="flex items-center gap-2 text-blue-500 mb-2">
                <ChevronDown class="w-4 h-4" />
                <span>Direct Messages</span>
              </div>
              <div class="space-y-2">
                <ChatItem
                  v-for="(user, index) in directMessages"
                  :key="index"
                  :title="user.name"
                  :message="'Hi! Please, change the statu...'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Main Chat Area -->
      <div class="flex-1 flex flex-col">
        <!-- Chat Header -->
        <div class="h-16 border-b flex items-center justify-between px-4">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Folder class="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 class="font-semibold">Medical App Team</h2>
              <p class="text-sm text-gray-500">6 members</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button class="p-2 hover:bg-gray-100 rounded-full">
              <Search class="w-5 h-5" />
            </button>
            <button class="p-2 hover:bg-gray-100 rounded-full">
              <Bell class="w-5 h-5" />
            </button>
            <button class="p-2 hover:bg-gray-100 rounded-full">
              <MoreVertical class="w-5 h-5" />
            </button>
          </div>
        </div>
  
        <!-- Messages Area -->
        <div class="flex-1 overflow-y-auto p-4 space-y-4">
          <Message
            v-for="(message, index) in messages"
            :key="index"
            :sender="message.sender"
            :timestamp="message.timestamp"
            :isOwn="message.isOwn"
          >
            <template #default>
              <p>{{ message.text }}</p>
            </template>
          </Message>
        </div>
  
        <!-- Message Input -->
        <div class="border-t p-4">
          <div class="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
            <button class="p-2 hover:bg-gray-200 rounded-full">
              <Paperclip class="w-5 h-5" />
            </button>
            <button class="p-2 hover:bg-gray-200 rounded-full">
              <Link class="w-5 h-5" />
            </button>
            <button class="p-2 hover:bg-gray-200 rounded-full">
              <AtSign class="w-5 h-5" />
            </button>
            <input
              type="text"
              placeholder="Type your message here..."
              class="flex-1 bg-transparent outline-none"
              v-model="message"
            />
            <button class="p-2 hover:bg-gray-200 rounded-full">
              <Smile class="w-5 h-5" />
            </button>
            <button class="p-2 bg-blue-500 text-white rounded-full">
              <Send class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
  
      <!-- Right Sidebar -->
      <div class="w-80 border-l">
        <div class="p-4">
          <div class="flex items-center justify-between mb-4">
            <h2 class="font-semibold">Details</h2>
            <button class="p-2 hover:bg-gray-100 rounded-full">
              <X class="w-5 h-5" />
            </button>
          </div>
  
          <div class="space-y-6">
            <div>
              <h3 class="font-medium mb-2">Members</h3>
              <div class="space-y-2">
                <MemberItem
                  v-for="(member, index) in members"
                  :key="index"
                  :name="member.name"
                  :isYou="member.isYou"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Search, Plus, ChevronDown, Bell, MoreVertical, Paperclip, Link, AtSign, Smile, Send, X, Folder } from 'lucide-vue-next';
  
  const message = ref('');
  
  const directMessages = [
    { id: 1, name: 'Garrett Watson' },
    { id: 2, name: 'Caroline Santos' },
    { id: 3, name: 'Leon Nunez' },
    { id: 4, name: 'Oscar Holloway' },
    { id: 5, name: 'Ralph Harris' }
  ];
  
  const members = [
    { id: 1, name: 'Evan Yates', isYou: true },
    { id: 2, name: 'Blake Silva' },
    { id: 3, name: 'Olive Dixon' },
    { id: 4, name: 'Ellen Wong' },
    { id: 5, name: 'Lily Bradley' },
    { id: 6, name: 'Gerald Ingram' }
  ];
  
  const groups = [
    { title: 'Medical App Team', message: 'Caroline: Hi guys! I\'ve shared yo...', unread: 12, active: true },
    { title: 'Food Delivery Service', message: 'Olive: Hi guys! I\'ve shared yo...', unread: 1 }
  ];
  
  const messages = [
    { sender: 'Olive Dixon', timestamp: '12:04 AM', text: 'Hi, Evan! Nice to meet you too', isOwn: false },
    { sender: 'You', timestamp: '12:15 AM', text: 'Hi, Oscar! Nice to meet you', isOwn: true },
    { sender: 'Olive Dixon', timestamp: '12:04 AM', text: 'Hi! Please, change the status in this task', isOwn: false }
  ];
  </script>
  