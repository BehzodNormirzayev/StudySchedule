<template>
  <div class="login-form-container">
    <div class="form-container">
   commit comment 
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-white mb-2" for="email">Email</label>
          <input
            id="email"
            type="email"
            v-model="email"
            class="input-field"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label class="block text-white mb-2" for="password">Password</label>
          <input
            id="password"
            type="password"
            v-model="password"
            class="input-field"
            placeholder="Enter your password"
          />
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember"
              type="checkbox"
              v-model="rememberMe"
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label for="remember" class="ml-2 text-white">Remember me</label>
          </div>
          <a href="#" class="text-white hover:text-blue-500">Forgot password?</a>
        </div>

        <button
          type="submit"
          class="submit-btn"
        >
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);

const router = useRouter();

const handleSubmit = () => {
  // In a real application, you'd send the email and password to the backend here.
  // Since this is a mockup, we simulate the login by checking the fields.
  if (email.value && password.value) {
    router.push('/dashboard/shedule');
  } else {
    alert('Please fill out both email and password.');
  }
};


</script>

<style scoped>
.login-form-container {
  background-image: url('https://image-tc.galaxy.tf/wijpeg-7eacs92jhacpkfm7jg7qu74uj/diary-planning_wide.jpg?crop=0%2C52%2C1000%2C563');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  background: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  color: white;
}

h1, p, label {
  text-align: center;
}

.input-field {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 1rem;
  margin-top: 10px;
  transition: all 0.3s ease;
}

.input-field:focus {
  border-color: #2575fc;
  box-shadow: 0 0 8px rgba(37, 117, 252, 0.3);
  outline: none;
  background: rgba(255, 255, 255, 0.5);
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(90deg, #6a11cb, #2575fc);
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
}

.submit-btn:hover {
  background: linear-gradient(90deg, #2575fc, #6a11cb);
}



a {
  color: #2575fc;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

a:hover {
  color: #6a11cb;
}
</style>
