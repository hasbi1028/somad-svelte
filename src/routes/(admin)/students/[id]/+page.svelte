<script lang="ts">
	import { pb } from '$lib/pocketbase.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import { Button } from '$lib/components/ui/button';

	// Ambil id dari parameter route
	let studentId = get(page).params.id;

	// Data yang akan diubah
	let userRecord: any = {};
	let studentRecord: any = {};

	// Form fields untuk data user
	let email = '';
	let full_name = '';
	let nik = '';
	let birth_date = '';
	let birth_place = '';
	let gender = '';
	let phone_number = '';
	let address = '';
	let father_name = '';
	let mother_name = '';
	let parent_phone = '';
	let blood_type = '';
	let role = '';
	let selectedPosition = '';

	// Form fields untuk data student
	let nism = '';
	let nisn = '';
	let selectedClass = '';
	let status = '';
	let entry_year = '';

	// Data dropdown untuk kelas dan posisi
	let classes: Array<any> = [];
	let positions: Array<any> = [];

	let errorMessage = '';
	let successMessage = '';
	let loading = false;

	onMount(async () => {
		try {
			// Ambil dropdown
			classes = await pb.collection('classes').getFullList();
			positions = await pb.collection('positions').getFullList();

			// Ambil data student berdasarkan id
			studentRecord = await pb.collection('students').getOne(studentId);
			// Ambil data user terkait (diasumsikan field user_id ada di record student)
			userRecord = await pb.collection('users').getOne(studentRecord.user_id);

			// Isi nilai form dengan data yang sudah ada
			email = userRecord.email;
			full_name = userRecord.full_name;
			nik = userRecord.nik;
			birth_date = userRecord.birth_date;
			birth_place = userRecord.birth_place;
			gender = userRecord.gender;
			phone_number = userRecord.phone_number;
			address = userRecord.address;
			father_name = userRecord.father_name;
			mother_name = userRecord.mother_name;
			parent_phone = userRecord.parent_phone;
			blood_type = userRecord.blood_type;
			role = userRecord.role;
			selectedPosition = userRecord.position_id;

			nism = studentRecord.nism;
			nisn = studentRecord.nisn;
			selectedClass = studentRecord.class_id;
			status = studentRecord.status;
			entry_year = studentRecord.entry_year;
		} catch (err: any) {
			errorMessage = 'Gagal mengambil data: ' + err.message;
		}
	});

	async function handleSubmit(e: Event) {
		e.preventDefault();
		loading = true;
		errorMessage = '';
		successMessage = '';
		try {
			// Update data user
			const updatedUserData = {
				email,
				full_name,
				nik,
				birth_date,
				birth_place,
				gender,
				phone_number,
				address,
				father_name,
				mother_name,
				parent_phone,
				blood_type,
				role,
				position_id: selectedPosition
			};
			await pb.collection('users').update(userRecord.id, updatedUserData);

			// Update data student
			const updatedStudentData = {
				nism,
				nisn,
				status,
				entry_year,
				class_id: selectedClass,
				user_id: userRecord.id
			};
			await pb.collection('students').update(studentRecord.id, updatedStudentData);

			successMessage = 'Student berhasil diupdate!';
			goto('/students');
		} catch (err: any) {
			errorMessage = 'Error: ' + err.message;
		} finally {
			loading = false;
		}
	}
</script>

<form on:submit={handleSubmit}>
	<h1>Edit Student</h1>

	<fieldset>
		<legend>User Information</legend>
		<label>
			Email:
			<input type="email" bind:value={email} required />
		</label>
		<label>
			Full Name:
			<input type="text" bind:value={full_name} required />
		</label>
		<label>
			NIK:
			<input type="text" bind:value={nik} required />
		</label>
		<label>
			Birth Date:
			<input type="date" bind:value={birth_date} required />
		</label>
		<label>
			Birth Place:
			<input type="text" bind:value={birth_place} required />
		</label>
		<label>
			Gender:
			<select bind:value={gender} required>
				<option value="">Select Gender</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>
		</label>
		<label>
			Phone Number:
			<input type="text" bind:value={phone_number} />
		</label>
		<label>
			Address:
			<textarea bind:value={address}></textarea>
		</label>
		<label>
			Father Name:
			<input type="text" bind:value={father_name} />
		</label>
		<label>
			Mother Name:
			<input type="text" bind:value={mother_name} />
		</label>
		<label>
			Parent Phone:
			<input type="text" bind:value={parent_phone} />
		</label>
		<label>
			Blood Type:
			<input type="text" bind:value={blood_type} />
		</label>
		<label>
			Role:
			<input type="text" bind:value={role} required />
		</label>
		<label>
			Position:
			<select bind:value={selectedPosition} required>
				<option value="">Select Position</option>
				{#each positions as pos}
					<option value={pos.id}>{pos.name}</option>
				{/each}
			</select>
		</label>
	</fieldset>

	<fieldset>
		<legend>Student Information</legend>
		<label>
			NISM:
			<input type="text" bind:value={nism} required />
		</label>
		<label>
			NISN:
			<input type="text" bind:value={nisn} required />
		</label>
		<label>
			Class:
			<select bind:value={selectedClass} required>
				<option value="">Select Class</option>
				{#each classes as cls}
					<option value={cls.id}>{cls.name}</option>
				{/each}
			</select>
		</label>
		<label>
			Status:
			<input type="text" bind:value={status} required />
		</label>
		<label>
			Entry Year:
			<input type="number" bind:value={entry_year} required />
		</label>
	</fieldset>

	<Button type="submit" disabled={loading}>
		{loading ? 'Updating...' : 'Update Student'}
	</Button>

	{#if errorMessage}
		<p class="error">{errorMessage}</p>
	{/if}
	{#if successMessage}
		<p class="success">{successMessage}</p>
	{/if}
</form>

<style>
	form {
		max-width: 600px;
		margin: 0 auto;
		padding: 1rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
	fieldset {
		margin-bottom: 1rem;
		padding: 1rem;
		border: 1px solid #ddd;
	}
	label {
		display: block;
		margin-bottom: 0.5rem;
	}
	input, select, textarea {
		width: 100%;
		padding: 0.5rem;
		margin-bottom: 1rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.error {
		color: red;
	}
	.success {
		color: green;
	}
</style>
