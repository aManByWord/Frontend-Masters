{#snippet link(title)}
  <li>
    <a href="#">{title}</a>
  </li>
{/snippet}

<nav>
  <a href="/">Unicorn Corp</a>
  <ul>
    {@render link('Home')}
    {@render link('About')}
    {@render link('Services')}
    {@render link('Contact')}
  </ul>
</nav>
