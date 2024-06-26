<template>
  <br />
  <br />
  <br />
  <div class="about">
    <div class="about-content">
      <h1>About Me</h1>
      <p>
        Hello! My name is <strong>Nursila Yusmitha Angghani</strong>. I am a high school student
        majoring in Software Engineering (RPL) and aspiring to be a web developer and designer.
      </p>
      <p>
        I am currently working on a Flutter project and have interests in developing both front-end
        and back-end applications.
      </p>
      <h2>Education</h2>
      <ul>
        <li>SMKN 1 Purwosari - Major in Software Engineering</li>
      </ul>
      <h2>Hobbies and Interests</h2>
      <ul>
        <li>Web Development</li>
        <li>Design</li>
        <li>Yoga</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.about-content h1,
.about-content h2 {
  color: #333;
}

.about-content p {
  color: #666;
  line-height: 1.6;
}

.about-content ul {
  list-style-type: none;
  padding: 0;
}

.about-content li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.about-content li:last-child {
  border-bottom: none;
}
</style>
