<template>
  <div class="homepage" ref="root">
    <div class="screen flex screen-1">
      <h1><span class="koi">Koi</span>shi.js</h1>
      <p class="desc">
        CROSS-PLATFORM CHATBOT FRAMEWORK
        <br v-if="width < 600">
        MADE WITH <span class="koi">LOVE</span>
      </p>
      <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-10 h-10">
        <g>
          <path fill="var(--c-love)" d="M160 256.14l-56.51 56.47-96.44-96.15a23.77 23.77.0 01-.18-33.61l.18-.18 22.59-22.51a23.94 23.94.0 0133.85.0z"></path>
          <path fill="currentcolor" d="M313 182.57 290.21 160a23.94 23.94.0 00-33.85.0L103.47 312.61 143 352l.06.06a24 24 0 0033.93-.16L313 216.36l.18-.17a23.78 23.78.0 00-.18-33.62z"></path>
        </g>
      </svg>
    </div>

    <div class="screen flex screen-2">
      <div class="feature-view">
        <div class="introduction">
          <h1>开箱即用</h1>
          <p>高度便利的控制台让你无需基础让你在几分钟之内搭建自己的聊天机器人。</p>
          <ul>
            <li>提供在线插件市场，一键下载安装插件</li>
            <li>支持 QQ，Telegram，Discord 等主流聊天平台</li>
            <li>随时随机通过控制面板监控运行状态，甚至上号聊天</li>
          </ul>
          <p>查看指南：<router-link to="/guide/introduction/console">创建 Koishi 控制台项目</router-link></p>
        </div>
        <div class="image">此处应该有一张图</div>
      </div>
    </div>

    <div class="screen flex screen-3">
      <div class="feature-view">
        <div class="introduction">
          <h1>功能强大</h1>
          <p>中间件，指令系统，插件系统，数据库，跨平台……它们可以让你顺利实现任何需求。</p>
        </div>
        <div class="image">此处应该有一张图</div>
      </div>
    </div>

    <div class="screen flex screen-4">
      <div class="introduction center">
        <h1>生态丰富</h1>
        <p>官方提供了大量插件和解决方案，覆盖了绝大多数常见需求的同时，也为开发提供了绝佳的范例。</p>
      </div>
    </div>

    <div class="screen flex screen-5">
      <div class="introduction center">
        <h1>专为开发者打造</h1>
        <p>Koishi 更为开发者提供了众多专业功能，使开发者得以在各种复杂需求中构建规模化的解决方案。</p>
      </div>
      <div class="advantages">
        <div class="advantage">
          <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M0 512v512h1024V0H0z m825.216-40.789333c26.026667 6.485333 45.824 18.048 64.042667 36.906666 9.429333 10.069333 23.424 28.416 24.533333 32.853334 0.341333 1.28-44.202667 31.146667-71.168 47.914666-0.981333 0.64-4.906667-3.584-9.258667-10.069333-13.226667-19.2-27.008-27.477333-48.128-28.928-31.061333-2.133333-51.029333 14.122667-50.858666 41.258667a37.546667 37.546667 0 0 0 4.352 19.2c6.826667 14.122667 19.541333 22.613333 59.306666 39.808 73.344 31.573333 104.704 52.352 124.202667 81.92 21.76 32.981333 26.666667 85.674667 11.861333 124.842666-16.213333 42.581333-56.533333 71.509333-113.28 81.066667-17.536 3.114667-59.136 2.645333-77.994666-0.768-41.130667-7.338667-80.128-27.648-104.192-54.314667-9.429333-10.368-27.818667-37.546667-26.666667-39.466666a67.413333 67.413333 0 0 1 9.386667-6.016c4.608-2.602667 21.802667-12.544 38.058666-21.973334l29.44-17.066666 6.186667 9.130666c8.618667 13.141333 27.434667 31.189333 38.826667 37.205334 32.682667 17.237333 77.525333 14.805333 99.626666-5.034667a37.674667 37.674667 0 0 0 13.354667-30.72c0-11.861333-1.493333-17.066667-7.68-26.026667-7.936-11.349333-24.192-20.906667-70.357333-40.96-52.821333-22.741333-75.562667-36.864-96.384-59.306666a135.04 135.04 0 0 1-28.117334-51.2c-3.882667-14.464-4.864-50.730667-1.792-65.322667 10.88-51.072 49.408-86.613333 105.002667-97.194667 18.048-3.413333 59.989333-2.133333 77.696 2.261334z m-240.384 42.752l0.341333 41.941333H451.84v378.709333H357.546667v-378.709333H224.341333v-41.130667c0-22.784 0.469333-41.813333 1.109334-42.24 0.512-0.682667 81.621333-1.024 179.925333-0.853333l178.986667 0.512z" fill="currentcolor"></path></svg></span>
          <h2>类型支持</h2>
          <p class="desc">Koishi 完全基于 TypeScript 开发，拥有顶级的类型支持，丰富的代码提示让你在编写代码的时候甚至无需查看文档。</p>
          <p class="learn-more"><router-link to="/">了解更多</router-link></p>
        </div>
        <div class="advantage">
          <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6h-172z" fill="currentcolor"/></svg></span>
          <h2>单元测试</h2>
          <p class="desc">所有核心功能均已经通过单元测试，既确保了可靠性，也为开发者提供了一套测试插件和定位问题的最佳实践。</p>
          <p class="learn-more"><router-link to="/">了解更多</router-link></p>
        </div>
        <div class="advantage">
          <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z" fill="currentcolor"/></svg></span>
          <h2>模块热重载</h2>
          <p class="desc">开发 Koishi 插件时，只需轻点保存即可热重载，无需频繁重启机器人，如同前端开发一样丝滑顺畅。</p>
          <p class="learn-more"><router-link to="/">了解更多</router-link></p>
        </div>
      </div>
    </div>

    <div class="screen screen-6">
      <div class="navigation">
        <div class="item guide" v-for="item in getSidebarItems('/guide/')" :key="item.link || item.text">
          <sidebar-item :item="item"></sidebar-item>
        </div>
        <template v-if="width >= 1200 && height >= 800">
          <div class="item api" v-for="item in getSidebarItems('/api/')" :key="item.link || item.text">
            <sidebar-item :item="item"></sidebar-item>
          </div>
        </template>
      </div>
    </div>

    <footer>
      MIT Licensed | Copyright © 2019-2022 Shigma
    </footer>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useWindowSize, useEventListener } from '@vueuse/core'
