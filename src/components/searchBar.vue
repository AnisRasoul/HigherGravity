<template>
  <div>
    <div class="md:bg-[#333333] p-1 rounded-[8px] items-center flex w-[70%] my-12 mx-6">
      <Search class="text-white md:size-4 size-6 mx-2" />
      <input 
        class="bg-transparent outline-none border-0 text-white placeholder-gray-400 w-full sm:block" 
        placeholder="Search" 
        type="search" 
      />
    </div>

  </div>
</template>

<script>

import { Search } from 'lucide-vue-next';
import products from '@/store/modules/products';

export default {
  components: { Search },
};
</script>

