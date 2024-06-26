<template>
  <div class="container">
    <section class="kalkulator">
      <h1>Kalkulator</h1>
      <form class="form" @submit.prevent="hitungJumlah">
        <div class="input-group">
          <label for="bilangan1">Bilangan 1:</label>
          <input v-model.number="bilangan1" id="bilangan1" type="number" />
        </div>
        <div class="input-group">
          <label for="bilangan2">Bilangan 2:</label>
          <input v-model.number="bilangan2" id="bilangan2" type="number" />
        </div>
        <div class="input-group">
          <label for="operasi">Operasi:</label>
          <select v-model="operasi" id="operasi">
            <option value="tambah">Penjumlahan</option>
            <option value="kurang">Pengurangan</option>
            <option value="kali">Perkalian</option>
            <option value="bagi">Pembagian</option>
          </select>
        </div>
        <button type="submit">Hitung</button>
        <div v-if="hasil !== null">
          <p>Hasil: {{ hasil }}</p>
        </div>
      </form>
    </section>

    <section class="kalkulator-bmi">
      <h1>Kalkulator BMI</h1>
      <form class="form" @submit.prevent="hitungBMI">
        <div class="input-group">
          <label for="tinggi">Tinggi (cm):</label>
          <input v-model.number="tinggi" id="tinggi" type="number" />
        </div>
        <div class="input-group">
          <label for="berat">Berat (kg):</label>
          <input v-model.number="berat" id="berat" type="number" />
        </div>
        <button type="submit">Hitung BMI</button>
        <div v-if="bmi !== null">
          <p>BMI: {{ bmi }}</p>
          <p>Status: {{ statusBMI }}</p>
        </div>
      </form>
    </section>

    <section class="kalkulator-kalori">
      <h1>Kalkulator Kalori</h1>
      <form class="form" @submit.prevent="hitungKalori">
        <div class="input-group">
          <label for="usia">Usia:</label>
          <input v-model.number="usia" id="usia" type="number" />
        </div>
        <div class="input-group">
          <label for="jenisKelamin">Jenis Kelamin:</label>
          <select v-model="jenisKelamin" id="jenisKelamin">
            <option value="pria">Pria</option>
            <option value="wanita">Wanita</option>
          </select>
        </div>
        <div class="input-group">
          <label for="beratBadan">Berat Badan (kg):</label>
          <input v-model.number="beratBadan" id="beratBadan" type="number" />
        </div>
        <div class="input-group">
          <label for="tinggiBadan">Tinggi Badan (cm):</label>
          <input v-model.number="tinggiBadan" id="tinggiBadan" type="number" />
        </div>
        <div class="input-group">
          <label for="aktivitas">Tingkat Aktivitas:</label>
          <select v-model="aktivitas" id="aktivitas">
            <option value="rendah">Rendah</option>
            <option value="sedang">Sedang</option>
            <option value="tinggi">Tinggi</option>
          </select>
        </div>
        <button type="submit">Hitung Kalori</button>
        <div v-if="kalori !== null">
          <p>Kebutuhan Kalori Harian: {{ kalori }} kcal</p>
          <p>Saran Asupan: {{ saranKalori }}</p>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Kalkulator',
  data() {
    return {
      bilangan1: 0,
      bilangan2: 0,
      hasil: null,
      operasi: 'tambah',
      tinggi: null,
      berat: null,
      bmi: null,
      statusBMI: '',
      usia: null,
      jenisKelamin: 'pria',
      beratBadan: null,
      tinggiBadan: null,
      aktivitas: 'sedang',
      kalori: null,
      saranKalori: ''
    }
  },
  methods: {
    hitungJumlah() {
      switch (this.operasi) {
        case 'tambah':
          this.hasil = this.bilangan1 + this.bilangan2
          break
        case 'kurang':
          this.hasil = this.bilangan1 - this.bilangan2
          break
        case 'kali':
          this.hasil = this.bilangan1 * this.bilangan2
          break
        case 'bagi':
          this.hasil = this.bilangan1 / this.bilangan2
          break
      }
    },
    hitungBMI() {
      const heightInMeters = this.tinggi / 100
      this.bmi = (this.berat / (heightInMeters * heightInMeters)).toFixed(2)
      this.statusBMI = this.determineBMIStatus(this.bmi)
    },
    determineBMIStatus(bmi) {
      if (bmi < 18.5) return 'Underweight'
      if (bmi >= 18.5 && bmi < 25) return 'Normal'
      if (bmi >= 25 && bmi < 30) return 'Overweight'
      return 'Obese'
    },
    hitungKalori() {
      this.kalori = 2000 // Simplified example value
      this.saranKalori = 'Maintain weight' // Simplified example suggestion
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.kalkulator,
.kalkulator-bmi,
.kalkulator-kalori {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 300px;
}

.form {
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  margin-right: 10px;
}

input,
select {
  padding: 5px;
  width: 100%;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #451ce5;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
}

button:hover {
  background-color: #ccc;
}

p {
  font-size: 18px;
  font-weight: bold;
}
</style>
