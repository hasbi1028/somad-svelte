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
	let password = $state('');
	let errors = $state<Array<{ id: number; message: string; type?: 'error' | 'warning' | 'info' }>>([]);
	let submitting = $state(false);

	function addError(message: string, type: 'error' | 'warning' | 'info' = 'error') {
		const id = Date.now();
		errors = [{ id, message, type }, ...errors].slice(0, 3); // Max 3 alerts

		setTimeout(() => {
			errors = errors.filter(e => e.id !== id);
		}, 5000);
	}

	async function handleSubmit() {
		submitting = true;
		try {
			const pbUser = await pb.collection('users').authWithPassword(email, password);
			if (pbUser) goto('/');
		} catch (err: any) {
			if (err.status === 400) {
				addError(err.data?.message || 'Email atau kata sandi salah');
			} else {
				addError('Error terjadi: ' + err);
			}
		} finally {
			submitting = false;
		}
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !submitting) {
			handleSubmit();
		}
	}
</script>

<div class="alerts-container flex-1 fixed right-4 top-4 z-50 flex flex-col gap-2 min-w-[320px] max-w-[420px]" role="alert" aria-live="polite">
	{#each errors as error (error.id)}
		<div
			class="alert-item flex-1 pointer-events-auto w-full" 
			in:fly={{ x: 20, duration: 300, easing: backOut }}
			out:fly={{ x: 20, duration: 200 }}
		>
			<Alert.Root variant="destructive" class="items-start">
				<CircleAlert class="size-4 mt-[2px]" />
				<div class="alert-content">
					<Alert.Description>{error.message}</Alert.Description>
				</div>
			</Alert.Root>
		</div>
	{/each}
</div>

<Card.Root class="mx-auto max-w-sm">
	<Card.Header>
		<Card.Title class="text-2xl">Masuk</Card.Title>
		<Card.Description>Masukkan email Anda di bawah ini untuk masuk ke akun Anda</Card.Description>
	</Card.Header>
	<Card.Content>
		<form onsubmit={e => { e.preventDefault(); handleSubmit(); }} class="grid gap-4">
			<div class="grid gap-2">
				<Label for="email">Alamat Email</Label>
				<Input 
					id="email" 
					type="email" 
					bind:value={email} 
					placeholder="test@example.com" 
					onkeydown={handleKeyDown}
					required 
				/>
			</div>
			<div class="grid gap-2">
				<div class="flex items-center">
					<Label for="password">Kata Sandi</Label>
					<a href="https://wa.me/6281245133233" class="ml-auto inline-block text-sm underline" target="_blank" rel="noopener noreferrer">
						Lupa kata sandi Anda?
					</a>
				</div>
				<Input 
					id="password" 
					type="password" 
					bind:value={password} 
					onkeydown={handleKeyDown}
					required 
				/>
			</div>
			<Button
				type="submit"
				class="w-full"
				disabled={submitting}
			>
				{#if submitting}Sedang memproses...{:else}Masuk{/if}
			</Button>
		</form>
		<div class="mt-4 text-center text-sm">
			Belum punya akun?
			<a href="https://wa.me/6281245133233" class="underline" target="_blank" rel="noopener noreferrer">Silahkan hubungi Admin</a>
		</div>
	</Card.Content>
</Card.Root>