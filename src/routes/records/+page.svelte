<script>
	import { page } from "$app/stores";
	import { DataHandler, Datatable, Th } from "@vincjo/datatables";

	/** @type {import("./$types").PageData} */
	export let data;

	const handler = new DataHandler(data.records, { rowsPerPage: 10 });
	const rows = handler.getRows();
</script>

<Datatable {handler} search={false} rowsPerPage={false}>
	<table>
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

<style>
	tbody td {
		border: 1px solid #f5f5f5;
		padding: 4px 20px;
	}
	tbody tr {
		transition: all, 0.2s;
	}
</style>
