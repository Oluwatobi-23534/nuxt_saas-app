<template>
  <div class="flex items-center p-4">
    <!-- mobile sidebar -->
    <MobileSidebar/>
    <div class="w-full flex justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button
            style="
              background: linear-gradient(to right, #ff9966, #ff5e62);
              color: white;
              border: none;
            "
          >
            <Icon name="lucide:user-circle" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="w-72 left-[100px] mr-4">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>

          <div class="w-full flex items-center p-2 pl-3">
            <Avatar class="mr-2">
              <AvatarImage
                v-if="user?.user_metadata.avatar_url"
                :src="user.user_metadata.avatar_url"
              >
                <AvatarFallback>
                  {{ user.email?.charAt(0).toUpperCase() }}
                  {{ user.email?.charAt(1).toUpperCase() }}
                </AvatarFallback>
              </AvatarImage>
            </Avatar>
            <div>
              <div class="font-bold">
                {{ user?.user_metadata.full_name }}
              </div>
              <div class="text-sm">
                {{ user?.email }}
              </div>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem @click="logout">
            <Icon
              class="mr-2 h-4 w-4"
              name="heroicons:arrow-left-on-rectangle"
            />
            <span class="ml-2">Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';

export default {
  setup() {
    const user = useSupabaseUser();
    const supabaseClient = useSupabaseClient();
    const router = useRouter();

    const logout = async () => {
      await supabaseClient.auth.signOut();
      router.push('/auth');
    };

    return { user, logout };
  },
};
</script>

