<script>
	import { page } from '$app/stores';
</script>

<nav>
	<div>
		<ul class="flex flex-row gap-12 justify-between">
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                <a class="no-underline hover:underline" href="/">ABOUT</a>
            </li>
            <li aria-current={$page.url.pathname === '/shop' ? 'page' : undefined}>
                <a class="no-underline hover:underline" href="/shop">GEAR</a>
            </li>
            <li aria-current={$page.url.pathname === '/archive' ? 'page' : undefined}>
                <a class="no-underline hover:underline" href="/">ARCHIVE</a>
            </li>
        </ul>
	</div>
</nav>
