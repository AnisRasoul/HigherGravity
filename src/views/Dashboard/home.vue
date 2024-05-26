<template>
  <div class="w-full py-8 mx-auto">
      <div class="space-y-6">
        <div class="space-y-2">
          <h2 class="text-2xl font-bold">Profile</h2>
          <p class="text-gray-500 dark:text-gray-400">Update your personal information.</p>
        </div>
        <div class="space-y-4">
          <div class="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Enter your username" />
          </div>
          <div class="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Enter your password" type="password" />
          </div>
          <div class="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div class="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div class="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea class="min-h-[100px]" id="bio" placeholder="Enter your bio" />
          </div>
          <Button type="submit">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
</template>

<script>

export default {


}
</script>

<style>

</style>