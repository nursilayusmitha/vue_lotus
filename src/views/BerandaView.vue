<template>
  <div>
    <!-- Section 1: Motivasi Hidup Sehat -->
    <section id="motivasi-hidup-sehat">
      <h1>Mulai Hari Ini dengan Yoga</h1>
      <p>
        Yoga adalah praktik yang bermanfaat untuk kesehatan fisik dan mental. Dengan melakukan yoga
        secara rutin, <br />Anda dapat meningkatkan fleksibilitas, kekuatan, dan keseimbangan tubuh,
        serta mengurangi stres dan kecemasan.
      </p>
      <blockquote>
        "Kesehatan adalah kekayaan sejati, bukan emas dan perak." - Mahatma Gandhi
      </blockquote>
    </section>

    <!-- Section 4: Animasi Gambar -->
    <section id="animasi-gambar">
      <div class="content-wrapper">
        <div class="text-about-yoga">
          <h3>Apa Itu Yoga?</h3>
          <p>
            Yoga adalah serangkaian gerakan dan pose yang meningkatkan kekuatan, fleksibilitas, dan
            keseimbangan. Praktik ini juga membantu dalam mengurangi stres dan meningkatkan
            kesehatan mental.
          </p>
        </div>
        <div class="animated-image">
          <img src="@/assets/yoga-animation.gif" alt="Animasi Gerakan Yoga" />
        </div>
      </div>
    </section>

    <!-- Section 2: Gambar-Gambar Yoga -->
    <section id="gambar-gambar-yoga">
      <h2>Manfaat Yoga</h2>
      <div class="slider">
        <div class="slide">
          <img src="@/assets/yoga1.png" alt="Pose Yoga 1" />
          <h4>Yoga bermanfaat untuk Fleksibilitas</h4>
        </div>
        <div class="slide">
          <img src="@/assets/yoga2.png" alt="Pose Yoga 2" />
          <h4>Yoga bermanfaat untuk Kekuatan</h4>
        </div>
        <div class="slide">
          <img src="@/assets/yoga3.png" alt="Pose Yoga 3" />
          <h4>Yoga bermanfaat untuk Keseimbangan</h4>
        </div>
      </div>
    </section>

    <section id="cara-yoga">
      <h2>Bagaimana melakukan Yoga?</h2>
      <div class="video-tutorial">
        <div class="video-tutorial">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0XBcrjkkwQo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="tips-trik">
        <h3>Tips dan Trik untuk Pemula</h3>
        <ul>
          <li>Mulailah dengan pose dasar dan tingkatkan secara bertahap.</li>
          <li>Fokus pada pernapasan yang dalam dan teratur.</li>
          <li>Gunakan matras yoga yang nyaman dan anti-slip.</li>
          <li>Jangan memaksakan diri, dengarkan tubuh Anda.</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
#motivasi-hidup-sehat {
  padding: 20px;
  background-color: #f8f0f8;
  text-align: center;
}

#motivasi-hidup-sehat h1 {
  color: #3a5fcd;
}

#motivasi-hidup-sehat p {
  color: #333;
}

#motivasi-hidup-sehat blockquote {
  font-style: italic;
  color: #5078d4;
  margin-top: 10px;
}

#gambar-gambar-yoga {
  padding: 20px;
  background-color: #e7e9f7;
}

.slider {
  display: flex;
  overflow-x: auto;
}

.slide {
  min-width: 200px;
  margin-right: 10px;
}

.slide img {
  width: 100%;
  height: auto;
}

#cara-yoga {
  padding: 20px;
  background-color: #f8f0f8;
}

.video-tutorial {
  text-align: center;
  margin-bottom: 20px;
}

.tips-trik {
  margin-top: 20px;
}

.tips-trik ul {
  list-style-type: disc;
  padding-left: 20px;
}

#animasi-gambar {
  padding: 20px;
  background-color: #e7e9f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text-about-yoga {
  flex: 1;
  padding-right: 20px;
}

.animated-image {
  flex: 1;
  text-align: center;
  animation: pulse 2s infinite;
}

.animated-image img {
  width: 100%;
  max-width: 400px; /* Further increased max-width */
  height: auto;
  animation: upAndDown 3s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes upAndDown {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
