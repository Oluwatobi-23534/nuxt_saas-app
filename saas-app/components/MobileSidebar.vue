<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button
        class="md:hidden pr-4 hover:opacity-75 transition bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <Icon name="lucide:menu" />
      </Button>
    </SheetTrigger>
    <SheetContent class="p-0 bg-white" side="left">
      <Sidebar />
    </SheetContent>
  </Sheet>
</template>

<script></script>

<style lang="scss" scoped></style>
