<script>
	import { DataHandler, Datatable, Th } from "@vincjo/datatables";

	/** @type {import("./$types").PageData} */
	export let data;

	console.log(data);

	const handler = new DataHandler(data.records, { rowsPerPage: 10 });
	const rows = handler.getRows();
</script>

<Datatable {handler}>
	<table>
		<thead>
			<tr>
				<Th {handler} orderBy="name">Name</Th>
				<Th {handler} orderBy="address">Last Name</Th>
				<Th {handler} orderBy="city">City</Th>
				<Th {handler}>Date Created</Th>
				<!-- <Th {handler} orderBy="name">First Name</Th> -->
			</tr>
		</thead>
		<tbody>
			{#each $rows as row}
				<tr>
					<td>{row?.name}</td>
					<td>{row?.address}</td>
					<td>{row?.city}</td>
					<td>{row?.created}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</Datatable>

<style>
	thead {
		background: #fff;
	}
	tbody td {
		border: 1px solid #f5f5f5;
		padding: 4px 20px;
	}
	tbody tr {
		transition: all, 0.2s;
	}
	tbody tr:hover {
		background: #f5f5f5;
	}
</style>
