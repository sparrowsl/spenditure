<script>
	import { page } from "$app/stores";
	import { DataHandler, Datatable, Th } from "@vincjo/datatables";
	import { createDialog, melt } from "@melt-ui/svelte";
	import { fade } from "svelte/transition";
	import AddRecordForm from "./AddRecordForm.svelte";
	import { invalidateAll } from "$app/navigation";

	/** @type {import("./$types").PageData} */
	export let data;
	$: records = data.records;
	const {
		elements: { trigger, portalled, overlay, content, close },
		states: { open },
	} = createDialog({ forceVisible: true });

	$: handler = new DataHandler(records, { rowsPerPage: 10 });
	$: rows = handler.getRows();
</script>

<main class="container mx-auto">
	<div use:melt={$portalled}>
		{#if $open}
			<div use:melt={$overlay} class="bg-black/50 inset-0 z-50 fixed" transition:fade={{ duration: 150 }} />
			<div
				class="bg-white rounded-xl shadow-lg max-h-[85vh] max-w-[450px] p-6
								top-[50%] left-[50%] w-[90vw] z-50 translate-x-[-50%] translate-y-[-50%] fixed"
				use:melt={$content}
			>
				<AddRecordForm
					on:addRecord={async (e) => {
						if (e.detail) $open = false;
						await invalidateAll();
					}}
				/>

				<button
					use:melt={$close}
					aria-label="close"
					class="rounded-full h-6 text-xs p-1 top-4 right-4 text-magnum-800 w-6 absolute
					inline-flex appearance-none items-center justify-center"
				>
					Close
				</button>
			</div>
		{/if}

		<Datatable {handler} search={false} rowsPerPage={false}>
			<table>
				<caption class="w-fit">
					<button type="button" use:melt={$trigger} class="bg-teal rounded font-bold text-xs text-white py-2 px-6">
						Add Record
					</button>
				</caption>
				<thead class="">
					<tr class="text-left">
						<Th {handler} orderBy="name">Name</Th>
						<Th {handler} orderBy="address">Last Name</Th>
						<Th {handler} orderBy="city">City</Th>
						<th>Date Created</th>
						<th>Actions</th>
					</tr>
				</thead>

				<tbody>
					{#each $rows as row}
						<tr>
							<td>{row?.name}</td>
							<td>{row?.address}</td>
							<td>{row?.city}</td>
							<td>{row?.created}</td>
							<td><a href="{$page.url.pathname}/{row.id}">view</a></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</Datatable>
	</div>
</main>

<style>
	tbody td {
		border: 1px solid #f5f5f5;
		padding: 4px 20px;
	}
	tbody tr {
		transition: all, 0.2s;
	}
</style>
