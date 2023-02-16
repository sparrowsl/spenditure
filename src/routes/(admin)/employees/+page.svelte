<script>
	import { employees } from '../../../lib/stores/employees';
	import SearchEmployee from './SearchEmployee.svelte';
</script>

<section class="min-h-[90vh] bg-white p-5">
	<h1 class="mb-5 text-3xl font-bold text-gray-700">Employees</h1>

	<SearchEmployee />

	<table class="mt-10 w-full table-auto">
		<caption class="mb-3 max-w-4xl text-xs text-white">
			<a href="/employees" class="ml-auto block w-fit rounded-sm bg-gray-600 p-2">Add Employee</a>
		</caption>

		<thead>
			<tr class="text-left text-gray-700">
				<th>ID</th>
				<th>Name</th>
				<th>Email</th>
				<th>Contact</th>
				<th>Status</th>
				<th>Joined On</th>
			</tr>
		</thead>

		<tbody>
			{#each employees as employee, index (employee.email)}
				<tr class="">
					<td class="py-3 text-sm text-gray-600">{index + 1}</td>
					<td class="py-3 text-sm text-gray-600">{employee.name}</td>
					<td class="py-3 text-sm text-gray-600">{employee.email}</td>
					<td class="py-3 text-sm text-gray-600">{employee.contact}</td>
					<td class="py-3 text-sm text-gray-600">{employee.status}</td>
					<td class="py-3 text-sm text-gray-600">{employee.joined}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>
