<script lang="ts">
    import { goto } from "$app/navigation";
    import { pb } from '$lib/pocketbase.svelte';
	import { Button } from "$lib/components/ui/button/index.js";

	let username = '';
	let password = '';

	async function handleSubmit() {
		try {
			const pbUser = await pb.collection('users').authWithPassword(username, password);
			if (pbUser) {
				goto('/?message=logged+in');
			}
		} catch (error : any) {
			if (error.status === 400) {
				alert('Invalid credentials');
			} else {
				alert('error terjadi'+error);
			}
		}
	}
</script>


	
	
   <Button>Click me</Button>

<form on:submit|preventDefault={handleSubmit}>
	<label for="username">Username</label>
	<input type="text" id="username" bind:value={username} />

	<label for="password">Password</label>
	<input type="password" id="password" bind:value={password} />

	<button type="submit">Login</button>
</form>

<style>
	form {
		max-width: 300px;
		margin: 20px auto;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 5px;
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
	}

	label {
		display: block;
		margin-bottom: 10px;
	}

	input[type="text"],
	input[type="password"] {
		width: 100%;
		padding: 10px;
		margin-bottom: 20px;
		border: 1px solid #ccc;
	}

	button[type="submit"] {
		background-color: #4CAF50;
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	button[type="submit"]:hover {
		background-color: #45a049;
	}
</style>