<template>
  <div id="navbar">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/LOTUS.png" alt="Logo" class="logo-image" />
      </router-link>
    </div>
    <ul>
      <li><router-link to="/" exact-active-class="active-link">Beranda</router-link></li>
      <li><router-link to="/about" exact-active-class="active-link">About</router-link></li>
      <li>
        <router-link to="/kalkulator" exact-active-class="active-link">Kalkulator</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3a5fcd; /* Warna biru yang elegan */
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  font-family: 'Arial', sans-serif;
  padding: 0 30px;
  height: 60px;
}

.logo > a {
  text-decoration: none;
}

.logo-image {
  height: 60px; /* Sesuaikan tinggi logo */
}

#navbar > ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

#navbar > ul > li {
  margin: 0 15px;
}

#navbar > ul > li > a {
  display: block;
  color: white; /* Warna putih untuk kontras yang lebih baik */
  text-align: center;
  padding: 20px 25px;
  text-decoration: none;
  transition:
    background-color 0.3s,
    color 0.3s;
}

#navbar > ul > li > a:hover,
.active-link {
  background-color: #5078d4; /* Warna hover biru yang sedikit lebih terang */
  color: #ffffff;
  text-decoration: underline;
}
</style>