import { useThemeLocaleData, resolveArraySidebarItems } from '@vuepress/theme-default/lib/client/composables'
import SidebarItem from '@vuepress/theme-default/lib/client/components/SidebarItem.vue'

const { width, height } = useWindowSize()

function getSidebarItems(route: string) {
  const config = useThemeLocaleData().value
  return resolveArraySidebarItems(config.sidebar[route].filter(item => item.isGroup), 1)
}

const root = ref<HTMLElement>()

useEventListener('wheel', (event) => {
  if (Math.abs(event.deltaY) < 100 || event.ctrlKey || event.shiftKey) return
  event.preventDefault()
  root.value.scrollBy({
    top: innerHeight * Math.sign(event.deltaY),
    behavior: 'smooth',
  })
}, { passive: false })

</script>

<style lang="scss">

.homepage {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-y: auto;
  display: grid;
  grid-template-rows: repeat(5, 100vh);
  scroll-snap-type: y mandatory;

  .koi {
    color: var(--c-love);
  }

  .screen.flex {
    padding: 6rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 720px) {
      padding: 4rem;
    }

    @media (max-width: 480px) {
      padding: 4rem 3rem;
    }
  }

  .introduction.center {
    text-align: center;
  }

  h1 {
    margin: 0;
    font-weight: 400;
  }

  h2 {
    font-weight: 400;
  }

  > :nth-child(2n+1) {
    border-bottom: 1px solid var(--c-border);
    border-top: 1px solid var(--c-border);
    background-color: var(--c-bg-home);
    transition: var(--t-color);
  }
}

.screen {
  --c-text: var(--c-text-home);
  color: var(--c-text);
  transition: var(--t-color);
  scroll-snap-align: start;
}

.screen-1 {
  h1 {
    font-size: 3rem;
  }

  svg {
    position: absolute;
    opacity: 60%;
    bottom: 1.5rem;
    width: 1.5rem;
    animation: bounce 1s infinite;
  }

  .desc {
    color: var(--c-text-lightest);
    text-transform: uppercase;
    text-align: center;
    line-height: 2;
  }
}

.feature-view {
  max-width: 80rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  justify-items: center;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    .image {
      display: none;
    }
  }
}

.advantages {
  max-width: 60rem;
  transition: border-color var(--t-color);
  margin: 6rem 0 2rem;
  gap: 2rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 720px) {
    margin: 3rem 0 0;
    grid-template-columns: 1fr;
  }

  .advantage {
    display: grid;

    h2 {
      padding: 0;
      margin: 1rem;
      border-bottom: none;
    }

    .desc {
      margin: 0;
    }

    svg {
      height: 2rem;
    }

    @media (min-width: 720px) {
      text-align: center;
    }

    @media (max-width: 720px) {
      gap: 1rem .25rem;
      align-items: center;
      grid-template-columns: 3rem auto 4rem;

      .icon {
        text-align: center;
        grid-column: 1 / 2;
      }

      svg {
        height: 1.75rem;
      }

      h2 {
        margin: 0;
        text-align: left;
        grid-column: 2 / 3;
      }

      .desc {
        grid-column: 1 / 4;
      }

      .learn-more {
        margin: 0;
        grid-row: 1 / 2;
        grid-column: 3 / 4;
      }
    }
  }
}

.screen-6 {
  --nav-padding: 4rem;
  --max-height: calc(100vh - var(--navbar-height) - 10rem);

  padding: 2rem 0 2rem var(--nav-padding);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  height: var(--max-height);

  @media (max-width: 960px) {
    --nav-padding: 2rem;
  }
}

.navigation {
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  align-content: space-evenly;
  height: min-content;
  width: 100%;
  max-height: var(--max-height);
  transition: border-color var(--t-color);

  @media (max-width: 1200px) {
    max-height: min(var(--max-height), 600px);
  }

  .item {
    width: 12.5rem;
    &:last-child {
      padding-right: var(--nav-padding);
    }
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
}

.home footer {
  flex-shrink: 0;
  padding: calc(2.5rem - 1px);
  line-height: 1rem;
  text-align: center;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-50%);
    animation-timing-function: cubic-bezier(.8, 0, 1, 1);
  }

  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, .2, 1);
  }
}

</style>
