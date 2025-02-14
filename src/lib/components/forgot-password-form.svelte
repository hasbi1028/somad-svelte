<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
	import * as Alert from "$lib/components/ui/alert/index.js";
	import CircleAlert from "lucide-svelte/icons/circle-alert";
	import { pb } from "$lib/pocketbase.svelte";
	import { goto } from "$app/navigation";
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	let email = $state('');
	let alerts = $state<Array<{ id: number; message: string; type: 'error' | 'success' }>>([]);
	let submitting = $state(false);

	function addAlert(message: string, type: 'error' | 'success') {
		const id = Date.now();
		alerts = [{ id, message, type }, ...alerts].slice(0, 3);
		setTimeout(() => alerts = alerts.filter(a => a.id !== id), 5000);
	}

	async function handleSubmit() {
		submitting = true;
		try {
			await pb.collection('users').requestPasswordReset(email);
			addAlert('Link reset password telah dikirim ke email Anda', 'success');
			email = '';
		} catch (err: any) {
			addAlert(err.data?.message || 'Email tidak ditemukan', 'error');
		} finally {
			submitting = false;
		}
	}
</script>

<style>
	.alerts-container {
		@apply fixed right-4 top-4 z-50 flex flex-col gap-2 min-w-[320px] max-w-[420px];
	}
	.alert-item {
		@apply pointer-events-auto w-full;
	}
</style>

<div class="alerts-container" role="alert" aria-live="polite">
	{#each alerts as alert (alert.id)}
		<div
			class="alert-item"
			in:fly={{ x: 20, duration: 300, easing: backOut }}
			out:fly={{ x: 20, duration: 200 }}
		>
			<Alert.Root variant={alert.type === 'success' ? 'default' : 'destructive'} class="items-start">
				<CircleAlert class="size-4 mt-[2px]" />
				<Alert.Description>{alert.message}</Alert.Description>
			</Alert.Root>
		</div>
	{/each}
</div>

<Card.Root class="mx-auto max-w-sm">
	<Card.Header>
		<Card.Title class="text-2xl">Lupa Password</Card.Title>
		<Card.Description>Masukkan email Anda untuk menerima link reset password</Card.Description>
	</Card.Header>
	<Card.Content>
		<form on:submit|preventDefault={handleSubmit} class="grid gap-4">
			<div class="grid gap-2">
				<Label for="email">Alamat Email</Label>
				<Input 
					id="email" 
					type="email" 
					bind:value={email} 
					placeholder="m@example.com"
					required 
				/>
			</div>
			<Button
				type="submit"
				class="w-full"
				disabled={submitting}
			>
				{#if submitting}Mengirim...{:else}Kirim Link Reset{/if}
			</Button>
			<div class="text-center">
				<a href="/login" class="text-sm underline">Kembali ke halaman login</a>
			</div>
		</form>
	</Card.Content>
</Card.Root>