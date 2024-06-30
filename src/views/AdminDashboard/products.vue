<template>
  <div>
    <div class="flex justify-between items-center mx-10">
      <h3 class="text-2xl font-bold text-left py-2">Products :</h3>
      <Dialog>
        <DialogTrigger>
          Create a product
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a product</DialogTitle>
            <DialogDescription>
              Enter all the required product data
            </DialogDescription>
          </DialogHeader>
          <div class="space-y-5 my-3">
            <input
              v-model="title"
              class=" w-full py-2 px-3 text-gray-700"
              type="text"
              placeholder="Enter title"
              required
            />

            <input
              v-model="description"
              class=" w-full py-2 px-3 text-gray-700"
              type="text"
              placeholder="Enter description"
              required
            />

            <input
              v-model="image"
              class=" w-full py-2 px-3 text-gray-700"
              type="text"
              placeholder="Enter image URL"
              required
            />

            <input
              v-model="category"
              class=" w-full py-2 px-3 text-gray-700"
              type="text"
              placeholder="Enter category"
              required
            />

            <input
              v-model="price"
              class=" w-full py-2 px-3 text-gray-700"
              type="number"
              placeholder="Enter price"
              required
            />
          </div>
          <button
            @click="createProduct"
            class="bg-white text-black px-6 py-2 rounded-[20px] w-32 ml-auto"
          >
            Submit
          </button>
        </DialogContent>
      </Dialog>
    </div>
    <div class="w-full my-3">
      <table class="min-w-full bg-white rounded-lg overflow-hidden shadow-md text-xs">
        <thead class="bg-[#151516] text-white">
          <tr>
            <th scope="col" class="px-4 py-2 text-left font-medium">Title</th>
            <th scope="col" class="px-4 py-2 text-left font-medium">Description</th>
            <th scope="col" class="px-4 py-2 text-left font-medium">Image</th>
            <th scope="col" class="px-4 py-2 text-left font-medium">Category</th>
            <th scope="col" class="px-4 py-2 text-left font-medium">Price</th>
            <th scope="col" class="px-4 py-2 text-left font-medium">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-[#151516] text-white">
          <tr v-for="product in products.allProducts" :key="product._id">
            <td class="px-4 py-2 whitespace-nowrap">{{ product.title }}</td>
            <td class="px-4 py-2 whitespace-nowrap">{{ product.description }}</td>
            <td class="px-4 py-2 whitespace-nowrap">{{ product.image }}</td>
            <td class="px-4 py-2 whitespace-nowrap">{{ product.category }}</td>
            <td class="px-4 py-2 whitespace-nowrap">{{ product.price }}$</td>
            <td class="px-4 py-2 whitespace-nowrap space-x-3">
              <button @click="deleteProduct(product._id)">  <Trash class="size-4" /></button>
              <button @click="showDeleteDialog(product)"><Pencil class="size-4"/></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Pencil, Trash } from 'lucide-vue-next';

export default {
  components: {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Pencil, Trash 
  },
  data() {
    return {
      title: '',
      description: '',
      image: '',
      category: '',
      price: null,
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        this.products = response.data;
        console.log(this.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async createProduct() {
      try {
        const response = await axios.post('http://localhost:3000/api/product/create', {
          title: this.title,
          description: this.description,
          image: this.image,
          category: this.category,
          price: this.price,
        });
        alert('Product created successfully');
        console.log('Product created successfully:', response.data);
        this.title = '';
        this.description = '';
        this.image = '';
        this.category = '';
        this.price = null;
        this.fetchProducts();
      } catch (error) {
        alert('Error creating product');
        console.error('Error creating product:', error);
      }
    },
    async deleteProduct(productId) {
      try {
        const response = await axios.delete(`http://localhost:3000/api/product/${productId}`);
        alert('Product deleted successfully')
        console.log('Product deleted successfully:', response.data);
        this.products.allProducts = this.products.allProducts.filter(product => product._id !== productId);
      } catch (error) {
        alert('Error deleting product')
        console.error('Error deleting product:', error);
      }
    }
  },
};
</script>

