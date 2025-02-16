<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
	import { pb } from "$lib/pocketbase.svelte";
	import { goto } from "$app/navigation";
	import { toast } from "svelte-sonner";
  
	let email = $state('');
	let password = $state('');
	let submitting = $state(false);
  
	async function handleSubmit() {
	  submitting = true;
	  try {
		const pbUser = await pb.collection('users').authWithPassword(email, password);
		toast.success('Login berhasil');
		if (pbUser) goto('/dashboard');
	  } catch (err: any) {
		if (err.status === 400) {
		  toast.error(err.data?.message || 'Email atau kata sandi salah', {
			description: "Periksa kembali data login Anda."
		  });
		} else {
		  toast.error('Error terjadi: ' + err);
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
  
  <!-- Form login -->
  <div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
	<div class="flex items-center justify-center py-12">
	  <div class="mx-auto grid w-[350px] gap-6">
		<div class="grid gap-2 text-center">
		  <h1 class="text-3xl font-bold">Login</h1>
		  <p class="text-muted-foreground text-balance">
			Masukkan email Anda di bawah ini untuk masuk ke akun Anda
		  </p>
		</div>
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
		  <a href="https://wa.me/6281245133233" class="underline" target="_blank" rel="noopener noreferrer">
			Silahkan hubungi Admin
		  </a>
		</div>
	  </div>
	</div>
	<div class="bg-muted hidden lg:block">
	  <img
		src="/image-login.png"
		alt="placeholder"
		width={1920}
		height={1080}
		class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
	  />
	</div>
  </div>
  