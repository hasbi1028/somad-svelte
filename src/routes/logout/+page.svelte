<script>
    import { logout } from "$lib/pocketbase.svelte";
    import { goto } from "$app/navigation";

    logout();
</script>

