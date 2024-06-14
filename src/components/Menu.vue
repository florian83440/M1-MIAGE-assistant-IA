<template>
  <nav class="sidebar">
    <div class="logo"><img src="@/assets/images/logo.png"></div>
    <div v-for="(menu, index) in menuItems" :key="index" class="menu-list">
      <div class="menu-item">
        <font-awesome-icon :icon="menu.icon" />
        <span>{{ menu.title }}</span>
      </div>
      <div v-for="(item, subIndex) in menu.items" :key="subIndex" class="dropdown">
        <router-link class="dropdown-item" :to="item.route">{{ item.name }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
    return {
      menuItems: [
        {
          title: 'MiageGPTools',
          icon: ['fas', 'tools'],
          items: [
            { name: 'Chatbot', route: '/chatbot' },
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.sidebar {
  margin: 10px;
  width: 60px;
  height: 98vh;
  position: fixed;
  background-color: white;
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
  border-radius: 10px;
  z-index: 99;
}

.sidebar .logo {
  border-radius: 10px;
  padding: 20px 20px;
}

.sidebar .menu-item {
  padding: 20px 20px;
  color: black;
  background-color: white;
  overflow: hidden;
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
}

.sidebar .menu-item span {
  padding-left: 40px;
}

.sidebar .menu-item a {
  display: inline;
}

.sidebar:hover {
  width: 250px;
  overflow: hidden;
  opacity: 1;
  box-shadow: 5px 5px 50px black;
}

.sidebar > .menu-item:hover {
  background-color: var(--main-color);
  color: white;
}

.menu-item ~ .dropdown {
  display: none;
  color: black;
  background-color: white;
  overflow: hidden;
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
}

.menu-item:hover,
.menu-list:hover .dropdown {
  color: white;
  display: block;
  background-color: var(--main-color);
}

.dropdown-item {
  padding: 10px 20px;
  color: black;
  overflow: hidden;
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
  background-color: lightgrey;
}

.dropdown-item:hover {
  background-color: var(--main-color);
  color: white;
  cursor: pointer;
}

</style>