import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/profile';

export function ProfilePhoto() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View ${profile.name}'s photo`}
        aria-haspopup="dialog"
        className="shrink-0 cursor-zoom-in rounded-full transition hover:ring-4 hover:ring-emerald-400/25"
      >
        <img
          src="/arkaprava-profile.jpg"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 rounded-full border border-emerald-300/60 object-cover object-[center_30%]"
        />
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby="profile-photo-title"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
        className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-sm overflow-y-auto rounded-3xl border border-slate-200 bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/75 backdrop:backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      >
        <div className="p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 id="profile-photo-title" className="text-lg font-semibold">{profile.name}</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close photo"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-2xl transition hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <img
            src="/arkaprava-profile.jpg"
            alt={`Portrait of ${profile.name}`}
            width={354}
            height={472}
            className="mx-auto max-h-[65dvh] w-auto max-w-full rounded-2xl object-contain"
          />
        </div>
      </dialog>
    </>
  );
}
