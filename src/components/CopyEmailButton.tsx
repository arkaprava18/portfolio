import { useState } from 'react';
import { profile } from '../data/profile';

export function CopyEmailButton() {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus('copied');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={copyEmail}
        className="rounded-full border border-white/40 px-5 py-3 text-sm font-medium transition hover:bg-white/10"
      >
        {status === 'copied' ? 'Copy email again' : 'Copy email'}
      </button>
      <p role="status" className="min-h-5 text-sm text-white/90">
        {status === 'copied' ? 'Email copied to clipboard.' : status === 'error' ? 'Could not copy. Select the email address or use the email link.' : ''}
      </p>
    </div>
  );
}
