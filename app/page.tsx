import { redirect } from 'next/navigation';

export default async function RootPage() {
  // redirect to home page
  redirect('/home');
}
