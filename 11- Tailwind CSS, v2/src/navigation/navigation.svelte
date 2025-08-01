{#snippet link(title)}
  <li class="rounded px-3 py-1.5 hover:bg-black">
    <a href="#">{title}</a>
  </li>
{/snippet}

<!-- <nav
  class="flex gap-5 rounded-md bg-blue-600 text-white
shadow-md shadow-gray-500"
>
  <div class="flex flex-grow-1 flex-wrap rounded">
    <a class=" rounded px-3 py-1.5 hover:bg-black" href="/">Unicorn Corp</a>
  </div>
  <ul class="h-f flex gap-4">
    {@render link('Home')}
    {@render link('Services')}
    {@render link('Contact')}
    {@render link('About')}
  </ul>
</nav> -->

<div class="flex w-full items-center justify-center">
  <nav
    class="flex w-3/6 justify-between gap-5 rounded-md bg-blue-600 text-white shadow-md shadow-gray-500"
  >
    <a class=" rounded px-3 py-1.5 font-bold hover:bg-black" href="/">Unicorn Corp</a>
    <ul class="h-f flex gap-4">
      {@render link('Home')}
      {@render link('Services')}
      {@render link('Contact')}
      {@render link('About')}
    </ul>
  </nav>
</div>
