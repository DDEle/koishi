<template>
  <chat-panel class="page-chat" :messages="messages" pinned
    v-model:active-key="index" :item-class="getItemClass"
    @click="handleClick" @send="handleSend">
    <template #default="message">
      <div class="quote" v-if="message.quote" @click="onClickQuote(message.quote.messageId)">
        <img class="quote-avatar" :src="message.quote.author.avatar"/>
        <span class="username">{{ message.quote.author.username }}</span>
        <span class="abstract">{{ formatAbstract(message.quote.abstract) }}</span>
      </div>
      <template v-if="isSuccessive(message, message.index)">
        <span class="timestamp">{{ formatTime(new Date(message.timestamp)) }}</span>
      </template>
      <template v-else>
        <img class="avatar" :src="message.avatar"/>
        <div class="header" :ref="el => divs[message.messageId] = el?.['parentElement']">
          <span class="channel">{{ message.channelName || '私聊' }}</span>
          <span class="username">{{ message.username }}</span>
          <span class="timestamp">{{ formatDateTime(new Date(message.timestamp)) }}</span>
        </div>
      </template>
      <chat-message :content="message.content"/>
    </template>
    <template #footer>
      <p class="hint">
        <template v-if="activeMessage">发送到频道：{{ activeMessage.channelName }}</template>
        <template v-else>点击消息已选择要发送的频道。</template>
      </p>
    </template>
  </chat-panel>
</template>

<script lang="ts" setup>

import { config, receive, send } from '~/client'
import { ref, watch } from 'vue'
import ChatPanel from './utils/panel.vue'
import ChatMessage from './utils/message.vue'
import type { Message } from '@koishijs/plugin-chat/src'

namespace storage {
  export function get(key: string) {
    if (typeof localStorage === 'undefined') return
    const rawData = localStorage.getItem('koishi:' + key)
    if (!rawData) return
    try {
      return JSON.parse(rawData)
    } catch {}
  }

  export function set(key: string, value: any) {
    if (typeof localStorage === 'undefined') return
    localStorage.setItem('koishi:' + key, JSON.stringify(value))
  }

  export function create<T>(key: string, fallback?: T, merge?: boolean) {
    const value = get(key)
    const wrapper = ref<T>(merge ? { ...fallback, ...value } : value || fallback)
    watch(wrapper, () => set(key, wrapper.value), {
      deep: typeof fallback === 'object',
    })
    return wrapper
  }
}

const pinned = ref(true)
const index = ref<string>()
const activeMessage = ref<Message>()
const messages = storage.create<Message[]>('chat', [])
const divs = ref<Record<string, HTMLElement>>({})

receive('chat', (body) => {
  messages.value.push(body)
  messages.value.splice(0, messages.value.length - config.maxMessages)
})

function isSuccessive({ quote, userId, channelId }: Message, index: number) {
  const prev = messages.value[index - 1]
  return !quote && prev && prev.userId === userId && prev.channelId === channelId
}

function getItemClass(message: Message, index: number) {
  return isSuccessive(message, index) ? 'successive' : ''
}

function handleClick(message: Message) {
  activeMessage.value = message
}

function handleSend(content: string) {
  if (!activeMessage.value) return
  pinned.value = false
  const { platform, selfId, channelId, guildId } = activeMessage.value
  send('chat', { content, platform, selfId, channelId, guildId })
}

function onClickQuote(id: string) {
  index.value = id
}

function formatAbstract(content: string) {
  if (content.length < 50) return content
  return content.slice(0, 48) + '……'
}

function formatTime(date: Date) {
  return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
}

function formatDateTime(date: Date) {
  const now = new Date()
  let output = formatTime(date)
  if (date.toLocaleDateString() === now.toLocaleDateString()) return output
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${output}`
}

</script>

<style lang="scss">

$avatarSize: 2.5rem;
$padding: $avatarSize + 1rem;

.page-chat {
  position: relative;
  height: calc(100vh - 4rem);

  .successive {
    .timestamp {
      position: absolute;
      visibility: hidden;
      left: 0;
      width: $padding + 1rem;
      text-align: center;
      user-select: none;
    }

    &:hover {
      .timestamp {
        visibility: initial;
      }
    }
  }

  .k-chat-message:not(.successive):not(:first-child) {
    margin-top: 0.5rem;
  }

  .avatar {
    position: absolute;
    margin-top: 4px;
    width: $avatarSize;
    height: $avatarSize;
    border-radius: $avatarSize;
    user-select: none;
  }

  .quote {
    position: relative;
    font-size: 0.875rem;
    margin-left: $padding;
    cursor: pointer;
    * + span {
      margin-left: 0.5rem;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      box-sizing: border-box;
      top: 50%;
      right: 100%;
      bottom: 0;
      left: -36px;
      margin-right: 4px;
      margin-top: -1px;
      margin-left: -1px;
      margin-bottom: calc(.125rem - 4px);
      border-left: 1px solid #4f545c;
      border-top: 1px solid #4f545c;
      border-top-left-radius: 6px;
    }

    .quote-avatar {
      width: 1rem;
      height: 1rem;
      border-radius: 1rem;
      vertical-align: text-top;
    }

    .abstract {
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .header {
    margin-left: $padding;
    * + span {
      margin-left: 0.5rem;
    }
  }

  .username {
    font-weight: bold;
    line-height: 1.375rem;
  }

  .timestamp {
    color: #72767d;
    font-size: 0.75rem;
  }

  .k-message {
    margin-left: $padding;
  }

  p.hint {
    color: #72767d;
    margin: 0.5rem 0 -0.5rem;
  }
}

</style>
