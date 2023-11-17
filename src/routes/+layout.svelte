<script>
	// @ts-nocheck
	import Navbar from "$lib/components/Navbar.svelte";
	import { NotificationDisplay, notifier } from "@beyonk/svelte-notifications";
	import "@unocss/reset/tailwind.css";
	import "uno.css";
</script>

<NotificationDisplay />
<Navbar />
<slot />
