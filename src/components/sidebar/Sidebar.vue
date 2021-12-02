<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h5 style="padding:10px; margin-top:20px">
      <span v-if="collapsed">
        <div>P</div>
        <i class="fas fa-glass-cheers" />
        <div>M</div>
      </span>
      <div class="row" v-else>
        <div class="col">
          <p>Party</p>
        </div>
        <div class="col" style="margin-left:-65px">
          <i class="fas fa-glass-cheers" />
        </div>
        <div class="col" style="margin-left:-60px; margin-right:15px">
          <p>Maker</p>
        </div>
      </div>
    </h5>

    <div class="flex-column mb-auto">
      <SidebarLink to="/Home" icon="fas fa-home">Home</SidebarLink>
      <SidebarLink to="/Schedule" icon="fas fa-calendar-alt">Schedule</SidebarLink>
      <SidebarLink to="/UserInfo" icon="fas fa-user">User Info</SidebarLink>
      <SidebarLink to="/CompanyInfo" icon="fas fa-building">Company Info</SidebarLink>
    </div>

    <div class="flex-column mb-auto" style="margin-top:250px">
      <hr>
      <SidebarLink to="/" icon="fas fa-sign-out-alt" style="background-color:#BD4DF2">Log Out</SidebarLink>
    </div>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<style>
:root {
  --sidebar-bg-color: #17181C;
  --sidebar-item-hover: #3F5AE8;
  --sidebar-item-active: #3F5AE8;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.6em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
