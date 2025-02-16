<script lang="ts">
    import { onMount } from 'svelte';
    import { pb } from '$lib/pocketbase.svelte';
    import Button from '$lib/components/ui/button/button.svelte';
    import File from "lucide-svelte/icons/file";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import * as Alert from "$lib/components/ui/alert/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import Upload from "lucide-svelte/icons/upload";
    import Download from "lucide-svelte/icons/download";
    
    // Reactive state using $state rune
    let importDialogOpen = $state(false);
    let exportDialogOpen = $state(false);
    let csvFile: File | null = $state(null);
    let importStatus = $state('');
    let importError = $state('');
    
    // Function to generate CSV template for download
    function generateCSVTemplate() {
      const headers = ['nik', 'full_name', 'email', 'tempat_lahir', 'tanggal_lahir', 'no_hp', 'alamat', 'role'];
      const csvContent = headers.join(',') + '\n';
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      
      // Create temporary link to download the CSV
      const a = document.createElement('a');
      a.href = url;
      a.download = 'user_template.csv';
      document.body.appendChild(a);
      a.click();
      
      // Clean up
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
      exportDialogOpen = false;
    }
    
    // Function to export users to CSV
    async function exportUsers() {
      try {
        const users = await pb.collection('users').getFullList();
        const headers = ['nik', 'full_name', 'email', 'tempat_lahir', 'tanggal_lahir', 'no_hp', 'alamat', 'role'];
        const rows = users.map(user => 
          headers.map(header => user[header] || '').join(',')
        );
        const csvContent = [headers.join(','), ...rows].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'users_export.csv';
        document.body.appendChild(a);
        a.click();
        
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
        exportDialogOpen = false;
        
      } catch (err) {
        console.error("Error exporting users:", err);
      }
    }
    
    // Handle file selection
    function handleFileChange(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        csvFile = input.files[0];
      }
    }
    
    // Import users from CSV using $effect for side effects if needed
    async function importUsers() {
      if (!csvFile) {
        importError = 'Please select a CSV file';
        return;
      }
      
      importStatus = 'Importing...';
      importError = '';
      
      try {
        const text = await csvFile.text();
        const rows = text.split('\n');
        const headers = rows[0].split(',');
        
        let successCount = 0;
        let errorCount = 0;
        
        // Process each row (skip header)
        for (let i = 1; i < rows.length; i++) {
          if (!rows[i].trim()) continue;
          const values = rows[i].split(',');
          const userData: Record<string, any> = {};
          
          headers.forEach((header, index) => {
            if (values[index]) {
              userData[header.trim()] = values[index].trim();
            }
          });
          
          try {
            if (!userData.email || !userData.full_name || !userData.nik) {
              throw new Error(`Row ${i}: Missing required fields (email, full_name, or nik)`);
            }
            
            const existingUsers = await pb.collection('users').getList(1, 1, {
              filter: `email = "${userData.email}"`
            });
            
            if (existingUsers.items.length > 0) {
              await pb.collection('users').update(existingUsers.items[0].id, userData);
            } else {
              userData.password = userData.nik;
              userData.passwordConfirm = userData.nik;
              await pb.collection('users').create(userData);
            }
            successCount++;
          } catch (err) {
            console.error(`Error importing row ${i}:`, err);
            errorCount++;
          }
        }
        
        importStatus = `Import complete: ${successCount} users imported successfully, ${errorCount} errors`;
        
        if (typeof fetchUsers === 'function') {
          fetchUsers();
        }
        
        if (errorCount === 0) {
          setTimeout(() => {
            importDialogOpen = false;
            importStatus = '';
            csvFile = null;
          }, 3000);
        }
        
      } catch (err) {
        console.error("Error parsing CSV:", err);
        importError = 'Error parsing CSV file. Please check the format.';
        importStatus = '';
      }
    }
  </script>
  
  <!-- Buttons using imported components remain the same -->
  <Button size="sm" variant="outline" class="h-7 gap-1" on:click={() => importDialogOpen = true}>
    <Upload class="size-3.5" />
    <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Import</span>
  </Button>
  <Button size="sm" variant="outline" class="h-7 gap-1" on:click={() => exportDialogOpen = true}>
    <Download class="size-3.5" />
    <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
  </Button>
  
  <!-- Dialog components continue as before... -->
  
  <!-- Import Dialog -->
  <Dialog.Root bind:open={importDialogOpen}>
    <Dialog.Content class="sm:max-w-[425px]">
      <Dialog.Header>
        <Dialog.Title>Import Users</Dialog.Title>
        <Dialog.Description>
          Upload a CSV file with user data to import or update users.
        </Dialog.Description>
      </Dialog.Header>
      <div class="grid gap-4 py-4">
        <div class="flex flex-col gap-4">
          <Input 
            type="file" 
            accept=".csv" 
            on:change={handleFileChange} 
            aria-label="Upload CSV file"
          />
          <Button variant="outline" on:click={generateCSVTemplate}>
            Download CSV Template
          </Button>
        </div>
        
        {#if importStatus}
          <Alert.Root>
            <Alert.Title>Import Status</Alert.Title>
            <Alert.Description>{importStatus}</Alert.Description>
          </Alert.Root>
        {/if}
        
        {#if importError}
          <Alert.Root variant="destructive">
            <Alert.Title>Error</Alert.Title>
            <Alert.Description>{importError}</Alert.Description>
          </Alert.Root>
        {/if}
      </div>
      <Dialog.Footer>
        <Button variant="outline" on:click={() => importDialogOpen = false}>Cancel</Button>
        <Button on:click={importUsers} disabled={!csvFile}>Import</Button>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Root>
  
  <!-- Export Dialog -->
  <Dialog.Root bind:open={exportDialogOpen}>
    <Dialog.Content class="sm:max-w-[425px]">
      <Dialog.Header>
        <Dialog.Title>Export Users</Dialog.Title>
        <Dialog.Description>
          Export user data to a CSV file or download a template.
        </Dialog.Description>
      </Dialog.Header>
      <div class="grid gap-4 py-4">
        <div class="flex flex-col gap-4">
          <Button on:click={exportUsers}>
            Export All Users
          </Button>
          <Button variant="outline" on:click={generateCSVTemplate}>
            Download Empty Template
          </Button>
        </div>
      </div>
      <Dialog.Footer>
        <Button variant="outline" on:click={() => exportDialogOpen = false}>Cancel</Button>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Root>