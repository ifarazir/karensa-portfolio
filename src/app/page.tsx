import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to Persian (default) locale
  redirect('/fa');
}