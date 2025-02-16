import { goto, invalidateAll } from "$app/navigation";
import PocketBase from "pocketbase";

export const pb = new PocketBase(import.meta.env.VITE_PB_URL);
let pbUserState = $state(pb.authStore.record);

// globally disable auto cancellation
pb.autoCancellation(false);

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
