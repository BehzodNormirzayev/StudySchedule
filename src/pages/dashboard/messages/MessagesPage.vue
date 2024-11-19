<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Sidebar -->
    <div class="w-80 border-r bg-white">
      <div class="p-4 border-b">
        <div class="flex items-center space-x-2 mb-4">
          <a-input placeholder="Search" class="bg-gray-50">
            <template #prefix>
              <SearchIcon class="h-4 w-4 text-gray-400" />
            </template>
          </a-input>
        </div>
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold">Conversations</h2>
          <div class="flex space-x-2">
            <a-button type="text">
              <template #icon><SearchIcon class="h-4 w-4" /></template>
            </a-button>
            <a-button type="text">
              <template #icon><PlusIcon class="h-4 w-4" /></template>
            </a-button>
          </div>
        </div>
      </div>

      <div class="overflow-y-auto h-full">
        <!-- Groups Section -->
        <div class="p-4">
          <h3 class="text-sm font-medium text-gray-500 mb-2">Groups</h3>
          <div
            v-for="group in groups"
            :key="group.id"
            class="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
          >
            <a-avatar :size="40" class="bg-green-100 text-green-600">
              {{ group.name[0] }}
            </a-avatar>
            <div class="ml-3 flex-1">
              <div class="flex justify-between">
                <span class="font-medium">{{ group.name }}</span>
                <span class="text-sm text-gray-400">12:04</span>
              </div>
              <p class="text-sm text-gray-500 truncate">{{ group.lastMessage }}</p>
            </div>
            <a-badge v-if="group.unread" :count="group.unread" class="ml-2" />
          </div>
        </div>

        <!-- Direct Messages Section -->
        <div class="p-4">
          <h3 class="text-sm font-medium text-gray-500 mb-2">Direct Messages</h3>
          <div
            v-for="dm in directMessages"
            :key="dm.id"
            class="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
          >
            <a-avatar :size="40">
              <template #icon><UserIcon /></template>
            </a-avatar>
            <div class="ml-3 flex-1">
              <div class="flex justify-between">
                <span class="font-medium">{{ dm.name }}</span>
                <span class="text-sm text-gray-400">12:04</span>
              </div>
              <p class="text-sm text-gray-500 truncate">{{ dm.message }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Chat Area -->
    <div class="flex-1 flex flex-col">
      <!-- Chat Header -->
      <div class="p-4 border-b bg-white flex justify-between items-center">
        <div class="flex items-center">
          <a-avatar :size="40">
            <template #icon><UserIcon /></template>
          </a-avatar>
          <div class="ml-3">
            <h2 class="font-semibold">Oscar Holloway</h2>
            <p class="text-sm text-gray-500">UI/UX Designer</p>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <a-button type="text">
            <template #icon><SearchIcon class="h-4 w-4" /></template>
          </a-button>
          <a-button type="text">
            <template #icon><PushPinIcon class="h-4 w-4" /></template>
          </a-button>
          <a-button type="text">
            <template #icon><MoreVerticalIcon class="h-4 w-4" /></template>
          </a-button>
        </div>
      </div>

      <!-- Messages Area -->
      <div class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        <div class="text-center">
          <span class="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
            Friday, September 8
          </span>
        </div>

        <div
          v-for="message in messages"
          :key="message.id"
          :class="['flex', message.sender === 'You' ? 'justify-end' : 'justify-start']"
        >
          <div :class="['flex', message.sender === 'You' ? 'flex-row-reverse' : 'flex-row', 'items-start max-w-2xl']">
            <a-avatar v-if="message.sender !== 'You'" :size="32" class="mt-1">
              <template #icon><UserIcon /></template>
            </a-avatar>
            <div :class="['mx-2', message.sender === 'You' ? 'items-end' : 'items-start']">
              <div class="flex items-center mb-1">
                <span class="text-sm text-gray-500">{{ message.sender }}</span>
                <span class="text-xs text-gray-400 ml-2">{{ message.time }}</span>
              </div>
              <div
                :class="[
                  'rounded-lg p-3',
                  message.sender === 'You'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-800'
                ]"
              >
                {{ message.message }}
                <div
                  v-if="message.attachment"
                  class="mt-2 bg-blue-50 text-blue-500 rounded p-2 flex items-center"
                >
                  <PaperclipIcon class="h-4 w-4 mr-2" />
                  {{ message.attachment }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Message Input -->
      <div class="p-4 bg-white border-t">
        <div class="flex items-center space-x-2">
          <a-button type="text">
            <template #icon><PaperclipIcon class="h-4 w-4" /></template>
          </a-button>
          <a-input v-model:value="newMessage" placeholder="Type your message here..." class="flex-1" />
          <a-button type="text">
            <template #icon><SmileIcon class="h-4 w-4" /></template>
          </a-button>
          <a-button type="primary" class="bg-blue-500 hover:bg-blue-600" @click="sendMessage">
            <template #icon><SendIcon class="h-4 w-4" /></template>
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import {
  SearchIcon,
  PlusIcon,
  UserIcon,
  PaperclipIcon,
  SmileIcon,
  SendIcon,
  MoreVerticalIcon,
  PushPinIcon
} from '@heroicons/vue/outline'

export default defineComponent({
  name: 'MessengerApp',
  
  components: {
    SearchIcon,
    PlusIcon,
    UserIcon,
    PaperclipIcon,
    SmileIcon,
    SendIcon,
    MoreVerticalIcon,
    PushPinIcon
  },

  setup() {
    const groups = ref([
      { id: 1, name: 'Medical App Team', lastMessage: 'Caroline: Hi guys! I\'ve shared yo...', unread: 12 },
      { id: 2, name: 'Food Delivery Service', lastMessage: 'Olive: Hi guys! I\'ve shared yo...', unread: 2 }
    ])

    const directMessages = ref([
      { id: 1, name: 'Garrett Watson', message: 'Hi! Please, change the statu...' },
      { id: 2, name: 'Caroline Santos', message: 'Hi! Please, change the statu...' },
      { id: 3, name: 'Leon Nunez', message: 'Hi! Please, change the statu...' },
      { id: 4, name: 'Oscar Holloway', message: 'Hi! Please, change the statu...' },
      { id: 5, name: 'Ralph Harris', message: 'Hi! Please, change the statu...' }
    ])

    const messages = ref([
      { id: 1, sender: 'You', message: 'Hey there!', time: '10:42' },
      { id: 2, sender: 'Oscar Holloway', message: 'Hello! How are you?', time: '10:43' },
      { id: 3, sender: 'You', message: 'All good here. You?', time: '10:44' }
    ])

    const newMessage = ref('')

    const sendMessage = () => {
      if (newMessage.value.trim()) {
        messages.value.push({ id: messages.value.length + 1, sender: 'You', message: newMessage.value, time: '12:00' })
        newMessage.value = ''
      }
    }

    return {
      groups,
      directMessages,
      messages,
      newMessage,
      sendMessage
    }
  }
})
</script>

<style scoped>
/* Add any necessary styles here */
</style>
