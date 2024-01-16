<script setup lang="ts">
// const navigation = [
//   { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
//   { name: 'Team', href: '#', icon: UsersIcon, current: false },
//   { name: 'Projects', href: '#', icon: FolderIcon, current: false },
//   { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
//   { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
//   { name: 'Reports', href: '#', icon: ChartPieIcon, current: false }
// ]

import { sidebarNavigation } from '@/constants'
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false }
]
</script>

<template>
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    TODO: sidebar --> -->
    <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
      <div class="flex h-16 shrink-0 items-center">
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=white"
          alt="Your Company"
        />
      </div>
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              <li v-for="item in sidebarNavigation" :key="item.id">
                <a :href="item.href">
                  <!-- <component
                    :is="item.icon"
                    :class="[
                      item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                      'h-6 w-6 shrink-0'
                    ]"
                    aria-hidden="true"
                  /> -->
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div class="text-xs font-semibold leading-6 text-indigo-200">Your teams</div>
            <ul role="list" class="-mx-2 mt-2 space-y-1">
              <li v-for="team in teams" :key="team.name">
                <a
                  :href="team.href"
                  :class="[
                    team.current
                      ? 'bg-indigo-700 text-white'
                      : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                  ]"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                    >{{ team.initial }}</span
                  >
                  <span class="truncate">{{ team.name }}</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="mt-auto">
            <a
              href="#"
              class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
            >
              <Cog6ToothIcon
                class="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                aria-hidden="true"
              />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
