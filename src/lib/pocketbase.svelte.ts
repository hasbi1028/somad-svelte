import { goto, invalidateAll } from '$app/navigation';
import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://localhost:8090');
let pbUserState = $state(pb.authStore.record);

export function getPbUser() {
  return pbUserState;
}

pb.authStore.onChange(() => {
  pbUserState = pb.authStore.record;
}, true);

export async function logout() {
  pb.authStore.clear();
  await invalidateAll();
  goto('/login/?message="logged out"');
}
