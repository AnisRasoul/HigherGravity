<template>
  <div>
    <div class="flex justify-between items-center mx-10">
      <h3 class="text-2xl font-bold text-left py-2">Users</h3>
    </div>
    <div class="w-full my-3">
      <table class="min-w-full bg-white rounded-lg overflow-hidden shadow-md text-xs">
        <thead class="bg-[#151516] text-white">
          <tr>
            <th scope="col" class="px-4 py-2 text-left font-medium">Username</th>
            <th scope="col" class="px-4 py-2 text-left font-medium">Email</th>
            <th scope="col" class="px-4 py-2 text-left font-medium">Role</th>
            <th scope="col" class="px-4 py-2 text-left font-medium">City</th>
            <th scope="col" class="px-4 py-2 text-left font-medium">Phone</th>
            <th scope="col" class="px-4 py-2 text-left font-medium">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-[#151516] text-white">
          <tr v-for="user in users" :key="user._id">
            <td class="px-4 py-2 whitespace-nowrap">{{ user.username || 'empty' }}</td>
            <td class="px-4 py-2 whitespace-nowrap">{{ user.email || 'empty' }}</td>
            <td class="px-4 py-2 whitespace-nowrap">{{ user.role || 'empty' }}</td>
            <td class="px-4 py-2 whitespace-nowrap">{{ user.city || 'empty' }}</td>
            <td class="px-4 py-2 whitespace-nowrap">{{ user.phone || 'empty' }}</td>
            <td class="px-4 py-2 whitespace-nowrap space-x-3">
              <button @click="deleteUser(user._id)"> <Trash class="size-4" /></button>
              <button @click="showEditDialog(user)"><Pencil class="size-4"/></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Pencil, Trash } from 'lucide-vue-next';

export default {
  components: {
    Pencil, Trash
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:3000/api/Auth/users');
        this.users = response.data;
        console.log(this.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async deleteUser(userId) {
      console.log(`Attempting to delete user with ID: ${userId}`);
      try {
        const response = await axios.delete(`http://localhost:3000/api/Auth/user/${userId}`);
        alert('User deleted successfully');
        console.log('User deleted successfully:', response.data);
        this.users = this.users.filter(user => user._id !== userId);
      } catch (error) {
        alert('Error deleting user');
        console.error('Error deleting user:', error);
      }
    },
  },
};
</script>
