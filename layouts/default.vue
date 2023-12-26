<template>
  <v-app class="background-container">
    <v-navigation-drawer
      v-model="leftdrawer"
      app
      :mini-variant="miniVariant"
      @click:mini-variant="miniVariant = !miniVariant"
      temporary
      class="sidenav"
      location="start"
    >
      <v-list>
        <v-list-item @click="navigateroute(routes[3], 3)" class="text-sidebar">
          Beranda
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="rightdrawer"
      app
      :mini-variant="miniVariant"
      @click:mini-variant="miniVariant = !miniVariant"
      temporary
      class="sidenav"
      location="end"
    >
      <v-list>
        <v-list-item class="header-sidebar"> Departments </v-list-item>
        <v-list-item
          v-for="(item, index) in routes"
          :key="index"
          @click="navigateroute(item, index)"
          :class="
            selectedIndex === index && selectedIndex != 3
              ? 'selected-item text-sidebar'
              : 'text-sidebar'
          "
        >
          {{ item.text }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="transparent"
      class="app-bar"
      app
      fixed
      flat
      v-if="$vuetify.display.smAndDown"
    >
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer">  <v-icon v-if="drawer">mdi-chevron-left</v-icon><v-icon v-else >mdi-chevron-right</v-icon></v-app-bar-nav-icon> -->
      <v-app-bar-nav-icon
        size="x-large"
        color="green"
        @click.stop="leftdrawer = !eftdrawer"
      ></v-app-bar-nav-icon>
      <div
        class="text-title text-center w-100 d-flex align-center flex-column justify-center"
        @click="navigateroute(routes[3], 3)"
      >
        <span> SEKOLAH WIJANA </span>
        <span class="text-title-second"> JOMBANG</span>
      </div>

      <v-app-bar-nav-icon
        size="x-large"
        color="green"
        @click.stop="rightdrawer = !rightdrawer"
      ></v-app-bar-nav-icon>
      <!-- <NotificationBell />
      <ProfileHeader :reset="resetindex"/> -->
    </v-app-bar>

    <v-app-bar color="transparent" class="app-bar" app fixed flat v-else>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer">  <v-icon v-if="drawer">mdi-chevron-left</v-icon><v-icon v-else >mdi-chevron-right</v-icon></v-app-bar-nav-icon> -->

      <div
        class="text-title text-center w-100"
        @click="navigateroute(routes[3], 3)"
      >
        SEKOLAH WIJANA JOMBANG
      </div>

      <!-- <NotificationBell />
      <ProfileHeader :reset="resetindex"/> -->
    </v-app-bar>

    <v-main class="pt-0">
      <slot />
    </v-main>
    <!-- <v-main class="d-flex justify-center align-center" v-else>
      <v-progress-circular indeterminate :size="47" :width="8"></v-progress-circular>
    </v-main> -->
    <PartsMainFooter></PartsMainFooter>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      leftdrawer: false, // Controls whether the sidebar is open
      rightdrawer: false,
      miniVariant: false, // Controls whether the sidebar is in mini-variant mode (for mobile)
      routes: [
        // { text: 'Home', route: '/home', icon:'mdi-home' },
        { text: "TKK", route: "/department/tkk" },
        { text: "SDK", route: "/department/sdk" },
        { text: "SMPK", route: "/department/smpk" },
        { text: "Yayasan yohanes Gabriel Jombang", route: "/" },
        // Add more menu items as needed
      ],
      selectedIndex: 0, // Index of the selected item
    };
  },
  computed: {

  },

  methods: {
    navigateroute(route, index) {
      this.$router.push(route.route);
      this.selectedIndex = index;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.v-toolbar-title__placeholder {
  padding-bottom: 20px;
}
.text-sidebar {
  color: #fff;
  font-size: 1.4rem;
  padding: 0.6rem 1rem;
  display: block;
  border-bottom: solid 1px #be272c;
}
.header-sidebar {
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  padding: 16px;
}

.app-bar {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgb(77, 75, 75));
}
.sidenav {
  background-color: $primary-color;
  color: white;
}
.text-header {
  font-size: 24px;
  font-weight: 700;
  font-family: "Open Sans";
  line-height: 32px;
  color: white;
}
.selected-item {
  background-color: yellow;
  color: black; /* Change this to your desired background color */
}
.background-container {
  background-color: white; /* Adjust this property as needed */
  width: 100%;
}
.text-title {
  font-family: "Montserrat", "Roboto", Helvetica, serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  color: white;
  height: 20px;
}
.text-title-second {
  font-family: "Montserrat", "Roboto", Helvetica, serif;
  font-size: 14.4px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  color: white;
  height: 20px;
}
.text-title:hover {
  cursor: grab;
}
@media (max-width: 40em) {
  .text-title {
    font-size: 22.4px;
  }
}
</style>
